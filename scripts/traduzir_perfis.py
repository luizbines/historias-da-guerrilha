"""Traduz para inglês e espanhol os textos das páginas de perfil (Google Tradutor).

As traduções ficam em scripts/traducoes_perfis.json, indexadas pelo hash de
cada parágrafo em português. Rodar de novo só traduz parágrafos novos ou
alterados na planilha. Depois rode scripts/gerar_perfis.py.

Uso (na raiz do repositório):  python3 scripts/traduzir_perfis.py
"""
import json
import os
import re
import sys
import threading
import time
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gerar_perfis as g  # noqa: E402

LANGS = ("en", "es")
URL = "https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=pt&tl={}"
# O Google trunca entradas acima de ~5 mil caracteres por requisição.
MAX_CHARS = 4000
WORKERS = 4


class Truncated(ValueError):
    pass


def request(texts, lang):
    data = urllib.parse.urlencode([("q", t) for t in texts]).encode()
    req = urllib.request.Request(URL.format(lang), data=data, headers={
        "User-Agent": "Mozilla/5.0",
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    })
    out = json.loads(urllib.request.urlopen(req, timeout=90).read())
    out = [o if isinstance(o, str) else o[0] for o in out]
    if len(out) != len(texts):
        raise ValueError("resposta com número de itens diferente")
    for src, dst in zip(texts, out):
        if len(src) > 80 and len(dst) < 0.6 * len(src):
            raise Truncated(f"tradução truncada ({len(dst)} de {len(src)} caracteres)")
    return out


def translate(texts, lang):
    for attempt in range(6):
        try:
            return request(texts, lang)
        except Truncated:
            # Alguns textos (ex.: aspas não fechadas) voltam sempre cortados:
            # traduz item por item e, se preciso, frase por frase.
            if len(texts) > 1:
                return [translate([t], lang)[0] for t in texts]
            sentences = re.split(r"(?<=[.!?;:])\s+", texts[0])
            if len(sentences) == 1:
                raise
            return [" ".join(translate([s], lang)[0] for s in sentences)]
        except Exception as e:  # noqa: BLE001
            wait = 5 * 2 ** attempt
            print(f"  [{lang}] erro: {e}; nova tentativa em {wait}s", flush=True)
            time.sleep(wait)
    raise SystemExit(f"[{lang}] falhou após várias tentativas")


def split_long(text):
    """Divide um parágrafo em pedaços de até MAX_CHARS, respeitando frases."""
    if len(text) <= MAX_CHARS:
        return [text]
    pieces, current = [], ""
    for sentence in re.split(r"(?<=[.!?;:])\s+", text):
        while len(sentence) > MAX_CHARS:  # frase enorme: corta no último espaço
            cut = sentence.rfind(" ", 0, MAX_CHARS)
            pieces.append((current + " " + sentence[:cut]).strip())
            current, sentence = "", sentence[cut + 1:]
        if len(current) + len(sentence) + 1 > MAX_CHARS:
            pieces.append(current)
            current = sentence
        else:
            current = (current + " " + sentence).strip()
    if current:
        pieces.append(current)
    return pieces


def batches(texts):
    """Agrupa textos curtos numa mesma requisição, até MAX_CHARS no total."""
    batch, size = [], 0
    for t in texts:
        if batch and size + len(t) > MAX_CHARS:
            yield batch
            batch, size = [], 0
        batch.append(t)
        size += len(t)
    if batch:
        yield batch


def suspicious(src, dst):
    return len(src) > 200 and len(dst) < 0.8 * len(src)


def by_sentence(text, lang):
    sentences = re.split(r"(?<=[.!?;:])\s+", text)
    out = []
    for batch in batches(sentences):
        out.extend(translate(batch, lang))
    return " ".join(out)


def source_texts():
    cards = {slug: g.read_card(slug) for slug in g.flag_slugs()}
    mapping, _ = g.match_rows(cards)
    texts = set()
    for slug, row in mapping.items():
        for cell in row[1:]:
            texts.update(g.split_paragraphs(cell))
        texts.add(g.clean_meta(cards[slug])[2])
    texts.discard("")
    return sorted(texts)


def main():
    cache = g.translations
    texts = source_texts()
    lock = threading.Lock()

    for lang in LANGS:
        table = cache.setdefault(lang, {})
        todo = [t for t in texts if g.text_key(t) not in table]
        print(f"[{lang}] {len(todo)} de {len(texts)} textos a traduzir", flush=True)
        if not todo and not any(suspicious(t, table[g.text_key(t)]) for t in texts):
            continue
        long_texts = [t for t in todo if len(t) > MAX_CHARS]
        short_texts = [t for t in todo if len(t) <= MAX_CHARS]
        done = [0]

        def save():
            with open(g.TRANSLATIONS, "w", encoding="utf-8") as f:
                json.dump(cache, f, ensure_ascii=False, indent=0, sort_keys=True)

        def run_batch(batch):
            out = translate(batch, lang)
            with lock:
                for src, dst in zip(batch, out):
                    table[g.text_key(src)] = dst
                done[0] += len(batch)
                if done[0] % 50 < len(batch):
                    save()
                    print(f"  [{lang}] {done[0]}/{len(todo)}", flush=True)

        def run_long(text):
            out = [translate([p], lang)[0] for p in split_long(text)]
            with lock:
                table[g.text_key(text)] = " ".join(out)
                done[0] += 1

        with ThreadPoolExecutor(WORKERS) as pool:
            list(pool.map(run_batch, batches(short_texts)))
            list(pool.map(run_long, long_texts))
        # Em citações longas o Google às vezes omite frases inteiras sem
        # avisar; nesses casos retraduz frase por frase e fica com a versão
        # mais completa.
        for text in texts:
            key = g.text_key(text)
            if suspicious(text, table[key]):
                retry = by_sentence(text, lang)
                if len(retry) > len(table[key]):
                    table[key] = retry
        save()
        print(f"[{lang}] concluído", flush=True)


if __name__ == "__main__":
    main()

"""Aplica scripts/correcoes_acentos.csv aos campos de profissão e local dos cards.

A base (dataset_cards_html.csv) veio com profissão e local sem acentos e com
alguns campos longos demais. Este script troca cada valor original pelo
corrigido no CSV e nos cards (overlays/), e migra as traduções dos perfis
(scripts/traducoes_perfis.json), que são indexadas pelo texto em português.
Depois rode scripts/gerar_perfis.py para regenerar os perfis.
"""
import csv
import glob
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(__file__))
from gerar_perfis import ROOT, TRANSLATIONS, text_key  # noqa: E402

TABLE = os.path.join(ROOT, "scripts", "correcoes_acentos.csv")
FIELD = {"profissão": "occupation", "local": "location"}

# Traduções dos valores encurtados ou limpos, que não existiam antes
NEW_TRANSLATIONS = {
    "Advogado Criminalista": ("Criminal Lawyer", "Abogado Penalista"),
    "Médica": ("Doctor", "Médica"),
    "Funcionário de Frigorífico": ("Slaughterhouse Worker", "Empleado de Frigorífico"),
    "Advogado e Capitão da Força Pública": ("Lawyer and Captain of the Public Force", "Abogado y Capitán de la Fuerza Pública"),
    "Jornalista e Dirigente do PCBR": ("Journalist and PCBR Leader", "Periodista y Dirigente del PCBR"),
    "Ex-Militar e Corretor de Imóveis": ("Former Military and Real Estate Broker", "Ex Militar y Corredor de Inmuebles"),
    "Tenente da Reserva da Polícia Militar": ("Military Police Reserve Lieutenant", "Teniente de la Reserva de la Policía Militar"),
    "Mecânico e Delegado Sindical": ("Mechanic and Union Delegate", "Mecánico y Delegado Sindical"),
    "Professor e Corretor Financeiro": ("Teacher and Financial Broker", "Profesor y Corredor Financiero"),
    "Diretor no Ministério da Justiça": ("Director at the Ministry of Justice", "Director en el Ministerio de Justicia"),
    "Militar e Ex-Vice-Prefeito de Natal": ("Military and Former Vice Mayor of Natal", "Militar y Ex Vicealcalde de Natal"),
    "Corretor de Seguros e Tipógrafo": ("Insurance Broker and Typographer", "Corredor de Seguros y Tipógrafo"),
    "Estudante e Servente de Pedreiro": ("Student and Bricklayer's Assistant", "Estudiante y Ayudante de Albañil"),
    "Funcionário Público Aposentado": ("Retired Civil Servant", "Funcionario Público Jubilado"),
    "Secretária da OAB": ("OAB Secretary", "Secretaria de la OAB"),
    "Carpinteiro Naval e Sindicalista": ("Shipwright and Trade Unionist", "Carpintero Naval y Sindicalista"),
    "Policial Militar e Bancário": ("Military Police Officer and Bank Clerk", "Policía Militar y Bancario"),
    "Coronel da Força Pública": ("Colonel of the Public Force", "Coronel de la Fuerza Pública"),
    "Professora, Fotógrafa e Estudante": ("Teacher, Photographer and Student", "Profesora, Fotógrafa y Estudiante"),
    "Estudante, Escritor e Dramaturgo": ("Student, Writer and Playwright", "Estudiante, Escritor y Dramaturgo"),
    "Vereador e Gerente de Transportadora": ("City Councilor and Trucking Company Manager", "Concejal y Gerente de Transportadora"),
    "Trabalhadora Rural e Líder Sindical": ("Rural Worker and Union Leader", "Trabajadora Rural y Líder Sindical"),
    "Estudante e Funcionário Público": ("Student and Civil Servant", "Estudiante y Funcionario Público"),
    "Estudante de Técnico em Edificações": ("Building Technician Student", "Estudiante de Técnico en Edificaciones"),
    "Barqueiro e Trabalhador Rural": ("Boatman and Rural Worker", "Barquero y Trabajador Rural"),
    "Metalúrgico e Deputado Estadual": ("Metalworker and State Deputy", "Metalúrgico y Diputado Estatal"),
}


def load_table():
    fixes = {"occupation": {}, "location": {}}
    with open(TABLE, encoding="utf-8") as f:
        for row in csv.DictReader(f):
            if row["original"] != row["corrigido"]:
                fixes[FIELD[row["tipo"]]][row["original"]] = row["corrigido"]
    return fixes


def replace_fields(text, fixes, quote):
    """Troca o conteúdo de <p class="text-occupation|location"><span class="text-black">...</span>."""
    q = re.escape(quote)
    pattern = re.compile(
        rf'(class={q}text-(occupation|location){q}><span class={q}text-black{q}>)([^<]*)(</span>)'
    )
    count = 0

    def sub(m):
        nonlocal count
        new = fixes[m.group(2)].get(m.group(3))
        if new is None:
            return m.group(0)
        count += 1
        return m.group(1) + new + m.group(4)

    return pattern.sub(sub, text), count


def migrate_translations(fixes):
    with open(TRANSLATIONS, encoding="utf-8") as f:
        translations = json.load(f)
    added = 0
    for old, new in fixes["occupation"].items():
        for i, lang in enumerate(("en", "es")):
            table = translations.setdefault(lang, {})
            if text_key(new) in table:
                continue
            if new in NEW_TRANSLATIONS:
                table[text_key(new)] = NEW_TRANSLATIONS[new][i]
            elif text_key(old) in table:
                table[text_key(new)] = table[text_key(old)]
            else:
                continue
            added += 1
    with open(TRANSLATIONS, "w", encoding="utf-8") as f:
        # Mesmo formato de scripts/traduzir_perfis.py
        json.dump(translations, f, ensure_ascii=False, indent=0, sort_keys=True)
    return added


def main():
    fixes = load_table()
    total = 0
    for path in glob.glob(os.path.join(ROOT, "overlays", "*.html")):
        text = open(path, encoding="utf-8").read()
        new, count = replace_fields(text, fixes, '"')
        if count:
            open(path, "w", encoding="utf-8").write(new)
            total += count
    print(f"overlays: {total} campos corrigidos")

    csv_path = os.path.join(ROOT, "dataset_cards_html.csv")
    with open(csv_path, encoding="utf-8", newline="") as f:
        text = f.read()
    # Dentro do CSV, as aspas dos atributos HTML aparecem duplicadas
    new, count = replace_fields(text, fixes, '""')
    with open(csv_path, "w", encoding="utf-8", newline="") as f:
        f.write(new)
    print(f"dataset_cards_html.csv: {count} campos corrigidos")

    print(f"traducoes_perfis.json: {migrate_translations(fixes)} traduções adicionadas")


if __name__ == "__main__":
    main()

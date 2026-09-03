# Histórias da Guerrilha

**Vidas perdidas na ditadura civil-militar brasileira**

🔗 **[historiasdaguerrilha.madurocha.work](https://historiasdaguerrilha.madurocha.work)**

Projeto de transmissão de memória dedicado às vidas de cidadãos assassinados pelo Estado brasileiro durante a ditadura civil-militar.

---

## Sobre

Desenvolvido como trabalho de conclusão do curso de Design na **ESDI/UERJ** (Escola Superior de Desenho Industrial, Universidade do Estado do Rio de Janeiro) por **Maria Eduarda Rocha**, sob orientação da professora doutora **Bárbara Castro**.

A iniciativa é motivada por **Arnaldo Cardoso Rocha**, tio-avô da autora, envolvido na guerrilha e assassinado em 1972 — episódio que marcou profundamente sua família e que evidencia a necessidade de preservar e divulgar as narrativas das vítimas.

### Fontes

Os textos foram elaborados com base em:

- **Relatório Final da Comissão Nacional da Verdade** (terceiro volume)
- **Dossiês** encaminhados à Comissão Especial sobre Mortos e Desaparecidos Políticos

A base de dados foi produzida por **Luiz Bines** a partir das informações disponibilizadas no Relatório Final da Comissão Nacional da Verdade.

---

## Estrutura

```
├── index.html              Home, com vídeo de abertura
├── projeto.html            O Projeto
├── comiss-o.html           A Comissão
├── quem-pagina.html        Os Outros
├── arnaldo-perfil.html     Perfil — Arnaldo Cardoso Rocha
├── soledad-perfil.html     Perfil — Soledad Barrett
├── massacre-perfil.html    Perfil — Massacre da Chácara São Bento
├── bandeira.html
├── 01-overlay-search.html
│
├── overlays/               436 fichas individuais de vítimas
├── images/                 334 arquivos (fotos, documentos, vídeo)
│   ├── imagens-arnaldo/
│   ├── imagens-soledad/
│   ├── overlay_images/
│   └── video_frontpage.mp4     ← rastreado via Git LFS
│
├── styles.css
├── i18n.js                 Traduções (pt-br · en · es)
│
├── victim_mapping.json     434 registros de vítimas
├── dataset_cards_html.csv  Base de dados dos cards
└── filters_table.csv       Definição dos filtros
```

O site é estático, sem build step e sem dependências externas. O idioma base é `pt-br`, com versões em inglês e espanhol servidas pelo `i18n.js`.

---

## Rodando localmente

O vídeo da home é rastreado com **Git LFS**, então é preciso tê-lo instalado antes de clonar:

```bash
# instale o git-lfs (uma vez por máquina)
sudo apt install git-lfs   # Debian/Ubuntu
brew install git-lfs       # macOS
git lfs install

git clone https://github.com/luizbines/historias-da-guerrilha.git
cd historias-da-guerrilha
```

Sirva os arquivos por HTTP — abrir o `index.html` direto pelo `file://` quebra o carregamento das traduções:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

Para conferir se o vídeo veio completo (e não apenas o ponteiro de texto do LFS):

```bash
ls -l images/video_frontpage.mp4   # deve ter ~17 MB, não ~130 bytes
```

---

## Deploy

Publicado no **GitHub Pages** através do workflow em [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). Todo push na branch `main` dispara o deploy automaticamente.

Dois detalhes da configuração que não devem ser removidos:

- **`lfs: true` no `actions/checkout`** — sem isso o checkout traz apenas o ponteiro de 134 bytes do LFS, e o site publica esse arquivo de texto no lugar do vídeo.
- **`CNAME` e `.nojekyll`** na raiz — definem o domínio próprio e desativam o processamento Jekyll.

O domínio `historiasdaguerrilha.madurocha.work` aponta para o GitHub Pages via registro CNAME, com HTTPS habilitado.

---

## Créditos

| | |
|---|---|
| Projeto e design | Maria Eduarda Rocha |
| Orientação | Prof.ª Dr.ª Bárbara Castro |
| Base de dados | Luiz Bines |
| Instituição | ESDI/UERJ |

Os conteúdos sobre as vítimas derivam de documentos públicos da Comissão Nacional da Verdade e da Comissão Especial sobre Mortos e Desaparecidos Políticos.

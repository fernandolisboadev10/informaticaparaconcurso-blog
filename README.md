# techonplay.com.br

Versão em português do TechOnPlay, feita em Astro e publicada no GitHub Pages.
Migrada do WordPress em setembro de 2026 (mesmas URLs dos artigos: `/slug/`).

## Comandos

```bash
npm install
npm run dev       # servidor local em http://localhost:4321
npm run build     # gera a pasta dist/
npm run migrate   # baixa posts, páginas e mídia do WordPress (techonplay.com.br)
npm run image -- --name meu-post --prompt "..."   # gera capa via OpenRouter
```

## Estrutura

- `src/content/blog/`: artigos em Markdown (uma imagem de capa por artigo em `images/`).
- `src/pages/`: home, blog, 404 e páginas fixas (`sobre-nos`, `contate-nos`, `anuncie`, políticas).
- `migration/`: JSON bruto do WordPress e páginas exportadas.
- `.env` (não vai para o Git): `OPENROUTER_API_KEY` para gerar imagens.

## Deploy

O workflow `.github/workflows/deploy.yml` publica no GitHub Pages a cada push na
branch `main`. Em Settings → Pages, a fonte deve ser **GitHub Actions**.
O arquivo `public/CNAME` aponta para `techonplay.com.br`.

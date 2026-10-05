// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

const blogDir = new URL('./src/content/blog/', import.meta.url);
const dateBySlug = new Map();
const postsPerCategory = new Map();

for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.md')) continue;
  const content = readFileSync(new URL(file, blogDir), 'utf-8');
  const match = content.match(/^updated:\s*(\S+)/m) ?? content.match(/^date:\s*(\S+)/m);
  if (new Date(content.match(/^date:s*(S+)/m)?.[1] ?? 0) > new Date()) continue; // scheduled, not live yet
  const cat = content.match(/^category:\s*"([^"\r\n]+)"/m);
  if (cat) postsPerCategory.set(cat[1].trim(), (postsPerCategory.get(cat[1].trim()) ?? 0) + 1);
  if (match) {
    dateBySlug.set(file.replace(/\.md$/, ''), new Date(match[1]));
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://informaticaparaconcurso.com.br',
  // URLs herdadas do WordPress (feed, sitemaps do Yoast, autor e contato)
  redirects: {
    '/category/sem-categoria': '/blog',
    '/feed': '/rss.xml',
    '/sitemap_index.xml': '/sitemap-index.xml',
    '/wp-sitemap.xml': '/sitemap-index.xml',
    '/post-sitemap.xml': '/sitemap-index.xml',
    '/page-sitemap.xml': '/sitemap-index.xml',
    '/category-sitemap.xml': '/sitemap-index.xml',
    '/author-sitemap.xml': '/sitemap-index.xml',
    '/author/fernando-lisboa': '/sobre-nos/',
    '/contato': '/fale-conosco/',
    // Posts juntados a outros por canibalização (2026-10-05)
    '/diferenca-firewall-antivirus': '/aplicativos-para-seguranca-antivirus-firewall-antispyware/',
    '/revisao-de-powerpoint-para-concursos': '/powerpoint-o-que-cai-nos-concursos/',
    '/revisao-do-word': '/microsoft-word-para-concursos/',
    '/internet-intranet-extranet': '/o-que-e-extranet/',
    '/redes-de-computadores-guia-completo': '/redes-de-computadores-para-concursos/',
    '/sitios-de-busca-para-concursos': '/buscador-e-navegador/',
    // Slugs antigos que o WordPress redirecionava e que o Google ainda mostra
    '/linux-introducao-para-concursos': '/linux-para-concursos/',
    '/linux-introducao-para-concurso': '/linux-para-concursos/',
    '/linux.html': '/linux-para-concursos/',
    '/windows-x-linux-para-concursos': '/windows-vs-linux-para-concursos/',
    '/introducao-ao-windows-10-e-11': '/sistema-windows-7-10-11-para-concursos/',
    '/simulado-windows-10-11-questoes-resolvidas-cebraspe': '/simulado-sistemas/',
    '/organizacao-e-gerenciamento-de-arquivos-e-pastas-o-que-cai-na-sua-prova': '/informatica-concursos-gerenciamento-arquivos-pastas/',
  },
  // Self-hosted fonts: no Google Fonts round trips, preloaded and with metric-matched fallbacks.
  fonts: [
    { provider: fontProviders.google(), name: 'Inter', cssVariable: '--f-inter', weights: [400, 500, 600, 700], styles: ['normal'], subsets: ['latin'], fallbacks: ['sans-serif'] },
    { provider: fontProviders.google(), name: 'Fraunces', cssVariable: '--f-fraunces', weights: [400, 500, 600], styles: ['normal'], subsets: ['latin'], fallbacks: ['serif'] },
    { provider: fontProviders.google(), name: 'Lexend', cssVariable: '--f-lexend', weights: [300, 400], styles: ['normal'], subsets: ['latin'], fallbacks: ['sans-serif'] },
    { provider: fontProviders.google(), name: 'IBM Plex Mono', cssVariable: '--f-plex-mono', weights: [400, 500], styles: ['normal'], subsets: ['latin'], fallbacks: ['monospace'] },
  ],
  integrations: [
    sitemap({
      // Category pages with fewer than 2 posts are noindex, so keep them out of the sitemap.
      filter(page) {
        const m = new URL(page).pathname.match(/^\/categoria\/([^/]+)\/?$/);
        if (!m) return true;
        const names = { 'inteligencia-artificial': 'Inteligência Artificial', jogos: 'Jogos', tutoriais: 'Tutoriais', dicas: 'Dicas', curiosidades: 'Curiosidades', reviews: 'Reviews', apps: 'Apps', noticias: 'Notícias' };
        return (postsPerCategory.get(names[m[1]]) ?? 0) >= 2;
      },
      serialize(item) {
        const slug = new URL(item.url).pathname.replace(/^\/|\/$/g, '');
        const date = dateBySlug.get(slug);
        if (date) item.lastmod = date;
        return item;
      },
    }),
  ],
  markdown: {
    processor: unified({
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
      ],
    }),
  },
});

// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
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
  const cat = content.match(/^category:\s*"([^"\r\n]+)"/m);
  if (cat) postsPerCategory.set(cat[1].trim(), (postsPerCategory.get(cat[1].trim()) ?? 0) + 1);
  if (match) {
    dateBySlug.set(file.replace(/\.md$/, ''), new Date(match[1]));
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://techonplay.com.br',
  // URLs herdadas do WordPress (categorias, feed e sitemaps do Yoast)
  redirects: {
    '/category/inteligencia-artificial': '/categoria/inteligencia-artificial/',
    '/category/jogos': '/categoria/jogos/',
    '/category/tutoriais': '/categoria/tutoriais/',
    '/category/dicas': '/categoria/dicas/',
    '/category/curiosidades': '/categoria/curiosidades/',
    '/category/reviews': '/categoria/reviews/',
    '/category/apps': '/categoria/apps/',
    '/category/sem-categoria': '/blog',
    '/feed': '/rss.xml',
    '/sitemap_index.xml': '/sitemap-index.xml',
    '/wp-sitemap.xml': '/sitemap-index.xml',
    '/post-sitemap.xml': '/sitemap-0.xml',
    '/page-sitemap.xml': '/sitemap-0.xml',
    '/category-sitemap.xml': '/sitemap-index.xml',
  },
  integrations: [
    sitemap({
      // Category pages with fewer than 2 posts are noindex, so keep them out of the sitemap.
      filter(page) {
        const m = new URL(page).pathname.match(/^\/categoria\/([^/]+)\/?$/);
        if (!m) return true;
        const names = { 'inteligencia-artificial': 'Inteligência Artificial', jogos: 'Jogos', tutoriais: 'Tutoriais', dicas: 'Dicas', curiosidades: 'Curiosidades', reviews: 'Reviews', apps: 'Apps' };
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

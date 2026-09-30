// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

const blogDir = new URL('./src/content/blog/', import.meta.url);
const dateBySlug = new Map();

for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.md')) continue;
  const content = readFileSync(new URL(file, blogDir), 'utf-8');
  const match = content.match(/^date:\s*(\S+)/m);
  if (match) {
    dateBySlug.set(file.replace(/\.md$/, ''), new Date(match[1]));
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://techonplay.com.br',
  // URLs herdadas do WordPress (categorias, feed e sitemaps do Yoast)
  redirects: {
    '/category/inteligencia-artificial': '/blog?category=Intelig%C3%AAncia+Artificial',
    '/category/jogos': '/blog?category=Jogos',
    '/category/tutoriais': '/blog?category=Tutoriais',
    '/category/dicas': '/blog?category=Dicas',
    '/category/curiosidades': '/blog?category=Curiosidades',
    '/category/reviews': '/blog?category=Reviews',
    '/category/apps': '/blog?category=Apps',
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

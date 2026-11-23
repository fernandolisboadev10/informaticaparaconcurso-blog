import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Optional <title>/og:title/twitter:title (no site suffix) for posts whose "title" is longer than 60 characters.
      seoTitle: z.string().max(60).optional(),
      description: z.string(),
      category: z.string(),
      date: z.date(),
      updated: z.date().optional(),
      tags: z.array(z.string()).optional(),
      readingTime: z.string().optional(),
      related: z.array(z.string()).optional(),
      draft: z.boolean().optional().default(false),
      image: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

const stories = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/stories' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    post: z.string(),
    poster: image(),
    cover: image(),
    coverText: z.string(),
    pages: z.array(z.object({
      id: z.string().regex(/^[a-z][a-z0-9-]*$/),
      label: z.string(),
      title: z.string(),
      text: z.string(),
      image: image(),
      imageAlt: z.string(),
      light: z.boolean().default(false),
    })).min(1),
    closing: z.object({
      title: z.string(),
      text: z.string(),
    }),
  }),
});

export const collections = { blog, stories };

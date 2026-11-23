import { getCollection } from 'astro:content';

export const storyHref = (id: string) => `/web-stories/${id}/`;

export async function getPublishedStories() {
  const now = Date.now();
  const stories = await getCollection('stories', ({ data }) => !data.draft && data.date.getTime() <= now);
  return stories.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id));
}

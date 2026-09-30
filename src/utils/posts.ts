import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'blog'>;

// Feed rule: a post's position is its latest activity, the newer of the creation date (`date`)
// and the last edit (`updated`). Ties fall back to the creation date, then to the slug, so the
// order is always deterministic. Give same-day posts a time (e.g. 2026-09-30T15:40:00-03:00)
// to control the order between them.
export const activityTime = (post: Post): number =>
  Math.max(post.data.date.getTime(), post.data.updated?.getTime() ?? 0);

export const sortByActivity = (posts: Post[]): Post[] =>
  [...posts].sort(
    (a, b) =>
      activityTime(b) - activityTime(a) ||
      b.data.date.getTime() - a.data.date.getTime() ||
      a.id.localeCompare(b.id),
  );

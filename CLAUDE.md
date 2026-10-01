## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Blog feed order

The home, `/blog/` and category pages sort posts by latest activity: the newer of `date` (created) and `updated` (edited), via `src/utils/posts.ts`. Give every new post a `date` with a time (e.g. `2026-09-30T15:40:00-03:00`, keep it before 21:00 so the displayed UTC day does not change), and put a time in `updated` when editing a post that should rise to the top of the feed. Run `node scripts/audit-discover.mjs` before publishing.

## Scheduling

A post goes live when its `date` has passed (`isPublished` in `src/utils/posts.ts`). The deploy workflow rebuilds at 07:02, 11:02 and 18:02 (Brasília time), so to schedule a post set `date` to a future time such as `2026-10-02T07:00:00-03:00` and push; commit it before the slot. The `Notícias` category is for time-bound news; the topic goes in `tags`.

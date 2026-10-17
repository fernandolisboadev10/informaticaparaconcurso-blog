// Interactive questions live in src/data/quizzes/<slug>.json (see PostLayout). This counts them per post.
const quizzes = import.meta.glob<{ default: { questions: unknown[] } }>('../data/quizzes/*.json', { eager: true });

const counts = new Map<string, number>(
  Object.entries(quizzes).map(([path, mod]) => [
    path.replace(/^.*\/(.+)\.json$/, '$1'),
    mod.default.questions?.length ?? 0,
  ]),
);

export const questionCount = (slug: string): number => counts.get(slug) ?? 0;

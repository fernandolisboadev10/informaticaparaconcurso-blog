const MIN_WORDS = 375;
const MIN_TRAILING_WORDS = 150;
const MAX_OFFERS = 4;

function countWords(node) {
  if (node.type === 'text') return node.value.match(/[\p{L}\p{N}]+/gu)?.length ?? 0;
  if (['pre', 'code', 'script', 'style'].includes(node.tagName)) return 0;
  return (node.children ?? []).reduce((total, child) => total + countWords(child), 0);
}

export default function rehypeStudyOffers() {
  return (tree, file) => {
    if (!/(?:^|\/)src\/content\/blog\//.test(file.path?.replaceAll('\\', '/') ?? '')) return;

    const wordCounts = tree.children.map(countWords);
    let remaining = wordCounts.reduce((total, words) => total + words, 0);
    let sinceLast = 0;
    let offers = 0;

    tree.children = tree.children.flatMap((node, index) => {
      const isSection = node.tagName === 'h2' || node.tagName === 'h3';
      const isParagraphBreak = node.tagName === 'p' && sinceLast >= MIN_WORDS + 150;
      const insert = offers < MAX_OFFERS && remaining >= MIN_TRAILING_WORDS
        && sinceLast >= MIN_WORDS && (isSection || isParagraphBreak);
      const words = wordCounts[index];
      remaining -= words;
      sinceLast = (insert ? 0 : sinceLast) + words;
      if (!insert) return [node];

      offers++;
      return [{ type: 'comment', value: 'article-study-offer' }, node];
    });
  };
}

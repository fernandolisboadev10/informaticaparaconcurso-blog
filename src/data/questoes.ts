// Gerador de Questões: produto próprio, divulgado no menu, no fim dos posts e no resultado dos simulados.
const BASE = 'https://www.geradordequestoes.site/';

export const questoesUrl = (medium: string, content?: string): string => {
  const params = new URLSearchParams({ utm_source: 'blog', utm_medium: medium, utm_campaign: 'gerador' });
  if (content) params.set('utm_content', content);
  return `${BASE}?${params.toString()}`;
};

export const questoesAriaLabel = 'Gerador de Questões com IA (abre em nova aba)';

// Banca de cada post, para o texto do CTA ("Treine no estilo ...").
const BANCA_BY_SLUG: Record<string, string> = {
  'simulado-cebraspe-informatica': 'Cebraspe',
  'cebraspe-como-funciona-a-banca-e-o-que-ela-cobra-em-informatica': 'Cebraspe',
  'gabarito-extraoficial-pm-ma-soldado': 'Cebraspe',
  'informatica-cebraspe-pm-ma-2026': 'Cebraspe',
  'simulado-vespera-pm-ma-2026': 'Cebraspe',
  'concurso-policia-civil-cebraspe-informatica': 'Cebraspe',
  'concurso-pm-pe-2026': 'AOCP',
  'concurso-trt-8-2026': 'FCC',
  'concurso-petrobras-2026': 'Cesgranrio',
};

export const bancaOf = (slug: string): string | undefined => BANCA_BY_SLUG[slug];

// Posts que mostram o CTA no fim: simulados, guia de Noções de Informática, posts de concurso e posts com questões.
const CTA_SLUGS = new Set(['nocoes-de-informatica', 'concurso-publico-2026', ...Object.keys(BANCA_BY_SLUG)]);
export const showQuestoesCta = (slug: string, category: string, hasQuiz: boolean): boolean =>
  hasQuiz || slug.startsWith('simulado-') || category === 'Concursos' || CTA_SLUGS.has(slug);

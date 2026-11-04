// Cor de destaque por categoria (barra do cartão, ponto do rótulo, link "Praticar"), na paleta do tema escuro.
const COLORS: Record<string, string> = {
  "Redes": '#60a5fa',
  "Segurança": '#a3e635',
  "Sistemas": '#2dd4bf',
  "Office": '#fb923c',
  "Dicas": '#a5b4fc',
  "Hardware": '#c084fc',
  "Concursos": '#fb7185',
  "Arquivos": '#94a3b8',
};

export const categoryColor = (category: string): string => COLORS[category] ?? '#a5b4fc';

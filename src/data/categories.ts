export interface Category {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
}

// Category pages are real, indexable URLs (/category/<slug>/), the same ones the old WordPress site used. `name` must match the `category` field in the posts' frontmatter.
export const categories: Category[] = [
  {
    slug: 'dicas',
    name: 'Dicas',
    title: 'Dicas de estudo para concursos de informática',
    description:
      'Dicas de estudo para a prova de informática: como se organizar, o que cada banca cobra e como não perder pontos por descuido.',
    intro:
      'Estratégias para estudar informática com foco no que cai: como funcionam as bancas, como dividir o tempo e como evitar as pegadinhas mais comuns.',
  },
  {
    slug: 'sistemas',
    name: 'Sistemas',
    title: 'Sistemas operacionais para concursos: Windows e Linux',
    description:
      'Windows, Linux e conceitos de sistemas operacionais explicados do jeito que as bancas cobram, com comandos, atalhos e comparações.',
    intro:
      'Tudo sobre sistemas operacionais para a prova: diferenças entre Windows e Linux, comandos, atalhos e o que mais aparece nas questões.',
  },
  {
    slug: 'hardware',
    name: 'Hardware',
    title: 'Hardware para concursos: memórias, periféricos e componentes',
    description:
      'Hardware para concursos: memórias RAM, ROM e cache, periféricos de entrada e saída e os componentes do computador.',
    intro:
      'Os componentes do computador explicados para a prova, com foco nas memórias, nos periféricos e nas confusões que as bancas exploram.',
  },
  {
    slug: 'office',
    name: 'Office',
    title: 'Office para concursos: Word, Excel, PowerPoint e LibreOffice',
    description:
      'Word, Excel, PowerPoint e LibreOffice para concursos: funções, atalhos e o que mais cai nas provas de informática.',
    intro:
      'Os pacotes de escritório que mais aparecem nas provas, com as funções, os recursos e os atalhos que as bancas costumam cobrar.',
  },
  {
    slug: 'arquivos',
    name: 'Arquivos',
    title: 'Arquivos e pastas para concursos: tipos, extensões e organização',
    description:
      'Gerenciamento de arquivos e pastas, extensões e tipos de arquivo explicados para a prova de informática.',
    intro:
      'Como arquivos e pastas são organizados, quais extensões existem e o que as bancas perguntam sobre esse assunto.',
  },
  {
    slug: 'redes',
    name: 'Redes',
    title: 'Redes de computadores para concursos: internet, intranet e nuvem',
    description:
      'Redes de computadores para concursos: tipos de rede, topologias, internet, intranet, extranet, navegadores e computação em nuvem.',
    intro:
      'Internet, intranet, extranet, topologias, navegadores e nuvem, com a linguagem e os exemplos que aparecem na prova.',
  },
  {
    slug: 'seguranca',
    name: 'Segurança',
    title: 'Segurança da informação para concursos: malwares, backup e firewall',
    description:
      'Segurança da informação para concursos: malwares, antivírus, firewall, backup e a regra 3-2-1 explicados para a prova.',
    intro:
      'Ameaças, defesas e boas práticas de segurança, com as diferenças entre ferramentas que as bancas adoram cobrar.',
  },
  {
    slug: 'simulados',
    name: 'Simulados',
    title: 'Simulados de informática para concursos',
    description:
      'Simulados de informática por assunto, com questões no estilo das bancas para testar o que você estudou.',
    intro:
      'Questões no estilo das bancas para praticar cada assunto e descobrir onde ainda falta revisar.',
  },
];

export const categoryHref = (name: string): string => {
  const c = categories.find((x) => x.name === name);
  return c ? `/category/${c.slug}/` : '/blog/';
};

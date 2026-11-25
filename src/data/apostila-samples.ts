// Curated public sample only. The complete paid PDF must never enter the public build.
export const apostilaModules = [
  {
    id: 'sistemas', name: 'Sistemas Operacionais', short: 'Sistemas', count: 101, page: 3,
    description: 'Windows, Linux, recursos do sistema e situações de uso cobradas nas provas.',
    source: 'CEBRASPE (CESPE) · ICMBio · 2025', question: 3,
    text: 'Acerca do sistema operacional Windows, de edição de textos e de segurança da informação, julgue o próximo item. No Windows, o Microsoft Defender SmartScreen é uma ferramenta cuja principal função é bloquear a maioria dos pop-ups, não tendo ele a funcionalidade de verificar sites visitados em listas conhecidas de phishing, por exemplo.',
    answer: 'E',
    comment: 'O Microsoft Defender SmartScreen realiza a verificação de URLs para detectar phishing, além de alertar sobre downloads e sites inseguros. Não é apenas um bloqueador de pop-ups.',
  },
  {
    id: 'documentos', name: 'Edição de Documentos', short: 'Documentos', count: 183, page: 39,
    description: 'Questões sobre edição de textos, planilhas e apresentações.',
    source: 'CEBRASPE (CESPE) · AgSUS · 2026', question: 1,
    text: 'Julgue o próximo item, relativo ao Word. O uso de comentários no Word altera instantaneamente o texto original do documento.',
    answer: 'E',
    comment: 'Comentários no Word são usados para adicionar notas e não alteram o texto original do documento.',
  },
  {
    id: 'redes', name: 'Redes de Computadores', short: 'Redes', count: 147, page: 106,
    description: 'Redes locais, internet, protocolos e comunicação entre computadores.',
    source: 'CEBRASPE (CESPE) · Polícia Federal · 2025', question: 1,
    text: 'Julgue o próximo item, relativos ao ambiente Windows, ao Microsoft Office e a redes de computadores. LAN é uma rede de computadores geralmente restrita a um único ambiente físico, como um escritório ou uma escola, permitindo a comunicação entre dispositivos locais.',
    answer: 'C',
    comment: 'LAN (Local Area Network) é uma rede restrita a ambientes pequenos como escritórios e escolas, facilitando a comunicação local.',
  },
  {
    id: 'informacoes', name: 'Organização e Gerenciamento de Informações', short: 'Informações', count: 12, page: 161,
    description: 'Organização de informações, arquivos e documentos no dia a dia.',
    source: 'CEBRASPE (CESPE) · AgSUS · 2026', question: 1,
    text: 'Acerca da gestão e elaboração de documentos, julgue o item a seguir. Nomear arquivos no computador como "documento1", "teste" ou "final" é uma prática eficiente que facilita a busca rápida no Windows.',
    answer: 'E',
    comment: 'A prática de nomear arquivos como \'documento1\', \'teste\' ou \'final\' não é eficiente, pois esses nomes são genéricos e não fornecem informações suficientes para identificar rapidamente o conteúdo ou finalidade do arquivo.',
  },
  {
    id: 'seguranca', name: 'Segurança da Informação', short: 'Segurança', count: 109, page: 165,
    description: 'Princípios de segurança, ameaças e proteção das informações.',
    source: 'CEBRASPE (CESPE) · UDESC · 2026', question: 1,
    text: 'Com base em segurança da informação, julgue o item a seguir. A disponibilidade é a característica que garante que a informação estará acessível somente a pessoas autorizadas.',
    answer: 'E',
    comment: 'O gabarito está correto como \'ERRADO\' porque a descrição dada refere-se à \'confidencialidade\' e não à \'disponibilidade\'. Disponibilidade garante que a informação esteja acessível quando necessário, mas não restringe o acesso apenas a pessoas autorizadas.',
  },
] as const;

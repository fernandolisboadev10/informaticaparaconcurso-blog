---
title: "Simulado Hardware"
description: "Simulado de hardware com 20 questões comentadas de várias bancas. Revise memória, processador e armazenamento para o concurso."
category: "Simulados"
date: 2026-09-25T20:08:33-03:00
updated: 2026-09-25T20:08:35Z
readingTime: "18 min"
image: "./images/hardware-1.webp"
imageAlt: "Hardware"
---

Muitos candidatos travam justamente nos detalhes técnicos de hardware, e este simulado de hardware existe para reverter esse cenário. Ao resolver as questões comentadas, você revisa barramentos, memória RAM e ROM, processador, armazenamento (HD e SSD) e periféricos, temas recorrentes nas provas de Cebraspe, Cesgranrio, FCC, FGV, IADES e Vunesp. Cada questão vem acompanhada de um comentário que explica o conceito correto e destaca a pegadinha explorada pela banca, o que torna o aprendizado mais sólido. Assim, você identifica rapidamente os pontos que ainda precisam de revisão. Por isso, faça este simulado com calma e anote os temas que mais errar.

## Barramentos: a via que conecta todo o hardware

Antes de entrar nas questões, vale entender como as peças do computador conversam entre si. O barramento funciona como uma via de mão dupla que liga processador, memória e periféricos, permitindo a troca constante de dados e instruções.

Existem três tipos principais que a banca gosta de cobrar: o barramento de dados, que transporta as informações propriamente ditas; o barramento de endereços, que indica onde cada dado deve ser lido ou gravado; e o barramento de controle, que sincroniza todo esse tráfego.

Na prova, o examinador costuma testar se você confunde a função de cada um. Guarde esta ideia: dados carregam a informação, endereços dizem onde ela está, controle organiza o processo.

## Memória RAM x memória ROM: a diferença que decide a questão

Esse é um dos temas mais cobrados, e não à toa: é fácil confundir os dois conceitos se você não fixar a lógica por trás deles.

-   **RAM (Random Access Memory)**: volátil, perde todo o conteúdo quando o computador desliga, permite leitura e escrita, armazena os dados dos programas em execução no momento.
-   **ROM (Read Only Memory)**: não volátil, mantém as informações mesmo sem energia, grava em geral as instruções de inicialização e o firmware do sistema.

Aqui está um ponto que merece atenção: quando a banca descreve uma memória que “perde os dados ao desligar o equipamento”, ela está falando de RAM, não de ROM. Não confunda os dois conceitos na hora da prova, essa troca é uma das pegadinhas mais repetidas em concursos de informática.

Se quiser aprofundar, o [artigo completo sobre memórias RAM, ROM e cache](/aula-hardware-memorias-ram-rom-cache/) detalha ainda a hierarquia de cache (L1, L2 e L3) e como ela impacta o desempenho do processador.

## Processador: o centro de processamento que toda prova cobra

O processador, ou CPU, executa as instruções dos programas e coordena o funcionamento das demais peças. Dois pontos costumam aparecer nas provas: a quantidade de núcleos, que determina quantas tarefas o processador executa simultaneamente, e a velocidade de clock, medida em GHz, que indica quantos ciclos ele realiza por segundo.

Além disso, a memória cache trabalha ao lado do processador para agilizar o acesso aos dados mais usados, funcionando como uma ponte entre a velocidade da CPU e a velocidade, mais lenta, da RAM.

## HD x SSD: o armazenamento que aparece em toda prova

Na sequência, chegamos ao armazenamento, outro tema certo em praticamente qualquer edital de informática.

O HD (disco rígido) armazena dados em discos magnéticos giratórios, lidos por uma cabeça mecânica. Por depender de partes móveis, tende a ser mais lento e mais suscetível a falhas físicas.

Já o SSD (unidade de estado sólido) grava as informações em chips de memória flash, sem peças móveis. Por esse motivo, ele lê e grava dados muito mais rápido, além de ser mais resistente a impactos.

Compare os pontos que mais caem em prova:

-   Velocidade: o SSD leva vantagem folgada sobre o HD.
-   Durabilidade: o SSD sofre menos com quedas e vibração, por não ter partes mecânicas.
-   Ruído e consumo de energia: o SSD é silencioso e consome menos energia.
-   Custo por gigabyte: o HD ainda sai mais barato para grandes volumes de dados.

Por falar em armazenamento, vale revisar também como funciona o backup desses dados. A [regra 3-2-1 de backup](/regra-3-2-1/) explica a estratégia que a maioria das bancas espera que você conheça: três cópias, em dois tipos de mídia diferentes, com uma cópia fora do local principal.

## Periféricos de entrada e saída: a classificação que confunde

Por fim, os periféricos completam o hardware do computador e se dividem em três grupos.

-   Entrada: mouse, teclado, scanner e webcam enviam dados para o computador processar.
-   Saída: monitor, impressora e caixa de som recebem dados já processados.
-   Entrada e saída (mistos): tela touch screen e headset com microfone acumulam as duas funções.

Na sua prova, se a banca afirmar que um periférico “só recebe” ou “só envia” dados, preste atenção: alguns equipamentos, como a tela touch, quebram essa regra por atuarem nos dois sentidos. O [artigo sobre periféricos de entrada e saída](/perifericos-entrada-saida-concurso/) traz a lista completa cobrada pelas principais bancas, com exemplos que costumam gerar dúvida.

## Simulado de hardware: hora de colocar em prática

Com esses conceitos revisados, chegou o momento de testar o que você aprendeu neste simulado de hardware. Nas questões a seguir, resolva no seu ritmo, sem olhar o comentário antes de responder, e anote os temas em que mais errar. Esse é o método mais eficiente para transformar teoria em pontos garantidos na sua prova.

Se quiser continuar treinando outros módulos, os simulados de [redes de computadores](/simulado-redes/) e [segurança da informação](/simulado-seguranca-da-informacao/) seguem o mesmo formato comentado.

Questão 1 CEBRASPE

O padrão USB 3.0, também conhecido como SuperSpeed USB, permite taxas de transferência teóricas de até 5 Gbps, superando o USB 2.0, cuja taxa máxima é de 480 Mbps.

Certo Errado

Resposta correta: Certo

A afirmação está correta. O USB 2.0 (High-Speed) alcança até 480 Mbps, enquanto o USB 3.0 (SuperSpeed) eleva esse limite teórico para 5 Gbps, uma diferença que a banca costuma explorar para testar se o candidato confunde as gerações do padrão.

Questão 2 CEBRASPE

A memória RAM (Random Access Memory) é classificada como memória volátil, pois perde todo o seu conteúdo quando o computador é desligado, diferentemente da memória ROM, que mantém os dados gravados mesmo sem energia elétrica.

Certo Errado

Resposta correta: Certo

A distinção está correta: a RAM é volátil e serve como memória de trabalho durante a execução dos programas, enquanto a ROM é não volátil e armazena instruções básicas de inicialização, como as rotinas de firmware do computador.

Questão 3 CEBRASPE

Em relação à hierarquia de memória de um computador, a memória cache L1, por estar localizada mais próxima do núcleo do processador, apresenta velocidade de acesso menor que a memória cache L2, o que justifica sua maior capacidade de armazenamento em relação a esta.

Certo Errado

Resposta correta: Errado

A questão inverte a lógica da hierarquia de memória. Quanto mais próxima do núcleo, mais rápida (e não mais lenta) é a memória cache, e justamente por isso ela tem menor capacidade de armazenamento. Portanto, a cache L1 é mais rápida e menor que a L2, o que torna a afirmação incorreta.

Questão 4 CEBRASPE

Um SSD (Solid State Drive) armazena dados por meio de componentes eletrônicos, sem partes mecânicas móveis, o que resulta, de modo geral, em maior velocidade de leitura e gravação e menor tempo de acesso quando comparado a um HD (disco rígido) tradicional.

Certo Errado

Resposta correta: Certo

A ausência de partes móveis, como os pratos giratórios e a cabeça de leitura do HD, é justamente o que permite ao SSD tempos de acesso muito menores e taxas de transferência superiores na maioria dos cenários de uso.

Questão 5 CEBRASPE

A memória virtual é uma técnica que permite ao sistema operacional utilizar espaço do disco de armazenamento como extensão da memória RAM, possibilitando a execução de programas que demandam mais memória do que a fisicamente instalada no computador.

Certo Errado

Resposta correta: Certo

Essa é exatamente a função da memória virtual (paginação/swap): quando a RAM se esgota, o sistema operacional utiliza uma área do disco para armazenar temporariamente dados menos utilizados, liberando espaço na memória física.

Questão 6 Cesgranrio

Sobre o barramento PCI Express (PCIe), amplamente utilizado para conectar placas de vídeo, SSDs NVMe e outros periféricos internos ao computador, assinale a alternativa correta.

A) O PCIe utiliza comunicação paralela entre os dispositivos, semelhante ao antigo barramento PCI, o que limita sua velocidade máxima. B) Quanto maior o número de lanes (vias) de um slot PCIe, como x16 em comparação a x1, maior tende a ser a largura de banda disponível para o dispositivo conectado. C) O PCIe é compatível apenas com dispositivos de armazenamento, não sendo utilizado para placas de vídeo. D) Todos os slots PCIe de uma placa-mãe operam obrigatoriamente na mesma velocidade, independentemente do número de lanes. E) O PCIe substituiu o barramento USB como padrão de conexão de periféricos externos.

Resposta correta: B

O PCIe é um barramento serial, e não paralelo, e sua largura de banda cresce conforme o número de lanes: um slot x16 oferece muito mais banda que um x1. Além disso, o PCIe é usado tanto por placas de vídeo quanto por SSDs NVMe, entre outros dispositivos internos.

Questão 7 Cesgranrio

Em relação às fontes de alimentação (PSU) utilizadas em computadores pessoais, assinale a alternativa correta.

A) A certificação 80 Plus atesta níveis mínimos de eficiência energética da fonte na conversão de corrente alternada em corrente contínua. B) Fontes de alimentação não influenciam a estabilidade do computador, servindo apenas para fornecer energia ao gabinete. C) Todas as fontes ATX fornecem exatamente a mesma potência, independentemente do modelo ou fabricante. D) A certificação 80 Plus está relacionada exclusivamente ao tempo de vida útil da fonte, não tendo relação com eficiência energética. E) Fontes de alimentação certificadas 80 Plus dispensam o uso de conectores específicos para a placa-mãe.

Resposta correta: A

O selo 80 Plus certifica que a fonte converte energia de corrente alternada para contínua com um percentual mínimo de eficiência (a partir de 80%, com variações como Bronze, Silver, Gold e Platinum), o que reduz o desperdício de energia em forma de calor.

Questão 8 Cesgranrio

A respeito das interfaces de vídeo utilizadas para conectar um computador a um monitor, assinale a alternativa correta.

A) O cabo VGA transmite sinal digital de vídeo e áudio simultaneamente. B) O HDMI (High-Definition Multimedia Interface) transmite sinal de vídeo e áudio em um único cabo, utilizando sinal digital. C) O VGA (Video Graphics Array) é uma interface digital que substituiu o HDMI em monitores modernos. D) O DisplayPort é uma interface exclusivamente analógica, sem suporte a áudio. E) HDMI e VGA utilizam exatamente o mesmo tipo de sinal, diferindo apenas no formato físico do conector.

Resposta correta: B

O HDMI transporta vídeo e áudio digitais em um único cabo. Já o VGA é uma interface analógica, mais antiga, sem suporte nativo a áudio, o que inverte a lógica das demais alternativas apresentadas na questão.

Questão 9 FCC

Sobre as interfaces de conexão de dispositivos de armazenamento em computadores, assinale a alternativa correta.

A) A interface SATA (Serial ATA) e o protocolo NVMe (Non-Volatile Memory Express) utilizam necessariamente o mesmo barramento físico de conexão. B) SSDs conectados via protocolo NVMe, que trafega diretamente pelo barramento PCI Express, tendem a apresentar taxas de transferência superiores às de SSDs conectados via interface SATA. C) O protocolo NVMe foi desenvolvido para substituir exclusivamente discos rígidos mecânicos, não sendo compatível com memórias flash do tipo SSD. D) A interface SATA III oferece taxa de transferência teórica superior à do protocolo NVMe em qualquer configuração. E) SSDs SATA e SSDs NVMe utilizam obrigatoriamente o mesmo formato físico (form factor).

Resposta correta: B

O NVMe foi criado justamente para tirar proveito da velocidade do barramento PCIe, superando o limite da interface SATA III. Por isso, SSDs NVMe costumam ser bem mais rápidos que SSDs SATA, embora ambos utilizem memória flash.

Questão 10 FCC

No que se refere aos componentes de uma placa-mãe, assinale a alternativa correta.

A) O chipset é o componente responsável por armazenar permanentemente os arquivos do sistema operacional. B) O soquete (socket) da placa-mãe determina, entre outros fatores, a compatibilidade física com determinados modelos de processador. C) O chipset de uma placa-mãe tem como única função fornecer energia elétrica aos demais componentes. D) Qualquer processador é compatível com qualquer soquete de placa-mãe, independentemente do fabricante. E) A placa-mãe não influencia a quantidade máxima de memória RAM que pode ser instalada no computador.

Resposta correta: B

O soquete define, junto com o chipset, quais processadores podem ser fisicamente instalados na placa-mãe. Já a capacidade máxima de RAM e outros limites de expansão também dependem diretamente do projeto da placa-mãe, o que descarta as demais alternativas.

Questão 11 FCC

A respeito da arquitetura de computadores conhecida como arquitetura de Von Neumann, assinale a alternativa correta.

A) Nessa arquitetura, instruções e dados são armazenados em memórias fisicamente separadas e acessadas simultaneamente. B) A arquitetura de Von Neumann prevê que instruções e dados compartilhem a mesma memória, sendo processados sequencialmente por meio de um único barramento entre processador e memória. C) Essa arquitetura é utilizada exclusivamente em supercomputadores modernos, não estando presente em computadores pessoais. D) Na arquitetura de Von Neumann, o processador acessa diretamente os dispositivos de armazenamento secundário, sem intermediação da memória RAM. E) Essa arquitetura elimina a necessidade de memória cache no processador.

Resposta correta: B

Na arquitetura de Von Neumann, dados e instruções compartilham a mesma memória e trafegam por um único barramento entre processador e memória, o que é a base da maioria dos computadores pessoais atuais, e não uma exclusividade de supercomputadores.

Questão 12 FGV

Em relação à memória ROM e ao firmware responsável pela inicialização de um computador, assinale a alternativa correta.

A) A UEFI (Unified Extensible Firmware Interface) é uma evolução da BIOS tradicional, oferecendo, entre outras vantagens, suporte a discos de maior capacidade e interface gráfica mais amigável. B) A BIOS e a UEFI armazenam seus dados exclusivamente na memória RAM do computador. C) A ROM é uma memória volátil, perdendo seu conteúdo assim que o computador é desligado. D) A UEFI não é compatível com discos particionados no padrão GPT. E) A função da BIOS/UEFI é exclusivamente gerenciar a conexão do computador com a internet.

Resposta correta: A

A UEFI surgiu como sucessora da BIOS tradicional, trazendo suporte a discos maiores (por meio do particionamento GPT), inicialização mais rápida e, em geral, uma interface gráfica mais amigável para o usuário configurar o computador.

Questão 13 FGV

Sobre as características técnicas de monitores de vídeo, assinale a alternativa correta.

A) A resolução do monitor refere-se exclusivamente ao tamanho físico da tela, medido em polegadas. B) A taxa de atualização, medida em Hertz (Hz), indica quantas vezes por segundo a imagem exibida na tela é atualizada, influenciando a fluidez da imagem. C) Monitores com maior resolução, como 4K, exibem necessariamente uma taxa de atualização mais alta do que monitores Full HD. D) A taxa de atualização de um monitor não tem relação com a fluidez das imagens exibidas. E) Resolução e taxa de atualização são termos sinônimos utilizados para descrever a mesma característica do monitor.

Resposta correta: B

A taxa de atualização (Hz) e a resolução (por exemplo, 1920×1080 ou 3840×2160) são características distintas do monitor. A taxa de atualização determina quantas vezes a imagem é redesenhada por segundo, o que afeta diretamente a fluidez percebida pelo usuário.

Questão 14 FGV

A respeito dos slots de expansão presentes em placas-mãe de computadores, assinale a alternativa correta.

A) Um slot PCIe x16, comumente utilizado para placas de vídeo, oferece maior largura de banda que um slot PCIe x1, utilizado geralmente por placas de rede ou som. B) Os slots PCI (não PCIe) e PCI Express são fisicamente idênticos e intercambiáveis. C) Todo slot de expansão presente em uma placa-mãe é destinado exclusivamente a placas de vídeo. D) Quanto menor o número de lanes de um slot PCIe, maior é a largura de banda disponível. E) Slots de expansão não influenciam o desempenho de periféricos conectados ao computador.

Resposta correta: A

O número de lanes de um slot PCIe é proporcional à largura de banda disponível: um slot x16 (comum para placas de vídeo) comporta muito mais dados por segundo do que um slot x1, geralmente reservado a placas de rede, som ou captura.

Questão 15 IADES

Em relação à arquitetura interna do processador (CPU), assinale a alternativa correta.

A) A Unidade Lógica e Aritmética (ULA) é responsável por buscar as instruções na memória RAM e decodificá-las. B) A Unidade de Controle (UC) coordena a execução das instruções, direcionando os dados entre os demais componentes do processador, enquanto a ULA realiza as operações lógicas e aritméticas propriamente ditas. C) Os registradores são dispositivos de armazenamento secundário localizados fora do processador. D) A ULA é responsável exclusivamente pelo armazenamento permanente de dados do sistema operacional. E) A Unidade de Controle não interage com a memória cache do processador.

Resposta correta: B

A Unidade de Controle (UC) coordena o fluxo de instruções e dados dentro do processador, enquanto a Unidade Lógica e Aritmética (ULA) executa efetivamente os cálculos e operações lógicas. Os registradores, por sua vez, ficam dentro do próprio processador, e não em armazenamento secundário.

Questão 16 IADES

Sobre os tipos de impressoras utilizadas em ambientes de escritório, assinale a alternativa correta.

A) As impressoras a laser utilizam tecnologia baseada em jatos de tinta líquida projetados diretamente sobre o papel. B) As impressoras jato de tinta utilizam um cilindro fotossensível (tambor) e toner em pó para a formação da imagem no papel. C) As impressoras a laser utilizam um tambor fotossensível e toner em pó, fixado ao papel por meio de calor e pressão, o que geralmente proporciona maior velocidade de impressão em grandes volumes. D) Impressoras matriciais utilizam exclusivamente tecnologia a laser para a impressão de caracteres. E) Não há diferença tecnológica relevante entre impressoras a laser e impressoras jato de tinta.

Resposta correta: C

A tecnologia a laser utiliza um tambor fotossensível que atrai o toner em pó, fixado ao papel com calor e pressão, o que costuma resultar em maior velocidade para grandes volumes. Já as impressoras jato de tinta projetam gotículas de tinta líquida diretamente sobre o papel.

Questão 17 IADES

Em relação aos processadores multicore (multinúcleo) utilizados atualmente em computadores pessoais, assinale a alternativa correta.

A) Um processador com múltiplos núcleos físicos é capaz de executar diversas tarefas simultaneamente, o que tende a melhorar o desempenho em aplicações que suportam processamento paralelo. B) Processadores multicore possuem obrigatoriamente a mesma frequência de clock que processadores de núcleo único (single core). C) O número de núcleos de um processador não tem qualquer influência sobre sua capacidade de multitarefa. D) Tecnologias como o Hyper-Threading eliminam completamente a necessidade de múltiplos núcleos físicos para qualquer tipo de tarefa. E) Todo processador multicore executa exclusivamente uma única tarefa por vez, independentemente do número de núcleos.

Resposta correta: A

Processadores multicore permitem a execução simultânea de várias tarefas ou threads em núcleos distintos, o que melhora o desempenho especialmente em aplicações otimizadas para processamento paralelo, diferentemente de um processador com um único núcleo.

Questão 18 VUNESP

Quanto à classificação dos dispositivos periféricos de um computador, assinale a alternativa correta.

A) O teclado e o mouse são classificados como dispositivos exclusivamente de saída de dados. B) O monitor de vídeo é classificado como dispositivo de entrada de dados. C) Dispositivos como impressoras multifuncionais e monitores touch screen podem ser classificados como periféricos de entrada e saída, pois desempenham as duas funções. D) Todo periférico conectado a um computador é classificado exclusivamente como dispositivo de entrada. E) Alto-falantes são classificados como dispositivos de entrada de dados.

Resposta correta: C

Periféricos como impressoras multifuncionais (que imprimem e digitalizam) e monitores touch screen (que exibem imagem e recebem toque) desempenham simultaneamente funções de entrada e de saída, sendo classificados como periféricos híbridos (entrada e saída).

Questão 19 VUNESP

A respeito da frequência de operação (clock) de um processador, assinale a alternativa correta.

A) O clock do processador, geralmente medido em GHz, indica o número de ciclos de processamento realizados por segundo, sendo um dos fatores que influenciam o desempenho do computador. B) O overclocking consiste em reduzir a frequência de operação do processador para diminuir seu consumo de energia. C) O clock do processador não tem qualquer relação com o desempenho do computador. D) Processadores com clock mais baixo sempre apresentam desempenho superior a processadores com clock mais alto, independentemente de outros fatores. E) O clock é medido exclusivamente em bytes por segundo (B/s).

Resposta correta: A

O clock, medido em GHz, indica quantos ciclos de processamento o processador realiza por segundo e é um dos fatores (mas não o único) que influenciam o desempenho. O overclocking, ao contrário do afirmado em uma das alternativas, consiste em aumentar essa frequência além do valor padrão de fábrica.

Questão 20 VUNESP

Sobre o conector USB tipo C (USB-C) e sua relação com outros padrões de transmissão de dados, assinale a alternativa correta.

A) O conector USB-C é exclusivo do protocolo USB, não sendo utilizado por outros padrões de conexão. B) O USB-C é um padrão de conector físico que pode suportar diferentes protocolos, entre eles o Thunderbolt, permitindo, a depender do dispositivo, taxas de transferência superiores às do USB tradicional. C) Todo cabo com conector USB-C garante, obrigatoriamente, suporte ao protocolo Thunderbolt. D) O conector USB-C não permite a transmissão de vídeo, apenas de dados e energia. E) O padrão USB-C é incompatível com o carregamento de dispositivos móveis.

Resposta correta: B

O USB-C é um formato de conector que pode carregar diferentes protocolos, incluindo o Thunderbolt, o que nem sempre está disponível em todo cabo ou porta USB-C. Por isso, é comum a banca explorar a diferença entre o conector físico (USB-C) e o protocolo de dados que ele efetivamente transporta.

-   ![Cebraspe](./images/Cebraspe-150x150.webp)
    
    [Cebraspe: como funciona a banca e o que ela cobra em Informática](/cebraspe-como-funciona-a-banca-e-o-que-ela-cobra-em-informatica/)
-   ![Como Estudar para Concurso](./images/Como-Estudar-para-Concurso-150x150.webp)
    
    [Como Estudar para Concurso Faltando Menos de 15 Dias para a Prova](/como-estudar-para-concurso/)
-   ![](./images/informatica-para-concursos-150x150.webp)
    
    [Informática para concursos: 5 confusões clássicas e como a banca as cobra](/informatica-para-concursos-5-duvidas-prova/)
-   ![Cebraspe PM MA 2026](./images/Cebraspe-PM-MA-2026-150x150.webp)
    
    [10 dicas para gabaritar a prova de Informática da Cebraspe PM MA 2026](/informatica-cebraspe-pm-ma-2026/)
-   ![Windows 10](./images/Windows-10-150x150.webp)
    
    [Windows 10: Guia Completo para Concursos Públicos](/windows-10-para-concursos/)

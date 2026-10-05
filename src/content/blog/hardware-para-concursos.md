---
title: "Hardware para Concursos: o que a banca cobra e como estudar cada componente"
description: "Hardware para concursos sem decoreba: entenda processador, memórias, armazenamento e periféricos, com as pegadinhas das bancas."
category: "Hardware"
date: 2026-08-02T11:34:38-03:00
updated: 2026-09-22T19:17:55Z
readingTime: "16 min"
image: "./images/hardware.webp"
imageAlt: "hardware para concursos"
---

Hardware aparece em praticamente todo edital que cobra Informática. Às vezes o tema vem com esse nome; outras vezes, ele surge escondido em itens como “conceitos básicos de computação” ou “componentes de um computador”. Em qualquer caso, a banca espera que você saiba como a máquina funciona por dentro.

No entanto, muita gente estuda hardware decorando listas de siglas. Esse método falha justamente na hora da prova, porque as bancas raramente perguntam “o que é RAM”. Em vez disso, elas perguntam se a RAM perde os dados ao desligar o computador, se a cache fica mais perto do processador ou se todo SSD M.2 é NVMe.

Por isso, preparei este guia de hardware para concursos seguindo a lógica da prova. Você vai entender o papel de cada componente, como eles se conectam e, principalmente, onde estão as pegadinhas que mais derrubam candidatos.

## O que é hardware e por que esse tema cai tanto em concursos

Em primeiro lugar, hardware é a parte física do computador, ou seja, tudo aquilo que você consegue tocar. Processador, memória, placa-mãe, teclado e monitor entram nessa categoria.

O software, por sua vez, é a parte lógica. Ele reúne os programas e as instruções que dizem ao hardware o que fazer. Sistema operacional, navegador e editor de texto são exemplos clássicos.

Além disso, o tema cai muito porque serve de base para todo o resto da disciplina. Quem entende hardware compreende melhor sistemas operacionais, redes e até segurança da informação.

### Hardware, software e firmware: a diferença que a banca explora

Aqui está um ponto que merece atenção. Entre o hardware e o software existe o firmware, um programa gravado diretamente em um componente físico para controlar seu funcionamento básico.

O exemplo mais cobrado é o firmware da placa-mãe (BIOS ou UEFI). Da mesma forma, impressoras, roteadores e SSDs têm seu próprio firmware.

Na prova, a banca pode afirmar que firmware é hardware. Não caia nessa: firmware é software, ainda que fique armazenado em um chip de memória não volátil. Aliás, algumas bancas também citam o peopleware, termo que designa as pessoas que operam o sistema.

## A arquitetura básica do computador

### Modelo de Von Neumann

Primeiramente, quase todos os computadores atuais seguem o modelo que John von Neumann descreveu na década de 1940. A ideia central é simples e poderosa: o programa e os dados ficam armazenados na mesma memória.

Nesse modelo, três blocos se comunicam por meio de barramentos:

-   a Unidade Central de Processamento (CPU), que reúne a Unidade de Controle e a Unidade Lógica e Aritmética;
-   a memória principal, que guarda instruções e dados;
-   os dispositivos de entrada e saída, que fazem a ponte com o mundo externo.

Guarde esta ideia: o conceito de programa armazenado é a marca registrada da arquitetura de Von Neumann. Assim, quando a banca descrever instruções e dados compartilhando a mesma memória, é dela que o enunciado está falando.

### O ciclo entrada, processamento, armazenamento e saída

Na prática, funciona assim: você digita um número no teclado (entrada), o processador realiza um cálculo (processamento), o resultado fica na memória ou no disco (armazenamento) e, por fim, aparece no monitor (saída).

Esse fluxo ajuda você a classificar qualquer componente. Por isso, quando uma questão perguntar a função de um dispositivo, identifique em qual etapa do ciclo ele atua.

## Processador (CPU): como ele trabalha

O processador executa as instruções dos programas. Em outras palavras, ele busca uma instrução na memória, decodifica o que ela significa e depois a executa. Esse é o ciclo de busca, decodificação e execução, que se repete bilhões de vezes por segundo.

### Unidade de Controle, ULA e registradores

Inicialmente, separe as três partes internas que as bancas mais cobram:

-   **Unidade de Controle (UC):** coordena o funcionamento da CPU, busca e interpreta as instruções e envia sinais para os demais componentes.
-   **Unidade Lógica e Aritmética (ULA):** realiza as operações matemáticas (soma, subtração) e lógicas (comparações, E, OU, NÃO).
-   **Registradores:** pequenas áreas de armazenamento dentro do próprio processador, onde ficam os dados em uso naquele instante.

Não confunda os dois conceitos: a UC comanda, enquanto a ULA calcula. Além disso, memorize que os registradores formam a memória mais rápida do computador, justamente porque ficam dentro da CPU.

### Clock, núcleos e threads

O clock indica quantos ciclos o processador realiza por segundo e aparece em gigahertz (GHz). Um processador de 3 GHz, por exemplo, trabalha com 3 bilhões de ciclos por segundo.

Contudo, clock alto não garante, sozinho, desempenho superior. A arquitetura, a quantidade de instruções executadas por ciclo e o tamanho da cache também pesam. Portanto, se a banca afirmar que o processador com maior clock será sempre o mais rápido, desconfie do “sempre”.

Os núcleos (cores), por outro lado, funcionam como unidades de processamento independentes dentro do mesmo chip. Dessa forma, um processador quad-core possui quatro núcleos e consegue executar várias tarefas em paralelo.

Já as threads permitem que cada núcleo trabalhe com mais de uma sequência de instruções. A Intel chama essa tecnologia de Hyper-Threading, e o termo genérico é SMT (Simultaneous Multithreading). Assim, um processador com 8 núcleos e SMT pode aparecer para o sistema operacional como 16 processadores lógicos.

### Memória cache (L1, L2 e L3)

A cache é uma memória pequena e muito rápida que fica entre o processador e a RAM. Ela guarda os dados e as instruções que a CPU usa com mais frequência e, com isso, evita que o processador fique esperando pela memória principal.

Os níveis funcionam em escala:

-   **L1:** a menor e mais rápida, dentro de cada núcleo;
-   **L2:** maior e um pouco mais lenta;
-   **L3:** a maior das três, normalmente compartilhada entre os núcleos.

Esse é um detalhe que costuma confundir o candidato: a cache usa tecnologia SRAM e trabalha mais rápido que a RAM, mas tem capacidade bem menor. Em outras palavras, quanto mais perto do núcleo, mais rápida e menor ela é.

## Memórias: principal x secundária

Antes de tudo, separe as memórias em dois grupos. A memória principal (ou primária) trabalha diretamente com o processador e inclui RAM, ROM, cache e registradores. A memória secundária, por sua vez, guarda dados de forma permanente: HD, SSD, pendrive e mídias ópticas.

Consequentemente, o processador não executa um programa direto do HD. O sistema operacional primeiro carrega o programa na RAM, e só então a CPU passa a processá-lo.

### RAM: volatilidade, DRAM e SRAM

A RAM (Random Access Memory) é a memória de trabalho do computador. Ela guarda os programas abertos e os dados em uso. Como é volátil, ela perde todo o conteúdo quando o computador desliga.

Isso significa que um documento não salvo desaparece em uma queda de energia, porque ele existia apenas na RAM.

Além disso, existem dois tipos principais:

-   **DRAM (dinâmica):** precisa de recarga elétrica constante (refresh), custa menos e forma os pentes de memória do computador. Os padrões DDR4 e DDR5 pertencem a essa família.
-   **SRAM (estática):** dispensa o refresh, trabalha mais rápido e custa mais caro, por isso aparece na memória cache.

Guarde esta relação: DRAM é a memória principal, SRAM é a cache.

### ROM, BIOS e UEFI

A ROM (Read Only Memory) é não volátil, ou seja, mantém os dados mesmo sem energia. Tradicionalmente, ela armazena o firmware que inicia o computador.

Aliás, o nome “somente leitura” hoje é mais histórico do que literal. As placas-mãe modernas usam memória flash, o que permite atualizar o firmware. Mesmo assim, as bancas continuam tratando esse chip como ROM.

Ao ligar a máquina, o firmware executa o POST (Power-On Self-Test), que verifica os componentes essenciais. Em seguida, ele localiza o sistema operacional e inicia o carregamento.

O BIOS é o firmware tradicional. O UEFI, por outro lado, é o seu sucessor e traz recursos como interface gráfica, inicialização por discos com tabela de partição GPT (que supera o limite de 2 TB do antigo esquema MBR) e Secure Boot, que bloqueia carregadores de inicialização não autorizados.

### Hierarquia de memória

Por fim, as bancas adoram cobrar a hierarquia de memória. Ela organiza as memórias do topo, onde ficam as mais rápidas, até a base, onde fica a maior capacidade:

1.  Registradores
2.  Cache (L1, L2 e L3)
3.  Memória RAM
4.  Memória secundária (SSD e HD)
5.  Armazenamento externo e mídias removíveis

Quanto mais alto na pirâmide, maior a velocidade e o custo por byte, e menor a capacidade. Quando você encontrar essa situação na prova, lembre que as três grandezas andam juntas: velocidade e custo sobem, enquanto a capacidade desce.

## Dispositivos de armazenamento

### HD x SSD (SATA e NVMe)

Primeiramente, o HD (disco rígido) grava dados em discos magnéticos que giram enquanto uma cabeça de leitura se move sobre eles. Como depende de partes mecânicas, ele trabalha mais devagar e sofre mais com impactos.

O SSD (Solid State Drive), por outro lado, usa memória flash e não possui partes móveis. Como resultado, ele oferece acesso muito mais rápido, consome menos energia e resiste melhor a quedas.

A interface também faz diferença:

-   **SATA:** padrão presente em HDs e SSDs de 2,5 polegadas, com limite de 6 Gb/s na versão III (cerca de 600 MB/s de taxa útil).
-   **NVMe:** protocolo criado para SSDs que usa as linhas PCI Express e, por isso, alcança velocidades bem superiores ao SATA.

É aqui que aparece uma das principais pegadinhas: M.2 é um formato físico (o encaixe), e não um protocolo. Um SSD M.2 pode trabalhar tanto em SATA quanto em NVMe. Portanto, se a banca afirmar que todo SSD M.2 é NVMe, o item está errado.

### Mídias removíveis: pendrive, cartões de memória e mídias ópticas

Da mesma forma, você precisa conhecer as mídias removíveis:

-   **Pendrive e cartões de memória (SD, microSD):** usam memória flash, são não voláteis e se conectam por USB ou por leitores de cartão.
-   **Mídias ópticas:** CD (cerca de 700 MB), DVD (4,7 GB em camada simples) e Blu-ray (25 GB em camada simples). Nelas, um feixe de laser faz a leitura e a gravação.

Cabe destacar que HDs e SSDs externos também entram nesse grupo quando você os liga por USB. Aliás, combinar esses dispositivos com o [armazenamento em nuvem](#link-armazenamento-em-nuvem) é a base da [regra 3-2-1 de backup](#link-regra-3-2-1-backup), que protege seus arquivos contra falhas e perdas.

## Placa-mãe, chipset, barramentos e interfaces

A placa-mãe é a placa principal do computador. Ela interliga processador, memória, armazenamento e periféricos, além de distribuir energia entre eles.

O chipset, por sua vez, reúne os circuitos da placa-mãe que gerenciam a comunicação entre esses componentes. Ele define, por exemplo, quantas portas USB e SATA a placa oferece.

Já os barramentos formam os caminhos por onde os dados trafegam. Na prova, os mais cobrados são:

-   **PCI Express (PCIe):** conecta placas de vídeo, SSDs NVMe e placas de expansão;
-   **SATA:** conecta HDs, SSDs de 2,5 polegadas e unidades ópticas;
-   **USB:** conecta periféricos externos e permite ligar e desligar dispositivos com o computador em funcionamento (hot swap);
-   **HDMI e DisplayPort:** transmitem vídeo e áudio digitais para monitores e TVs.

Esse tema tem muitos detalhes de versões e velocidades. Por esse motivo, preparei um artigo exclusivo sobre [barramentos e interfaces de hardware](#link-barramentos-e-interfaces), com as comparações que mais aparecem nas provas.

## Periféricos de entrada, saída e entrada/saída

Os periféricos são dispositivos que você conecta ao computador para trocar informações com o usuário ou com outros equipamentos. A classificação, portanto, depende da direção dos dados:

-   **Entrada:** enviam dados para o computador. Exemplos: teclado, mouse, scanner, microfone, webcam e leitor biométrico.
-   **Saída:** recebem dados do computador e os apresentam ao usuário. Exemplos: monitor, impressora, caixas de som e projetor.
-   **Entrada e saída (híbridos):** fazem as duas coisas. Exemplos: tela touchscreen, impressora multifuncional, modem e placa de rede.

### Casos que confundem o candidato: touchscreen, multifuncional e modem

Na prova, a banca pode explorar justamente os dispositivos que parecem pertencer a um grupo, mas pertencem a outro.

A tela touchscreen exibe imagens (saída) e recebe toques (entrada), por isso ela é de entrada e saída. Da mesma forma, a multifuncional imprime (saída) e digitaliza (entrada).

O modem e a placa de rede, bem como o headset com microfone, enviam e recebem dados, o que também os coloca no grupo híbrido. Por outro lado, pendrives e HDs externos costumam aparecer como dispositivos de armazenamento, embora algumas bancas os classifiquem como entrada e saída, já que leem e gravam dados.

Memorize este ponto: a impressora comum é de saída, mas a multifuncional com scanner é de entrada e saída.

## Unidades de medida: bit, byte e seus múltiplos

Para começar, o bit é a menor unidade de informação e assume apenas dois valores: 0 ou 1. Um byte, por sua vez, reúne 8 bits e costuma representar um caractere.

A partir disso, os múltiplos crescem em escala: kilobyte (KB), megabyte (MB), gigabyte (GB) e terabyte (TB).

Vale destacar a diferença entre o b minúsculo e o B maiúsculo. A velocidade de rede aparece em bits por segundo (Mbps), enquanto arquivos e discos aparecem em bytes (MB). Assim, uma internet de 100 Mbps transfere, no máximo, cerca de 12,5 MB por segundo.

### KB x KiB: a diferença entre base decimal e binária

Aqui está outro ponto que merece atenção. Pelo Sistema Internacional, o prefixo kilo vale 1.000, logo 1 KB equivale a 1.000 bytes. Para evitar confusão com a base binária, a IEC aprovou em 1998 os prefixos binários: 1 KiB (kibibyte) vale 1.024 bytes, 1 MiB vale 1.024 KiB, e assim por diante.

Na prática, porém, muitas bancas e apostilas ainda usam 1 KB = 1.024 bytes. Por isso, leia o enunciado com cuidado: se a questão não especificar, a convenção mais cobrada em concursos continua sendo a base 1.024.

Essa diferença também explica por que um HD vendido como 1 TB aparece com cerca de 931 GB no Windows. O fabricante calcula em base decimal, enquanto o sistema exibe o valor em base binária.

## Hardware para concursos: as pegadinhas mais comuns das bancas

Agora que você conhece os componentes, veja os erros que as bancas mais exploram. Principalmente nas provas do Cebraspe, termos absolutos como “sempre”, “somente” e “exclusivamente” costumam sinalizar um item errado.

-   **RAM x ROM:** a RAM é volátil e perde os dados sem energia; a ROM é não volátil.
-   **Cache x RAM:** a cache trabalha mais rápido, porém guarda menos que a RAM.
-   **Registradores:** formam a memória mais rápida e ficam dentro do processador, não na placa-mãe.
-   **HD x SSD:** somente o HD possui partes mecânicas.
-   **M.2 x NVMe:** M.2 é formato; NVMe é protocolo.
-   **Clock:** mais GHz não significa, necessariamente, um processador mais rápido.
-   **Execução de programas:** a CPU executa instruções carregadas na RAM, não diretamente do disco.
-   **Firmware:** é software, mesmo gravado em chip.
-   **Bits x bytes:** Mbps mede velocidade de transmissão; MB mede tamanho.

Em síntese, a banca raramente cobra definições isoladas. Ela cobra comparações. Portanto, estude cada componente sempre ao lado do componente que a banca costuma usar como armadilha para ele.

## Questões de Certo ou Errado

Hora de testar o que você aprendeu. Os itens abaixo seguem o estilo Cebraspe: julgue cada afirmação como certa ou errada e, em seguida, confira o comentário.

Questões de Certo ou Errado: Hardware

Julgue cada item e confira o comentário logo abaixo.

Questão 1Estilo CEBRASPE

A memória RAM é volátil, ou seja, perde seu conteúdo quando o computador desliga.

Certo Errado

Resposta correta: Certo

A RAM depende de energia para manter os dados. Por isso, um arquivo não salvo desaparece em uma queda de energia.

Questão 2Estilo CEBRASPE

Por estar mais próxima do processador, a memória cache possui capacidade de armazenamento superior à da memória RAM.

Certo Errado

Resposta correta: Errado

A cache trabalha mais rápido que a RAM, mas guarda bem menos dados. Na hierarquia de memória, velocidade e capacidade andam em sentidos opostos.

Questão 3Estilo CEBRASPE

Na arquitetura de Von Neumann, instruções e dados compartilham a mesma memória.

Certo Errado

Resposta correta: Certo

Esse é o conceito de programa armazenado, a principal característica do modelo de Von Neumann.

Questão 4Estilo CEBRASPE

A Unidade Lógica e Aritmética é o componente da CPU que busca e decodifica as instruções dos programas.

Certo Errado

Resposta correta: Errado

Quem busca e decodifica as instruções é a Unidade de Controle. A ULA executa as operações aritméticas e lógicas.

Questão 5Estilo CEBRASPE

Os SSDs armazenam dados em memória flash e não possuem partes móveis.

Certo Errado

Resposta correta: Certo

Justamente por não ter partes mecânicas, o SSD oferece acesso mais rápido e resiste melhor a impactos que o HD.

Questão 6Estilo CEBRASPE

Todo SSD no formato M.2 utiliza exclusivamente o protocolo NVMe.

Certo Errado

Resposta correta: Errado

M.2 é um formato físico. Existem SSDs M.2 que trabalham com SATA e outros que trabalham com NVMe. Repare no “exclusivamente”.

Questão 7Estilo CEBRASPE

Por ficar gravado em um chip da placa-mãe, o firmware pertence à categoria de hardware.

Certo Errado

Resposta correta: Errado

Firmware é software. O chip é hardware, mas o programa gravado nele continua sendo software.

Questão 8Estilo CEBRASPE

A impressora multifuncional com scanner pertence ao grupo dos dispositivos de entrada e saída.

Certo Errado

Resposta correta: Certo

Ela imprime (saída) e digitaliza (entrada), por isso atua nas duas direções.

Questão 9Estilo CEBRASPE

Uma conexão de internet de 100 Mbps permite transferir 100 megabytes por segundo.

Certo Errado

Resposta correta: Errado

Mbps mede megabits por segundo. Como 1 byte tem 8 bits, 100 Mbps equivalem a cerca de 12,5 MB por segundo.

Questão 10Estilo CEBRASPE

O UEFI, sucessor do BIOS, oferece recursos como Secure Boot e inicialização por discos com tabela de partição GPT.

Certo Errado

Resposta correta: Certo

Além desses recursos, o UEFI também permite interface gráfica na configuração do firmware.

## Conclusão

Em resumo, estudar hardware para concursos exige mais compreensão do que memorização. Quando você entende o caminho dos dados, da entrada ao processamento e da memória à saída, as questões deixam de ser um jogo de siglas.

Além disso, você viu que a banca gosta de comparações: RAM e ROM, cache e RAM, HD e SSD, M.2 e NVMe, bits e bytes. Revise esses pares até conseguir explicá-los sem consultar o material.

Como próximo passo, resolva o [simulado de Hardware](#link-simulado-hardware) com 30 questões comentadas. É ali que você descobre quais pontos ainda precisam de revisão antes da prova.

## Fontes e Referências

-   NIST. [Prefixes for binary multiples](https://physics.nist.gov/cuu/Units/binary.html).
-   UEFI Forum. [UEFI Specifications](https://uefi.org/specifications).
-   NVM Express. [NVM Express Specifications](https://nvmexpress.org/specifications/).
-   JEDEC. [Main Memory: DDR SDRAM Standards](https://www.jedec.org/category/technology-focus-area/main-memory-ddr3-ddr4-sdram).
-   SATA-IO. [Serial ATA International Organization](https://sata-io.org/).
-   PCI-SIG. [PCI Express Specifications](https://pcisig.com/specifications).
-   USB-IF. [USB Document Library](https://www.usb.org/documents).
-   Cebraspe. [Portal de concursos](https://www.cebraspe.org.br/).
-   TANENBAUM, Andrew S.; AUSTIN, Todd. _Organização estruturada de computadores_. 6. ed. São Paulo: Pearson, 2013.
-   STALLINGS, William. _Arquitetura e organização de computadores_. 10. ed. São Paulo: Pearson, 2017.

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

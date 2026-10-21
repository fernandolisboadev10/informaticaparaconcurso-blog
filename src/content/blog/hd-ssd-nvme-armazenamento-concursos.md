---
title: "HD, SSD e NVMe: Armazenamento de Dados para Concursos"
seoTitle: "HD, SSD e NVMe: Armazenamento de Dados para Concursos"
description: "Entenda HD, SSD, NVMe, pendrive e RAID: como cada armazenamento funciona, as diferenças de velocidade e o que as bancas cobram."
category: "Hardware"
date: 2026-10-21T14:30:00-03:00
readingTime: "9 min"
image: "./images/hd-ssd-nvme-armazenamento-concursos.webp"
imageAlt: "HD, SSD M.2 NVMe e pendrive lado a lado, representando os dispositivos de armazenamento de dados do computador"
tags: ["HD", "SSD", "NVMe", "Armazenamento", "RAID", "Hardware", "Noções de Informática"]
---

Armazenamento é um dos temas de hardware que mais rendem questões, e quase sempre pelos mesmos motivos: confundir HD com SSD, tratar M.2 como se fosse velocidade e achar que RAID substitui backup. Se você dominar essas três ideias, já resolve boa parte do que a banca cobra.

Este artigo aprofunda a seção de armazenamento do [guia geral de hardware para concursos](/hardware-para-concursos/). Você vai ver como funcionam HD e SSD, o que separa SATA de NVMe, quais são as mídias removíveis e o que cada nível de RAID faz. No fim, há 12 questões autorais comentadas para testar o que aprendeu.

## Memória principal x secundária: por que armazenamento cai em prova

O computador separa a memória em dois grupos. A memória principal (registradores, cache, RAM e ROM) conversa diretamente com o processador. A memória secundária guarda os dados de forma permanente, mesmo com o computador desligado: HD, SSD, pendrive, cartões e mídias ópticas.

A consequência prática é um clássico das provas: a CPU não executa um programa direto do HD ou do SSD. O sistema operacional carrega o programa na RAM e só então o processador trabalha com ele. Se quiser rever essa divisão com calma, o artigo sobre [memórias RAM, ROM e cache](/aula-hardware-memorias-ram-rom-cache/) explica cada uma.

Um detalhe complementa o assunto: para guardar arquivos, o dispositivo precisa ser particionado e formatado com um sistema de arquivos, como NTFS ou FAT32. Esse ponto tem artigo próprio sobre [sistemas de arquivos](/sistemas-de-arquivos/).

## HD: discos magnéticos e partes móveis

O HD (hard disk drive, ou disco rígido) grava os dados em pratos magnéticos que giram em alta velocidade. Uma cabeça de leitura e gravação se desloca sobre a superfície do prato para ler ou escrever cada trecho. A velocidade de rotação costuma ser indicada em RPM (rotações por minuto), com valores como 5.400 e 7.200 nos modelos comuns.

Como o HD depende de motor, pratos e cabeça em movimento, ele tem três características que você deve associar a ele:

- o acesso é mais lento, porque a cabeça precisa se posicionar e o prato precisa girar até o ponto certo;
- é mais sensível a impactos e quedas, principalmente com o equipamento ligado;
- produz mais ruído e calor do que um SSD.

Em compensação, o HD costuma oferecer mais capacidade por um preço menor, o que o mantém comum em backups e armazenamento de grandes volumes.

## SSD: memória flash sem partes móveis

O SSD (Solid State Drive) armazena os dados em chips de memória flash, controlados por um circuito próprio. Não há disco girando nem cabeça se movendo, e por isso ele é mais rápido, silencioso, leve e resistente a impactos. Também consome menos energia, o que ajuda a bateria dos notebooks.

Duas ressalvas aparecem em prova. A primeira: o SSD é **não volátil**, ou seja, mantém os dados sem energia, como o HD. Chamá-lo de memória volátil é erro. A segunda: cada célula de flash suporta um número limitado de gravações, então o desgaste existe, embora nos usos comuns o SSD dure por anos.

Um efeito curioso dessa diferença é a desfragmentação. Ela faz sentido para o HD, porque reunir os pedaços de um arquivo reduz o deslocamento da cabeça. No SSD, não há cabeça para deslocar.

## SATA x NVMe: interface não é formato

Aqui nasce a maior parte das pegadinhas. Para entender, separe três conceitos que as pessoas misturam.

**SATA** é uma interface de conexão criada para HDs. A versão mais comum, SATA 6 Gb/s (também chamada de SATA III), tem velocidade teórica de 6 gigabits por segundo, o que dá algo próximo de 600 MB/s de taxa útil. Um SSD SATA não passa dessa ordem de grandeza, mesmo sem ter partes móveis.

**NVMe** é um protocolo desenvolvido para SSDs ligados ao barramento **PCI Express (PCIe)**. A organização NVM Express o define como a interface de registradores e o conjunto de comandos para armazenamento conectado via PCIe, e o descreve como o padrão de fato para [SSDs PCIe](https://nvmexpress.org/specifications/). Como o PCIe oferece muito mais banda que o SATA, um SSD NVMe pode alcançar milhares de MB/s, ou seja, vários GB/s, dependendo da geração do PCIe. Esses valores são teóricos ou típicos e variam conforme o modelo.

**M.2** é o **formato físico**: o pequeno encaixe, em formato de pente, onde o SSD é preso diretamente na placa-mãe. M.2 não diz nada sobre velocidade. Um SSD M.2 pode usar SATA ou pode usar NVMe, e a ranhura da placa-mãe precisa ser compatível com o tipo escolhido. A própria Microsoft, ao listar os discos aceitos no Windows Server, trata [SATA e NVMe (M.2, U.2 e placa de expansão)](https://learn.microsoft.com/en-us/windows-server/storage/storage-spaces/storage-spaces-direct-hardware-requirements) como categorias distintas.

O quadro abaixo organiza o raciocínio:

| Conceito | O que é | Exemplo |
| --- | --- | --- |
| SATA | Interface/protocolo | HD e SSD de 2,5" ou M.2 |
| NVMe | Protocolo sobre PCIe | SSD de alto desempenho |
| M.2 | Formato do encaixe | SSD SATA ou SSD NVMe |

Resumindo: SSD SATA pode ser de 2,5 polegadas ou M.2; SSD NVMe pode ser M.2, U.2 ou uma placa que se encaixa direto no slot PCIe. Portanto, "todo SSD M.2 é NVMe" está errado, e "NVMe é um tipo de encaixe" também.

## HD x SSD: comparação direta

| Característica | HD | SSD |
| --- | --- | --- |
| Tecnologia | Pratos magnéticos | Memória flash |
| Partes móveis | Sim | Não |
| Velocidade | Menor | Muito maior |
| Resistência a impactos | Menor | Maior |
| Custo por GB | Menor | Maior |

Na prova, a banca costuma trocar os lados: atribui "partes móveis" ao SSD ou "memória flash" ao HD. Decore a coluna da tecnologia e o resto se encaixa.

## Mídias removíveis: pendrive, cartões e discos ópticos

O **pendrive** e os **cartões de memória** (SD, microSD) usam memória flash. São não voláteis, portáteis e regraváveis. O pendrive conecta-se por USB, e os cartões entram em leitores próprios, como os de câmeras e celulares. Lembre: tirar o pendrive da porta não apaga nada, porque ele não é volátil.

As **mídias ópticas** são lidas e gravadas por um feixe de laser:

- **CD:** cerca de 700 MB (os primeiros discos tinham 650 MB);
- **DVD:** 4,7 GB em camada simples e 8,5 GB em camada dupla;
- **Blu-ray:** 25 GB em camada simples e 50 GB em camada dupla, lido por um laser azul.

A ordem de capacidade é CD, DVD e Blu-ray, do menor para o maior. As siglas com R (como CD-R e DVD-R) gravam uma única vez, e as com RW (CD-RW, DVD-RW) podem ser regravadas.

## RAID: vários discos trabalhando como um só

RAID (Redundant Array of Independent Disks) é uma técnica que combina vários discos em um único volume para ganhar desempenho, segurança contra falha de disco, ou os dois. Três níveis aparecem com mais frequência:

- **RAID 0 (striping):** divide os dados em blocos distribuídos entre os discos, o que melhora leitura e gravação. Exige no mínimo 2 discos e **não tem tolerância a falhas**: se um disco falhar, o volume inteiro fica comprometido. A capacidade útil é a soma de todos os discos.
- **RAID 1 (espelhamento):** grava uma cópia idêntica dos dados em cada disco. Exige no mínimo 2 discos e continua funcionando se um falhar. Em contrapartida, com dois discos iguais, você aproveita só a capacidade de um.
- **RAID 5 (striping com paridade):** distribui dados e informação de paridade entre os discos. Exige no mínimo 3 discos, tolera a falha de um deles e perde a capacidade equivalente a um disco, que fica com a paridade. Segundo a [documentação da Microsoft](https://learn.microsoft.com/en-us/previous-versions/sql/sql-server-2008/ms190764(v=sql.100)), quando um disco falha, o desempenho de leitura diminui até a reconstrução.

Existe ainda o RAID 10 (1+0), que combina espelhamento e divisão em blocos e usa no mínimo 4 discos.

### RAID não é backup

Este é o ponto mais explorado pelas bancas. RAID protege contra a **falha física de um disco**, mas não contra apagar um arquivo por engano, ransomware, vírus, incêndio ou furto. Se um arquivo é excluído em um RAID 1, ele some dos dois discos ao mesmo tempo, porque o espelho copia tudo, inclusive o erro.

Backup é uma cópia separada, que pode ser restaurada depois. Para entender como montar essa proteção, veja a [regra 3-2-1 de backup](/regra-3-2-1/) e os [tipos de backup](/backup-seguranca-da-informacao/) (completo, incremental e diferencial).

## E a nuvem?

O armazenamento em nuvem funciona de outro modo: os arquivos ficam em servidores de um provedor e você os acessa pela internet, sem depender de um disco seu. Isso facilita o acesso de qualquer lugar e funciona como uma cópia fora do local, mas exige conexão e depende do serviço contratado. O artigo sobre [cloud storage](/cloud-storage-armazenamento-de-dados-na-nuvem/) mostra as vantagens, os riscos e como a banca costuma cobrar o tema.

## Pegadinhas mais comuns sobre armazenamento

- **M.2 x NVMe:** M.2 é formato; NVMe é protocolo. Um SSD M.2 pode ser SATA.
- **SSD é volátil:** errado. O SSD, o pendrive e os cartões são não voláteis.
- **Velocidade do SSD:** SSD SATA e SSD NVMe usam memória flash, mas não têm a mesma velocidade, porque a interface muda o limite.
- **Partes móveis:** só o HD tem. O SSD não tem.
- **RAID x backup:** RAID não substitui backup. RAID 1, aliás, copia os erros.
- **RAID 0:** é o único dos três que não tem redundância, apesar do nome "Redundant".
- **Execução de programas:** a CPU executa o que está na RAM, não o que está no HD ou no SSD.
- **Capacidade das mídias ópticas:** CD (cerca de 700 MB), DVD (4,7 GB) e Blu-ray (25 GB), todos em camada simples. Atenção às camadas duplas.
- **Termos absolutos:** "todo", "sempre", "somente" e "exclusivamente" costumam sinalizar um item errado.

## Perguntas frequentes

### SSD NVMe e SSD M.2 são a mesma coisa?

Não. M.2 é o formato do encaixe, enquanto NVMe é o protocolo de comunicação. Existem SSDs M.2 que usam SATA e outros que usam NVMe. Também existem SSDs NVMe em outros formatos, como U.2 e placas de expansão.

### O SSD perde os dados quando o computador é desligado?

Não. O SSD usa memória flash, que é não volátil, e mantém os dados sem energia. A memória que perde o conteúdo ao desligar é a RAM.

### Qual nível de RAID protege contra a falha de um disco?

O RAID 1 e o RAID 5 toleram a falha de um disco. O RAID 0 não tem essa proteção. Mesmo assim, nenhum nível substitui o backup, que protege contra exclusão acidental, malware e desastres.

### Por que o HD é mais lento que o SSD?

Porque o HD depende de partes mecânicas: o prato precisa girar e a cabeça precisa se posicionar para ler cada dado. O SSD acessa chips de memória flash eletronicamente, sem nenhum movimento físico.

## Conclusão

Para armazenamento, guarde a lógica por trás das siglas. HD usa discos magnéticos e partes móveis; SSD usa memória flash; SATA e NVMe são formas de comunicação, e M.2 é só o formato do encaixe; pendrive e cartões são flash e não voláteis; RAID aumenta desempenho ou tolerância a falhas, mas nunca substitui o backup.

Para fixar, resolva as questões comentadas logo abaixo e depois faça o [simulado de Hardware](/simulado-hardware/), que reúne mais questões sobre o tema.

## Fontes e Referências

- NVM Express. [NVM Express Specifications](https://nvmexpress.org/specifications/).
- Microsoft Learn. [Storage Spaces Direct hardware requirements](https://learn.microsoft.com/en-us/windows-server/storage/storage-spaces/storage-spaces-direct-hardware-requirements).
- Microsoft Learn. [RAID Levels and SQL Server](https://learn.microsoft.com/en-us/previous-versions/sql/sql-server-2008/ms190764(v=sql.100)) (documentação arquivada).
- SATA-IO. Serial ATA International Organization (sata-io.org).
- PCI-SIG. PCI Express Specifications.
- TANENBAUM, Andrew S.; AUSTIN, Todd. _Organização estruturada de computadores_. 6. ed. São Paulo: Pearson, 2013.
- STALLINGS, William. _Arquitetura e organização de computadores_. 10. ed. São Paulo: Pearson, 2017.

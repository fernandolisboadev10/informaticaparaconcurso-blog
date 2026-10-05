---
title: "Linux para Concursos: o Guia Completo do que Cai na Prova"
description: "Entenda por que a Cebraspe cobra tanto Linux, veja kernel, distribuições e comandos essenciais e treine com 12 questões de Certo ou Errado."
category: "Sistemas"
date: 2026-09-26T12:22:06-03:00
updated: 2026-09-26T12:23:04Z
readingTime: "17 min"
image: "./images/image-1.webp"
imageAlt: "Linux para Concursos"
---

## Introdução

Você já deve ter percebido que o Linux para concursos aparece com uma frequência incômoda nas provas de Informática, e isso não é acaso. Afinal, o sistema domina boa parte dos servidores, dos serviços de rede e dos ambientes corporativos do mundo real, e por isso a banca encontra ali um terreno fértil para cobrar conceitos de sistema operacional, terminal, arquivos e permissões em poucas linhas de enunciado.

Muitos candidatos travam diante desse assunto logo no início da preparação. Contudo, a lógica de cobrança é bem mais simples do que parece à primeira vista: em vez de exigir domínio técnico de administrador de redes, a prova normalmente avalia se você entende o papel do sistema, reconhece os comandos básicos e identifica as pegadinhas conceituais que a banca gosta de armar.

Nesta aula, você vai entender por que o Linux cai tanto, como ele surgiu, o que a Cebraspe mais explora e quais pontos merecem prioridade na sua revisão para o concurso. Se ainda ficou alguma dúvida sobre como esse sistema se compara ao concorrente mais cobrado em edital, o artigo [Windows x Linux para concursos](/windows-vs-linux-para-concursos/) traz esse comparativo direto. Além disso, você vai encontrar links oficiais para consultar a documentação real de cada distribuição e de cada comando: o tipo de material que separa quem decora do candidato que realmente entende o assunto.

## Como o Linux nasceu

Tudo começou no início da década de 1990, quando o estudante finlandês Linus Torvalds criou um novo núcleo de sistema operacional inspirado no Unix. Na época, ele queria aprender mais sobre computação e, ao mesmo tempo, oferecer uma alternativa livre e aberta ao mercado. Logo depois, Torvalds compartilhou o projeto com outros desenvolvedores pela internet, e essa decisão mudou tudo: a colaboração coletiva transformou um projeto pessoal em uma das bases mais importantes da computação mundial.

Hoje, o próprio kernel.org hospeda o código-fonte oficial do kernel Linux e reúne a documentação técnica que a comunidade mantém. Vale a pena conhecer o site, ainda que só de curiosidade, porque ele mostra na prática o que significa um projeto de código aberto que milhares de colaboradores mantêm ao redor do mundo.

## O que é Linux, afinal?

Aqui está um ponto que costuma confundir o candidato: Linux, tecnicamente, é apenas o kernel, ou seja, o núcleo do sistema responsável por conectar os programas ao hardware. Sozinho, porém, ele não entrega uma experiência completa, porque ainda precisa de programas, drivers, configurações e interface para formar um sistema operacional utilizável.

Na prova, a banca costuma explorar justamente essa diferença. Ela pode afirmar que “Linux é apenas o núcleo” e, em seguida, citar uma distribuição como o Ubuntu para representar o sistema em uso completo. Esse detalhe parece pequeno, mas derruba com frequência quem estuda só por decoreba, sem entender a lógica por trás do conceito.

Então, memorize esta ideia: kernel é o motor; distribuição é o carro completo, com carroceria, bancos e painel. Sem o kernel, nada roda; sem a distribuição, o kernel sozinho não serve para o usuário comum.

## Distribuições Linux: os “sabores” do sistema

Em seguida, você precisa entender o que são as distribuições. Cada uma reúne o kernel a um conjunto próprio de programas, ferramentas e configurações, formando aquilo que a comunidade chama de “sabores” diferentes do mesmo sistema, cada um com vantagens e desvantagens próprias.

Na prática, isso significa que o Linux nunca aparece de uma única forma. Embora todas as distribuições mantenham a mesma lógica central, cada uma organiza pacotes, interface e filosofia de um jeito próprio. Conheça as principais, com o link oficial de cada uma; vale a pena visitar ao menos uma vez, para associar o nome à cara real do sistema:

-   Ubuntu: distribuição popular, amigável e muito usada por iniciantes;
-   Debian: distribuição estável, conhecida por servir de base para outros projetos (o próprio Ubuntu deriva dela);
-   Fedora: distribuição moderna, com foco em tecnologias recentes;
-   Red Hat Enterprise Linux: distribuição comercial, muito presente em ambientes corporativos e servidores;
-   Slackware: uma das distribuições mais antigas ainda ativas, citada com frequência em materiais introdutórios;
-   Linux Mint: distribuição amigável, bastante usada em desktops;
-   Arch Linux: voltada para usuários experientes, com foco em personalização total do sistema.

Guarde este ponto: quando a banca cita “distribuições Linux” como sinônimo de “Linux”, ela normalmente está certa em um sentido amplo, afinal, é assim que o usuário comum se refere ao sistema. O erro só aparece quando o enunciado confunde o conceito técnico de kernel com o conceito comercial de distribuição.

## Por que as bancas cobram Linux para concursos

Antes de tudo, vale entender o motivo por trás dessa cobrança tão constante. As bancas exploram o Linux para concursos porque ele permite testar noções reais de informática, e não apenas o uso superficial de uma interface gráfica bonita. Como o sistema domina boa parte dos servidores e da administração de serviços no mundo real, ele virou conteúdo praticamente obrigatório em editais de informática.

Além disso, o tema rende muito: em uma única questão, a banca consegue cobrar navegação entre diretórios, manipulação de arquivos, compactação, usuários, grupos e permissões. Por isso mesmo, a Cebraspe monta itens curtos, mas carregados de detalhe técnico, e é justamente aí que mora o perigo para quem estuda de forma rasa.

## Como a Cebraspe costuma cobrar

Já que você conhece o motivo da cobrança, entenda agora o estilo da banca. A Cebraspe prefere itens de certo ou errado, então ela costuma misturar um conceito verdadeiro com uma palavra mal colocada, criando uma armadilha quase invisível para quem lê rápido demais.

Por esse motivo, preste atenção redobrada em expressões como “sempre”, “somente”, “exclusivamente” e “necessariamente”. Em Linux, uma frase 90% correta pode virar errada por causa de um único exagero no enunciado, e esse é exatamente o tipo de pegadinha que separa quem passa de quem fica na fila de espera.

## Shell e terminal: a porta de entrada do sistema

Inicialmente, o shell funciona como a interface que permite ao usuário conversar com o sistema por meio de comandos digitados no teclado. Pense nele como um tradutor: você digita uma instrução em texto, e o shell traduz aquilo em ações reais dentro do sistema operacional. A documentação oficial do GNU Bash, um dos shells mais usados em distribuições Linux, detalha cada um desses comandos com precisão. Vale a pena salvar o link para consultas futuras.

Na prova, a banca pode cobrar o significado do prompt, o uso do histórico de comandos e a navegação básica pelo sistema de arquivos. Portanto, dominar esse bloco já garante uma boa base para interpretar boa parte dos itens sobre Linux.

## Comandos essenciais que caem em prova

Primeiramente, a banca gosta de cobrar os comandos mais básicos de terminal, aqueles que qualquer usuário usa no dia a dia:

-   `pwd`: mostra o diretório atual em que você está;
-   `whoami`: exibe o nome do usuário logado;
-   `date`: mostra data e hora do sistema;
-   `history`: lista o histórico de comandos digitados;
-   `cd`: navega entre diretórios;
-   `ls`: lista arquivos e diretórios.

Além disso, aparecem com frequência os comandos de manipulação de arquivos e diretórios:

-   `mkdir`: cria diretórios;
-   `touch`: cria arquivos vazios;
-   `cp`: copia arquivos ou diretórios;
-   `mv`: move ou renomeia arquivos;
-   `rm`: remove arquivos ou diretórios.

Repare bem nessa diferença, porque ela é clássica em prova: o `cp` copia e mantém o original no lugar; já o `mv` move (ou renomeia) e, nesse processo, o arquivo original deixa de existir na origem. A banca adora trocar esses dois verbos para confundir o candidato desatento. Você encontra a sintaxe completa e oficial de cada comando no manual do GNU Coreutils, que o próprio projeto GNU mantém, e uma lista mais completa, com mais exemplos práticos, no artigo [comandos básicos do Linux para concursos](/comandos-basicos-do-linux/).

Aliás, de nada adianta memorizar a função de cada comando sem praticar a digitação real no terminal. Na hora da prova, o candidato que já treinou o comando na prática interpreta o enunciado com muito mais segurança do que quem apenas leu a definição uma vez. Por isso, [pratique agora mesmo no terminal Linux online](/linux.html): digite os comandos deste artigo, observe o retorno do sistema e fixe a lógica de cada um antes de partir para os exercícios.

## Diretórios e arquivos ocultos

Em seguida, aparecem as questões sobre diretórios e arquivos propriamente ditos. Você já conhece `cd` para navegar, `ls` para listar, `mkdir` para criar diretórios, `touch` para criar arquivos, `mv` para mover ou renomear e `cp` para copiar. Então, o próximo passo é entender as variações desses comandos.

A prova costuma explorar os arquivos ocultos: você os reconhece porque o nome começa com um ponto (por exemplo, `.bashrc`). Vale destacar também as variações de listagem, como `ls -a` (mostra os arquivos ocultos junto com os demais) e `ls -la` (mostra os ocultos em formato detalhado, com permissões e datas). Esse tipo de cobrança é típico da Cebraspe, porque mistura conceito com comando prático em uma única frase.

## Ajuda e localização: autonomia dentro do sistema

Logo depois, vale lembrar que o Linux oferece ajuda interna por meio de comandos como `help`, `--help`, `man` e `whatis`. Já o comando `find` serve para localizar arquivos por nome e por outros critérios, como tamanho ou data de modificação.

Esse ponto cai porque mostra autonomia de uso do sistema, afinal, um bom administrador precisa saber consultar a documentação sem depender de busca externa. Em prova, a banca costuma cobrar qual comando consulta o manual completo (`man`), qual exibe uma descrição curta (`whatis`) e qual realiza busca de arquivos (`find`). O projeto Linux man-pages, referência oficial da comunidade, reúne a documentação de praticamente todos os comandos que você acabou de estudar aqui.

## Compactação: agrupar e comprimir arquivos

Além disso, a compactação também rende bastante em concurso. O sistema traz vários utilitários para agrupar e comprimir arquivos, entre eles `tar`, `gzip`, `gunzip`, `zip` e `unzip`.

Na Cebraspe, o mais comum é a banca cobrar a finalidade de cada comando, e não um procedimento avançado de configuração. Assim, basta você guardar que `tar` agrupa vários arquivos em um só pacote, `gzip` comprime esse pacote e `unzip` descompacta arquivos no formato `.zip`. A lógica é simples, mas a banca gosta de trocar essas funções entre si para testar sua atenção.

## Usuários, grupos e permissões: o bloco mais decisivo

Principalmente, usuários, grupos e permissões formam um dos blocos mais cobrados em Linux, e também um dos que mais derrubam candidato distraído. Todo arquivo e todo diretório no sistema tem um dono (usuário), um grupo associado e uma permissão que define o que cada um pode fazer com aquele item: ler (r), escrever (w) e executar (x).

Veja como isso aparece na prática: ao digitar `ls -l`, você enxerga algo como `-rwxr-xr--`. Essa sequência parece confusa à primeira vista, mas segue uma lógica fixa: os três primeiros caracteres definem a permissão do dono, os três seguintes definem a permissão do grupo e os três últimos definem a permissão para os demais usuários do sistema. Assim, nesse exemplo, o dono pode ler, escrever e executar; o grupo pode ler e executar; e os demais só podem ler.

Guarde esta ideia, porque ela costuma render questão isolada: o comando `chmod` altera essas permissões, enquanto o `chown` altera o dono do arquivo. Não confunda os dois: essa é justamente uma das principais pegadinhas que a banca explora nesse bloco. Para consultar a sintaxe completa e oficial, o manual do GNU Coreutils sobre o chmod traz a documentação detalhada do comando.

A tabela abaixo resume os comandos mais cobrados sobre esse bloco. Consulte-a sempre que precisar revisar rapidamente antes da prova.

  Tabela — Comandos e Permissões Linux para Concursos 

Comandos e permissões de Linux mais cobrados em concurso

| Comando | Função | Exemplo | Pegadinha comum |
| --- | --- | --- | --- |
| `pwd` | Mostra o diretório atual em que o usuário está | `pwd` | Confundir com whoami |
| `whoami` | Exibe o nome do usuário logado | `whoami` | Confundir com pwd |
| `ls -la` | Lista arquivos, inclusive ocultos, em formato detalhado | `ls -la` | Achar que -a já mostra permissões |
| `cp` | Copia arquivos ou diretórios, mantendo o original | `cp a.txt b.txt` | Achar que apaga o original |
| `mv` | Move ou renomeia arquivos, removendo o original da origem | `mv a.txt pasta/` | Trocar função com cp |
| `tar` | Agrupa vários arquivos em um único pacote | `tar -cvf pacote.tar pasta/` | Achar que já comprime sozinho |
| `gzip` | Comprime um arquivo ou pacote | `gzip pacote.tar` | Confundir com tar |
| `man` | Consulta o manual completo de um comando | `man ls` | Trocar com whatis |
| `find` | Localiza arquivos por nome, tamanho ou data | `find / -name "*.log"` | Confundir com man |
| `chmod` | Altera as permissões (leitura, escrita, execução) do arquivo | `chmod 755 script.sh` | Trocar função com chown |
| `chown` | Altera o dono (usuário) do arquivo | `chown maria arquivo.txt` | Trocar função com chmod |

## O escritório dentro do Linux: LibreOffice

Além do sistema em si, alguns materiais de prova citam programas do ambiente Linux para contextualizar o uso no dia a dia. Em distribuições como o Ubuntu, por exemplo, o usuário encontra o LibreOffice já instalado ou disponível como suíte de escritório, funcionando como alternativa gratuita ao Microsoft Office.

Em concursos, esse tema normalmente aparece mais como referência de ambiente do que como foco central da questão. Ainda assim, vale reconhecer os programas mais conhecidos da suíte:

-   Writer: editor de texto para criar documentos;
-   Calc: planilha eletrônica para cálculos e tabelas;
-   Impress: ferramenta para criar apresentações de slides;
-   Draw: programa voltado para desenhos e diagramas;
-   Base: gerenciador de banco de dados;
-   Math: editor de fórmulas matemáticas.

## Como estudar Linux para concursos

Primeiramente, você não precisa estudar Linux como se fosse virar administrador de servidores da noite para o dia. Para o concurso, o ideal é dominar os conceitos que mais aparecem: origem do sistema, kernel, distribuições, shell, comandos básicos, arquivos, compactação e permissões.

Em seguida, resolva o máximo de questões da Cebraspe que conseguir, sempre com foco em interpretação, e não em decoreba. Dessa forma, você treina o conteúdo e, ao mesmo tempo, absorve o estilo da banca, que cobra muito detalhe e perdoa pouco a distração do candidato.

## Conclusão

Portanto, as bancas cobram Linux para concursos porque o sistema reúne, em um único conteúdo, conceitos importantes de sistema operacional, administração e uso prático do terminal. Para a Cebraspe, isso é perfeito, já que permite criar itens objetivos, mas carregados de detalhe técnico.

Por fim, você, concurseiro, deve estudar esse tema com estratégia. Em vez de tentar abraçar todo o universo Linux, priorize o que realmente cai: kernel, distribuições, criador, shell, comandos básicos, permissões e, acima de tudo, a leitura cuidadosa do enunciado. Afinal, na maioria das vezes, o erro não está no conceito: está na palavra que a banca escondeu no meio da frase.

## Fontes e Referências

-   [Começando com Linux: Comandos, serviços e administração](https://www.mercadolivre.com.br/comecando-com-linux-comandos-servicos-e-administracao/up/MLBU1906384981), de Daniel Romero
-   [Questões de Concurso sobre Linux em Sistemas Operacionais para CESPE/Cebraspe](https://www.qconcursos.com/questoes-de-concursos/questoes?examining_board_ids%5B%5D=2&scholarity_ids%5B%5D=3&subject_ids%5B%5D=1097) (QConcursos)
-   Noções de Linux para Concursos (Cebraspe), Parte 1 (YouTube) — link pendente de confirmação

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

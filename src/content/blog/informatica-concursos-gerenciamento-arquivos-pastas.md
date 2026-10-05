---
title: "Organização de Arquivos, Pastas e Programas para Concursos"
description: "Organização de arquivos, pastas e programas para concursos: caminhos, copiar x mover, atalhos, Lixeira, extensões e as pegadinhas que as bancas cobram."
category: "Arquivos"
date: 2026-08-06T20:46:34-03:00
updated: 2026-09-21T19:04:37Z
readingTime: "24 min"
image: "./images/Organizacao-de-Arquivos.webp"
imageAlt: "Organização de Arquivos"
---

Você já errou uma questão sobre copiar e mover arquivos porque a banca trocou uma única palavra? Esse erro é mais comum do que parece, e a causa quase sempre é a mesma: o candidato decora atalhos, mas não entende como o sistema organiza as informações. A organização de arquivos, pastas e programas aparece em provas de todas as bancas e rende pontos fáceis para quem domina os detalhes. Ao longo deste texto, você vai ver os conceitos-base, as operações do Explorador de Arquivos, as regras de nomes, o comportamento dos atalhos e a forma correta de lidar com programas, sempre com foco no que cai na prova.

## Arquivo, pasta e caminho: os conceitos-base

Primeiramente, entenda a lógica do sistema. O Windows guarda informações em arquivos e agrupa esses arquivos em pastas. Sem essa hierarquia, o disco viraria uma gaveta bagunçada, e ninguém encontraria nada.

### O que é um arquivo

Um arquivo é um conjunto de dados gravado com um nome. O sistema identifica cada arquivo pela combinação de nome e extensão. Em `relatorio.docx`, “relatorio” é o nome e “.docx” é a extensão.

Além disso, a extensão indica o tipo de conteúdo e o programa que abre o arquivo por padrão. O arquivo também ocupa espaço em disco e carrega propriedades, como tamanho, data de criação e data de modificação. Você consulta tudo isso com o atalho Alt+Enter.

### O que é uma pasta e uma subpasta

Por outro lado, a pasta (também chamada de diretório) não guarda o conteúdo em si. Ela organiza arquivos e outras pastas. Uma pasta dentro de outra recebe o nome de subpasta.

Guarde esta ideia: a pasta agrupa e organiza, enquanto o arquivo guarda o conteúdo. Essa distinção simples resolve muitas questões conceituais.

### Caminho absoluto e caminho relativo

Em seguida, veja como o sistema localiza um arquivo. O caminho (ou _path_) descreve a sequência de pastas que leva até ele.

-   **Caminho absoluto:** começa na raiz da unidade. Exemplo: `C:\Users\Ana\Documentos\relatorio.docx`.
-   **Caminho relativo:** parte da pasta em que você está agora. Exemplo: `Documentos\relatorio.docx`.

Vale destacar a diferença entre os sistemas. O Windows separa as pastas com a barra invertida (). O Linux usa a barra normal (/) e parte da raiz, representada por uma única barra.

## Como o Windows organiza a hierarquia de pastas

Dando continuidade, observe a estrutura que o Windows monta em cada computador. Ela segue um padrão que a banca adora explorar.

Primeiramente, o sistema divide o armazenamento em unidades, identificadas por letras: `C:` costuma abrigar o Windows, `D:` pode ser um segundo disco ou uma partição, e pendrives recebem a próxima letra livre. Cada unidade tem uma pasta principal, a raiz, da qual todas as outras derivam.

Dentro da unidade `C:`, algumas pastas merecem memorização:

-   `C:\Windows`: guarda os arquivos do sistema operacional.
-   `C:\Program Files`: recebe os programas instalados. Em sistemas de 64 bits, a pasta `Program Files (x86)` guarda os programas de 32 bits.
-   `C:\Users`: reúne uma pasta para cada usuário, com Documentos, Downloads, Imagens e Área de Trabalho.

Além disso, as Bibliotecas (Documentos, Imagens, Músicas e Vídeos) reúnem, em uma única visualização, arquivos de várias pastas. Ou seja, elas não movem nada de lugar. Nas versões mais recentes do Windows, a exibição das Bibliotecas vem desativada por padrão, mas o conceito continua aparecendo em prova.

Aliás, um detalhe prático: a Área de Trabalho é uma pasta comum dentro do perfil do usuário. Portanto, tudo o que você guarda nela ocupa espaço na unidade `C:`.

## Operações no Explorador de Arquivos que caem na prova

Agora chegamos ao ponto central. O Explorador de Arquivos permite criar, renomear, copiar, mover e excluir, e a banca cobra tanto o resultado de cada ação quanto o atalho de teclado correspondente. A tabela abaixo resume tudo em um só lugar. Salve esta imagem mental antes de continuar.

📁 Operações no Explorador de Arquivos

Atalho, resultado e o detalhe que a banca explora. Deslize para o lado no celular.

| Ação | Atalho ou gesto | O que acontece | Atenção na prova |
| --- | --- | --- | --- |
| Criar pasta | Ctrl+Shift+N | Cria uma nova pasta no local atual | Ctrl+N abre nova janela, não cria pasta |
| Renomear | F2 | Permite editar o nome do item | Não altere a extensão sem necessidade |
| Copiar e colar | Ctrl+C e Ctrl+V | Duplica o item no destino | O original permanece na origem |
| Recortar e colar (mover) | Ctrl+X e Ctrl+V | Move o item para o destino | Só sai da origem depois de colar |
| Desfazer | Ctrl+Z | Desfaz a última ação realizada | Vale para copiar, mover e renomear |
| Excluir | Delete | Envia o item para a Lixeira | Dá para restaurar pela Lixeira |
| Excluir definitivamente | Shift+Delete | Apaga sem passar pela Lixeira | Não há restauração pela Lixeira |
| Propriedades | Alt+Enter | Exibe tamanho, tipo e datas do item | Não é o mesmo que renomear (F2) |
| Arrastar na mesma unidade | Botão esquerdo | Move o item | É o comportamento padrão |
| Arrastar para outra unidade | Botão esquerdo | Copia o item | Trava: "sempre move" é errado |
| Ctrl + arrastar | Ctrl | Copia, em qualquer destino | Força a cópia |
| Shift + arrastar | Shift | Move, em qualquer destino | Força a movimentação |
| Alt + arrastar | Alt (ou Ctrl+Shift) | Cria um atalho para o item | O atalho aponta para o original |
| Arrastar com botão direito | Botão direito | Abre menu ao soltar o item | Copiar, Mover ou Criar atalhos aqui |

### Criar, renomear, copiar e mover

Para começar, os atalhos básicos. Ctrl+Shift+N cria uma nova pasta. F2 renomeia o item selecionado. Ctrl+C copia, Ctrl+X recorta e Ctrl+V cola.

Aqui está um ponto que merece atenção: recortar não apaga o arquivo na hora. O item só sai do local de origem quando você cola no destino. Se você recortar e nunca colar, nada se perde.

Da mesma forma, Ctrl+Z desfaz a última ação. Além disso, o sistema não aceita dois arquivos com o mesmo nome na mesma pasta. Em pastas diferentes, os nomes podem se repetir sem problema. Quando você cola um item que já existe no destino, o Windows pergunta se deve substituir, ignorar ou manter os dois.

### Copiar ou mover ao arrastar

Esse é um detalhe que costuma confundir o candidato. Ao arrastar um arquivo com o botão esquerdo do mouse, o resultado depende do destino:

-   **Mesma unidade:** o Windows move o arquivo.
-   **Unidades diferentes:** o Windows copia o arquivo, e o original continua na origem.

Consequentemente, arrastar um arquivo do `C:` para um pendrive gera uma cópia, não uma movimentação. Você muda esse comportamento com as teclas modificadoras: Ctrl força a cópia, Shift força a movimentação, e Alt (ou Ctrl+Shift) cria um atalho.

Vale destacar também que, se você arrastar com o botão direito, o Windows abre um menu com as opções Copiar aqui, Mover aqui e Criar atalhos aqui. Na mesma unidade, mover é rápido porque o sistema apenas altera o endereço do arquivo, sem reescrever os dados.

### Lixeira e exclusão definitiva

Por fim, a exclusão. A tecla Delete envia o item para a Lixeira, e de lá você ainda pode restaurá-lo ao local original. Já o atalho Shift+Delete exclui o item de forma permanente, sem passar pela Lixeira.

Na sequência, um cuidado com a palavra “todo”. Em regra, arquivos apagados de pendrives e de unidades de rede não vão para a Lixeira. Além disso, esvaziar a Lixeira elimina os arquivos de vez. Enquanto o arquivo permanece na Lixeira, ele continua ocupando espaço no disco.

## Regras de nomes de arquivos e pastas

Em outro ponto, a banca gosta de testar as regras de nomenclatura. O Windows não aceita alguns caracteres em nomes de arquivos e pastas:

`\ / : * ? " < > |`

Memorize essa lista. Se a questão apresentar um nome com qualquer um desses símbolos, o sistema recusa a operação. Nomes como CON, PRN, AUX, NUL, COM1 a COM9 e LPT1 a LPT9 também ficam reservados. Além disso, o nome não deve terminar com ponto ou espaço.

Aqui vale uma comparação que cai bastante. O Windows não diferencia letras maiúsculas de minúsculas: `Relatorio.docx` e `relatorio.docx` são o mesmo nome para ele, embora o sistema preserve a forma como você digitou. O Linux, por outro lado, diferencia, e trata os dois como arquivos distintos.

Por fim, lembre que o caminho completo tem limite de tamanho. Tradicionalmente, o Windows trabalha com 260 caracteres no caminho, e versões recentes permitem ampliar esse limite por configuração.

## Extensões e tipos de arquivo (resumo)

Em resumo, a extensão diz ao sistema que tipo de arquivo ele tem diante de si. Veja os grupos mais cobrados:

-   **Texto e documentos:** `.txt`, `.docx`, `.pdf`
-   **Planilhas e apresentações:** `.xlsx`, `.pptx`
-   **Imagens:** `.jpg`, `.png`
-   **Áudio e vídeo:** `.mp3`, `.mp4`
-   **Compactados:** `.zip`, `.rar`
-   **Executáveis:** `.exe`

Contudo, existe uma pegadinha clássica aqui. O Windows oculta, por padrão, as extensões dos tipos de arquivo conhecidos. Além disso, renomear `foto.txt` para `foto.jpg` não converte nada: o conteúdo continua sendo texto, e o arquivo deixa de abrir corretamente. Para aprofundar o tema, leia o artigo sobre [tipos de arquivo, extensões e formatos](https://claude.ai/cowork/URL-TIPOS-DE-ARQUIVO).

## Programas e atalhos: o que muda ao instalar, executar e excluir

Chegou a hora de separar dois conceitos que muita gente mistura. Um arquivo de dados guarda informações. Um programa executa tarefas. Você abre um arquivo com um programa, e o programa roda por conta própria.

### Executáveis e instaladores

Inicialmente, os programas usam arquivos executáveis, como o `.exe`. Já os instaladores costumam vir em `.exe` ou em `.msi`, o pacote do Windows Installer. Quando você instala um programa, o sistema copia os arquivos para `Program Files`, registra informações no Registro do Windows e, em geral, cria atalhos.

### Atalho e arquivo original

Um atalho é um arquivo pequeno, de extensão `.lnk`, que aponta para outro item. O ícone dele exibe uma setinha no canto. Por isso, as consequências são diretas:

-   Se você exclui o atalho, o arquivo ou o programa original continua intacto.
-   Se você exclui o original, o atalho permanece na tela, mas deixa de funcionar.

Na prática, funciona assim: o atalho é só um endereço. Ele ocupa muito pouco espaço e não contém o conteúdo do arquivo.

### Instalar, desinstalar e atualizar

Para remover um programa da forma correta, você abre Configurações, entra em Aplicativos e escolhe Aplicativos instalados. O Painel de Controle também resolve, pelo caminho Programas e Recursos. Alguns aplicativos que já vêm no Windows não permitem desinstalação.

É aqui que aparece uma das principais pegadinhas: apagar a pasta do programa não equivale a desinstalá-lo. Sobram entradas no sistema, atalhos e arquivos de configuração. Quando um programa trava, você usa o Gerenciador de Tarefas (Ctrl+Shift+Esc) para encerrá-lo. Para conhecer o assunto em detalhes, veja o artigo sobre [gerenciamento de programas e atalhos](https://claude.ai/cowork/URL-PROGRAMAS-E-ATALHOS).

## Boas práticas na organização de arquivos, pastas e programas

Além do que a prova cobra, a organização de arquivos, pastas e programas faz diferença no seu dia a dia de estudo. Algumas práticas simples evitam perda de material e economizam tempo:

-   Dê nomes descritivos aos arquivos, como `redes-topologias-resumo.pdf`, em vez de `novo1.pdf`.
-   Separe as pastas por assunto e por período, por exemplo `Informática\Redes\2026`.
-   Evite guardar tudo na Área de Trabalho, porque ela ocupa a unidade `C:`.
-   Instale programas apenas de fontes confiáveis e mantenha-os atualizados.
-   Faça backup seguindo a [regra 3-2-1](https://claude.ai/cowork/URL-BACKUP-3-2-1): três cópias, em duas mídias diferentes, com uma delas fora do local principal.

## Pegadinhas da banca sobre arquivos, pastas e programas

Cabe destacar que a banca costuma trocar uma palavra e inverter o sentido da afirmação. Estas afirmações aparecem com frequência, e todas estão erradas:

-   “Ao arrastar um arquivo para outra unidade, o Windows sempre move o arquivo.” Errado: por padrão, ele copia.
-   “Ao excluir um atalho, o arquivo original também é excluído.” Errado: o original permanece.
-   “Ao recortar um arquivo, o Windows o apaga imediatamente.” Errado: ele só sai da origem quando você cola.
-   “O Windows diferencia maiúsculas de minúsculas nos nomes de arquivos.” Errado: ele não diferencia por padrão.
-   “Todo arquivo excluído vai para a Lixeira.” Errado: Shift+Delete e pendrives, entre outros casos, dispensam a Lixeira.
-   “Alterar a extensão de um arquivo converte o formato.” Errado: o conteúdo continua o mesmo.
-   “Excluir a pasta de um programa desinstala o programa.” Errado: o caminho correto passa por Aplicativos instalados.

Repare no padrão: palavras como “sempre”, “todo” e “somente” funcionam como alarme. Na sua prova, desconfie delas e teste cada afirmação contra a regra.

## Conclusão: seu próximo passo de estudo

Portanto, a organização de arquivos, pastas e programas se resume a poucas regras bem entendidas: o arquivo guarda o conteúdo, a pasta organiza, o caminho localiza, e o atalho apenas aponta. Some a isso as operações do Explorador, as regras de nomes e a lógica de instalação e remoção, e você cobre a maior parte das questões do tema.

Agora, resolva as questões abaixo para fixar o conteúdo. Depois, avance para os artigos sobre extensões e sobre programas e atalhos, e teste o que aprendeu no simulado da categoria Arquivos.

## Questões para fixar o conteúdo

### Questões: organização de arquivos, pastas e programas

40 questões inéditas, elaboradas no estilo das principais bancas. Clique em uma alternativa para ver o gabarito e o comentário.

Questão 1Estilo CEBRASPE

Julgue o item a seguir. Em um arquivo chamado `planilha.xlsx`, o trecho "planilha" corresponde ao nome e o trecho ".xlsx" corresponde à extensão, que indica o tipo do arquivo.

Certo Errado

Resposta correta: CERTO

O sistema identifica o arquivo pela combinação de nome e extensão. A extensão informa o tipo de conteúdo e ajuda o Windows a escolher o programa que abre o arquivo.

Questão 2Estilo FGV

Sobre a organização de arquivos e pastas no Windows, assinale a alternativa correta.

AUma subpasta é uma pasta criada dentro de outra pasta. BA pasta guarda o conteúdo dos dados, enquanto o arquivo apenas organiza outros itens. CTodo arquivo precisa estar obrigatoriamente dentro de uma subpasta. DUma pasta não pode conter outras pastas, apenas arquivos. EA extensão do arquivo define o espaço que ele ocupa em disco.

Resposta correta: A

A pasta organiza, e o arquivo guarda o conteúdo. Uma pasta pode conter arquivos e outras pastas, e a pasta dentro de outra recebe o nome de subpasta.

Questão 3Estilo CEBRASPE

Julgue o item a seguir. O caminho `C:\Users\Ana\Documentos\relatorio.docx` é um caminho absoluto, porque parte da raiz da unidade C:.

Certo Errado

Resposta correta: CERTO

O caminho absoluto começa na raiz da unidade e descreve todo o trajeto até o arquivo. O caminho relativo parte da pasta em que o usuário está no momento.

Questão 4Estilo CEBRASPE

Julgue o item a seguir. No Windows, as pastas de um caminho são separadas pela barra normal (/), enquanto no Linux o separador é a barra invertida (\\).

Certo Errado

Resposta correta: ERRADO

A questão inverte os sistemas. O Windows usa a barra invertida (\\) e o Linux usa a barra normal (/), com a raiz representada por uma única barra.

Questão 5Estilo FCC

Em um computador com Windows de 64 bits, os programas instalados pelo usuário ficam, em geral, na pasta:

A`C:\Windows` B`C:\Users` C`C:\Program Files` D`C:\Temp` E`C:\Documentos`

Resposta correta: C

`Program Files` recebe os programas instalados, e `Program Files (x86)` guarda os de 32 bits. `C:\Windows` reúne os arquivos do sistema e `C:\Users` guarda as pastas dos usuários.

Questão 6Estilo CEBRASPE

Julgue o item a seguir. As Bibliotecas do Windows movem fisicamente os arquivos de várias pastas para uma única pasta.

Certo Errado

Resposta correta: ERRADO

As Bibliotecas apenas reúnem, em uma visualização única, arquivos que continuam em seus locais originais. Elas não movem nada.

Questão 7Estilo CEBRASPE

Julgue o item a seguir. A Área de Trabalho do Windows é uma pasta do perfil do usuário e, por isso, os arquivos guardados nela ocupam espaço na unidade em que esse perfil está, normalmente a unidade C:.

Certo Errado

Resposta correta: CERTO

A Área de Trabalho é uma pasta comum dentro do perfil do usuário. Guardar muito material nela consome espaço da unidade do sistema.

Questão 8Estilo VUNESP

No Explorador de Arquivos do Windows, o atalho de teclado que cria uma nova pasta no local atual é:

ACtrl+N BCtrl+Shift+N CF2 DAlt+Enter ECtrl+Shift+Esc

Resposta correta: B

Ctrl+Shift+N cria a nova pasta. Ctrl+N abre uma nova janela do Explorador, F2 renomeia, Alt+Enter abre as Propriedades e Ctrl+Shift+Esc abre o Gerenciador de Tarefas.

Questão 9Estilo IBFC

No Explorador de Arquivos, a tecla F2 é usada para:

Aabrir as Propriedades do item selecionado. Bexcluir o item selecionado para a Lixeira. Ccriar uma nova pasta no local atual. Drenomear o item selecionado. Ecriar um atalho para o item selecionado.

Resposta correta: D

F2 renomeia o item selecionado. As Propriedades abrem com Alt+Enter, a exclusão usa Delete e a nova pasta usa Ctrl+Shift+N.

Questão 10Estilo CEBRASPE

Julgue o item a seguir. Ao pressionar Ctrl+X sobre um arquivo, o Windows o apaga imediatamente da pasta de origem, mesmo que o usuário ainda não tenha colado o item em outro local.

Certo Errado

Resposta correta: ERRADO

O item só sai da origem quando o usuário cola no destino. Se ele recortar e nunca colar, o arquivo continua no lugar original.

Questão 11Estilo CEBRASPE

Julgue o item a seguir. Ao copiar um arquivo e colá-lo na mesma pasta, o Windows mantém dois arquivos com exatamente o mesmo nome dentro dessa pasta.

Certo Errado

Resposta correta: ERRADO

Uma pasta não aceita dois arquivos com o mesmo nome. Ao colar na mesma pasta, o Windows cria a cópia com um nome diferente, como "relatorio – Copiar.docx".

Questão 12Estilo CESGRANRIO

Um usuário arrasta um arquivo da unidade C: para a unidade D:, com o botão esquerdo do mouse e sem pressionar nenhuma tecla. Nesse caso, o arquivo:

Aé movido para D:, e o original é apagado de C:. Bé enviado para a Lixeira. Cvira um atalho em D:. Dé compactado automaticamente em D:. Eé copiado para D:, e o original permanece em C:.

Resposta correta: E

Entre unidades diferentes, o padrão do Windows é copiar. Na mesma unidade, o padrão é mover. A banca costuma trocar esse comportamento.

Questão 13Estilo CEBRASPE

Julgue o item a seguir. Ao arrastar um arquivo entre duas pastas de uma mesma unidade, mantendo a tecla Ctrl pressionada, o Windows copia o arquivo em vez de movê-lo.

Certo Errado

Resposta correta: CERTO

Na mesma unidade o padrão é mover, mas a tecla Ctrl força a cópia em qualquer destino. Já a tecla Shift força a movimentação.

Questão 14Estilo FGV

Um usuário quer mover, e não copiar, um arquivo da unidade C: para um pendrive, arrastando com o mouse. Para forçar a movimentação, ele deve manter pressionada a tecla:

ACtrl BAlt CShift DTab EEsc

Resposta correta: C

Shift força a movimentação, mesmo entre unidades diferentes. Ctrl força a cópia e Alt cria um atalho.

Questão 15Estilo CEBRASPE

Julgue o item a seguir. Ao arrastar um arquivo com a tecla Alt pressionada, o Windows cria um atalho para esse arquivo no local de destino.

Certo Errado

Resposta correta: CERTO

Alt (ou Ctrl+Shift) durante o arrasto cria um atalho. Ctrl copia e Shift move.

Questão 16Estilo FCC

Um usuário seleciona um arquivo no disco local do computador, pressiona Shift+Delete e confirma a exclusão. Nesse caso, o arquivo:

Avai para a Lixeira e pode ser restaurado. Bé excluído permanentemente, sem passar pela Lixeira. Cé movido para a pasta Downloads. Dé compactado e fica oculto. Efica oculto, mas continua disponível para uso.

Resposta correta: B

Shift+Delete apaga o item sem enviá-lo à Lixeira. A tecla Delete sozinha envia o item para a Lixeira.

Questão 17Estilo CEBRASPE

Julgue o item a seguir. Em regra, arquivos apagados de um pendrive são enviados à Lixeira do computador e podem ser restaurados por ela.

Certo Errado

Resposta correta: ERRADO

Arquivos apagados de mídias removíveis, como pendrives, e de unidades de rede em regra não passam pela Lixeira. Cuidado com a palavra "todo" e com afirmações absolutas.

Questão 18Estilo CEBRASPE

Julgue o item a seguir. Enquanto permanece na Lixeira, um arquivo continua ocupando espaço em disco.

Certo Errado

Resposta correta: CERTO

O espaço só volta a ficar livre quando o usuário esvazia a Lixeira ou exclui o item de forma definitiva.

Questão 19Estilo IBFC

Assinale a alternativa que apresenta um nome de arquivo aceito pelo Windows.

A`relatorio:final.docx` B`provas?2026.pdf` C`notas*.txt` D`resumo_redes.docx` E`aula<01>.pptx`

Resposta correta: D

O Windows não aceita os caracteres \\ / : \* ? " < > | em nomes de arquivos e pastas. O sublinhado é permitido.

Questão 20Estilo CEBRASPE

Julgue o item a seguir. No Windows, os arquivos `Prova.docx` e `prova.docx` podem coexistir na mesma pasta, porque o sistema diferencia letras maiúsculas de minúsculas por padrão.

Certo Errado

Resposta correta: ERRADO

Por padrão, o Windows não diferencia maiúsculas de minúsculas em nomes de arquivos. Os dois nomes são o mesmo nome para ele.

Questão 21Estilo CEBRASPE

Julgue o item a seguir. O Linux diferencia letras maiúsculas de minúsculas em nomes de arquivos, de modo que `Aula.txt` e `aula.txt` podem existir na mesma pasta.

Certo Errado

Resposta correta: CERTO

O Linux trata os dois nomes como arquivos distintos. Essa é uma das comparações mais cobradas entre os dois sistemas.

Questão 22Estilo IADES

Sobre nomes de arquivos no Windows, é correto afirmar que:

Adois arquivos com o mesmo nome e a mesma extensão podem existir, desde que estejam em pastas diferentes. Bdois arquivos com o mesmo nome e a mesma extensão podem coexistir na mesma pasta. Co nome do arquivo pode conter o caractere barra (/). Do nome do arquivo pode conter o asterisco (\*). Eo nome do arquivo não pode conter espaços.

Resposta correta: A

O nome precisa ser único dentro da mesma pasta, mas pode se repetir em pastas diferentes. A barra e o asterisco são caracteres proibidos, e o espaço é permitido.

Questão 23Estilo CEBRASPE

Julgue o item a seguir. Nomes como CON, PRN e AUX são reservados pelo Windows e não podem ser usados como nomes de arquivos.

Certo Errado

Resposta correta: CERTO

O Windows reserva CON, PRN, AUX, NUL, COM1 a COM9 e LPT1 a LPT9, inclusive quando acompanhados de extensão.

Questão 24Estilo CEBRASPE

Julgue o item a seguir. Renomear um arquivo de `foto.txt` para `foto.jpg` converte automaticamente o conteúdo de texto em uma imagem JPEG.

Certo Errado

Resposta correta: ERRADO

Mudar a extensão altera apenas o nome. O conteúdo continua sendo texto, e o arquivo deixa de abrir corretamente como imagem.

Questão 25Estilo VUNESP

As extensões `.docx`, `.xlsx` e `.pptx` correspondem, respectivamente, a arquivos de:

Aplanilha, texto e apresentação. Btexto, planilha e apresentação. Capresentação, texto e planilha. Dtexto, apresentação e planilha. Eimagem, planilha e texto.

Resposta correta: B

`.docx` é documento de texto (Word), `.xlsx` é planilha (Excel) e `.pptx` é apresentação (PowerPoint).

Questão 26Estilo AOCP

Assinale a alternativa que associa corretamente a extensão ao tipo de arquivo.

A`.mp3` e imagem. B`.png` e áudio. C`.pdf` e planilha. D`.exe` e texto. E`.jpg` e imagem.

Resposta correta: E

`.jpg` é imagem, `.mp3` é áudio, `.pdf` é documento e `.exe` é executável.

Questão 27Estilo CEBRASPE

Julgue o item a seguir. Por padrão, o Explorador de Arquivos do Windows oculta as extensões dos tipos de arquivo conhecidos.

Certo Errado

Resposta correta: CERTO

Por isso o usuário pode ver apenas "relatorio" em vez de "relatorio.docx". A opção para exibir as extensões fica na guia Exibir do Explorador.

Questão 28Estilo CEBRASPE

Julgue o item a seguir. Um atalho é um arquivo pequeno que aponta para outro item; ao excluir o atalho, o arquivo original também é excluído.

Certo Errado

Resposta correta: ERRADO

O atalho é apenas um endereço. Excluí-lo não afeta o arquivo ou o programa original.

Questão 29Estilo CEBRASPE

Julgue o item a seguir. Quando o usuário exclui o arquivo original para o qual um atalho aponta, o atalho continua existindo, mas deixa de funcionar.

Certo Errado

Resposta correta: CERTO

O atalho permanece, porém aponta para um local que não existe mais e, por isso, não abre o item.

Questão 30Estilo FCC

Os arquivos de atalho do Windows, identificados por uma setinha no ícone, usam a extensão:

A`.lnk` B`.exe` C`.msi` D`.bat` E`.sys`

Resposta correta: A

`.lnk` identifica o atalho. `.exe` é executável e `.msi` é pacote de instalação.

Questão 31Estilo FGV

Para desinstalar corretamente um programa no Windows 11, o usuário deve:

Aexcluir a pasta do programa em Program Files. Bexcluir apenas o atalho da Área de Trabalho. Cacessar Configurações, Aplicativos e Aplicativos instalados, e escolher a opção de desinstalar. Dmover o executável para a Lixeira e esvaziá-la. Erenomear a extensão do executável para `.old`.

Resposta correta: C

Apagar a pasta ou o atalho não desinstala o programa e deixa entradas e arquivos de configuração para trás. O Painel de Controle, em Programas e Recursos, também permite a remoção.

Questão 32Estilo CEBRASPE

Julgue o item a seguir. Excluir o atalho de um programa da Área de Trabalho equivale a desinstalar esse programa.

Certo Errado

Resposta correta: ERRADO

O programa continua instalado e funcionando. Para removê-lo, o usuário precisa desinstalá-lo em Aplicativos instalados.

Questão 33Estilo CESGRANRIO

No Windows, os arquivos com extensão `.msi` são normalmente usados como:

Aatalhos para programas. Bimagens compactadas. Cplanilhas do Excel. Dpacotes de instalação do Windows Installer. Earquivos de áudio.

Resposta correta: D

O `.msi` é o pacote do Windows Installer, usado para instalar programas. O atalho usa `.lnk`.

Questão 34Estilo VUNESP

O atalho de teclado Ctrl+Shift+Esc, no Windows, abre o:

AExplorador de Arquivos. BPainel de Controle. Cmenu Propriedades do item selecionado. DLixeira. EGerenciador de Tarefas.

Resposta correta: E

O Gerenciador de Tarefas permite encerrar programas que travaram. O Explorador de Arquivos abre com Windows+E.

Questão 35Estilo CEBRASPE

Julgue o item a seguir. No Windows, alguns aplicativos que já vêm instalados com o sistema não podem ser desinstalados.

Certo Errado

Resposta correta: CERTO

A própria Microsoft informa que alguns aplicativos e programas são parte do Windows e não permitem desinstalação.

Questão 36Estilo IADES

De acordo com a regra de backup 3-2-1, o usuário deve manter:

Aduas cópias dos dados, em três mídias diferentes, todas no mesmo local. Btrês cópias dos dados, em dois tipos de mídia diferentes, com uma cópia fora do local principal. Ctrês cópias dos dados, todas na mesma mídia e no mesmo local. Duma cópia dos dados, em duas mídias, mantida em três locais. Eduas cópias dos dados, em uma única mídia, com uma delas na nuvem.

Resposta correta: B

Três cópias, duas mídias diferentes e uma cópia fora do local principal (por exemplo, na nuvem).

Questão 37Estilo CEBRASPE

Julgue o item a seguir. Mover um arquivo dentro da mesma unidade tende a ser mais rápido do que copiá-lo, porque o sistema altera apenas o endereço do arquivo, sem reescrever os dados.

Certo Errado

Resposta correta: CERTO

Na mesma unidade, o sistema só atualiza a localização registrada. Entre unidades, ele precisa gravar os dados no destino.

Questão 38Estilo CEBRASPE

Julgue o item a seguir. A pasta `C:\Users` guarda os arquivos do sistema operacional, enquanto a pasta `C:\Windows` reúne os arquivos pessoais de cada usuário.

Certo Errado

Resposta correta: ERRADO

A questão troca as funções. `C:\Windows` guarda o sistema operacional, e `C:\Users` reúne uma pasta para cada usuário.

Questão 39Estilo IBFC

Ao arrastar um arquivo com o botão direito do mouse e soltá-lo em outra pasta, o Windows exibe um menu com as opções:

ACopiar aqui, Excluir aqui e Renomear aqui. BCompactar aqui, Mover aqui e Ocultar aqui. CCopiar aqui, Mover aqui e Criar atalhos aqui. DAbrir aqui, Copiar aqui e Instalar aqui. ERecortar aqui, Excluir aqui e Restaurar aqui.

Resposta correta: C

O arrasto com o botão direito deixa o usuário escolher entre copiar, mover ou criar atalhos.

Questão 40Estilo AOCP

No Explorador de Arquivos, o atalho Alt+Enter exibe:

Aas Propriedades do item selecionado. Ba Lixeira. Co menu Iniciar. Duma nova janela do Explorador de Arquivos. Eo Gerenciador de Tarefas.

Resposta correta: A

Alt+Enter mostra as Propriedades, com informações como tamanho, tipo e datas do item.

## Fontes e referências

-   Microsoft Learn. [Naming Files, Paths, and Namespaces](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file).
-   Microsoft Support. [Keyboard shortcuts in Windows](https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec).
-   Microsoft Support. [Uninstall or remove apps and programs in Windows](https://support.microsoft.com/en-us/windows/uninstall-or-remove-apps-and-programs-in-windows-4b55f974-2cc6-2d2b-d092-5905080eaf98).
-   Microsoft Support. [File Explorer in Windows](https://support.microsoft.com/en-us/windows/file-explorer-in-windows-ef370130-1cca-9dc5-e0df-2f7416fe1cb1).
-   Dell Technologies. [Move and copy files using drag-and-drop in Microsoft Windows](https://www.dell.com/support/kbdoc/en-us/000147309/move-and-copy-files-using-drag-and-drop-in-microsoft-windows).

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

---
title: "Compactação de Arquivos: ZIP, RAR e 7z para Concursos"
description: "Compactação de arquivos para concursos: ZIP, RAR, 7z e GZ/TAR, compressão com e sem perda, senha em ZIP e as pegadinhas mais comuns das bancas."
category: "Arquivos"
date: 2026-10-24T08:05:00-03:00
readingTime: "9 min"
image: "./images/compactacao-de-arquivos-zip-rar-7z-concursos.webp"
imageAlt: "Pasta de documentos sendo compactada em um arquivo ZIP na tela de um notebook, com pendrive e HD externo ao lado sobre a mesa"
tags: ["Compactação de Arquivos", "ZIP", "RAR", "7z", "GZ", "TAR", "Arquivos e Pastas", "Noções de Informática"]
related:
  - tipos-de-arquivo
  - sistemas-de-arquivos
  - informatica-concursos-gerenciamento-arquivos-pastas
  - simulado-arquivos
---

Você compacta uma pasta, coloca uma senha no ZIP e manda por e-mail. O arquivo ficou menor, ficou protegido, ou as duas coisas? Essa mistura entre **compactar** e **criptografar** é uma das confusões mais exploradas em questões de Arquivos, e a resposta curta é que uma coisa não implica a outra. Compactar reduz o tamanho e reúne arquivos; proteger com senha é outro recurso, que alguns programas oferecem junto.

Este artigo aprofunda o que o texto sobre [tipos de arquivo e extensões](/tipos-de-arquivo/) só resume. Você vai ver como a compactação funciona, a diferença entre ZIP, RAR, 7z e GZ/TAR, o que muda no Windows e no Linux, por que alguns arquivos quase não diminuem e quais afirmações costumam aparecer erradas nos itens de certo e errado. No fim, há 12 questões autorais comentadas. Elas seguem o estilo de cada banca, mas não são questões reais de provas anteriores.

## O que é compactar um arquivo

Compactar (ou comprimir) é gravar a mesma informação ocupando menos espaço. O princípio é eliminar redundância: um texto repete caracteres e palavras, e o algoritmo troca essas repetições por representações menores. A própria Microsoft descreve a compressão assim, como a redução do tamanho do arquivo pela eliminação de dados redundantes.

Na prática, a palavra "compactar" mistura duas ideias que a banca separa:

-   **Compressão:** reduz o espaço ocupado pelos dados;
-   **Empacotamento (arquivamento):** reúne vários arquivos e pastas em um único arquivo, o pacote.

O ZIP faz as duas coisas ao mesmo tempo. Já o `tar`, do Linux, só empacota, e a compressão fica por conta de outro programa, como você verá adiante. Guarde essa diferença, porque ela rende itens inteiros.

### Compressão sem perda e com perda

Esse é o par de conceitos mais cobrado. Na compressão **sem perda**, nenhum dado é descartado: ao descompactar, você recupera o arquivo idêntico ao original. ZIP, RAR, 7z e GZ trabalham assim, e o mesmo vale para o PNG nas imagens. Na compressão **com perda**, parte da informação é descartada de forma permanente para reduzir ainda mais o tamanho, e o arquivo original não volta igual. É o caso do JPG nas imagens e do MP3 no áudio.

Por isso, a pegadinha clássica troca os papéis: atribui perda de dados ao ZIP ou promete reconstrução perfeita a um JPG. Quando o enunciado fala em "recuperar exatamente o conteúdo original", pense em compressão sem perda.

## ZIP, RAR, 7z e GZ/TAR: comparação dos formatos

A tabela resume o que cada formato tem de característico. Deslize para o lado no celular.

| Formato | Extensão | O que lembrar |
| --- | --- | --- |
| ZIP | `.zip` | O mais difundido. O Windows cria e abre ZIP direto, sem programa extra. Comprime e empacota. |
| RAR | `.rar` | Formato do WinRAR. Aceita dividir o arquivo em volumes e usar senha. O 7-Zip apenas extrai RAR. |
| 7z | `.7z` | Formato do 7-Zip, gratuito e de código aberto. Costuma alcançar taxa de compressão alta e aceita criptografia AES-256. |
| GZ | `.gz` | Padrão no Linux. O `gzip` comprime um arquivo por vez e troca o original pelo `.gz`. |
| TAR | `.tar` | Só empacota vários arquivos em um. Não comprime por si só. |
| TAR.GZ | `.tar.gz` ou `.tgz` | Pacote criado pelo `tar` e comprimido pelo `gzip`. Combina as duas etapas. |

Repare que "formato de arquivo compactado" e "programa que compacta" são coisas diferentes. WinRAR e 7-Zip são programas; `.rar` e `.7z` são formatos. A banca gosta de perguntar o nome de um quando descreve o outro.

## Compactar no Windows

No Windows, o caminho clássico é clicar com o botão direito no arquivo ou na pasta e escolher a opção de pasta compactada (zipada). Segundo o [suporte da Microsoft](https://support.microsoft.com/pt-br/windows/compactar-e-descompactar-arquivos-8d28fa72-f2f9-712f-67df-f80cf89fd4e5), o arquivo ZIP é criado no mesmo local do original e pode ser renomeado. Para usar o conteúdo, você abre a pasta compactada e arrasta os itens para outro local, ou escolhe **Extrair tudo** para extrair o conteúdo completo.

Dois detalhes importam para a prova:

-   o resultado da compactação é um **novo arquivo**, e os originais continuam onde estavam;
-   um arquivo compactado precisa ser **extraído** (descompactado) para voltar a ser usado normalmente, e a extração com compressão sem perda devolve o conteúdo idêntico.

A mesma página informa que o Windows 11, a partir da versão 24H2, passou a oferecer suporte aos formatos ZIP, RAR, 7z e TAR. Mesmo assim, o ZIP segue como o formato que o menu do Windows cria diretamente, e programas como 7-Zip e WinRAR ampliam as opções.

### Compactar a unidade no NTFS não é o mesmo que criar um ZIP

Existe ainda a compactação do próprio sistema de arquivos. O NTFS aceita compressão de arquivos e pastas de forma **transparente**: os programas abrem o arquivo como se ele não estivesse compactado, sem precisar extrair nada. Já o ZIP é um arquivo separado, que você precisa extrair. O artigo sobre [sistemas de arquivos](/sistemas-de-arquivos/) lista a compactação entre os recursos do NTFS, e o FAT32 não os possui. Se a questão fala em unidade ou pasta compactada pelo NTFS, não é o ZIP que ela descreve.

## Compactar não é criptografar

Aqui está o ponto central da prova. Compactar altera a forma de gravar os dados para ocupar menos espaço; criptografar embaralha o conteúdo para que só quem tem a chave o leia. Um ZIP comum, sem senha, pode ser aberto por qualquer pessoa que o receba, e a compactação não esconde nada.

Para proteger o conteúdo, é preciso um programa que ofereça senha. O [7-Zip](https://www.7-zip.org/) informa que oferece criptografia AES-256 nos formatos 7z e ZIP, e o WinRAR também usa AES de 256 bits. Já a Microsoft informa que o Windows 11 24H2 não oferece suporte a operações em arquivos compactados criptografados e sugere ferramentas como 7-Zip ou WinRAR nesse caso.

Duas ressalvas completam o quadro. Primeira: a proteção por senha pertence ao programa e ao método escolhidos, não ao conceito de compactação, e o manual do `zip` no Linux chama a criptografia padrão do ZIP de relativamente fraca, indicando métodos mais fortes quando o sigilo importa. Segunda: se você compacta um arquivo que já está criptografado no Windows, a Microsoft avisa que ele será descriptografado na extração, o que pode expor a informação.

## Por que alguns arquivos quase não diminuem

Um compactador só consegue reduzir o que tem redundância. Textos puros (`.txt`), planilhas simples e imagens `.bmp` compactam muito. Arquivos que já passaram por compressão praticamente não encolhem:

-   imagens `.jpg` e `.png`;
-   áudio `.mp3` e vídeo `.mp4`;
-   documentos `.docx`, `.xlsx` e `.pptx`, que o Office já grava usando a tecnologia ZIP;
-   arquivos `.zip`, `.rar` e `.7z` compactados de novo.

A Microsoft observa que uma pasta de imagens JPEG fica com tamanho muito parecido depois de zipada, e a documentação do Office explica que os formatos Open XML usam compressão ZIP ao salvar. Em prova, a conclusão é que compactar nem sempre reduz o tamanho de forma significativa, e que compactar duas vezes não gera ganho proporcional. Para o bloco geral de extensões, volte ao artigo sobre [tipos de arquivo](/tipos-de-arquivo/).

## Compactar no Linux: tar, gzip, zip e unzip

No Linux, os comandos aparecem com frequência nas listas de Arquivos e de Sistemas. O [manual do GNU tar](https://man7.org/linux/man-pages/man1/tar.1.html) descreve o `tar` como a ferramenta que guarda vários arquivos em um só e oferece opções como `-c` (criar), `-x` (extrair), `-t` (listar), `-v` (exibir o que é processado) e `-f` (indicar o arquivo). A compressão entra por filtros externos: `-z` passa o pacote pelo `gzip`, `-j` pelo `bzip2` e `-J` pelo `xz`.

| Comando | O que faz |
| --- | --- |
| `tar -cvf pacote.tar pasta/` | Cria um pacote `.tar`, **sem comprimir** |
| `tar -czvf pacote.tar.gz pasta/` | Cria o pacote e o comprime com gzip |
| `tar -xvf pacote.tar` | Extrai o conteúdo do pacote |
| `gzip arquivo.txt` | Comprime e gera `arquivo.txt.gz` no lugar do original |
| `gunzip arquivo.txt.gz` | Descomprime o arquivo `.gz` |
| `zip -r pacote.zip pasta/` | Cria um ZIP incluindo as subpastas |
| `unzip pacote.zip` | Extrai um arquivo ZIP |

O `gzip`, segundo a documentação, usa codificação Lempel-Ziv e, sempre que possível, substitui cada arquivo por uma versão com extensão `.gz`. Por isso as duas pegadinhas típicas são "o `tar` comprime sozinho" (errado, ele empacota) e "o `gzip` gera um único pacote com vários arquivos" (errado, ele comprime arquivo por arquivo; para juntá-los antes, usa-se o `tar`). O artigo de [Linux para concursos](/linux-para-concursos/) traz esses comandos ao lado de `chmod`, `chown` e `find`.

## Volumes divididos, backup e envio por e-mail

Há três usos práticos que a banca costuma encaixar em enunciados.

**Volumes divididos.** Programas como o WinRAR permitem dividir um arquivo compactado em partes menores, os volumes, para caber em mídias pequenas ou em limites de envio. O ZIP também aceita arquivos divididos, e o manual do `zip` cita nomes como `.z01`, `.z02` e, por último, `.zip`. Para extrair, você precisa de **todos** os volumes, juntos e completos; ter só o primeiro não basta.

**Envio por e-mail.** Compactar vários arquivos em um só anexo facilita o envio e pode reduzir o tamanho, mas o limite do provedor continua valendo, e arquivos já comprimidos, como fotos em JPG, pouco ajudam. Lembre também que um ZIP pode conter qualquer coisa, inclusive executáveis, então abrir anexo compactado de origem desconhecida segue sendo risco.

**Backup.** Compactar uma pasta e deixar o arquivo no mesmo HD não é backup: se o disco falhar, o original e o ZIP somem juntos. A compactação ajuda a economizar espaço na cópia, mas a proteção vem de seguir a [regra 3-2-1](/regra-3-2-1/) e dos tipos de cópia vistos em [backup em segurança da informação](/backup-seguranca-da-informacao/).

## Pegadinhas da banca sobre compactação

Cabe destacar que a banca costuma trocar uma palavra para inverter o sentido. Estas afirmações aparecem com frequência em itens desse assunto, e todas estão erradas:

-   “Compactar um arquivo o protege contra acesso não autorizado.” Errado: compactar não é criptografar.
-   “A compactação em ZIP descarta parte dos dados para reduzir o tamanho.” Errado: o ZIP usa compressão sem perda.
-   “Todo arquivo fica bem menor ao ser compactado.” Errado: JPG, MP3, MP4 e documentos do Office quase não encolhem.
-   “O `tar` comprime os arquivos por padrão.” Errado: ele apenas empacota.
-   “Só é possível criar um arquivo ZIP com programas de terceiros.” Errado: o Windows cria ZIP pelo menu de contexto.
-   “Para extrair um arquivo dividido em volumes, basta o primeiro volume.” Errado: todos são necessários.
-   “Compactar uma pasta e mantê-la no mesmo disco equivale a fazer backup.” Errado: falta cópia em outro local.
-   “A compressão do NTFS e o arquivo ZIP são o mesmo recurso.” Errado: a primeira é transparente e do sistema de arquivos; o segundo é um arquivo à parte.

Repare no padrão: palavras como “todo”, “só” e “por padrão” funcionam como alarme.

## Perguntas frequentes

### ZIP e RAR são a mesma coisa?

Não. Ambos reúnem e comprimem arquivos sem perda, mas são formatos diferentes. O ZIP é aberto e nativo no Windows; o RAR é o formato do WinRAR, e o 7-Zip consegue apenas extrá-lo.

### Todo arquivo compactado tem senha?

Não. A senha é um recurso opcional que depende do programa e do formato. Um ZIP criado pelo menu do Windows, por exemplo, pode ser aberto por qualquer pessoa.

### Qual formato compacta mais?

Depende do conteúdo, mas o 7z costuma alcançar taxas de compressão altas, e é isso que o site do 7-Zip destaca. Em prova, o que importa é saber que o ganho varia conforme o tipo de arquivo.

### Compactar e descompactar estraga o arquivo?

Nos formatos sem perda, como ZIP, RAR, 7z e GZ, não. O conteúdo volta idêntico. A degradação existe em formatos com perda, como JPG e MP3.

## Conclusão: seu próximo passo de estudo

Portanto, a compactação cabe em poucas ideias: compactar reduz e reúne, mas não protege; ZIP, RAR, 7z e GZ comprimem sem perda; `tar` empacota e `gzip` comprime; arquivos já comprimidos quase não encolhem; e o arquivo compactado precisa ser extraído para uso normal. Agora, resolva as questões abaixo e confira cada comentário. Depois, revise a base no artigo sobre [organização de arquivos, pastas e programas](/informatica-concursos-gerenciamento-arquivos-pastas/) e teste-se no [simulado de Arquivos](/simulado-arquivos/).

## Fontes e referências

-   Microsoft Support. [Zip and unzip files](https://support.microsoft.com/en-us/windows/zip-and-unzip-files-8d28fa72-f2f9-712f-67df-f80cf89fd4e5).
-   Microsoft Support. [Open XML Formats and file name extensions](https://support.microsoft.com/en-us/office/open-xml-formats-and-file-name-extensions-5200d93c-3449-4380-8e11-31ef14555b18).
-   Microsoft Learn. [File Compression and Decompression](https://learn.microsoft.com/en-us/windows/win32/fileio/file-compression-and-decompression).
-   7-Zip. [Página oficial](https://www.7-zip.org/) e [formato 7z](https://www.7-zip.org/7z.html).
-   WinRAR. [Recursos do WinRAR](https://www.win-rar.com/features.html).
-   PKWARE. [ZIP File Format Specification (APPNOTE)](https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT).
-   Manuais Linux. [tar(1)](https://man7.org/linux/man-pages/man1/tar.1.html) (man7.org); [gzip(1)](https://linux.die.net/man/1/gzip) e [zip(1)](https://linux.die.net/man/1/zip) (linux.die.net).

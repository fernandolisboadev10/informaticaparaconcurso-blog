---
title: "Tipos de Arquivo e Extensões: o que Cai em Concursos"
description: "Organização e gerenciamento de arquivos e pastas para concursos: hierarquia, caminhos e pegadinhas de banca explicadas na prática."
category: "Arquivos"
date: 2026-08-29T13:23:18-03:00
updated: 2026-09-21T19:27:56Z
readingTime: "8 min"
image: "./images/tipos-de-arquivos.webp"
imageAlt: "tipos de arquivos"
---

Você já viu uma questão perguntar qual programa abre um arquivo `.ods`, ou se uma imagem `.jpg` mantém a qualidade depois de salva várias vezes? A banca adora esse tipo de detalhe, porque ele separa quem decorou uma lista de quem entendeu a lógica. Ao longo do texto, você vai entender como o Windows identifica cada arquivo, quais tipos de arquivo e extensões aparecem em prova e onde ficam as pegadinhas. Para rever o contexto geral, consulte o artigo sobre [organização de arquivos, pastas e programas](https://claude.ai/cowork/URL-PILAR-ORGANIZACAO).

## O que é um arquivo e como o Windows o identifica

Primeiramente, fixe a ideia central. Um arquivo é um conjunto de dados gravado com um nome, e o Windows o identifica pela combinação de nome e extensão. Em `aula.docx`, a extensão `.docx` informa ao sistema o tipo de conteúdo que o arquivo guarda.

Além disso, a extensão define a associação de arquivo, ou seja, o programa que abre o arquivo por padrão. Você troca esse programa na opção Abrir com, mas isso não altera o arquivo, apenas a forma de abri-lo.

Vale destacar um detalhe: o Explorador oculta, por padrão, as extensões dos tipos conhecidos. Para exibi-las, você usa a guia Exibir e marca a opção de extensões de nomes de arquivos.

## Principais tipos de arquivo e extensões

Em seguida, veja os grupos que mais aparecem nas provas:

-   **Texto e documentos:** `.txt` (texto sem formatação), `.docx` (Word) e `.pdf`.
-   **Planilhas:** `.xlsx` e `.csv` (valores separados por delimitador).
-   **Apresentações:** `.pptx`.
-   **Imagens:** `.jpg`, `.png`, `.gif` e `.bmp`.
-   **Áudio e vídeo:** `.mp3`, `.wav` e `.mp4`.
-   **Compactados:** `.zip`, `.rar` e `.7z`.
-   **Executáveis e instaladores:** `.exe` e `.msi`.

Guarde esta ideia: o “x” final em `.docx`, `.xlsx` e `.pptx` indica um arquivo XML sem macros. Por outro lado, as versões terminadas em “m”, como `.docm`, podem conter macros. Já `.doc`, `.xls` e `.ppt` pertencem ao formato anterior a 2007.

## Formatos do Office e formatos abertos

O Office grava, por padrão, nos formatos `.docx`, `.xlsx` e `.pptx`. O LibreOffice, no entanto, usa o OpenDocument (ODF): `.odt` para texto, `.ods` para planilhas e `.odp` para apresentações.

Aqui está um ponto que merece atenção: o ODF é um padrão aberto, que a OASIS mantém e a ISO/IEC publicou como a norma 26300. Na prática, os dois pacotes de escritório abrem os formatos um do outro, embora a formatação possa mudar um pouco.

Da mesma forma, o `.pdf` preserva a aparência do documento em qualquer computador, e o `.txt` guarda apenas caracteres, sem negrito, fontes ou imagens.

## Imagens e compactação: com perda e sem perda

Antes de tudo, compare os formatos de imagem. O `.jpg` usa compressão com perda: reduz o tamanho descartando parte da informação visual, e cada novo salvamento pode degradar a imagem. O `.png`, por sua vez, comprime sem perda e aceita transparência. O `.gif` limita-se a 256 cores e permite animações simples, e o `.bmp` costuma guardar a imagem sem compressão, o que gera arquivos grandes.

Consequentemente, a compactação funciona de outro modo. Formatos como `.zip` reúnem vários arquivos em um só e reduzem o tamanho sem perder dados, então você recupera os arquivos idênticos ao descompactar. O Windows cria arquivos ZIP direto pelo menu de contexto. Contudo, arquivos que já vêm comprimidos, como o `.jpg`, quase não diminuem ao entrar em um ZIP.

## Tamanho e propriedades do arquivo

Dando continuidade, observe como o sistema mede o tamanho. O bit é a menor unidade, e 8 bits formam 1 byte. Na base binária que o Windows adota, 1 KB equivale a 1.024 bytes, 1 MB a 1.024 KB e 1 GB a 1.024 MB.

Além disso, as Propriedades (Alt+Enter) mostram tipo, local, tamanho e as datas de criação, modificação e último acesso. Também exibem atributos como Somente leitura e Oculto. O primeiro protege o arquivo contra alterações acidentais, e o segundo o esconde da visualização normal, mas não o exclui do disco.

## Pegadinhas da banca sobre arquivos

Cabe destacar que a banca costuma trocar uma palavra para inverter o sentido. Estas afirmações aparecem com frequência, e todas estão erradas:

-   “O `.txt` guarda texto com negrito e fontes diferentes.” Errado: ele guarda texto puro.
-   “Trocar a extensão de `.txt` para `.jpg` converte o arquivo em imagem.” Errado: o conteúdo continua o mesmo.
-   “O `.jpg` mantém a qualidade original após vários salvamentos.” Errado: a compressão com perda degrada a imagem.
-   “Todo arquivo fica menor quando você o compacta.” Errado: formatos já comprimidos quase não mudam.
-   “Um arquivo oculto foi excluído do computador.” Errado: ele continua no disco.

Repare no padrão: palavras como “todo”, “sempre” e “somente” funcionam como alarme.

## Conclusão: seu próximo passo de estudo

Portanto, dominar os tipos de arquivo e extensões exige entender a lógica por trás da lista: a extensão indica o tipo, o formato define como os dados ficam gravados, e a compressão altera o tamanho. Agora, resolva as questões abaixo para fixar o conteúdo. Depois, volte ao artigo sobre [organização de arquivos, pastas e programas](https://claude.ai/cowork/URL-PILAR-ORGANIZACAO) e avance para o texto sobre [programas e atalhos](https://claude.ai/cowork/URL-PROGRAMAS-E-ATALHOS).

## Questões para fixar o conteúdo

### Questões: tipos de arquivo, extensões e formatos

10 questões inéditas, elaboradas no estilo das principais bancas. Clique em uma alternativa para ver o gabarito e o comentário.

Questão 1Estilo CEBRASPE

Julgue o item a seguir. Ao escolher outro programa na opção Abrir com, o Windows altera o conteúdo do arquivo para o formato desse programa.

CertoErrado

Resposta correta: ERRADO

A opção Abrir com muda apenas o programa usado para abrir o arquivo (a associação de arquivo). O conteúdo e a extensão permanecem os mesmos.

Questão 2Estilo FGV

Os arquivos com extensões `.odt`, `.ods` e `.odp`, do formato OpenDocument, correspondem, respectivamente, a documentos de:

Aplanilha, texto e apresentação.Bapresentação, texto e planilha.Ctexto, apresentação e planilha.Dtexto, planilha e apresentação.Eimagem, planilha e texto.

Resposta correta: D

No OpenDocument, `.odt` é texto, `.ods` é planilha e `.odp` é apresentação. O ODF é um padrão aberto, usado pelo LibreOffice.

Questão 3Estilo CEBRASPE

Julgue o item a seguir. Arquivos com extensão `.docx` não contêm macros, enquanto arquivos com extensão `.docm` podem conter macros.

CertoErrado

Resposta correta: CERTO

O "x" final indica um arquivo XML sem macros, e o "m" indica um arquivo XML que pode conter macros. O mesmo vale para `.xlsx` e `.xlsm`.

Questão 4Estilo CESGRANRIO

Sobre os formatos de imagem, é correto afirmar que:

Ao formato `.png` usa compressão sem perda e permite transparência.Bo formato `.jpg` usa compressão sem perda, preservando a imagem original a cada salvamento.Co formato `.bmp` costuma gerar arquivos menores que o `.jpg`.Do formato `.gif` aceita milhões de cores e não permite animação.Etodos os formatos de imagem usam compressão com perda.

Resposta correta: A

O `.png` comprime sem perda e aceita transparência. O `.jpg` usa compressão com perda, o `.bmp` costuma ser grande por não comprimir e o `.gif` limita-se a 256 cores e permite animações simples.

Questão 5Estilo CEBRASPE

Julgue o item a seguir. Arquivos que já vêm comprimidos, como as imagens `.jpg`, costumam reduzir bastante de tamanho quando o usuário os compacta em um arquivo `.zip`.

CertoErrado

Resposta correta: ERRADO

Formatos já comprimidos, como o `.jpg`, quase não diminuem ao entrar em um ZIP. O ganho maior aparece em arquivos de texto, por exemplo.

Questão 6Estilo IBFC

Considerando a base binária adotada pelo Windows, 1 MB equivale a:

A1.000 bytes.B1.024 bytes.C8 bits.D1.024 GB.E1.024 KB.

Resposta correta: E

Na base binária, 1 KB são 1.024 bytes, 1 MB são 1.024 KB e 1 GB são 1.024 MB. Já 8 bits formam 1 byte.

Questão 7Estilo CEBRASPE

Julgue o item a seguir. O atributo Oculto faz com que o arquivo deixe de aparecer na visualização normal do Explorador de Arquivos, mas não o exclui do disco.

CertoErrado

Resposta correta: CERTO

O arquivo oculto continua gravado e ocupando espaço. O atributo apenas o esconde da visualização padrão.

Questão 8Estilo FCC

Um arquivo com extensão `.txt` é um arquivo:

Acom formatação de negrito e itálico, criado pelo Word.Bde texto simples, sem formatação como negrito ou diferentes fontes.Cde planilha eletrônica com fórmulas.Dde imagem compactada.Ede apresentação de slides.

Resposta correta: B

O `.txt` guarda apenas caracteres. Textos com negrito, fontes e imagens exigem formatos como `.docx` ou `.odt`.

Questão 9Estilo CEBRASPE

Julgue o item a seguir. Um arquivo com extensão `.zip` só pode ser criado com programas de terceiros, pois o Windows não possui recurso nativo de compactação.

CertoErrado

Resposta correta: ERRADO

O Windows compacta arquivos em ZIP diretamente pelo menu de contexto, com a opção de pasta compactada. Programas de terceiros ampliam os formatos e recursos, como a criptografia.

Questão 10Estilo VUNESP

Assinale a alternativa que apresenta apenas extensões de arquivos de áudio ou vídeo.

A`.jpg`, `.png` e `.gif`B`.docx`, `.xlsx` e `.pptx`C`.mp3`, `.wav` e `.mp4`D`.zip`, `.rar` e `.7z`E`.exe`, `.msi` e `.txt`

Resposta correta: C

`.mp3` e `.wav` são áudio, e `.mp4` é vídeo. As demais alternativas trazem imagens, documentos do Office, compactados e executáveis.

## Fontes e referências

-   Microsoft Support. [Common file name extensions in Windows](https://support.microsoft.com/en-us/windows/common-file-name-extensions-in-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01).
-   Microsoft Support. [Open XML Formats and file name extensions](https://support.microsoft.com/en-us/office/open-xml-formats-and-file-name-extensions-5200d93c-3449-4380-8e11-31ef14555b18).
-   Microsoft Support. [Zip and unzip files](https://support.microsoft.com/en-us/windows/zip-and-unzip-files-8d28fa72-f2f9-712f-67df-f80cf89fd4e5).
-   Library of Congress. [OpenDocument Format (ODF) Family, OASIS and ISO/IEC 26300](https://www.loc.gov/preservation/digital/formats/fdd/fdd000247.shtml).

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

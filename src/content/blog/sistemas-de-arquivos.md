---
title: "NTFS, FAT32 e exFAT: Sistemas de Arquivos para Concursos"
description: "Sistemas de arquivos para concursos: diferenças entre NTFS, FAT32, exFAT e ext4, limite de 4 GB, formatação e as pegadinhas que as bancas cobram."
category: "Arquivos"
date: 2026-10-13T09:30:00-03:00
readingTime: "9 min"
tags: ["Sistemas de Arquivos", "NTFS", "FAT32", "exFAT", "ext4", "Windows"]
image: "./images/sistemas-de-arquivos.webp"
imageAlt: "Pendrive e SSD externo sobre uma mesa de madeira ao lado de um notebook e de um caderno de anotações de estudo"
related:
  - informatica-concursos-gerenciamento-arquivos-pastas
  - tipos-de-arquivo
  - simulado-arquivos
---

Você já tentou copiar um filme de 5 GB para um pendrive e o Windows respondeu que o arquivo era grande demais, mesmo com espaço de sobra? Essa situação aparece quase igual nas provas, e a resposta está no **sistema de arquivos** do pendrive. A banca quer saber se você diferencia NTFS, FAT32, exFAT e ext4, qual deles cada sistema operacional usa e o que cada um permite. Ao longo do texto, você vai ver o que é um sistema de arquivos, a comparação entre os principais, o que muda ao formatar uma unidade e as **pegadinhas** mais comuns.

## O que é um sistema de arquivos

Primeiramente, fixe a definição. O sistema de arquivos é a estrutura que define como os dados são nomeados, gravados e localizados em uma unidade de armazenamento, como HD, SSD ou pendrive. Sem ele, o disco seria apenas uma sequência de bits sem organização, e o sistema operacional não saberia onde começa e onde termina cada arquivo.

Em outras palavras, o sistema de arquivos é o “índice” do disco. É ele que registra o nome de cada arquivo, o tamanho, as datas e a posição física dos dados. Para entender como o usuário enxerga essa organização em pastas e subpastas, consulte o artigo sobre [organização de arquivos, pastas e programas](/informatica-concursos-gerenciamento-arquivos-pastas/).

Vale destacar duas ideias que costumam aparecer em prova:

-   **Partição:** divisão lógica de um disco. Cada partição recebe seu próprio sistema de arquivos e, no Windows, normalmente uma letra de unidade, como `C:` ou `D:`.
-   **Cluster (unidade de alocação):** o menor bloco que o sistema usa para gravar dados. Um arquivo ocupa um ou mais clusters inteiros.

## Os principais sistemas de arquivos

Em seguida, veja os quatro que mais caem. A tabela resume o que você precisa memorizar. Deslize para o lado no celular.

| Sistema | Onde é usado | Limite de arquivo | Destaques |
| --- | --- | --- | --- |
| FAT32 | Pendrives antigos, cartões de memória, câmeras | 4 GB por arquivo | Compatível com quase tudo, sem permissões nem criptografia |
| exFAT | Pendrives e cartões modernos, HDs externos | Muito acima de 4 GB | Pensado para mídia removível, funciona em Windows e macOS |
| NTFS | Windows (HD e SSD internos) | Muito acima de 4 GB | Permissões, criptografia, compressão e journaling |
| ext4 | Linux | Muito acima de 4 GB | Journaling, permissões de usuário, grupo e outros |

### FAT32: antigo, compatível e limitado

O FAT32 é o mais antigo dos quatro e continua vivo justamente por ser compatível com praticamente qualquer dispositivo: computadores, TVs, videogames e aparelhos de som. Em compensação, ele **não aceita arquivos maiores que 4 GB**. Foi exatamente isso que aconteceu na situação do início do texto.

Além disso, o FAT32 não tem permissões de acesso nem criptografia nativa, e não possui journaling. Por isso, ele serve bem para mídia removível simples, mas não para guardar o sistema operacional.

### exFAT: a resposta para o pendrive moderno

O exFAT foi criado pela Microsoft para mídia removível, como pendrives, cartões SD e HDs externos. Ele elimina o limite de 4 GB por arquivo e mantém a boa compatibilidade, já que Windows e macOS o leem e gravam sem programas extras.

Aqui está o raciocínio que a banca cobra: se o enunciado fala em um pendrive que precisa receber arquivos grandes e funcionar em computadores diferentes, a resposta mais provável é exFAT.

### NTFS: o sistema do Windows

O NTFS é o sistema de arquivos padrão do Windows. O sistema operacional é instalado nele, e ele oferece recursos que os formatos anteriores não têm:

-   **Permissões:** controle de quem pode ler, alterar ou executar cada arquivo e pasta;
-   **Criptografia:** o recurso EFS protege arquivos individuais;
-   **Compactação:** reduz o espaço ocupado por arquivos e pastas;
-   **Cotas de disco:** limitam o espaço que cada usuário pode usar;
-   **Journaling:** registra as operações antes de concluí-las, o que ajuda a manter o sistema íntegro após uma queda de energia.

Contudo, existe um limite de compatibilidade. O macOS lê volumes NTFS, mas, por padrão, não grava neles, e muitos aparelhos domésticos não os reconhecem. Por isso, o NTFS é ótimo para o disco interno e menos prático para um pendrive que circula entre equipamentos.

### ext4: o sistema do Linux

Por outro lado, o ext4 é o sistema de arquivos usado por padrão em grande parte das distribuições Linux. Ele também tem journaling e controla permissões por usuário, grupo e outros. O Windows não lê o ext4 nativamente, e esse é um ponto frequente de prova na comparação entre os dois ambientes, que você aprofunda em [Windows x Linux para concursos](/windows-vs-linux-para-concursos/).

Para completar o quadro, existem outros nomes que aparecem de vez em quando: o **ReFS**, voltado a servidores Windows, o **APFS**, do macOS, e o **Btrfs** e o **XFS**, também do mundo Linux. Em geral, basta saber a que sistema operacional cada um pertence.

## Formatação: rápida, completa e o que ela apaga

Agora chegamos a um dos temas preferidos da banca. Formatar uma unidade cria um novo sistema de arquivos nela, e é nessa hora que você escolhe entre NTFS, FAT32 ou exFAT.

Na formatação **rápida**, o Windows apenas apaga a tabela que indica onde ficam os arquivos e cria uma nova estrutura. Os dados em si continuam gravados até serem sobrescritos, e por isso programas de recuperação ainda conseguem trazer parte deles de volta. Na formatação **completa**, o sistema também verifica a unidade em busca de setores com defeito, e o processo é bem mais demorado.

Guarde esta ideia: formatar não é o mesmo que excluir um arquivo. Quem vai descartar ou vender um HD com informações sensíveis precisa de uma limpeza segura, que vai além da formatação rápida. Para o outro lado dessa moeda, a proteção contra perda de dados, veja o artigo sobre [backup em segurança da informação](/backup-seguranca-da-informacao/).

### Converter de FAT32 para NTFS

Outro detalhe prático: o Windows permite converter um volume FAT32 para NTFS sem apagar os dados, pelo comando `convert D: /fs:ntfs` no Prompt de Comando. O caminho inverso, de NTFS para FAT32, não tem conversão direta: exige formatar a unidade, o que apaga o conteúdo.

## Sistema de arquivos não é extensão

Por fim, uma confusão clássica. O sistema de arquivos organiza a **unidade inteira**, enquanto a extensão (`.docx`, `.jpg`, `.pdf`) indica o **tipo de cada arquivo**. São conceitos de níveis diferentes, e a banca gosta de misturá-los na mesma alternativa. Se o enunciado fala em NTFS ou FAT32, ele trata da unidade. Se fala em `.png` ou `.zip`, trata do arquivo, assunto do artigo sobre [tipos de arquivo e extensões](/tipos-de-arquivo/).

## Pegadinhas da banca sobre sistemas de arquivos

Cabe destacar que a banca costuma trocar uma palavra para inverter o sentido. Estas afirmações aparecem com frequência, e todas estão erradas:

-   “O FAT32 permite gravar arquivos de qualquer tamanho.” Errado: o limite é de 4 GB por arquivo.
-   “O NTFS é um sistema de arquivos exclusivo do Linux.” Errado: é o padrão do Windows, e o do Linux é o ext4.
-   “O Windows lê e grava em volumes ext4 sem nenhum recurso adicional.” Errado: o suporte nativo não existe.
-   “Formatar um pendrive apaga os dados de forma irrecuperável em qualquer caso.” Errado: na formatação rápida, os dados podem ser recuperados.
-   “A extensão do arquivo define o sistema de arquivos da unidade.” Errado: a extensão indica o tipo do arquivo, e o sistema de arquivos pertence à unidade.
-   “O FAT32 oferece permissões e criptografia nativas.” Errado: esses recursos são do NTFS.

Repare no padrão: palavras como “qualquer”, “exclusivo” e “sem nenhum” funcionam como alarme.

## Conclusão: seu próximo passo de estudo

Portanto, os sistemas de arquivos se resumem a uma comparação simples: FAT32 é compatível, mas limitado a 4 GB por arquivo, exFAT resolve esse limite na mídia removível, NTFS é o sistema do Windows com permissões e criptografia, e ext4 é o do Linux. Agora, resolva as questões abaixo para fixar o conteúdo e teste-se no [simulado de Arquivos](/simulado-arquivos/). Se quiser ampliar a base de hardware por trás dos discos, avance para [hardware para concursos](/hardware-para-concursos/).

## Fontes e referências

-   Microsoft Learn. [Comparison of file system functionality](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison).
-   Microsoft Learn. [NTFS overview](https://learn.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview).
-   Microsoft Learn. [exFAT file system specification](https://learn.microsoft.com/en-us/windows/win32/fileio/exfat-specification).

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

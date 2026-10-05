---
title: "Informática para concursos: 5 confusões clássicas e como a banca as cobra"
description: "Malware, backup, redes, Lixeira e Excel: veja as 5 dúvidas de informática para concursos que mais confundem o candidato e como a banca cobra."
category: "Dicas"
date: 2026-09-29T11:44:38-03:00
updated: 2026-09-29T11:58:50Z
readingTime: "9 min"
image: "./images/informatica-para-concursos.webp"
imageAlt: "Informática para concursos: 5 confusões clássicas e como a banca as cobra"
---

Em informática para concursos, a banca raramente pede uma definição solta. O que derruba o candidato é a diferença entre dois conceitos parecidos, e é justamente nesse ponto que o item de Certo ou Errado esconde a pegadinha.

Por isso, separei cinco dúvidas que aparecem prova após prova: malware, backup, redes, exclusão de arquivos e referências no Excel. Em cada bloco, você vai ver o raciocínio, um exemplo prático e o ponto exato que a banca costuma explorar.

Ao final, você resolve cinco itens no estilo Certo ou Errado, com comentário, para testar o que aprendeu.

## Vírus, worm e cavalo de troia: qual é a diferença?

Primeiramente, use uma pergunta que resolve boa parte das questões: como esse programa malicioso se espalha e ele precisa da sua ação para funcionar? A resposta muda conforme o tipo de malware.

### Como cada um se propaga

-   **Vírus:** anexa-se a um arquivo ou programa e depende da execução desse hospedeiro para agir. Ou seja, sem alguém abrir o arquivo infectado, ele fica parado.
-   **Worm:** funciona como programa independente. Ele copia a si mesmo pela rede, explora vulnerabilidades e não precisa de hospedeiro nem de clique do usuário.
-   **Cavalo de troia (trojan):** parece um programa legítimo, como um jogo ou um instalador, mas executa ações maliciosas escondidas, como abrir uma porta dos fundos (backdoor). Contudo, ele não se replica sozinho e não infecta outros arquivos.

Dando continuidade, observe o efeito prático de cada um. O worm sobrecarrega a rede e os servidores, porque se multiplica sem parar. O vírus altera ou danifica arquivos, e o trojan costuma abrir caminho para o roubo de dados.

### A pegadinha do “precisa de hospedeiro”

Aqui está um ponto que merece atenção: a banca troca as características entre os três. Um item afirma que o worm precisa de programa hospedeiro. Outro diz que o cavalo de troia se multiplica sozinho. Os dois estão errados.

Guarde esta ideia: o vírus depende de hospedeiro, o worm se espalha sozinho pela rede e o cavalo de troia engana o usuário, mas não se replica. Além disso, quando o item usar “sempre” ou “somente”, desconfie.

Para ampliar o estudo sobre ransomware, spyware e outras ameaças, leia o artigo sobre [tipos de malware](/malwares-e-ameacas-seguranca-da-informacao/).

## Backup normal, incremental e diferencial

Na sequência, veja o assunto que mais gera erro de conta: quantos backups você precisa para restaurar os dados. Antes de contar, entenda o que cada tipo copia.

### O que cada tipo copia

-   **Normal (completo):** copia todos os arquivos selecionados e marca cada um como já copiado.
-   **Incremental:** copia somente o que mudou desde o último backup, seja ele normal ou incremental, e também marca os arquivos como copiados.
-   **Diferencial:** copia tudo o que mudou desde o último backup normal, mas não marca os arquivos. Por isso, ele cresce a cada dia.

Em outras palavras, o incremental olha para o último backup de qualquer tipo, enquanto o diferencial sempre olha para o último backup normal.

### Quantos backups você precisa para restaurar

Na prática, funciona assim. Imagine um backup normal no domingo e backups diários de segunda a quinta. Na sexta de manhã, o sistema falha.

-   **Com incrementais:** você restaura o normal de domingo e, depois, os incrementais de segunda, terça, quarta e quinta, nessa ordem. São cinco conjuntos de dados.
-   **Com diferenciais:** você restaura o normal de domingo e apenas o diferencial de quinta. São dois conjuntos.

Consequentemente, o incremental executa mais rápido e ocupa menos espaço, mas complica a restauração. O diferencial faz o contrário. Na prova, a banca pode explorar justamente essa diferença: se o item disser que o incremental restaura tudo só com o último backup, marque Errado.

Para completar o raciocínio de proteção dos dados, veja também a [regra 3-2-1 de backup](/regra-3-2-1/).

## Internet, intranet e extranet

### Mesma tecnologia, público diferente

Em seguida, vamos a uma confusão que nasce de tratar os três termos como redes de tecnologias diferentes. Na verdade, os três usam a mesma base, como TCP/IP, navegador e protocolos da web. O que muda é quem pode acessar.

-   **Internet:** rede pública e mundial, aberta a qualquer pessoa conectada.
-   **Intranet:** rede privada de uma organização, restrita a funcionários e usuários autorizados.
-   **Extranet:** extensão da intranet para parceiros, fornecedores ou clientes autorizados, com autenticação.

Aliás, a banca gosta de dois erros. O primeiro afirma que a intranet só existe em rede local (LAN). Porém, uma intranet pode alcançar filiais em outras cidades por meio de WAN ou VPN e continuar sendo intranet. O segundo diz que a extranet é pública, o que também está errado, pois o acesso continua controlado.

Não confunda os dois conceitos: LAN, MAN e WAN classificam o alcance geográfico, e internet, intranet e extranet classificam quem tem acesso. Para ver essa distinção com mais exemplos, consulte o artigo sobre [internet, intranet e extranet](/o-que-e-extranet/).

## Excluir arquivo: Delete, Shift+Delete e Lixeira

### O que realmente sai do computador

Além disso, poucos assuntos rendem tantas pegadinhas quanto a exclusão de arquivos no Windows. O raciocínio começa com uma pergunta: o item passou pela Lixeira?

-   **Delete:** envia o arquivo para a Lixeira, de onde você pode restaurá-lo ao local original.
-   **Shift+Delete:** exclui o arquivo sem passar pela Lixeira, depois de uma confirmação. Não existe botão Restaurar.
-   **Esvaziar a Lixeira:** apaga em definitivo tudo o que estava lá dentro.

Apesar disso, existem exceções que a banca adora. Em regra, o Windows não envia para a Lixeira os arquivos apagados de pen drive ou de unidade de rede. Da mesma forma, ele exclui direto os arquivos maiores que a capacidade da Lixeira.

Ainda sobre esse tema, cuidado com a palavra “definitivamente”. Na prova, considere Shift+Delete como exclusão definitiva. Tecnicamente, porém, o sistema só libera o espaço no disco, e um programa de recuperação ainda pode encontrar os dados até que algo os sobrescreva. Use essa nuance apenas se o enunciado falar em recuperação por software especializado.

Para aprofundar, leia o artigo sobre [gerenciamento de arquivos e pastas](/informatica-concursos-gerenciamento-arquivos-pastas/).

## Referência relativa e absoluta no Excel

### O papel do cifrão ($) na fórmula copiada

Para encerrar os temas, vamos ao Excel. Quando você copia uma fórmula, o programa ajusta os endereços automaticamente, a menos que um cifrão trave alguma parte.

-   **Relativa (A1):** muda conforme a fórmula vai para outra célula.
-   **Absoluta ($A$1):** trava coluna e linha, então nunca muda ao copiar.
-   **Mista ($A1 ou A$1):** trava só a coluna ou só a linha.

Por exemplo, na célula C2 você escreve =B2\*$E$1, e a célula E1 guarda o percentual de desconto. Ao arrastar a fórmula para C3, ela vira =B3\*$E$1. O B2 acompanha a linha, enquanto o $E$1 fica parado.

Cabe destacar a tabela da própria Microsoft: ao copiar uma fórmula duas células para baixo e duas para a direita, A1 vira C3, $A$1 continua $A$1, A$1 vira C$1 e $A1 vira $A3.

Esse é um detalhe que costuma confundir o candidato: a tecla F4 alterna entre os quatro tipos de referência com a fórmula em edição. Além disso, ao mover a fórmula (recortar e colar), as referências não mudam. Só a cópia ajusta os endereços. Para praticar mais, veja o artigo sobre [fórmulas e funções no Excel](/excel-em-concursos-publicos/).

## Como a banca cobra essas dúvidas de informática para concursos em Certo ou Errado

Agora é hora de treinar. Nas questões de Certo ou Errado, o Cebraspe costuma usar termos absolutos, como “sempre”, “somente” e “exclusivamente”, para transformar uma afirmação quase certa em erro.

Assim, siga três passos em cada item:

1.  Circule os absolutos, como sempre, nunca, somente, exclusivamente e apenas.
2.  Descubra qual conceito o item trocou, por exemplo worm por vírus ou incremental por diferencial.
3.  Teste a afirmação com um exemplo curto, como o backup de domingo a quinta.

### Questões de Certo ou Errado

Estilo CEBRASPEQuestão 1 · Malware

O worm é um tipo de malware que precisa de um programa hospedeiro para se propagar, ao passo que o cavalo de troia se replica de forma autônoma pela rede.

CERTO ERRADO

Resposta correta: ERRADO

Os conceitos estão trocados. O worm se propaga sozinho pela rede e não precisa de hospedeiro. O cavalo de troia engana o usuário e não se replica por conta própria.

Estilo CEBRASPEQuestão 2 · Backup

Em uma rotina com backup normal no domingo e backups incrementais de segunda a quinta, a restauração dos dados na sexta-feira exige o backup normal e todos os incrementais feitos até quinta.

CERTO ERRADO

Resposta correta: CERTO

O incremental copia só o que mudou desde o último backup de qualquer tipo. Por isso, a restauração usa o backup normal mais toda a sequência de incrementais, na ordem.

Estilo CEBRASPEQuestão 3 · Redes

Uma intranet é uma rede privada que usa as mesmas tecnologias da Internet e pode ser acessada por funcionários de filiais em outras cidades, por meio de VPN, sem deixar de ser uma intranet.

CERTO ERRADO

Resposta correta: CERTO

A intranet se define pelo acesso restrito à organização, e não pelo alcance geográfico. A VPN apenas estende o acesso a usuários autorizados.

Estilo CEBRASPEQuestão 4 · Exclusão de arquivos

Quando o usuário exclui um arquivo de um pen drive com a tecla Delete, o Windows sempre envia esse arquivo para a Lixeira, de onde ele pode ser restaurado ao local original.

CERTO ERRADO

Resposta correta: ERRADO

O termo “sempre” torna o item errado. Em regra, os arquivos apagados de unidades removíveis, como pen drives, não passam pela Lixeira.

Estilo CEBRASPEQuestão 5 · Excel

Se a fórmula =B2\*$E$1 for copiada da célula C2 para a célula D3, ela passará a ser =C3\*$E$1.

CERTO ERRADO

Resposta correta: CERTO

A referência relativa B2 acompanha o deslocamento de uma coluna e uma linha e vira C3. Já $E$1 é absoluta e permanece igual.

## Conclusão: o que levar para a prova de informática para concursos

Em síntese, informática para concursos se resolve comparando conceitos parecidos. O vírus depende de hospedeiro, e o worm não. O incremental exige a cadeia de backups, e o diferencial só o último. A intranet é privada, a extranet libera o acesso a convidados, e o cifrão trava a referência no Excel.

Portanto, seu próximo passo é montar uma tabela com esses cinco pares e resolver mais questões do tema. Depois, teste o que aprendeu no [artigo de noções de informática com simulado](/nocoes-de-informatica/).

## Fontes e Referências

-   CERT.br/NIC.br. [Cartilha de Segurança para](https://cartilha.cert.br/) [I](https://cartilha.cert.br/)[nternet](https://cartilha.cert.br/).
-   NIST. [SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final).
-   Microsoft. [Alternar entre referências relativas, absolutas e mistas](https://support.microsoft.com/pt-pt/office/alternar-entre-refer%C3%AAncias-relativas-absolutas-e-mistas-dfec08cd-ae65-4f56-839e-5f0d8d0baca9).
-   Cebraspe. [Site oficial](https://www.cebraspe.org.br/).

---
title: "Simulado Sistemas Operacionais"
description: "Simulado de sistemas operacionais com 30 questões comentadas das principais bancas. Treine agora e prepare-se para o concurso."
category: "Simulados"
date: 2026-09-25T20:11:01-03:00
updated: 2026-09-25T21:13:15Z
readingTime: "14 min"
image: "./images/sistemas.webp"
imageAlt: "Sistemas Operacionais"
---

Se você já sentiu dificuldade para fixar os conceitos de sistemas operacionais, este simulado de sistemas operacionais foi pensado justamente para resolver esse problema. Ao longo de trinta questões comentadas, você revisa os tópicos mais cobrados por bancas como Cebraspe, FGV, FCC, IADES, Cesgranrio e Vunesp, entre eles gerenciamento de processos, memória virtual, permissões e diferenças entre Windows e Linux. Além disso, cada questão traz um comentário detalhado, que explica o raciocínio correto e aponta as pegadinhas mais frequentes em prova. Dessa forma, você não apenas treina a resolução de questões, mas também consolida a teoria. Portanto, aproveite este simulado de sistemas operacionais para medir seu nível antes da prova.

## Gerenciamento de processos: como o sistema organiza as tarefas

Antes de tudo, vale entender o que acontece por trás da tela quando você abre um programa.

Cada programa em execução vira um processo, e o sistema operacional é responsável por decidir a ordem e o tempo que cada um recebe do processador, tarefa conhecida como escalonamento. Um processo passa por diferentes estados ao longo da execução: novo, pronto (esperando sua vez), em execução, em espera (aguardando algum recurso) e terminado.

Guarde esta ideia: um processo pronto já está na fila para usar o processador, enquanto um processo em espera depende de outro evento, como a leitura de um arquivo, para poder continuar. Essa diferença é um clássico de prova.

Vale destacar ainda o conceito de thread, uma unidade de execução dentro de um processo. Um único processo pode ter várias threads rodando ao mesmo tempo, compartilhando a mesma área de memória, o que torna a comunicação entre elas mais rápida do que entre processos diferentes.

## Memória virtual: a técnica que evita a falta de RAM

Na sequência, entra um dos recursos mais importantes de qualquer sistema operacional moderno.

Quando a memória RAM não é suficiente para todos os processos em execução, o sistema usa parte do disco como extensão dela, técnica chamada de memória virtual. Esse processo funciona por paginação: os dados são divididos em blocos de tamanho fixo, chamados páginas, movidos entre a RAM e o disco conforme a necessidade.

Esse é um detalhe que costuma confundir o candidato: a memória virtual não substitui a RAM, ela complementa, e como o disco é muito mais lento, o uso excessivo dessa técnica deixa o computador visivelmente mais lento, sinal de que a memória física está no limite.

A área do disco reservada para essa troca de páginas recebe o nome de arquivo de paginação no Windows e de swap no Linux. Quando o sistema passa a maior parte do tempo trocando páginas entre RAM e disco, em vez de executar processos de fato, ocorre o que se chama de thrashing, situação em que o desempenho despenca mesmo com o processador praticamente ocioso.

## Permissões de arquivos: o modelo que o Linux cobra em detalhe

Além disso, permissões de acesso a arquivos aparecem com frequência em questões sobre Linux.

O sistema divide as permissões em três categorias: leitura (r), escrita (w) e execução (x), aplicadas a três grupos distintos: o dono do arquivo, o grupo ao qual ele pertence e os demais usuários. O comando chmod altera essas permissões, seja por letras (chmod u+x arquivo) ou por notação numérica, na qual cada permissão recebe um valor (4 para leitura, 2 para escrita, 1 para execução) que se soma para formar o código final, como chmod 755.

Não confunda os dois conceitos: 755 significa que o dono tem leitura, escrita e execução (4+2+1=7), enquanto grupo e outros têm apenas leitura e execução (4+1=5).

O [artigo sobre comandos básicos do Linux](/comandos-basicos-do-linux/) traz a lista completa de comandos e permissões cobrados em prova.

## Windows x Linux: as diferenças que mais caem em prova

Por fim, a comparação entre os dois sistemas operacionais é praticamente garantida em qualquer edital de informática.

O Windows é um sistema proprietário, com código fechado e mantido pela Microsoft, enquanto o Linux é um sistema de código aberto, que qualquer pessoa pode estudar, modificar e distribuir livremente. Além disso, o Windows usa majoritariamente o sistema de arquivos NTFS, enquanto distribuições Linux costumam usar o ext4.

Vale destacar também a interface: o Windows prioriza historicamente o uso gráfico, enquanto o Linux é fortemente associado ao uso via linha de comando, embora hoje ofereça interfaces gráficas completas.

O [artigo sobre Windows x Linux para concursos](/windows-vs-linux-para-concursos/), a [introdução ao Linux para concursos](/linux-para-concursos/) e o [guia do Windows 7, 10 e 11 para concursos](/sistema-windows-7-10-11-para-concursos/) aprofundam essas diferenças com exemplos que já caíram em prova.

## Simulado de sistemas operacionais: hora de colocar em prática

Com esses conceitos revisados, chegou o momento de testar o que você aprendeu neste simulado de sistemas operacionais. Resolva as trinta questões no seu ritmo, sem consultar o comentário antes de responder, e anote os temas em que mais errar. Perceba como processos, memória virtual, permissões e a comparação entre sistemas se conectam na prática: entender o funcionamento interno de um sistema operacional facilita reconhecer a resposta certa, mesmo quando a banca troca os termos do enunciado.

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

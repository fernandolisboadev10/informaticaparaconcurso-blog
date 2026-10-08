---
title: "Simulado Hardware"
description: "Simulado de hardware com 40 questões comentadas de várias bancas. Revise memória, processador e armazenamento para o concurso."
category: "Simulados"
date: 2026-09-25T20:08:33-03:00
updated: 2026-09-25T20:08:35Z
readingTime: "18 min"
image: "./images/hardware-1.webp"
imageAlt: "Hardware"
---

Muitos candidatos travam justamente nos detalhes técnicos de hardware, e este simulado de hardware existe para reverter esse cenário. Ao resolver as questões comentadas, você revisa barramentos, memória RAM e ROM, processador, armazenamento (HD e SSD) e periféricos, temas recorrentes nas provas de Cebraspe, Cesgranrio, FCC, FGV, IADES e Vunesp. Cada questão vem acompanhada de um comentário que explica o conceito correto e destaca a <strong class="cai-prova">pegadinha</strong> explorada pela banca, o que torna o aprendizado mais sólido. Assim, você identifica rapidamente os pontos que ainda precisam de revisão. Por isso, faça este simulado com calma e anote os temas que mais errar.

## Barramentos: a via que conecta todo o hardware

Antes de entrar nas questões, vale entender como as peças do computador conversam entre si. O barramento funciona como uma via de mão dupla que liga processador, memória e periféricos, permitindo a troca constante de dados e instruções.

Existem três tipos principais que a banca gosta de cobrar: o barramento de dados, que transporta as informações propriamente ditas; o barramento de endereços, que indica onde cada dado deve ser lido ou gravado; e o barramento de controle, que sincroniza todo esse tráfego.

Na prova, o examinador costuma testar se você confunde a função de cada um. Guarde esta ideia: dados carregam a informação, endereços dizem onde ela está, controle organiza o processo.

## Memória RAM x memória ROM: a diferença que decide a questão

Esse é um dos temas mais cobrados, e não à toa: é fácil confundir os dois conceitos se você não fixar a lógica por trás deles.

-   **RAM (Random Access Memory)**: volátil, perde todo o conteúdo quando o computador desliga, permite leitura e escrita, armazena os dados dos programas em execução no momento.
-   **ROM (Read Only Memory)**: não volátil, mantém as informações mesmo sem energia, grava em geral as instruções de inicialização e o firmware do sistema.

Aqui está um ponto que merece atenção: quando a banca descreve uma memória que “perde os dados ao desligar o equipamento”, ela está falando de RAM, não de ROM. Não confunda os dois conceitos na hora da prova, essa troca é uma das <strong class="cai-prova">pegadinhas</strong> mais repetidas em concursos de informática.

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

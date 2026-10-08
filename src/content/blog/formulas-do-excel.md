---
title: "Revisão de Fórmulas do Excel para Concurso 2026"
description: "Revise fórmulas do Excel para o CEBRASPE com 15 questões comentadas: SOMA, MÉDIA, SE, CONT.SE, PROCV e referências. Ideal para concurso 2026."
category: "Office"
date: 2026-08-19T12:54:36-03:00
updated: 2026-08-19T14:03:11Z
readingTime: "11 min"
image: "./images/revisao-excel.webp"
imageAlt: "Revisão de Fórmulas do Excel"
---

Toda vez que o [CEBRASPE](/cebraspe-como-funciona-a-banca-e-o-que-ela-cobra-em-informatica/) cobra fórmulas do Excel, a banca costuma montar o mesmo tipo de armadilha: apresenta uma planilha pequena e espera que você resolva a fórmula mentalmente, célula por célula, sem apoio de computador. Por isso, decorar sintaxe isolada ajuda pouco. O caminho mais eficiente é treinar em cima de uma única tabela, exatamente como a prova cobra. É justamente esse o formato deste artigo, atualizado para quem está se preparando para os concursos de 2026: uma planilha de exemplo e, a partir dela, 15 questões comentadas, cobrindo as fórmulas do Excel que mais aparecem em prova. 🎯

## 🧮 A planilha que você vai usar em todas as questões

Considere que os dados abaixo estão em uma planilha do Excel, com o cabeçalho na linha 1 e os alunos organizados nas linhas 2 a 6: Ana na linha 2, Bruno na linha 3, Carla na linha 4, Diego na linha 5 e Elisa na linha 6. As colunas vão de A (Aluno) até H (Resultado). Guarde essa organização, pois todas as fórmulas das próximas questões fazem referência direta a essas células.

<table class="ipc-tbl"><tbody><tr><td class="ipc-corner"></td><td class="ipc-colh">A</td><td class="ipc-colh">B</td><td class="ipc-colh">C</td><td class="ipc-colh">D</td><td class="ipc-colh">E</td><td class="ipc-colh">F</td><td class="ipc-colh">G</td><td class="ipc-colh-sel">H</td></tr><tr class="ipc-header"><td class="ipc-rowh">1</td><td class="ipc-nome">Aluno</td><td>Nota 1</td><td>Nota 2</td><td>Nota 3</td><td>Nota 4</td><td>Total</td><td>Média</td><td class="ipc-header-sel">Resultado</td></tr><tr><td class="ipc-rowh">2</td><td class="ipc-nome">Ana</td><td>8,5</td><td>7</td><td>8</td><td>7,5</td><td>31</td><td>7,75</td><td class="ipc-ok">APROVADO</td></tr><tr><td class="ipc-rowh">3</td><td class="ipc-nome">Bruno</td><td>6</td><td>5,5</td><td>6,5</td><td>6</td><td>24</td><td>6</td><td class="ipc-bad">REPROVADO</td></tr><tr><td class="ipc-rowh">4</td><td class="ipc-nome">Carla</td><td>9</td><td>8</td><td>9,5</td><td>8,5</td><td>35</td><td>8,75</td><td class="ipc-ok">APROVADO</td></tr><tr><td class="ipc-rowh">5</td><td class="ipc-nome">Diego</td><td>4,5</td><td>6</td><td>5</td><td>4</td><td>19,5</td><td>4,875</td><td class="ipc-bad">REPROVADO</td></tr><tr><td class="ipc-rowh">6</td><td class="ipc-nome">Elisa</td><td>7,5</td><td>7</td><td>8,5</td><td>7</td><td>30</td><td>7,5</td><td class="ipc-ok">APROVADO</td></tr></tbody></table>

📌 **Regra de aprovação:** Média ≥ 7,0 → APROVADO | Média < 7,0 → REPROVADO

Repare que essa regra não aparece em nenhuma célula visível da tabela, ela mora dentro da fórmula da coluna Resultado. Esse tipo de detalhe, uma condição embutida em uma função, é justamente o que o CEBRASPE testa quando pede para você “julgar” um item sobre fórmulas do Excel. Com esses números fixados, você já consegue acompanhar as 15 questões a seguir, sempre voltando à tabela quando precisar conferir algum valor.

## O que a banca testa em cada função

Todas as questões ao final do artigo usam a planilha acima. Antes de resolvê-las, revise os pontos em que a banca mais arma pegadinha.

**SOMA e MÉDIA.** A SOMA percorre o intervalo informado e soma os valores, e a MÉDIA divide o total pela quantidade de células. As duas só enxergam as células que você digitou entre parênteses. Um intervalo errado, como B2:F2 em vez de B2:E2, faz o Total ser contado dentro do próprio Total. Na MÉDIA, células vazias são ignoradas, e não contadas como zero.

**Referências relativa, absoluta e mista.** Sem cifrão, a referência é relativa e se ajusta à posição para onde a fórmula é copiada. Com $A$1, ela é absoluta e trava coluna e linha. Em A$1 trava só a linha, e em $A1 trava só a coluna. É assim que uma fórmula na primeira linha pode ser arrastada para todas as outras.

**SE.** A função recebe três partes separadas por ponto e vírgula: a condição, o resultado se for verdadeira e o resultado se for falsa. Todo texto digitado dentro da fórmula vai entre aspas duplas. Números e referências de célula não vão.

**MÁXIMO, MÍNIMO e CONT.SE.** O MÁXIMO e o MÍNIMO devolvem o maior e o menor valor do intervalo. A CONT.SE conta as ocorrências de um critério, que pode ser texto, número ou condição, diferente da SOMA, que soma números.

**PROCV.** Busca o valor na primeira coluna do intervalo e retorna um dado de uma coluna à direita, na mesma linha. O número da coluna é contado dentro do intervalo, recomeçando do 1, e não pela letra da planilha. O último argumento 0 (ou FALSO) pede correspondência exata, e é o recomendado.

**Ordem das operações e separador.** Os parênteses fazem o Excel calcular primeiro o que está dentro deles. Em português do Brasil, a vírgula é o separador decimal e o ponto e vírgula separa os argumentos das funções, como também ocorre no [LibreOffice](/libreoffice-para-concursos/) Calc.

## 📋 Cola rápida das fórmulas do Excel de hoje

Depois de passar pelas 15 questões, vale reunir tudo em um resumo curto. Menos decoreba, mais entendimento do que cada fórmula do Excel faz com os dados: é assim que você se prepara de verdade para o estilo de cobrança do CEBRASPE em 2026. 🚀

| Fórmula | O que faz |
| --- | --- |
| ➕ `=SOMA(B2:E2)` | Soma os valores de um intervalo |
| 📐 `=MÉDIA(B2:E2)` | Calcula a média aritmética |
| 🔀 `=SE(G2>=7;"APROVADO";"REPROVADO")` | Testa uma condição e retorna um texto |
| 🔢 `=CONT.SE(H2:H6;"APROVADO")` | Conta células que atendem a um critério |
| 🔺🔻 `=MÁXIMO(...)` / `=MÍNIMO(...)` | Maior e menor valor de um intervalo |
| 🔎 `=PROCV(valor;tabela;coluna;0)` | Busca um valor e retorna dado da mesma linha |
| 🔒 `$A$1` · `A$1` · `$A1` | Absoluta · mista (linha) · mista (coluna) |
| ⌨️ `;` | Separador de argumentos em português |

💬 **Para a próxima revisão:** refaça mentalmente cada fórmula do Excel usando os dados reais da planilha antes de julgar um item como certo ou errado. É assim que a banca verifica se você realmente entendeu o funcionamento da fórmula, e não apenas decorou a sintaxe. Para ampliar, leia o guia [Excel para concursos](/excel-em-concursos-publicos/) e treine no [simulado de Office](/simulado-office/). 🎓

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

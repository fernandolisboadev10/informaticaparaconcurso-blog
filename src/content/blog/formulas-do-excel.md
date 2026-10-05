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

Toda vez que o CEBRASPE cobra fórmulas do Excel, a banca costuma montar o mesmo tipo de armadilha: apresenta uma planilha pequena e espera que você resolva a fórmula mentalmente, célula por célula, sem apoio de computador. Por isso, decorar sintaxe isolada ajuda pouco. O caminho mais eficiente é treinar em cima de uma única tabela, exatamente como a prova cobra. É justamente esse o formato deste artigo, atualizado para quem está se preparando para os concursos de 2026: uma planilha de exemplo e, a partir dela, 15 questões comentadas, cobrindo as fórmulas do Excel que mais aparecem em prova. 🎯

## 🧮 A planilha que você vai usar em todas as questões

Considere que os dados abaixo estão em uma planilha do Excel, com o cabeçalho na linha 1 e os alunos organizados nas linhas 2 a 6: Ana na linha 2, Bruno na linha 3, Carla na linha 4, Diego na linha 5 e Elisa na linha 6. As colunas vão de A (Aluno) até H (Resultado). Guarde essa organização, pois todas as fórmulas das próximas questões fazem referência direta a essas células.

<table class="ipc-tbl"><tbody><tr><td class="ipc-corner"></td><td class="ipc-colh">A</td><td class="ipc-colh">B</td><td class="ipc-colh">C</td><td class="ipc-colh">D</td><td class="ipc-colh">E</td><td class="ipc-colh">F</td><td class="ipc-colh">G</td><td class="ipc-colh-sel">H</td></tr><tr class="ipc-header"><td class="ipc-rowh">1</td><td class="ipc-nome">Aluno</td><td>Nota 1</td><td>Nota 2</td><td>Nota 3</td><td>Nota 4</td><td>Total</td><td>Média</td><td class="ipc-header-sel">Resultado</td></tr><tr><td class="ipc-rowh">2</td><td class="ipc-nome">Ana</td><td>8,5</td><td>7</td><td>8</td><td>7,5</td><td>31</td><td>7,75</td><td class="ipc-ok">APROVADO</td></tr><tr><td class="ipc-rowh">3</td><td class="ipc-nome">Bruno</td><td>6</td><td>5,5</td><td>6,5</td><td>6</td><td>24</td><td>6</td><td class="ipc-bad">REPROVADO</td></tr><tr><td class="ipc-rowh">4</td><td class="ipc-nome">Carla</td><td>9</td><td>8</td><td>9,5</td><td>8,5</td><td>35</td><td>8,75</td><td class="ipc-ok">APROVADO</td></tr><tr><td class="ipc-rowh">5</td><td class="ipc-nome">Diego</td><td>4,5</td><td>6</td><td>5</td><td>4</td><td>19,5</td><td>4,875</td><td class="ipc-bad">REPROVADO</td></tr><tr><td class="ipc-rowh">6</td><td class="ipc-nome">Elisa</td><td>7,5</td><td>7</td><td>8,5</td><td>7</td><td>30</td><td>7,5</td><td class="ipc-ok">APROVADO</td></tr></tbody></table>

📌 **Regra de aprovação:** Média ≥ 7,0 → APROVADO | Média < 7,0 → REPROVADO

Repare que essa regra não aparece em nenhuma célula visível da tabela, ela mora dentro da fórmula da coluna Resultado. Esse tipo de detalhe, uma condição embutida em uma função, é justamente o que o CEBRASPE testa quando pede para você “julgar” um item sobre fórmulas do Excel. Com esses números fixados, você já consegue acompanhar as 15 questões a seguir, sempre voltando à tabela quando precisar conferir algum valor.

## 1️⃣ Questão 1 · SOMA ➕

Julgue o item: a fórmula `=SOMA(B2:E2)`, inserida na célula F2, retorna corretamente o valor 31, referente ao total de notas de Ana.

**🟢 Gabarito: CERTO.**

```
  B2      C2     D2      E2         F2
 8,5   +   7  +   8   +  7,5   =    31
```

A função SOMA percorre célula por célula o intervalo informado e soma todos os valores. Vale reforçar um ponto que a banca gosta de testar: o intervalo B2:E2 inclui as quatro notas, mas não inclui a própria célula F2 nem nenhuma célula fora desse intervalo. Se a questão trocasse o intervalo para B2:F2, por exemplo, o resultado mudaria, porque a SOMA passaria a contar o próprio total dentro do total, gerando um valor duplicado. ⚠️

## 2️⃣ Questão 2 · MÉDIA 📐

Qual fórmula você usaria na célula G2 para calcular a média das notas de Ana, e qual seria o resultado?

**🟢 Gabarito: `=MÉDIA(B2:E2)`, resultado 7,75.**

```
(8,5 + 7 + 8 + 7,5) ÷ 4  =  31 ÷ 4  =  7,75
```

A função MÉDIA soma os valores do intervalo e, em seguida, divide o total pela quantidade de células somadas. Na prática, equivale a =F2/4, já que F2 guarda o total de Ana. Fique atento a uma armadilha comum: se alguma célula do intervalo estivesse vazia, o Excel não contaria essa célula como zero na divisão, e sim ignoraria a célula vazia por completo, o que mudaria o divisor da conta. 🧐

## 3️⃣ Questão 3 · Referência relativa 🔀

Julgue o item: se a fórmula `=SOMA(B2:E2)` da célula F2 for copiada, por meio da alça de preenchimento, para a célula F3, o resultado passará a somar automaticamente as notas de Bruno (B3:E3), pois a referência é relativa.

**🟢 Gabarito: CERTO.**

```
📍 F2 =SOMA(B2:E2)
      │  copia para baixo (arrasta a alça)
      ▼
📍 F3 =SOMA(B3:E3)   ← todas as referências "descem" uma linha
```

Sem o cifrão ($), a referência de célula é relativa. Esse comportamento existe justamente para permitir que você monte uma única fórmula na primeira linha e arraste para todas as outras, sem precisar reescrever célula por célula. O contraponto dessa ideia, a referência absoluta, aparece mais adiante neste artigo (👉 Questão 13), e entender a diferença entre as duas é o que resolve boa parte das questões de fórmulas do Excel no CEBRASPE.

## 4️⃣ Questão 4 · Função SE 🔀

Considerando a fórmula `=SE(G3>=7;"APROVADO";"REPROVADO")` e que a média de Bruno (G3) é 6, qual o resultado dessa fórmula?

**🟢 Gabarito: REPROVADO.**

```
        ┌────────────────┐
        │  G3 >= 7 ?     │
        │  (6 >= 7)      │
        └───────┬────────┘
                 │
        ❌ FALSO (6 é menor que 7)
                 │
                 ▼
        "REPROVADO" ◀── 2º texto da fórmula
```

Como 6 não é maior ou igual a 7, a condição testada pela SE é falsa. Repare na estrutura da função: ela sempre recebe três partes separadas por ponto e vírgula, a condição, o que fazer quando ela é verdadeira e o que fazer quando ela é falsa. Basta memorizar essa ordem para nunca errar qual dos dois textos a fórmula devolve. 💡

## 5️⃣ Questão 5 · Aspas duplas na SE 💬

Julgue o item: a função SE exige, obrigatoriamente, que os textos utilizados como resultado, como “APROVADO” e “REPROVADO”, estejam entre aspas duplas.

**🟢 Gabarito: CERTO.**

Sempre que você digita um texto diretamente dentro de uma fórmula do Excel, precisa colocá-lo entre aspas duplas. Números e referências de célula não seguem essa exigência, e é exatamente essa distinção que costuma virar pegadinha em prova.

🚫 `=SE(G3>=7;APROVADO;REPROVADO)` → **ERRO!** (Excel acha que são nomes de célula) ✅ `=SE(G3>=7;"APROVADO";"REPROVADO")` → funciona corretamente

## 6️⃣ Questão 6 · MÁXIMO 🔺

Qual o resultado da fórmula `=MÁXIMO(B2:B6)`, aplicada à coluna Nota 1 de todos os alunos?

**🟢 Gabarito: 9.**

```
Nota 1:  8,5   6   9   4,5   7,5
                    ▲
                MÁXIMO = 9 (Carla)
```

Essa função também funciona bem como conferência rápida: se você já sabe, olhando a tabela, que a maior nota é de Carla, e a fórmula devolve outro valor, algo está errado no intervalo digitado.

## 7️⃣ Questão 7 · MÍNIMO 🔻

Qual o resultado da fórmula `=MÍNIMO(E2:E6)`, aplicada à coluna Nota 4 de todos os alunos?

**🟢 Gabarito: 4.**

```
Nota 4:  7,5   6   8,5   4   7
                      ▲
                  MÍNIMO = 4 (Diego)
```

MÁXIMO e MÍNIMO seguem exatamente a mesma lógica da SOMA e da MÉDIA quanto ao intervalo: elas só enxergam as células que você informou entre parênteses, então um intervalo digitado errado é a causa mais comum de erro nessas questões. 🔍

## 8️⃣ Questão 8 · CONT.SE 🔢

Julgue o item: a fórmula `=CONT.SE(H2:H6;"APROVADO")` retorna o valor 3, pois três alunos, Ana, Carla e Elisa, foram aprovados.

**🟢 Gabarito: CERTO.**

```
H2 ✅ APROVADO  ┐
H3 ❌ REPROVADO │
H4 ✅ APROVADO  ├──▶  CONT.SE = 3 ✅
H5 ❌ REPROVADO │
H6 ✅ APROVADO  ┘
```

Diferente da SOMA, que soma números, a CONT.SE conta ocorrências de um critério, e esse critério pode ser texto, número ou até uma condição, como “>=7”.

## 9️⃣ Questão 9 · CONT.SE (variação) 🔢

Qual seria o resultado da fórmula `=CONT.SE(H2:H6;"REPROVADO")`?

**🟢 Gabarito: 2.**

Apenas Bruno e Diego apresentam “REPROVADO” na coluna Resultado. 💭 Uma boa forma de conferir esse tipo de conta na hora da prova: se CONT.SE(…;”APROVADO”) deu 3 e existem 5 alunos ao todo, a contagem de “REPROVADO” só pode ser 2, sem nem precisar recalcular do zero.

## 🔟 Questão 10 · PROCV, o conceito 🔎

Julgue o item: a função PROCV poderia ser usada para, a partir do nome de um aluno digitado em outra célula, retornar automaticamente o seu Total, desde que a coluna com os nomes esteja à esquerda da coluna com os totais.

**🟢 Gabarito: CERTO.**

A PROCV (procura vertical) sempre busca o valor na primeira coluna do intervalo informado e, em seguida, retorna um dado de uma coluna à direita, na mesma linha em que encontrou a correspondência. Esse é o ponto mais cobrado sobre PROCV em prova: se o nome do aluno estivesse em uma coluna à direita do Total, a PROCV tradicional simplesmente não conseguiria fazer essa busca. ⚠️

## 1️⃣1️⃣ Questão 11 · PROCV na prática 🔎

Julgue o item: se em uma célula J1 você digitasse o nome “Carla” e usasse a fórmula `=PROCV(J1;A2:H6;6;0)`, essa fórmula retornaria o valor 35, referente ao Total de Carla.

**🟢 Gabarito: CERTO.**

```
J1 = "Carla"
        │
        ▼ procura na 1ª coluna (A) do intervalo A2:H6
        │
   linha 4 encontrada ✅
        │
        ▼ conta 6 colunas dentro do intervalo
        │
 A(1) B(2) C(3) D(4) E(5) F(6)
  ▲                        ▲
 Aluno                   Total = 35 🎯
```

Note que o número 6 na fórmula não é a coluna F da planilha, e sim a sexta coluna dentro do intervalo A2:H6. Essa contagem interna, que recomeça do 1 a cada PROCV, é o erro mais comum de quem está aprendendo essa função.

## 1️⃣2️⃣ Questão 12 · PROCV, o último argumento 🎯

Julgue o item: na fórmula `=PROCV(J1;A2:H6;6;0)`, o último argumento “0” (ou FALSO) indica que o Excel deve procurar uma correspondência exata do valor buscado.

**🟢 Gabarito: CERTO.**

🔒 **0 ou FALSO** → correspondência exata (recomendado!) 🔓 **1, VERDADEIRO ou omitido** → correspondência aproximada (perigoso ⚠️)

Na grande maioria das questões de concurso, e também no uso prático do dia a dia, o recomendado é sempre travar a busca com 0, justamente para evitar que o Excel devolva um valor parecido no lugar do valor certo.

## 1️⃣3️⃣ Questão 13 · Referência absoluta 🔒

Julgue o item: suponha que a nota de corte para aprovação (7,0) esteja fixa na célula K1, e a fórmula em H2 seja `=SE(G2>=$K$1;"APROVADO";"REPROVADO")`. Ao copiar essa fórmula para a célula H3, a referência a G2 mudará para G3, mas a referência a $K$1 permanecerá fixa, sempre apontando para a célula K1.

**🟢 Gabarito: CERTO.**

```
📍 H2 =SE(G2 >= $K$1;...)
         │mudaᵛ    │fixo🔒
         ▼         ▼
📍 H3 =SE(G3 >= $K$1;...)
         ▲relativa  ▲absoluta (não muda!)
```

G2 é referência relativa e, por isso, acompanha a linha para onde você copia a fórmula. Já $K$1 é referência absoluta: os dois cifrões travam coluna e linha ao mesmo tempo. Não confunda os dois comportamentos, porque essa é uma das pegadinhas mais recorrentes da banca. 🧠

🔖 **Resumo dos tipos de referência:**

-   `$A$1` → absoluta (trava coluna e linha)
-   `A$1` → mista (trava só a linha)
-   `$A1` → mista (trava só a coluna)
-   `A1` → relativa (nada travado)

## 1️⃣4️⃣ Questão 14 · Fórmula alternativa para a média ➗

Julgue o item: a fórmula `=(B2+C2+D2+E2)/4`, aplicada às notas de Ana, produz o mesmo resultado (7,75) que a fórmula `=MÉDIA(B2:E2)`.

**🟢 Gabarito: CERTO.**

```
(8,5 + 7 + 8 + 7,5) ÷ 4 = 7,75  ✅
        =MÉDIA(B2:E2)   = 7,75  ✅
              🟰 mesmo resultado!
```

Os parênteses fazem o Excel somar primeiro as quatro notas e só depois dividir o resultado por 4. Esse tipo de item também serve para revisar a ordem das operações no Excel: sem os parênteses, o Excel dividiria E2 por 4 antes de somar o restante, e o resultado sairia completamente errado. ⚠️

## 1️⃣5️⃣ Questão 15 · Ponto e vírgula como separador ⌨️

Julgue o item: assim como ocorre no LibreOffice Calc, o Excel em português do Brasil utiliza o ponto e vírgula ( ; ) para separar os argumentos dentro de uma função, como em `=SE(G2>=7;"APROVADO";"REPROVADO")`.

**🟢 Gabarito: CERTO.**

🇧🇷 Português-BR: separador decimal = **vírgula** → argumentos separados por **;** 🇺🇸 Inglês: separador decimal = **ponto** → argumentos separados por **,**

Na configuração regional em português do Brasil, a vírgula já funciona como separador decimal. Por isso, tanto o Excel quanto o Calc usam o ponto e vírgula para separar os argumentos das funções, evitando ambiguidade entre um número decimal e a divisão entre argumentos.

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

💬 **Para a próxima revisão:** refaça mentalmente cada fórmula do Excel usando os dados reais da planilha antes de julgar um item como certo ou errado. É assim que a banca verifica se você realmente entendeu o funcionamento da fórmula, e não apenas decorou a sintaxe. 🎓

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

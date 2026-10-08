---
title: "Excel para Concursos: o que realmente cai na prova"
description: "Aprenda Excel para concursos públicos com aula objetiva, funções mais cobradas, atalhos, referências e 10 questões ao final do artigo"
category: "Office"
date: 2026-07-30T19:10:23-03:00
updated: 2026-10-05T10:57:29Z
readingTime: "12 min"
image: "./images/excel.webp"
imageAlt: "Excel"
---

🎯 **Cai muito em prova!** O Excel costuma render de 3 a 6 questões nas provas de Informática do [Cebraspe](/cebraspe-como-funciona-a-banca-e-o-que-ela-cobra-em-informatica/), FGV, FCC e Vunesp. Referência relativa x absoluta, a diferença entre fórmula e função e a confusão entre planilha e pasta de trabalho são os campeões de pegadinha, e é exatamente por aí que você vai começar a estudar hoje.

O Excel organiza dados, executa cálculos e facilita a análise de informações em planilhas eletrônicas. Justamente por isso, ele aparece com tanta frequência em concursos públicos: reúne, em um único programa, funções matemáticas, ferramentas de produtividade e recursos que o dia a dia da administração pública exige constantemente.

Além disso, as bancas costumam cobrar tanto a teoria da interface quanto o uso prático de células, fórmulas, funções, referências e recursos como ordenação, filtro e formatação condicional. Por isso, dominar o Excel ajuda você a acertar tanto questões teóricas quanto itens que simulam situações reais de trabalho. Nesta aula, você vai revisar, um de cada vez, os pontos que mais caem em prova. Depois, aplique tudo na [revisão de fórmulas do Excel](/formulas-do-excel/), com 15 questões comentadas.

## O que é o Excel, afinal?

O Excel organiza planilhas eletrônicas em linhas, colunas e células. Cada célula recebe um endereço formado pela letra da coluna e pelo número da linha (como **A1**, **B3** ou **C10**), e é justamente esse endereço que você usa para localizar e referenciar valores dentro da planilha.

Em seguida, vale entender dois conceitos que a banca adora confundir:

-   A **planilha** corresponde a cada aba de trabalho.
-   A **pasta de trabalho**, por sua vez, é o arquivo completo (.xlsx), que pode conter uma ou várias planilhas.

Em outras palavras, quando você salva um arquivo do Excel (veja as [extensões como .xlsx](/tipos-de-arquivo/)), você salva uma pasta de trabalho. Dentro dela, você organiza quantas planilhas quiser, cada uma com um conteúdo diferente: um mês, um setor, um tipo de dado.

⚠️ **Pegadinha clássica:** a banca troca “planilha” por “pasta de trabalho” na mesma frase justamente para testar se você decorou a diferença ou só leu por cima. Não caia nessa.

## Interface do Excel

A interface do Excel traz alguns elementos que aparecem com frequência nas provas. Entre os principais, destacam-se a **faixa de opções**, a **barra de fórmulas**, a **caixa de nome** e as **guias de planilha**.

A barra de fórmulas mostra o conteúdo da célula ativa e permite que você edite fórmulas com mais clareza. Já a caixa de nome identifica a célula selecionada e também ajuda na navegação dentro da planilha.

Além disso, a faixa de opções organiza os comandos em abas como Página Inicial, Inserir, Fórmulas, Dados e Revisão. Esse modelo facilita o acesso a ferramentas de formatação, cálculo, ordenação e análise, e a banca costuma perguntar justamente em qual dessas guias você encontra determinado comando.

## Células, intervalos e referências

🧠 Referência Relativa x Absoluta x Mista, Cola Rápida

| Tipo | Símbolo | Ao copiar a fórmula | 💡 Truque |
| --- | --- | --- | --- |
| **Relativa** | `A1` | Muda linha e coluna | “Relativa relaxa, se ajusta” |
| **Absoluta** | `$A$1` | Não muda nada | “Cifrão duplo prende tudo” |
| **Mista** | `A$1` ou `$A1` | Trava só linha OU só coluna | “Um cifrão, uma trava” |

⚠️ **Pegadinha:** a banca costuma descrever o comportamento de um tipo de referência e pedir pra você identificar o símbolo, ou o contrário. Decore os dois sentidos.

O Excel usa referências para localizar valores dentro da planilha. Por padrão, a referência é **relativa**, o que significa que ela muda quando você copia a fórmula para outra célula.

Já a referência **absoluta** fixa a linha e a coluna com o símbolo **$**, como em `$A$1`. Assim, ao copiar a fórmula, o endereço permanece igual, independentemente de para onde você a mova.

Da mesma forma, a referência **mista** fixa apenas a coluna ou apenas a linha, como em `$A1` ou `A$1`. A Microsoft ainda destaca que a tecla **F4** alterna entre referência relativa, absoluta e mista quando você seleciona a referência dentro da fórmula, um atalho que costuma render questão sozinho.

## Fórmulas e funções básicas

🔥 Funções mais cobradas em prova

| Função | O que faz |
| --- | --- |
| `=SOMA()` | Adiciona valores de um intervalo |
| `=SE()` | Testa uma condição lógica |
| `=MÉDIA()` | Calcula a média aritmética |
| `=CONT.SE()` | Conta células que atendem um critério |

Toda fórmula no Excel começa com o sinal de igual (**\=**). A partir daí, você combina operadores, referências, constantes e funções para realizar cálculos.

Entre as funções mais cobradas em concursos, estão:

-   **SOMA**: adiciona valores.
-   **MÉDIA**: calcula a média aritmética.
-   **MÁXIMO**: retorna o maior valor.
-   **MÍNIMO**: retorna o menor valor.
-   **SE**: testa uma condição lógica.
-   **CONT.NÚM** e **CONT.VALORES**: contam células conforme o tipo de conteúdo.

Por isso, a banca costuma explorar a diferença entre fórmula e função. A **fórmula** é a expressão que você digita; a **função**, por outro lado, é uma estrutura pronta do Excel que você usa dentro dessa expressão. Guarde essa distinção, ela sozinha já resolve várias questões de certo ou errado.

## Recursos mais cobrados

Além das funções, você também precisa conhecer os recursos de análise e organização de dados. A guia Dados reúne comandos importantes, como **classificação** e **filtro**.

A **formatação condicional**, por sua vez, destaca automaticamente células com base em regras que você define. Segundo a Microsoft, esse recurso torna padrões e tendências mais visíveis, e você pode aplicá-lo a intervalos, tabelas e até relatórios de Tabela Dinâmica.

✅ **Fixe esse ponto:** a formatação condicional muda apenas a aparência (cor, fonte, ícone). Ela nunca altera o valor real da célula, e essa é justamente a casca de banana que aparece em questão de certo ou errado.

Vale destacar, ainda, a **AutoSoma**, que insere rapidamente a função de soma. O atalho **Alt + =** executa esse comando diretamente, sem que você precise digitar a fórmula manualmente.

## Atalhos essenciais para a prova

⌨️ Atalhos essenciais do Excel para a prova

  
| Atalho | Ação | 🧠 Use quando |
| --- | --- | --- |
| `Ctrl + C` | Copiar | Copiar o conteúdo da célula selecionada |
| `Ctrl + V` | Colar | Colar o conteúdo copiado ou recortado |
| `Ctrl + X` | Recortar | Mover o conteúdo para outra célula |
| `Ctrl + Z` | Desfazer | Reverter a última ação realizada |
| `Ctrl + S` | Salvar | Salvar a pasta de trabalho em edição |
| `F2` | Editar célula ativa | Alterar o conteúdo sem apagar tudo |
| `F4` | Alternar referência | Ajustar rapidamente uma fórmula ao copiar |
| `Alt + =` | AutoSoma | Somar um intervalo numérico próximo |
| `Ctrl + 1` | Formatar Células | Ajustar formato, fonte, bordas e número |
| `Ctrl + A` | Selecionar tudo | Selecionar a região atual ou a planilha inteira |
| `Ctrl + Page Down` | Próxima planilha | Navegar entre abas na mesma pasta |
| `Ctrl + Page Up` | Planilha anterior | Navegar entre abas na mesma pasta |

## Pegadinhas comuns em prova

Vale destacar algumas confusões frequentes, porque a banca explora justamente essas trocas de termo:

-   **Planilha** não é o mesmo que **pasta de trabalho**.
-   **Fórmula** não é o mesmo que **função**.
-   **Referência relativa** muda ao copiar; a **referência absoluta** permanece fixa.
-   **Filtro** não é o mesmo que **ordenação**.

Além disso, muitos candidatos confundem filtro com ordenação. O filtro exibe apenas os dados que atendem a um critério; a ordenação, por outro lado, reorganiza todos os dados em uma sequência definida, como crescente ou decrescente.

Por esse motivo, a leitura atenta do enunciado faz toda a diferença. Pequenas trocas de termos transformam uma alternativa aparentemente correta em item errado, e é exatamente aí que a banca separa quem estudou de quem apenas decorou.

## 📌 Leve isso para a prova

-   Cifrão ($) trava. Sem cifrão, a referência se ajusta.
-   Planilha é a aba; pasta de trabalho é o arquivo inteiro.
-   Filtro esconde dados; ordenação reorganiza tudo.
-   F4 alterna entre os três tipos de referência.
-   Formatação condicional muda a aparência, nunca o valor.
-   SOMA soma; MÉDIA calcula a média. A banca adora trocar os dois.

Por fim, estudar Excel para concursos públicos exige atenção aos conceitos básicos, às funções mais cobradas e às pegadinhas sobre referências, interface e recursos de análise. Quando você domina esses pontos, responde melhor às questões objetivas e interpreta comandos com mais segurança.

Portanto, revise as funções essenciais, memorize os atalhos mais frequentes e pratique questões de certo ou errado para consolidar o conteúdo. Assim, na hora da prova, você reconhece a pegadinha antes mesmo de terminar de ler o enunciado. Para continuar no bloco de Office, veja [Word](/microsoft-word-para-concursos/), [PowerPoint](/powerpoint-o-que-cai-nos-concursos/) e [LibreOffice](/libreoffice-para-concursos/), e resolva o [simulado de Office](/simulado-office/).

## Fontes e referências

-   Microsoft Support: Overview of formulas in Excel
-   Microsoft Support: Switch between relative, absolute, and mixed references
-   Microsoft Support: Keyboard shortcuts in Excel
-   Microsoft Support: Use conditional formatting to highlight information in Excel

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

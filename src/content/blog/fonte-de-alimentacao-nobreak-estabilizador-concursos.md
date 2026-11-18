---
title: "Fonte de Alimentação, Nobreak e Estabilizador: Diferenças para Concursos"
seoTitle: "Fonte, Nobreak e Estabilizador: Diferenças em Concursos"
description: "Entenda a função da fonte de alimentação do computador e diferencie nobreak, estabilizador e filtro de linha nas questões de informática."
category: "Hardware"
date: 2026-11-18T15:00:00-03:00
readingTime: "9 min"
draft: false
tags: ["Hardware", "Fonte de alimentação", "Nobreak", "Estabilizador", "Concursos"]
related:
  - hardware-para-concursos
  - perifericos-entrada-saida-concurso
  - simulado-hardware
---

Fonte de alimentação, nobreak, estabilizador e filtro de linha aparecem juntos quando o assunto é energia elétrica, mas cada equipamento tem uma função diferente. Em uma prova de Informática, a banca pode trocar essas funções para criar uma pegadinha: dizer que a fonte mantém o computador ligado durante uma queda de energia ou que o filtro de linha funciona como bateria.

Neste artigo, você vai entender o papel da fonte instalada dentro do computador e comparar os equipamentos externos que fornecem energia, regulam a tensão ou ajudam a proteger os aparelhos. O foco está nos conceitos cobrados em concursos.

## O que faz a fonte de alimentação do computador

A fonte de alimentação, também chamada de PSU (Power Supply Unit), fica dentro do gabinete. Ela recebe a corrente alternada (CA) da rede elétrica e a converte em corrente contínua (CC), usada pelos componentes do computador.

Placa-mãe, processador, unidades de armazenamento e outros componentes precisam receber energia por conexões próprias. Por isso, a fonte distribui a energia convertida pelos cabos e conectores compatíveis com cada peça. O guia técnico ATX da Intel documenta requisitos de entrada elétrica, saídas em corrente contínua, conectores e proteções de fontes de computador.

Guarde a função principal: **a fonte converte e distribui energia para os componentes internos**. Ela não armazena energia para manter o computador funcionando quando acaba a eletricidade.

### Potência, tensão e consumo não são a mesma coisa

As bancas podem misturar três conceitos:

- **Tensão**, medida em volts (V), representa a diferença de potencial elétrico.
- **Corrente**, medida em ampères (A), indica o fluxo de carga elétrica.
- **Potência**, medida em watts (W), expressa a taxa de transferência de energia.

A potência indicada na fonte representa o limite de fornecimento previsto para ela em determinadas condições. Isso não significa que o computador consuma continuamente todos aqueles watts: o consumo varia conforme os componentes e o que a máquina está fazendo.

Também não confunda a fonte do computador com um nobreak. A fonte fica dentro do gabinete e alimenta os componentes; o nobreak fica entre a tomada e os aparelhos e pode usar uma bateria para manter a carga por um período limitado.

## Nobreak: energia temporária quando falta luz

Nobreak é o nome popular do UPS (Uninterruptible Power Supply), ou sistema de alimentação ininterrupta. O equipamento inclui uma bateria e pode manter os aparelhos conectados funcionando por algum tempo quando há interrupção da rede elétrica. Esse intervalo permite salvar arquivos e desligar os equipamentos corretamente, conforme a capacidade e a carga conectada.

Alguns modelos também regulam variações da tensão. Ainda assim, a característica que diferencia o nobreak de um estabilizador simples é a possibilidade de fornecer energia temporária pela bateria durante uma interrupção.

Não interprete “ininterrupta” como autonomia ilimitada. O nobreak não substitui a rede elétrica por tempo indefinido: a duração depende, entre outros fatores, da bateria e da quantidade de equipamentos conectados.

## Estabilizador: regulação de tensão

O estabilizador tem como finalidade corrigir variações da tensão de entrada e fornecer uma tensão de saída dentro de determinada faixa de operação. Em sua forma comum, ele não possui bateria para manter o computador ligado quando falta energia.

Por isso, estabilizador e nobreak não são sinônimos. O primeiro está associado à regulação da tensão; o segundo pode manter os equipamentos em funcionamento por um período após a interrupção do fornecimento, graças à bateria. Alguns nobreaks também incluem regulação automática de tensão, o que não transforma as funções dos dois equipamentos em equivalentes.

## Filtro de linha e proteção contra surtos

O filtro de linha distribui energia para vários aparelhos e determinados modelos oferecem proteção contra surtos elétricos. Um surto é uma elevação breve da tensão que pode prejudicar equipamentos eletrônicos.

Um filtro de linha com proteção contra surtos não mantém o computador ligado durante um apagão. A Eaton diferencia os dispositivos de proteção contra surtos do UPS: a proteção contra surtos atua sobre picos de tensão, enquanto o UPS também conta com bateria para fornecer energia temporária.

Observe o equipamento e as especificações do fabricante. Uma régua com várias tomadas não é necessariamente um filtro de linha com proteção contra surtos, e nenhum nome comercial deve substituir a verificação das características informadas pelo fabricante.

## Compare as funções

| Equipamento | Função principal | Mantém o aparelho ligado quando falta energia? |
|---|---|---|
| Fonte de alimentação | Converte CA em CC e alimenta componentes internos | Não |
| Nobreak (UPS) | Fornece energia temporária pela bateria; alguns modelos regulam a tensão | Sim, por tempo limitado |
| Estabilizador | Regula variações de tensão dentro de sua faixa de operação | Não, em geral |
| Filtro de linha com proteção contra surtos | Distribui tomadas e ajuda a proteger contra surtos, conforme o modelo | Não |

## Pegadinhas de concurso sobre energia e hardware

Leia cada enunciado com atenção. Estas trocas aparecem com frequência em questões de hardware:

- **“A fonte do computador mantém o equipamento funcionando durante um apagão.”** Errado. A fonte converte e distribui energia; ela não possui a bateria de autonomia do nobreak.
- **“O nobreak pode alimentar o computador por tempo ilimitado.”** Errado. A autonomia é limitada e depende da bateria e da carga conectada.
- **“Estabilizador e nobreak são o mesmo equipamento.”** Errado. O nobreak possui bateria para fornecer energia temporária; o estabilizador comum não.
- **“O filtro de linha substitui um nobreak.”** Errado. A proteção contra surtos não fornece energia durante uma interrupção.
- **“A potência máxima da fonte é sempre igual ao consumo do computador.”** Errado. A fonte pode fornecer até sua capacidade nominal; o consumo real varia com a configuração e o uso.
- **“Tensão e potência são grandezas equivalentes.”** Errado. Volts medem tensão; watts medem potência.

Para revisar os demais componentes, consulte o [guia de hardware para concursos](/hardware-para-concursos/) e depois teste seus conhecimentos no [simulado de hardware](/simulado-hardware/). Se a dúvida envolver a função de um dispositivo conectado ao computador, veja também o artigo sobre [periféricos de entrada e saída](/perifericos-entrada-saida-concurso/).

## Conclusão

A fonte de alimentação transforma a corrente alternada da rede em corrente contínua e distribui energia aos componentes internos. O nobreak usa uma bateria para sustentar os equipamentos por um período limitado; o estabilizador regula a tensão; e o filtro de linha pode distribuir tomadas e oferecer proteção contra surtos, conforme o modelo.

Em uma questão de concurso, identifique primeiro qual problema o equipamento resolve: conversão e distribuição de energia, autonomia durante uma queda, regulação da tensão ou proteção contra surtos. Essa distinção elimina as principais confusões.

## Fontes e referências

- [Intel — ATX12VO Desktop Power Supply Design Guide](https://edc.intel.com/content/www/de/de/design/products-and-solutions/processors-and-chipsets/alder-lake-s/atx12vo-12v-only-desktop-power-supply-design-guide/2.11/): especificações técnicas de entrada, saída, conectores e proteções para fontes de computador.
- [Eaton — What is the difference between a UPS and surge suppressor?](https://www.eaton.com/us/en-us/support/eaton-answers/ups-vs--surge-suppressor.html): diferenças entre nobreak (UPS), bateria e proteção contra surtos.
- [Eaton — Surge Protection Explained](https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/surge-protection/surge-protection-explained.html): explicação sobre surtos e dispositivos de proteção.

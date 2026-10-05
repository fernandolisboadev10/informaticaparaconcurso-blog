---
title: "Memórias RAM, ROM e Cache: o que mais confunde em concursos"
description: "Entenda a diferença entre memória RAM, ROM e cache em informática para concursos e veja as pegadinhas mais cobradas pelo Cebraspe em questões"
category: "Hardware"
date: 2026-08-15T10:06:36-03:00
updated: 2026-09-17T19:01:27Z
readingTime: "9 min"
image: "./images/memorias.webp"
imageAlt: "Memórias"
---

Antes de tudo, imagine a seguinte situação na sua prova: a banca troca RAM por ROM, afirma que a cache guarda arquivos permanentemente ou diz que o HD substitui a memória principal. Você marcaria certo ou errado sem pensar duas vezes?

Se a resposta não veio de forma imediata, este é o momento de fechar essa lacuna. Nas próximas linhas, você vai entender a função de cada tipo de memória, a diferença entre memória RAM, ROM e cache, e ainda a relação delas com a memória virtual e o desempenho do computador.

Ao final, você vai resolver questões comentadas no estilo Cebraspe e treinar o olhar para identificar a pegadinha antes de marcar a resposta.

### O que são memórias do computador?

Inicialmente, memória é o componente que permite ao computador armazenar dados e instruções, seja de forma temporária, durante o uso da máquina, seja de forma permanente, mesmo depois do desligamento.

Contudo, nem toda memória cumpre a mesma função. Algumas trabalham diretamente com o processador para executar programas. Outras guardam as instruções que ligam o computador. Há ainda memórias menores que aceleram a troca de dados entre a CPU e a RAM.

Nesse sentido, a melhor forma de não errar em prova é observar três pontos: se a memória perde dados sem energia, qual é a sua função e como ela se relaciona com o processador.

### RAM: memória de trabalho

Em seguida, vamos falar da RAM, sigla de Random Access Memory. Ela funciona como a área de trabalho temporária do computador.

Quando você abre o navegador, um editor de texto ou uma videoaula, o sistema carrega parte desses dados na RAM. Dessa forma, o processador acessa as informações necessárias com muito mais agilidade do que buscaria no HD ou no SSD.

Segundo o NIST (National Institute of Standards and Technology), órgão de padronização tecnológica dos Estados Unidos, memória volátil é aquela que perde seu conteúdo quando a energia é desligada ou perdida. A RAM se encaixa exatamente nessa definição: ela não guarda permanentemente seus documentos, fotos ou programas instalados.

Guarde esta ideia: pense numa mesa de estudos. Durante a preparação, você espalha livros, anotações e exercícios sobre ela. Contudo, ao terminar e limpar a mesa, os materiais saem dali. A RAM funciona de forma parecida, pois mantém dados temporários apenas enquanto o computador está ligado.

### ROM: memória de inicialização

Na sequência, chegamos à ROM, sigla de Read Only Memory. Ao contrário da RAM, a ROM é uma memória não volátil, ou seja, ela mantém as informações mesmo com o computador desligado.

O NIST define a ROM, em termos técnicos, como uma mídia pré-gravada que só permite leitura, nunca gravação. Tradicionalmente, ela guarda as instruções essenciais para o processo de inicialização do equipamento, ligadas ao firmware, como a BIOS ou a UEFI, interface que a especificação oficial do UEFI Forum descreve como a sucessora moderna da BIOS tradicional.

Por outro lado, nem toda ROM é impossível de alterar. Tecnologias como PROM, EPROM, EEPROM e a própria memória flash permitem gravação ou atualização sob determinadas condições. Ainda assim, para a prova de nível médio, vale fixar o conceito central: a ROM preserva informações sem depender de energia.

Portanto, se a questão disser que a ROM perde dados ao desligar o computador, marque errado.

### Cache: velocidade para a CPU

Além disso, você precisa dominar a memória cache. Ela é pequena, extremamente rápida e fica integrada ao processador ou muito próxima dele.

A cache guarda cópias de dados e instruções que a CPU acessa com frequência. Como resultado, o processador não precisa buscar essas informações diretamente na RAM a todo momento, o que reduz o tempo de espera e melhora o desempenho da máquina.

Aqui está um ponto que merece atenção: a cache também é volátil. Isso significa que ela perde seu conteúdo assim que o computador desliga, exatamente como a RAM. A diferença entre as duas está na velocidade e na tecnologia: a RAM comum usa células DRAM, mais baratas e um pouco mais lentas, enquanto a cache usa células SRAM, mais caras, mais rápidas e sem necessidade de atualização constante.

Segundo a documentação técnica da Intel sobre seus próprios processadores, as caches modernas se organizam em níveis, como L1, L2 e L3. A L1 fica mais próxima do núcleo do processador e é a mais rápida, ainda que com menor capacidade. Já a L3, geralmente compartilhada entre os núcleos, oferece mais espaço, mas com acesso um pouco mais lento.

Vale destacar que a cache não substitui a RAM. Ela apenas atua como uma ponte veloz entre o processador e a memória principal.

### Memória virtual: quando a RAM não é suficiente

Não apenas isso: a banca também gosta de misturar RAM com memória virtual. Quando os programas abertos consomem mais espaço do que a RAM física oferece, o sistema operacional usa uma parte do HD ou do SSD como extensão da memória, técnica chamada de memória virtual ou swap.

Na prática, funciona assim: o sistema move para o disco os dados menos usados naquele momento, liberando espaço na RAM para o que está em uso. Esse processo mantém o computador funcionando, mas com perda de desempenho, porque o disco é muito mais lento do que a RAM.

Não confunda os dois conceitos: a memória virtual não é um tipo de memória física, e sim uma técnica que usa o armazenamento em disco para simular mais RAM do que a máquina realmente tem instalada.

Para entender melhor como a CPU se comunica com todos esses componentes, veja também o nosso guia sobre [barramentos e interfaces de hardware](URL-A-DEFINIR-BARRAMENTOS).

### RAM, ROM e cache lado a lado

### RAM, ROM e cache lado a lado

   
| Característica | RAM | ROM | Cache |
| --- | --- | --- | --- |
| Volatilidade | Volátil | Não volátil | Volátil |
| Função principal | Executar programas em uso | Guardar instruções de inicialização (firmware) | Acelerar o acesso da CPU a dados frequentes |
| Velocidade | Rápida | Mais lenta que a RAM | Mais rápida que a RAM |
| Tecnologia comum | DRAM | Flash/EEPROM (nas versões atualizáveis) | SRAM |
| Perde dados ao desligar? | Sim | Não | Sim |

### Pegadinhas para evitar

Principalmente, memorize estas trocas que a banca costuma fazer:

-   RAM não é armazenamento permanente.
-   ROM não é memória volátil.
-   Cache não é HD, SSD ou pendrive, e também não guarda arquivos pessoais do usuário.
-   Cache é volátil, assim como a RAM, apesar de muita gente achar que ela se comporta como a ROM.
-   HD e SSD armazenam dados permanentemente, mas não substituem a RAM.
-   Memória virtual usa espaço do disco; não é um chip de memória separado dentro do computador.

Portanto, antes de julgar um item, identifique se ele fala de trabalho temporário, inicialização, velocidade de acesso ou extensão de espaço em disco.

### Conclusão

Por fim, as memórias RAM, ROM e cache pedem que você estude pela função de cada uma, não pela definição isolada. A RAM sustenta os programas em uso, a ROM preserva as instruções de inicialização, e a cache acelera o acesso da CPU às informações mais usadas.

Além disso, não deixe de revisar a memória virtual, porque a banca gosta de testar se você sabe separar memória física de técnica de gerenciamento de memória.

Consequentemente, sempre que a prova trouxer um item sobre hardware, volte a estes três pontos: volatilidade, função e velocidade. Esse hábito evita a maioria das pegadinhas e fortalece sua preparação para essa parte da prova.

Para continuar essa preparação, salve esta aula, resolva o quiz abaixo e treine mais no [simulado de hardware para concursos](URL-A-DEFINIR-SIMULADO-HARDWARE).

## Questões de fixação

CEBRASPEQuestão 1

A memória RAM mantém os dados armazenados mesmo após o desligamento do computador.

Certo Errado

Resposta correta: ERRADO

A RAM é volátil: ela perde os dados sem energia.

CEBRASPEQuestão 2

A RAM armazena temporariamente os dados e programas em execução na máquina.

Certo Errado

Resposta correta: CERTO

Essa é a principal função da RAM.

CEBRASPEQuestão 3

A ROM é uma memória não volátil, pois preserva dados sem energia elétrica.

Certo Errado

Resposta correta: CERTO

A ROM preserva as informações mesmo com o equipamento desligado.

CEBRASPEQuestão 4

BIOS e UEFI são exemplos de firmware ligados ao processo de inicialização do computador.

Certo Errado

Resposta correta: CERTO

BIOS e UEFI participam diretamente da inicialização da máquina.

CEBRASPEQuestão 5

A memória cache substitui completamente a memória RAM em computadores modernos.

Certo Errado

Resposta correta: ERRADO

A cache complementa a RAM; ela não a substitui.

CEBRASPEQuestão 6

A cache auxilia o processador ao manter dados e instruções acessados com frequência.

Certo Errado

Resposta correta: CERTO

A cache reduz o tempo que a CPU leva para acessar dados frequentes.

CEBRASPEQuestão 7

HD e SSD são exemplos de memória cache utilizada pelo processador.

Certo Errado

Resposta correta: ERRADO

HD e SSD funcionam como armazenamento permanente, não como cache.

CEBRASPEQuestão 8

A memória ROM pode estar associada ao armazenamento do firmware do equipamento.

Certo Errado

Resposta correta: CERTO

O firmware costuma ocupar uma memória não volátil, como a ROM.

CEBRASPEQuestão 9

A cache tende a ser menor e mais rápida do que a memória RAM.

Certo Errado

Resposta correta: CERTO

A cache oferece menor capacidade, mas acesso muito mais rápido.

CEBRASPEQuestão 10

Documentos salvos em um SSD permanecem disponíveis mesmo após o desligamento do computador.

Certo Errado

Resposta correta: CERTO

O SSD é um meio de armazenamento não volátil.

CEBRASPEQuestão 11

Assim como a ROM, a memória cache é não volátil e preserva seus dados quando o computador é desligado.

Certo Errado

Resposta correta: ERRADO

A cache é volátil, assim como a RAM; ela perde os dados ao desligar o computador.

CEBRASPEQuestão 12

A memória virtual corresponde a um chip de memória física instalado na placa-mãe, separado da RAM.

Certo Errado

Resposta correta: ERRADO

A memória virtual é uma técnica que usa espaço do disco para simular RAM extra, não um chip físico separado.

 

## Fontes e referências

-   [NIST (National Institute of Standards and Technology) — Glossário: Volatile Memory](https://csrc.nist.gov/glossary/term/volatile_memory)
-   [NIST (National Institute of Standards and Technology) — Glossário: Read-Only Memory](https://csrc.nist.gov/glossary/term/Read_Only_Memory)
-   [UEFI Forum — Especificação UEFI](https://uefi.org/sites/default/files/resources/UEFI_Spec_Final_2.11.pdf)
-   [Intel — Como encontrar o tamanho das caches L1, L2 e L3 em processadores Intel](https://www.intel.com/content/www/us/en/support/articles/000057727/processors.html)

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

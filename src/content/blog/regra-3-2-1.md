---
title: "A regra 3-2-1 de backup: o que o concurseiro precisa saber"
description: "A regra 3-2-1 de backup para concursos: 3 cópias, 2 mídias, 1 local externo. Entenda a lógica por trás de cada número e evite as armadilhas."
category: "Segurança"
date: 2026-08-20T13:32:48-03:00
updated: 2026-08-20T17:37:50Z
readingTime: "5 min"
image: "./images/regra321.webp"
imageAlt: "Regra321 backup"
---

Imagine que você guarda todos os arquivos importantes em um único HD externo. Um dia, esse HD apresenta defeito. Nesse momento, você perde tudo de uma vez. Foi justamente para evitar esse cenário que os profissionais de TI consolidaram a chamada regra 3-2-1 de backup, e é sobre ela que este artigo se concentra.

Antes de entrar nos detalhes técnicos, vale contextualizar por que esse tema aparece com frequência nas provas de Informática. Bancas como [Cebraspe](/cebraspe-como-funciona-a-banca-e-o-que-ela-cobra-em-informatica/), FGV e FCC cobram backup não apenas como conceito isolado, mas também dentro de questões sobre [segurança da informação](/simulado-seguranca-da-informacao/). Afinal, um backup mal planejado compromete diretamente a disponibilidade dos dados, um dos pilares da tríade CID (confidencialidade, integridade e disponibilidade).

### O que é a regra 3-2-1

A regra 3-2-1 estabelece um método simples para organizar cópias de segurança. Assim, ela reduz ao máximo o risco de perda definitiva de dados. Na prática, funciona assim:

-   **3 cópias dos dados**: o arquivo original mais duas cópias de backup.
-   **2 tipos de mídia diferentes**: por exemplo, um HD externo e uma [nuvem](/cloud-storage-armazenamento-de-dados-na-nuvem/), evitando depender de um único tipo de dispositivo.
-   **1 cópia fora do local (offsite)**: pelo menos uma dessas cópias precisa ficar em um local fisicamente diferente do original, como um data center remoto ou um serviço de [armazenamento em nuvem](/cloud-storage-armazenamento-de-dados-na-nuvem/).

Repare que essa distribuição não é aleatória. Cada elemento da regra neutraliza um risco específico, e entender essa lógica ajuda bastante na hora de resolver questões que testam variações do conceito.

### Por que três cópias, e não duas

3-2-1

### Regra 3-2-1

Mantenha **3** cópias dos dados, em **2** tipos de mídia diferentes, com **1** cópia armazenada em local externo (fora do prédio ou na nuvem). Dessa forma, você reduz o risco de perder tudo em um único incidente, como incêndio ou roubo.

3 **cópias**

1 original + 2 backups

2 **mídias**

ex.: HD externo + nuvem

1 **fora do local**

nuvem ou outro prédio

💻 notebook (original) → 💾 HD externo (backup 1) → ☁️ nuvem (backup 2)

<strong class="cai-prova">💡 Cai na prova:</strong> a regra 3-2-1 trata da **quantidade e da diversidade de cópias**, não de um cronograma. Portanto, não confunda esse conceito com os [tipos de backup (completo, incremental e diferencial)](/backup-seguranca-da-informacao/) vistos no tópico anterior.

Uma cópia sozinha não é backup, é apenas o arquivo original. Duas cópias já reduzem o risco, mas ainda deixam uma brecha. Se as duas ficam no mesmo tipo de mídia e no mesmo ambiente, um único incidente pode atingir ambas ao mesmo tempo. Por isso, manter três cópias no total cria uma margem de segurança maior, já que a chance de as três falharem juntas é bem menor.

### Por que dois tipos de mídia diferentes

Aqui entra um raciocínio que a banca adora explorar. Se você salva o backup em dois [HDs externos](/hardware-para-concursos/) idênticos, ambos compartilham a mesma vulnerabilidade. Um surto de energia, um defeito de fabricação ou até uma pancada física podem comprometer os dois ao mesmo tempo. Ao distribuir as cópias entre mídias diferentes, como um HD externo e uma nuvem, você reduz bastante a chance de um único tipo de falha destruir tudo de uma vez.

### Por que uma cópia precisa estar fora do local

Esse é o ponto que mais gera <strong class="cai-prova">pegadinha</strong> em prova, já que candidatos costumam esquecer o motivo por trás dessa exigência. Não adianta ter três cópias em três dispositivos diferentes se todos ficam na mesma sala. Um incêndio, um furto ou uma enchente, por exemplo, afeta o ambiente inteiro, e não apenas um dispositivo isolado. Por isso, a regra exige que pelo menos uma cópia fique em outro local, seja em nuvem, seja em uma unidade física guardada em outro endereço.

### Como as bancas costumam explorar esse tema

Bancas como Cebraspe frequentemente usam linguagem absoluta para criar armadilhas. Fique atento a itens que trazem palavras como “sempre”, “somente”, “exclusivamente” ou “obrigatoriamente” ligadas a um único tipo de mídia, de local ou de ferramenta. Na prática, a regra 3-2-1 não prescreve qual tecnologia usar, apenas o padrão de distribuição das cópias. Sendo assim, uma afirmação do tipo “o backup 3-2-1 exige, obrigatoriamente, o uso de fita magnética” já nasce errada, pois a regra fala em mídias diferentes, não em uma tecnologia específica.

Outro ponto que merece atenção envolve a diferença entre “cópia de backup” e “cópia sincronizada”. Um arquivo sincronizado em tempo real entre computador e [nuvem](/cloud-storage-armazenamento-de-dados-na-nuvem/) não funciona como backup de verdade. Isso porque um erro de exclusão ou uma corrupção de arquivo se propaga instantaneamente para todas as cópias sincronizadas. Backup pressupõe versões independentes e, de preferência, protegidas contra esse tipo de propagação automática.

### Variações mais recentes da regra

Nos últimos anos, surgiram variações da regra 3-2-1, e algumas provas mais atualizadas já cobram esses desdobramentos:

 
| Variação | O que acrescenta |
| --- | --- |
| 3-2-1-1-0 | Uma cópia offline (imune a ataques via rede, como ransomware) e zero erros nos testes de restauração |
| 3-2-2 | Duas cópias fora do local, aumentando a redundância geográfica |

Você não precisa memorizar todas as variações, mas vale entender a lógica geral. Cada versão nova tenta cobrir uma vulnerabilidade adicional, como ataques de [ransomware](/malwares-e-ameacas-seguranca-da-informacao/) que criptografam backups conectados à rede.

### Guarde esta ideia

Quando a questão mencionar backup, verifique três perguntas antes de julgar o item. Quantas cópias existem? Em quantos tipos de mídia diferentes elas estão distribuídas? Pelo menos uma delas fica fora do local original? Se a resposta bater com o padrão 3-2-1, o item costuma estar correto, desde que não force uma tecnologia específica como obrigatória. Para fixar, resolva o [simulado de Segurança da Informação](/simulado-seguranca-da-informacao/).

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

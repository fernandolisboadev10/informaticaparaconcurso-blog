---
title: "Simulado Segurança da Informação"
description: "Simulado de segurança da informação com 30 questões comentadas. Revise vírus, backup e criptografia para o concurso."
category: "Simulados"
date: 2026-09-25T20:08:54-03:00
updated: 2026-09-25T20:08:56Z
readingTime: "16 min"
image: "./images/seguranca.webp"
imageAlt: "segurança da informação"
---

Vírus, malware, criptografia e backup são só alguns dos assuntos que aparecem neste simulado de segurança da informação, pensado para candidatos que já estudaram a teoria e querem testar a prática. Nas trinta questões comentadas, você revisa os principais conceitos cobrados por Cebraspe, Cesgranrio, FCC, FGV, IADES e Vunesp, sempre com foco nas situações mais exploradas em prova. Cada questão vem acompanhada de um comentário que esclarece o motivo da resposta correta, o que evita a decoreba sem compreensão. Assim, você aprende a reconhecer os termos técnicos e as pegadinhas mais comuns dessa disciplina. Portanto, aproveite este simulado de segurança da informação para reforçar exatamente os pontos que ainda geram dúvida.

## Malware: os tipos que mais caem na prova

Antes de tudo, vale separar bem os principais tipos de malware, porque a banca adora trocar as definições entre si.

-   Vírus: precisa de um programa hospedeiro para se espalhar, só age quando o arquivo infectado é executado.
-   Worm: se propaga sozinho pela rede, sem depender de um arquivo hospedeiro ou de ação do usuário.
-   Trojan (cavalo de troia): se disfarça de programa legítimo para abrir uma porta de entrada no sistema.
-   Ransomware: sequestra os arquivos com criptografia e exige pagamento para liberar o acesso.
-   Spyware: coleta informações do usuário sem o seu conhecimento, muitas vezes senhas e dados bancários.

Esse é um detalhe que costuma confundir o candidato: o worm não precisa de arquivo hospedeiro, o vírus precisa. Guarde essa diferença, ela é uma das pegadinhas mais repetidas nas provas de Cebraspe e FGV.

Se quiser revisar cada ameaça com mais profundidade, o [artigo sobre malwares e ameaças de segurança da informação](/malwares-e-ameacas-seguranca-da-informacao/) traz exemplos reais de cada categoria.

## Antivírus, firewall e antispyware: ferramentas que a banca separa por função

Na sequência, entram as ferramentas de defesa, e aqui o erro mais comum é tratar antivírus e firewall como sinônimos.

O antivírus detecta, bloqueia e remove códigos maliciosos já conhecidos ou com comportamento suspeito. Já o firewall controla o tráfego de entrada e saída da rede, permitindo ou bloqueando conexões conforme regras definidas.

Não confunda os dois conceitos: o antivírus cuida do que já está, ou tenta entrar, dentro do sistema, enquanto o firewall filtra o que passa pela porta de entrada da rede. Consequentemente, um sistema seguro depende dos dois trabalhando juntos, nunca de apenas um isoladamente.

O [guia de aplicativos de segurança, antivírus, firewall e antispyware](/aplicativos-para-seguranca-antivirus-firewall-antispyware/) aprofunda essa comparação, com a diferença entre firewall e antivírus e exemplos que aparecem direto em prova.

## Criptografia: chave simétrica x chave assimétrica

Além disso, a criptografia também é praticamente certa em qualquer edital da área.

Na criptografia simétrica, a mesma chave cifra e decifra a mensagem, o que torna o processo rápido, mas exige compartilhar essa chave com segurança entre as partes.

Na criptografia assimétrica, existem duas chaves: uma pública, que qualquer pessoa pode usar para cifrar, e uma privada, que só o destinatário possui para decifrar. Por esse motivo, ela resolve o problema de compartilhar a chave, mas exige mais poder de processamento.

Vale destacar: quando a banca fala em “duas chaves diferentes”, ela está descrevendo criptografia assimétrica, essa é uma armadilha clássica de prova.

## Engenharia social e phishing: o elo mais explorado pelas bancas

Antes de fechar a teoria, vale reforçar um ponto que a banca adora: nem todo ataque explora uma falha técnica, muitos exploram a confiança do usuário.

A engenharia social manipula a vítima para que ela mesma entregue a informação sensível ou execute a ação que compromete o sistema. O phishing é o exemplo mais cobrado: um e-mail ou mensagem que se passa por uma fonte confiável (banco, empresa, órgão público) para induzir o clique em um link malicioso ou o envio de dados de acesso.

Existem variações que também aparecem em prova:

-   Spear phishing: ataque direcionado a uma pessoa ou empresa específica, com informações personalizadas para parecer mais legítimo.
-   Pretexting: o atacante cria uma história falsa (um pretexto) para conseguir a confiança da vítima antes de pedir a informação.

Na prática, se a banca descrever um golpe que depende da vítima “clicar”, “informar” ou “confiar”, provavelmente está tratando de engenharia social, não de uma falha de software.

## Backup: a última linha de defesa

Por fim, nenhuma estratégia de segurança está completa sem backup, porque ele é o que garante a recuperação depois de um ataque bem-sucedido.

A regra mais cobrada é a 3-2-1: três cópias dos dados, em dois tipos de mídia diferentes, com uma cópia armazenada fora do local principal. Dessa forma, mesmo que o equipamento seja perdido, roubado ou infectado por ransomware, os dados continuam recuperáveis.

O [artigo sobre backup e segurança da informação](/backup-seguranca-da-informacao/) e a [regra 3-2-1 detalhada](/regra-3-2-1/) mostram como aplicar essa estratégia na prática, incluindo os tipos de backup (completo, incremental e diferencial) que também caem em prova.

## Simulado de segurança da informação: hora de colocar em prática

Com esses conceitos revisados, chegou o momento de testar o que você aprendeu neste simulado de segurança da informação. Resolva as trinta questões no seu ritmo, sem consultar o comentário antes de responder, e anote os temas em que mais errar.

Se quiser continuar treinando outros módulos, os simulados de [hardware](/simulado-hardware/) e [redes de computadores](/simulado-redes/) seguem o mesmo formato comentado.

Questão 1 Cesgranrio

Qual é a função de um firewall na proteção de uma rede?

A) Armazenar dados considerados sensíveis B) Atuar como antivírus para programas maliciosos C) Bloquear ou permitir pacotes de dados D) Fazer backup dos dados automaticamente E) Criptografar as comunicações

Resposta correta: C

A função de um firewall é bloquear ou permitir pacotes de dados com base em regras de segurança estabelecidas. As outras opções estão relacionadas a outras funções de segurança.

Questão 2 IADES

Qual dos seguintes tipos de ataque é especificamente projetado para comprometer a confidencialidade de dados?

A) Phishing B) DDoS C) SQL Injection D) Ransomware E) Malware

Resposta correta: A

Phishing é um ataque que visa enganar usuários para que entreguem informações confidenciais, como senhas. DDoS busca denegar serviço, SQL Injection compromete a integridade, Ransomware sequestra dados e Malware é um termo genérico.

Questão 3 VUNESP

Na perspectiva da segurança da informação, o que é criptografia?

A) Otimização de velocidade de internet B) Ação de backup de dados C) Técnica de codificação de dados D) Limitação de acesso a redes E) Detecção de intrusos em redes

Resposta correta: C

A opção C está correta, pois criptografia é uma técnica utilizada para codificar dados, garantindo a segurança das informações. As outras opções não se referem a criptografia.

Questão 4 FCC

Qual a principal vantagem de um antivírus em tempo real?

A) Aumenta a velocidade do computador B) Remove vírus existentes rapidamente C) Detecta e bloqueia ameaças antes que causem danos D) Faz backup dos dados automaticamente E) Melhora a conectividade com a internet

Resposta correta: C

A opção C é a correta, pois a principal vantagem de um antivírus em tempo real é a sua capacidade de detectar e bloquear ameaças antes que elas causem danos ao sistema.

Questão 5 Cesgranrio

Qual das alternativas a seguir caracteriza melhor a função de um antivírus?

A) Detectar e eliminar malwares do sistema B) Proteger a rede de ataques externos C) Realizar backups automáticos de dados D) Classificar e armazenar emails enviados E) Garantir a privacidade online do usuário

Resposta correta: A

A função principal de um antivírus é detectar e eliminar malwares do sistema. As outras opções referem-se a funções de firewall, sistemas de backup, serviços de email e privacidade online.

Questão 6 IADES

Em que situação é mais indicado utilizar um firewall?

A) Para realizar backup de dados B) Para gerenciar senhas de usuários C) Para monitorar a presença de malwares D) Para controlar e filtrar o tráfego de rede E) Para criptografar informações

Resposta correta: D

Um firewall é usado para controlar e filtrar o tráfego de rede, permitindo ou bloqueando pacotes de acordo com regras de segurança. As outras opções referem-se a funções de softwares diferentes, como backup, gerenciamento de senhas, antimalware e criptografia.

Questão 7 FCC

As informações armazenadas na nuvem são protegidas por criptografia. Qual é a finalidade dessa prática?

A) Facilitar o acesso por múltiplos usuários B) Evitar que dados sejam acessados por pessoas não autorizadas C) Aumentar a capacidade de armazenamento D) Reduzir o custo de armazenamento E) Melhorar a velocidade de upload

Resposta correta: B

A criptografia tem como finalidade proteger as informações contra acessos não autorizados, mantendo a confidencialidade. As demais opções tratam de benefícios não relacionados à segurança da informação.

Questão 8 IADES

Qual é a função do protocolo HTTPS em uma comunicação online?

A) Bloquear invasões de malwares B) Aumentar a velocidade de carregamento de páginas C) Proteger a integridade e confidencialidade dos dados D) Facilitar o armazenamento em nuvem E) Substituir a necessidade de firewall

Resposta correta: C

HTTPS encripta a comunicação entre o cliente e o servidor, garantindo segurança. As outras opções se referem a funções que não estão diretamente relacionadas ao protocolo.

Questão 9 IADES

Qual das opções a seguir é um exemplo de um vírus que se propaga por anexos de e-mail?

A) Cavalos de Troia B) Ransomware C) Worms D) Spyware E) Adware

Resposta correta: A

Os Cavalos de Troia são malwares que se disfarçam como programas legítimos e podem ser enviados como anexos em e-mails. Os outros tipos descritos têm outras formas de propagação.

Questão 10 CEBRASPE

No contexto de Segurança da Informação, qual das alternativas abaixo descreve uma função principal de um firewall?

A) Proteger dados contra perda em caso de falhas de hardware. B) Monitorar e controlar o tráfego de rede de entrada e saída. C) Detectar e remover vírus de sistemas infectados. D) Fornecer armazenamento remoto para backup de dados. E) Criptografar dados armazenados em discos rígidos.

Resposta correta: B

A função principal de um firewall é monitorar e controlar o tráfego de rede de entrada e saída. As outras alternativas descrevem funções de outras tecnologias, como antivírus e soluções de backup.

Questão 11 VUNESP

Qual é o principal objetivo de um firewall em um sistema de rede?

A) Proteger contra vírus e malware B) Bloquear acessos não autorizados C) Fazer backup dos dados D) Armazenar dados em nuvem E) Aumentar a velocidade da conexão

Resposta correta: B

A opção B está correta, pois o principal objetivo do firewall é bloquear acessos não autorizados à rede. As outras opções se referem a funções distintas e não são funções básicas de um firewall.

Questão 12 FGV

Qual das opções a seguir é considerada uma vantagem do uso de um software antivírus?

A) Detecção e remoção de vírus conhecidos. B) Aumento da velocidade de acesso à internet. C) Eliminação de todos os tipos de malware. D) Aumento da capacidade de armazenamento no dispositivo. E) Impedir a desinstalação de software indesejado.

Resposta correta: A

A resposta correta é a primeira alternativa, pois os softwares antivírus têm como finalidade principal a detecção e remoção de vírus conhecidos. As demais opções não são características reais de um antivírus.

Questão 13 IADES

Qual é a principal desvantagem do armazenamento em nuvem?

A) Necessidade de conexão à internet B) Aumento na segurança das informações C) Acesso ilimitado aos dados D) Facilidade no backup dos dados E) Eliminação de custos de hardware

Resposta correta: A

Uma desvantagem do armazenamento em nuvem é a dependência de uma conexão com a internet para acessar os dados. As outras opções não são desvantagens, mas sim características e benefícios.

Questão 14 CEBRASPE

O armazenamento em nuvem elimina completamente a necessidade de backups locais dos dados.

Certo Errado

Resposta correta: Errado

É recomendável manter backups locais como cópia de segurança adicional aos dados em nuvem.

Questão 15 FCC

Qual é a diferença entre um vírus e um worm em termos de propagação?

A) Os worms não se propagam B) Os vírus precisam de um host para se propagar C) Os worms afetam apenas softwares D) Os vírus são mais perigosos que os worms E) Os worms são lentos na propagação

Resposta correta: B

Os vírus precisam de um host (arquivo ou programa) para se multiplicar, enquanto os worms podem se propagar autonomamente. As outras afirmações são incorretas.

Questão 16 FGV

Em relação ao armazenamento em nuvem, qual dos itens a seguir é considerado uma vantagem?

A) Requer hardware específico B) Dependente de conexão com a internet C) Segurança sempre garantida D) Acesso apenas em dispositivos móveis E) Facilita o compartilhamento de arquivos

Resposta correta: E

A principal vantagem do armazenamento em nuvem é que ele facilita o compartilhamento de arquivos entre usuários; as outras opções são desvantagens ou inverdades.

Questão 17 VUNESP

Em relação ao malware, qual é a definição correta de um Trojan?

A) Um software antivírus B) Uma ferramenta de segurança C) Um malware que se disfarça como um programa legítimo D) Um protocolo de segurança E) Um tipo de firewall

Resposta correta: C

Trojan é um tipo de malware que se disfarça como software legítimo para enganar o usuário. As outras opções não representam um Trojan.

Questão 18 CEBRASPE

Um firewall também pode ser utilizado para bloquear aplicativos específicos de acessar a internet com base em políticas definidas pelo usuário.

A) Firewalls só controlam tráfego entre redes. B) Isso é função exclusiva de antivírus. C) Verdadeiro, pode bloquear aplicativos. D) Somente firewalls de hardware fazem isso. E) Os firewalls não têm controle granular.

Resposta correta: C

Firewalls podem se configurar para permitir ou impedir que aplicativos específicos acessem recursos de rede com base em regras definidas.

Questão 19 Cesgranrio

O que é um backup incremental?

A) Copia todos os dados desde o último backup completo B) Armazena arquivos somente se houver alteração C) Faz cópia de todos os arquivos sem exceção D) É feito diariamente sem planejamento E) Realiza cópias de segurança de arquivos de sistema apenas

Resposta correta: B

A opção B é a correta, pois um backup incremental é aquele que copia apenas os arquivos que foram alterados desde o último backup, enquanto as outras opções não representam corretamente essa técnica.

Questão 20 FGV

Qual das opções a seguir é uma função primária de um antivírus?

A) Monitorar o tráfego de redes B) Remover malwares do sistema C) Gerenciar backups automaticamente D) Otimizar o desempenho do sistema E) Armazenar dados na nuvem

Resposta correta: B

A função primária de um antivírus é remover malwares, incluindo vírus. As outras alternativas referem-se a funções de outros tipos de softwares.

Questão 21 FGV

Em relação ao conceito de firewall, qual das opções abaixo está incorreta?

A) Controla o tráfego de rede com base em regras de segurança. B) Protege a rede contra acessos não autorizados. C) Pode funcionar tanto em hardware quanto em software. D) Impedindo a instalação de softwares novos. E) Registra tentativas de acesso não autorizadas.

Resposta correta: D

A opção D é incorreta, pois um firewall não impede a instalação de softwares, mas sim controla o tráfego de rede. As outras opções descrevem corretamente funções do firewall.

Questão 22 FCC

O que é um firewall?

A) Um programa de backup de dados B) Uma ferramenta que detecta e remove vírus C) Um sistema que filtra o tráfego de rede D) Um tipo de malware E) Uma rede social

Resposta correta: C

A opção C é correta, pois um firewall serve para filtrar e controlar o tráfego de rede, enquanto as demais alternativas não definem corretamente o que é um firewall.

Questão 23 FCC

O que deve ser considerado ao escolher um serviço de armazenamento em nuvem?

A) A quantidade de espaço grátis offeredo B) A reputação da empresa fornecedora C) A velocidade de conexão à internet D) O número de dados que será armazenado E) O sistema operacional do usuário

Resposta correta: B

A opção B é correta, pois a reputação da empresa é fundamental para a segurança e disponibilidade dos dados. As outras opções são menos relevantes no contexto geral da segurança.

Questão 24 CEBRASPE

Os firewalls impedem a entrada de qualquer tipo de dado suspeito na rede, sendo desnecessário o uso de um antivírus em conjunto.

A) Firewalls são independentes de antivírus. B) Ambos são necessários para uma proteção abrangente. C) Firewalls são mais importantes que antivírus. D) Antivírus protegidos contra trojans e firewalls contra worms. E) Isso depende do firewall utilizado.

Resposta correta: B

Firewalls e antivírus atuam em camadas de segurança diferentes e complementares para proteção de rede e sistema.

Questão 25 VUNESP

O que é um backup incremental?

A) Uma cópia total de todos os dados B) Uma cópia apenas dos dados alterados desde o último backup C) Uma cópia em fita magnética D) Qualquer cópia de segurança feita semanalmente E) Uma cópia em tempo real dos dados

Resposta correta: B

A opção B está correta, pois um backup incremental faz cópias apenas dos dados que foram alterados desde o último backup, otimizando espaço e tempo. As outras opções não descrevem corretamente um backup incremental.

Questão 26 CEBRASPE

Vírus de computador podem ser detectados e removidos por softwares antivírus, que precisam estar sempre atualizados para garantir sua eficácia contra novas ameaças.

A) Os antivírus detectam vírus sem necessidade de atualizações. B) Antivírus sempre detectam todas as ameaças. C) Atualizações são necessárias para eficácia. D) Os antivírus apenas detectam, não removem vírus. E) As atualizações são opcionais.

Resposta correta: C

Antivírus atualizados possuem assinaturas para detectar e neutralizar novos vírus. Sem atualizações, a eficácia pode diminuir drasticamente.

Questão 27 FGV

Qual é a principal função de um sistema de backup em uma organização?

A) Aumentar a velocidade da internet B) Proteger dados contra perda C) Reduzir o espaço de armazenamento D) Eliminar a necessidade de software antivírus E) Facilitar o acesso à internet

Resposta correta: B

A principal função do backup é proteger os dados contra perda devido a falhas, danos ou ataques. As outras alternativas não refletem a função do backup.

Questão 28 VUNESP

Na computação em nuvem, qual aspecto é considerado uma vantagem em relação ao armazenamento local?

A) Maior segurança contra repositórios maliciosos B) Acesso aos dados de qualquer lugar com conexão à internet C) Necessidade de hardware específico D) Armazenamento ilimitado E) Confiabilidade em desastres naturais

Resposta correta: B

A principal vantagem do armazenamento em nuvem é o acesso remoto aos dados, o que facilita o trabalho remoto e a colaboração. As outras opções não se aplicam de forma geral como uma vantagem da nuvem.

Questão 29 Cesgranrio

O que caracteriza um ransomware?

A) Obtém senhas pessoais B) Bloqueia o acesso aos dados até que um resgate seja pago C) Anexa-se a e-mails D) Duplicação de arquivos E) Instala outros tipos de malware

Resposta correta: B

A alternativa B é a correta, pois um ransomware impede acesso a arquivos até que um pagamento seja realizado, enquanto as outras opções descrevem diferentes tipos de malware.

Questão 30 Cesgranrio

Um firewall tem como função principal:

A) Proteger o computador contra vazamento de dados B) Armazenar arquivos temporários C) Filtrar e monitorar o tráfego de rede D) Gerar backups automáticos E) Desfragmentar o disco rígido

Resposta correta: C

A alternativa C está correta, pois um firewall filtra e controla o tráfego de dados entre a rede interna e a externa, atuando como uma barreira de segurança.

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

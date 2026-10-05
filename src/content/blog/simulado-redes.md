---
title: "Simulado de Redes de Computadores"
description: "Simulado de redes de computadores com 30 questões comentadas das principais bancas. Teste seus conhecimentos agora."
category: "Simulados"
date: 2026-08-23T13:03:03-03:00
updated: 2026-09-25T19:59:55Z
readingTime: "16 min"
image: "./images/redes-1.webp"
imageAlt: "Redes de Computadores"
---

Poucos temas exigem tanta atenção a detalhes quanto redes, e este simulado de redes de computadores foi criado para colocar essa teoria à prova. Nas trinta questões comentadas, você revisa protocolos, modelos OSI e TCP/IP, topologias, tipos de rede e conceitos de internet, intranet e extranet, sempre na linguagem usada por Cebraspe, Cesgranrio, FCC, FGV, IADES e Vunesp. Além disso, cada questão apresenta um comentário que explica o raciocínio correto e destaca a armadilha que a banca costuma preparar. Dessa forma, você treina justamente aquilo que costuma ser cobrado em prova. Por isso, encare este simulado de redes de computadores como um termômetro real do seu conhecimento.

## Modelo OSI e TCP/IP: a base que organiza a comunicação em rede

Antes de entrar nas questões, vale relembrar a lógica por trás dos dois modelos que toda banca cobra.

O modelo OSI organiza a comunicação em sete camadas, da física à de aplicação, cada uma responsável por uma etapa específica do envio e recebimento de dados. Já o modelo TCP/IP simplifica essa estrutura em quatro camadas, e é o que efetivamente funciona na internet que você usa todos os dias.

Nesse ponto, os protocolos mais cobrados costumam aparecer junto: HTTP e HTTPS para navegação, FTP para transferência de arquivos, DNS para resolver nomes de domínio e DHCP para atribuir endereços IP automaticamente.

Guarde esta ideia: quando a banca menciona “camadas de comunicação em rede”, ela está testando se você sabe que o TCP/IP é o modelo prático, enquanto o OSI é o modelo de referência, mais didático e detalhado.

Vale destacar ainda a diferença entre HTTP e HTTPS, um clássico de prova: o HTTPS adiciona uma camada de criptografia à comunicação, protegendo os dados trocados entre o navegador e o servidor, o que o HTTP simples não oferece. Da mesma forma, não confunda DNS com DHCP: o primeiro traduz nomes de domínio em endereços IP, o segundo distribui esses endereços automaticamente para os dispositivos da rede.

Para revisar cada camada com profundidade, o [guia completo de redes de computadores](/redes-de-computadores-para-concursos/) traz a função de cada uma delas com exemplos práticos.

## Tipos de rede: LAN, MAN, WAN e PAN

Em seguida, entra a classificação por alcance geográfico, um dos pontos mais diretos do edital.

-   LAN (Local Area Network): rede restrita a um espaço físico pequeno, como um escritório ou uma residência.
-   MAN (Metropolitan Area Network): abrange uma área maior, geralmente do tamanho de uma cidade.
-   WAN (Wide Area Network): conecta redes distantes entre si, a própria internet é o maior exemplo.
-   PAN (Personal Area Network): rede de curto alcance entre dispositivos pessoais, como um smartphone conectado a um fone via Bluetooth.

Esse é um detalhe que costuma confundir o candidato: o tamanho da rede define o tipo (LAN, MAN, WAN, PAN), enquanto o critério de acesso e propriedade define outra classificação, que você revisa mais adiante. Não confunda os dois conceitos na hora da prova.

O [artigo sobre tipos de redes de computadores](/tipos-redes-computadores-concursos/) detalha cada categoria com exemplos que costumam aparecer em prova.

## Topologias de rede: como os dispositivos se conectam fisicamente

Por outro lado, a topologia descreve o arranjo físico ou lógico dos dispositivos dentro da rede, e não o seu alcance.

Na topologia estrela, todos os dispositivos se conectam a um ponto central, geralmente um switch. Na topologia barramento, todos compartilham um único cabo principal. Na topologia anel, cada dispositivo se conecta a exatamente dois outros, formando um círculo. E na topologia malha, os dispositivos se conectam entre si de forma redundante, aumentando a confiabilidade.

Aliás, a banca costuma explorar justamente o ponto fraco de cada uma: na estrela, se o ponto central falha, toda a rede cai; no anel, a falha de um único dispositivo pode comprometer a comunicação.

O [artigo sobre topologias de rede](/topologias-de-rede-concursos/) traz o desenho de cada topologia e as vantagens e desvantagens mais cobradas.

## Internet, intranet e extranet: a classificação que a banca adora confundir

Por fim, chega o critério de acesso e propriedade, que é independente do alcance geográfico visto antes.

A internet é uma rede pública, aberta a qualquer usuário. A intranet é uma rede privada, restrita aos usuários internos de uma organização. Já a extranet estende parte da intranet para usuários externos autorizados, como fornecedores ou parceiros.

Na sua prova, se a banca afirmar que “toda rede grande é automaticamente uma extranet”, desconfie: o critério não é o tamanho, é quem tem permissão de acesso.

O [artigo sobre internet, intranet e extranet](/o-que-e-extranet/) esclarece essa diferença com exemplos que costumam gerar dúvida na hora da prova.

## Simulado de redes de computadores: hora de colocar em prática

Com esses conceitos revisados, chegou o momento de testar o que você aprendeu neste simulado de redes de computadores. Resolva as trinta questões no seu ritmo, sem consultar o comentário antes de responder, e anote os temas em que mais errar.

Perceba, ao longo das questões, como esses quatro blocos se cruzam na prática: o modelo TCP/IP explica como o dado trafega, o tipo de rede define o alcance dessa comunicação, a topologia mostra o arranjo físico dos equipamentos e a classificação internet, intranet e extranet determina quem tem permissão de acessar. Entender essa conexão, e não apenas decorar cada termo isoladamente, é o que faz a diferença na hora de eliminar alternativas em uma questão mais elaborada.

Questão 1 FGV

Qual é a função do DNS na Internet?

A) Converter endereços IP em nomes de domínio. B) Aumentar a largura de banda da rede. C) Proteger a rede contra malwares. D) Gerenciar cookies no navegador. E) Armazenar arquivos em nuvem.

Resposta correta: A

A opção A está correta; o DNS (Domain Name System) tem a função de converter endereços IP em nomes de domínio que são mais fáceis de lembrar. As outras opções não refletem as funções do DNS.

Questão 2 FGV

O que é a rede WAN?

A) Rede de Área Local B) Rede de longa distância C) Rede sem fio D) Rede de Área Metropolitana E) Rede Privada Virtual

Resposta correta: B

WAN significa Wide Area Network, que se refere a redes que cobrem grandes distâncias. As outras opções são definições de outros tipos de rede.

Questão 3 VUNESP

Qual protocolo é utilizado para a transmissão de e-mails?

A) FTP B) HTTP C) SMTP D) POP3 E) IMAP

Resposta correta: C

A opção C está correta, pois o SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para envio de e-mails na internet. As outras opções referem-se a outros serviços ou transferências de dados.

Questão 4 Cesgranrio

Qual é a principal função do protocolo FTP?

A) Transferir arquivos entre computadores B) Proteger a rede interna C) Enviar e-mails D) Conectar dispositivos em rede E) Acompanhamento de dados na nuvem

Resposta correta: A

A opção A é a correta, pois o FTP (File Transfer Protocol) é usado principalmente para a transferência de arquivos entre sistemas. As outras opções não são funções do FTP.

Questão 5 VUNESP

No contexto da segurança da informação nas redes, o que é phishing?

A) Método de transferência segura de arquivos B) Técnica de fraude para obter dados pessoais C) Protocolo utilizado para enviar e-mails seguros D) Software para proteção contra vírus E) Um tipo de servidor de e-mails

Resposta correta: B

Phishing é uma técnica de fraude online que visa enganar usuários para que revelem informações pessoais, como senhas e números de cartões de crédito. As outras definições não estão corretas.

Questão 6 IADES

Qual a função do protocolo IMAP em relação ao e-mail?

A) Enviar e-mails B) Armazenar e-mails localmente C) Gerenciar mensagens em um servidor D) Conectar navegadores à internet E) Transferir arquivos entre computadores

Resposta correta: C

IMAP (Internet Message Access Protocol) permite que usuários gerenciem e-mails diretamente no servidor. As outras opções não descrevem sua função corretamente.

Questão 7 FCC

No contexto da computação em nuvem, o que caracteriza o modelo SaaS (Software as a Service)?

A) O usuário controla a infraestrutura B) O software é instalado localmente C) O software é acessível via internet D) O usuário precisa pagar licenças fixas E) O software não pode ser atualizado

Resposta correta: C

O modelo SaaS permite que o usuário acesse o software pela internet, sem a necessidade de instalação local. As outras opções descrevem características de diferentes modelos de serviços de computação em nuvem.

Questão 8 Cesgranrio

O que caracteriza a computação em nuvem?

A) Distribuição de software apenas localmente B) Acesso remoto a recursos de TI C) Dependência total de servidores locais D) Uso exclusivo de redes privadas E) Transferência física de dados

Resposta correta: B

A resposta correta é a opção B, pois a computação em nuvem se caracteriza pelo acesso remoto a recursos de tecnologia da informação. As outras opções falham em descrever essa característica.

Questão 9 FGV

Qual é a principal diferença entre o protocolo IMAP e o protocolo POP3 na recuperação de e-mails?

A) POP3 armazena e-mails no servidor; IMAP não B) IMAP permite acessar e-mails de múltiplos dispositivos; POP3 não C) POP3 é mais seguro que IMAP D) IMAP só permite o envio de e-mails E) Não há diferença entre eles

Resposta correta: B

A principal diferença é que o IMAP permite que os e-mails sejam acessados de múltiplos dispositivos, enquanto o POP3, geralmente, baixa e remove os e-mails do servidor.

Questão 10 CEBRASPE

Um navegador de internet (browser), como Google Chrome, Mozilla Firefox ou Microsoft Edge, tem como função principal:

A) Interpretar código HTML, CSS e JavaScript para exibir páginas da web ao usuário B) Enviar e receber e-mails diretamente, sem uso de servidores C) Compilar programas escritos em linguagens de programação D) Gerenciar o sistema de arquivos do computador E) Proteger a rede contra vírus, substituindo o antivírus

Resposta correta: A

O navegador é o software responsável por requisitar páginas a servidores web e renderizar (interpretar e exibir) o HTML, CSS e JavaScript recebidos.

Questão 11 IADES

Qual protocolo é utilizado para enviar e-mails?

A) HTTP B) FTP C) SMTP D) IMAP E) DNS

Resposta correta: C

SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para envio de e-mails. HTTP é para web, FTP para transferência de arquivos, IMAP e DNS servem para gerenciar e-mails e resolução de domínios, respectivamente.

Questão 12 FCC

Qual a importância de um firewall em redes de computadores?

A) Aumentar a velocidade de conexão B) Criar cópias de segurança C) Bloquear acessos não autorizados D) Gerenciar servidores de e-mail E) Atualizar o software automaticamente

Resposta correta: C

Um firewall serve para filtrar e controlar o tráfego da rede, bloqueando acessos não autorizados e protegendo a rede interna. As outras opções não refletem sua função principal.

Questão 13 FCC

O que significa a sigla URL na web?

A) Universal Resource Locator B) Uniform Resource Locator C) Universal Resource Link D) Uniform Resource Link E) United Resource Locator

Resposta correta: B

URL significa Uniform Resource Locator, que é um sistema de endereçamento utilizado para localizar recursos na web. As outras opções contêm erros de terminologia.

Questão 14 CEBRASPE

Um firewall tem como principal função:

A) Monitorar e controlar o tráfego de rede (entrada e saída), permitindo ou bloqueando conexões com base em regras de segurança predefinidas B) Remover vírus já instalados no computador C) Armazenar backups automáticos de arquivos D) Traduzir endereços IP em nomes de domínio E) Acelerar a velocidade de download de arquivos

Resposta correta: A

O firewall atua como uma barreira de filtragem de tráfego de rede, decidindo o que pode entrar e sair com base em regras — ele não remove vírus já instalados (essa é função do antivírus).

Questão 15 FGV

Quando você acessa um site, que tipo de endereço é utilizado?

A) URL B) IP C) DOM D) HTTP E) FTP

Resposta correta: A

O URL (Uniform Resource Locator) é o endereço que aponta para um recurso na web. Os outros termos são relacionados, mas não são especificamente a forma de endereço de um site.

Questão 16 IADES

O que é um firewall?

A) Um tipo de navegador B) Um dispositivo de armazenamento C) Um sistema de segurança de rede D) Um aplicativo de edição de texto E) Um controlador de hardware

Resposta correta: C

Um firewall é um sistema de segurança de rede que monitoriza e controla o tráfego de entrada e saída. As outras opções não são funções de um firewall.

Questão 17 CEBRASPE

A sigla VPN (Virtual Private Network) se refere a uma tecnologia que:

A) Cria uma conexão criptografada e privada sobre uma rede pública (como a internet), permitindo acesso seguro a uma rede remota B) Aumenta permanentemente a velocidade da conexão à internet C) Substitui totalmente a necessidade de um antivírus no computador D) É um tipo de navegador especializado em compras online E) Bloqueia fisicamente o acesso à internet de um dispositivo

Resposta correta: A

A VPN estabelece um “túnel” criptografado sobre uma rede pública, permitindo que um dispositivo acesse uma rede privada remota (como a rede interna de uma empresa) com segurança.

Questão 18 FCC

Qual é a função do protocolo FTP?

A) Enviar e receber e-mails B) Transferir arquivos entre computadores C) Acessar páginas web D) Conectar dispositivos a uma rede E) Administrar servidores de e-mail

Resposta correta: B

O FTP (File Transfer Protocol) é especificamente utilizado para transferir arquivos entre um cliente e um servidor. As outras opções não correspondem à sua função.

Questão 19 FGV

Qual é um dos principais benefícios da computação em nuvem para empresas?

A) Aumento do custo com licenças de software. B) Necessidade de investimento em hardware. C) Acesso remoto a recursos e escalabilidade. D) Maior vulnerabilidade a ataques. E) Dependência total de provedores de Internet.

Resposta correta: C

A opção C é a correta, pois a computação em nuvem facilita o acesso a recursos remotamente e permite a escalabilidade. As outras opções são contrárias aos benefícios da nuvem.

Questão 20 IADES

O que é computação em nuvem?

A) Um tipo de dispositivo de armazenamento externo. B) A entrega de serviços de computação via Internet. C) Um software de segurança para redes. D) Um método de compressão de dados. E) Uma forma de instalação local de programas.

Resposta correta: B

A opção ‘B’ é correta, pois computação em nuvem refere-se à entrega de serviços, como armazenamento e processamento, pela Internet. As demais opções são definições incorretas.

Questão 21 CEBRASPE

Cookies armazenados por um navegador web são utilizados para rastrear a atividade do usuário e aprimorar a experiência de navegação baseada nas preferências do usuário.

Certo Errado

Resposta correta: Certo

Cookies ajudam a personalizar a experiência do usuário, armazenando informações sobre as atividades e preferências de navegação.

Questão 22 Cesgranrio

Qual é a vantagem do uso de computação em nuvem?

A) Maior custo com hardware B) Dependência de acesso à internet C) Dificuldade no gerenciamento de dados D) Aumento da capacidade de armazenamento sem investimento em hardware E) Necessidade de configurar servidores pessoais

Resposta correta: D

A resposta correta é a letra D, pois a computação em nuvem permite aumentar a capacidade de armazenamento sem necessidade de investimentos pesados em hardware. As demais opções descrevem desvantagens ou confusões sobre o conceito.

Questão 23 IADES

Qual é a principal função de um navegador de internet?

A) Prover serviço de e-mail B) Gerenciar redes locais C) Interpretar e exibir páginas web D) Executar aplicativos de desktop E) Armazenar arquivos na nuvem

Resposta correta: C

O navegador de internet é projetado para interpretar e exibir conteúdo da web. As outras respostas não correspondem à função principal de um navegador.

Questão 24 Cesgranrio

Qual é a principal característica de uma rede Intranet?

A) É uma rede pública e acessível à internet B) É utilizada apenas para comunicação externa C) Acesso restrito a uma organização específica D) Utiliza o protocolo FTP exclusivamente E) Interconecta várias redes de computadores públicas

Resposta correta: C

A opção C é a resposta correta, pois a Intranet serve como uma rede interna restrita a membros de uma organização. As outras opções não descrevem corretamente a natureza de uma Intranet.

Questão 25 VUNESP

Em relação à computação em nuvem, qual das seguintes afirmações é verdadeira?

A) A computação em nuvem exige que todas as aplicações sejam instaladas localmente. B) A computação em nuvem permite o acesso a recursos de TI via internet, sem necessidade de infraestrutura local. C) Na computação em nuvem, os dados são armazenados exclusivamente em dispositivos físicos do usuário. D) A computação em nuvem é mais segura do que qualquer forma de armazenamento local e não apresenta riscos. E) A computação em nuvem oferece serviços que podem ser acessados apenas de forma offline.

Resposta correta: B

A alternativa B está correta, pois a computação em nuvem oferece acesso a recursos através da internet, eliminando a necessidade de infraestrutura local. As outras alternativas estão erradas, pois a nuvem não exige instalação local, pode ter riscos de segurança e permite o acesso online, ao contrário do que afirmam.

Questão 26 VUNESP

O que é a Intranet?

A) Uma rede privada que utiliza a infraestrutura da internet B) Um tipo de portal público na internet C) Um sistema de e-mails corporativos D) Uma rede de computadores que cobre grandes áreas E) Um serviço de armazenamento em nuvem

Resposta correta: A

A opção A é a correta, pois Intranet se refere a uma rede privada que utiliza a tecnologia da internet para comunicação interna em organizações. As outras opções não representam a definição de Intranet.

Questão 27 VUNESP

Em um contexto de redes, o que significa a sigla VPN?

A) Virtual Public Network B) Virtual Private Network C) Variable Protected Network D) Visual Private Network E) Virtual Protocol Network

Resposta correta: B

A opção B é a correta, pois VPN significa Virtual Private Network, uma tecnologia que cria uma conexão segura através da internet. As demais alternativas são incorretas por não representarem a definição correta da sigla.

Questão 28 FCC

Qual é a principal vantagem da virtualização em data centers?

A) Aumento da temperatura B) Redução do custo de hardware C) Aumento do tráfego de rede D) Complexidade na gestão E) Aumento do consumo de energia

Resposta correta: B

A virtualização permite que vários ambientes virtuais sejam executados em um único hardware, reduzindo assim os custos com servidores físicos. As outras alternativas são contrárias aos benefícios da virtualização.

Questão 29 Cesgranrio

Ao acessar um site, o navegador armazena informações para otimizar futuras visitas. Que tipo de dado é geralmente armazenado nesse processo?

A) Cookies B) Backups C) Histórico D) Cache E) Logs

Resposta correta: A

Cookies são pequenos arquivos que armazenam dados de navegação e preferências do usuário. Histórico registra páginas acessadas, cache armazena dados temporários, logs são registros de atividades e backups são cópias. Cada um tem funções distintas, mas não são usados para otimizar visitas da mesma forma que cookies.

Questão 30 CEBRASPE

A principal função do navegador é atuar como um cliente que solicita informações da web para que o usuário possa visualizá-las.

Certo Errado

Resposta correta: Certo

Os navegadores são softwares que processam e apresentam conteúdos solicitados na web.

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

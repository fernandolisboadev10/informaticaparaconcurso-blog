---
title: "Redes de Computadores para Concursos: a aula completa para você não errar mais nenhuma questão"
description: "Redes de computadores para concursos: tipos de rede, topologias, componentes, modelos OSI e TCP/IP, internet, intranet, extranet, HTTP, HTTPS e VPN, com questões comentadas."
category: "Redes"
date: 2026-09-09T17:52:10-03:00
updated: 2026-10-05T11:20:00-03:00
readingTime: "14 min"
image: "./images/Redes-de-Computadores.webp"
imageAlt: "Redes de Computadores para Concursos"
---

Redes de computadores para concursos é um daqueles assuntos que parecem simples à primeira vista, mas escondem detalhes que a banca adora explorar. Por isso, em vez de decorar definições soltas, vamos construir o raciocínio do começo ao fim: o que é uma rede, como ela se classifica, como os dados trafegam nela com segurança e, por fim, como tudo isso se conecta com internet, intranet, extranet, HTTP, HTTPS e VPN. Ao final desta aula, você terá o quadro completo na cabeça, e não apenas pedaços soltos de teoria.

## O que é uma rede de computadores, afinal?

Uma rede de computadores existe sempre que dois ou mais dispositivos se conectam para trocar dados entre si. Essa conexão pode acontecer por cabo, por fibra óptica ou por sinal de rádio, no caso do Wi-Fi, mas a ideia central continua a mesma: permitir que informação circule de um ponto a outro.

Na prática, você já usa redes de computadores o tempo todo, seja ao imprimir um documento em uma impressora compartilhada, seja ao acessar um sistema do governo pelo celular. Justamente por estar tão presente no dia a dia, esse assunto costuma aparecer em praticamente toda prova de informática para concursos.

## Por que redes de computadores cai tanto nas provas?

As principais bancas (Cebraspe, FGV, FCC, IBFC, Vunesp e AOCP, entre outras) cobram redes porque o assunto conecta teoria e a rotina do servidor público. Cada banca tem um estilo: o Cebraspe usa o formato certo ou errado e explora pequenos deslizes conceituais, como trocar “roteador” por “switch” ou confundir LAN com WAN; a FGV prefere múltipla escolha com cenários práticos; a FCC tende a cobrar definições mais literais; e o IBFC e a Vunesp equilibram teoria e aplicação. Por isso, não adianta decorar definições isoladas: é preciso entender o raciocínio para reconhecer a **pegadinha**, qualquer que seja a banca.

## Tipos de rede: do seu quarto ao mundo inteiro

As redes se classificam principalmente pela extensão geográfica que cobrem. Vale a pena memorizar essa escala, porque a banca gosta de trocar uma sigla pela outra.

-   **PAN (Personal Area Network):** rede pessoal, de curtíssimo alcance, como a conexão Bluetooth entre o seu celular e um fone de ouvido.
-   **LAN (Local Area Network):** rede local, restrita a um prédio ou a um escritório, como a rede Wi-Fi da sua casa ou do seu trabalho.
-   **MAN (Metropolitan Area Network):** rede metropolitana, que cobre uma cidade inteira ou parte dela.
-   **WAN (Wide Area Network):** rede de longa distância, que conecta cidades, estados ou países. A própria internet é o maior exemplo de WAN que existe.

Repare que, quanto maior a rede, maior também a complexidade de gerenciamento e de segurança envolvida. Esse detalhe, aliás, é justamente o que conecta o assunto de tipos de rede ao próximo tópico desta aula. Se quiser aprofundar em cada um desses tipos, com mais exemplos e questões comentadas, vale a pena conferir nosso artigo dedicado sobre [tipos de redes de computadores](/tipos-redes-computadores-concursos/).

Um cuidado importante: LAN, MAN, WAN e PAN respondem “**até onde a rede alcança**”, enquanto internet, intranet e extranet (que você vê mais abaixo) respondem “**quem pode acessar a rede**”. São critérios diferentes, e sempre que a banca misturar os dois na mesma alternativa, desconfie.

#### Escala das redes, do menor para o maior alcance

📶

PAN

Fone Bluetooth

→

🏠

LAN

Wi-Fi de casa

→

🏙️

MAN

Rede da cidade

→

🌍

WAN

A internet

## Topologias de rede: como os dispositivos se organizam fisicamente

Além do tamanho, uma rede também se organiza segundo uma topologia, ou seja, o formato de conexão entre os dispositivos. Veja como funciona cada uma das principais:

-   **Estrela:** todos os dispositivos se conectam a um ponto central, geralmente um switch ou roteador. Esse modelo predomina nas redes domésticas e corporativas atuais, principalmente porque um cabo rompido afeta apenas um dispositivo, sem derrubar a rede inteira.
-   **Barramento:** todos os dispositivos compartilham um único cabo central, o que torna a rede mais vulnerável, pois uma falha nesse cabo compromete a comunicação de todos.
-   **Anel:** os dispositivos formam um círculo lógico, e os dados circulam nessa sequência até chegar ao destino.
-   **Malha:** cada dispositivo se conecta a vários outros diretamente, o que aumenta a redundância, mas também eleva o custo de implementação.

Para ver cada uma dessas topologias comentada em detalhes, com as **pegadinhas** mais cobradas pela banca, confira o artigo específico sobre [topologias de rede](/topologias-de-rede-concursos/).

#### As quatro topologias mais cobradas em prova

Estrela

Barramento

Anel

Malha

## Componentes essenciais de uma rede

Para que a comunicação aconteça, vários elementos atuam em conjunto:

-   **Dispositivos finais (hosts):** computadores, servidores, impressoras e smartphones que originam ou recebem dados.
-   **Roteadores:** direcionam o tráfego entre redes diferentes e operam na camada de rede.
-   **Switches:** conectam vários dispositivos dentro de uma mesma rede local e atuam na camada de enlace.
-   **Hubs:** replicam o sinal para todas as portas, sem inteligência alguma, e funcionam apenas na camada física.
-   **Meios de transmissão:** cabos de par trançado, fibra óptica e o espectro de radiofrequência, nas redes sem fio.
-   **Protocolos:** conjuntos de regras padronizadas, como o TCP/IP, que definem como os dados são formatados, transmitidos e entregues.

A **pegadinha** frequente é a banca trocar “roteador” por “switch” ou “hub” na mesma frase. Memorize: **hub replica, switch direciona dentro da rede local, e roteador direciona entre redes diferentes**.

## Modelos de referência: OSI e TCP/IP

Os modelos em camadas dividem um processo complexo em etapas menores, o que os torna mais fáceis de estudar e de cobrar em prova.

O modelo **OSI** (Open Systems Interconnection) organiza a comunicação em sete camadas:

1.  **Física:** transmite o bit pelo meio físico.
2.  **Enlace:** controla o acesso ao meio e trata o endereçamento físico (MAC).
3.  **Rede:** cuida do roteamento e do endereçamento lógico (IP).
4.  **Transporte:** garante o controle de fluxo e a confiabilidade (TCP/UDP).
5.  **Sessão:** gerencia as sessões entre aplicações.
6.  **Apresentação:** traduz e criptografa os dados.
7.  **Aplicação:** faz a interface com o software do usuário.

Já o modelo **TCP/IP**, o que realmente funciona na internet, condensa essas sete camadas em quatro: acesso à rede, internet, transporte e aplicação. Esse é um detalhe que costuma confundir: o OSI é a referência teórica e didática, um mapa conceitual, enquanto o TCP/IP é o modelo efetivamente implementado. Não troque um pelo outro na prova.

## Internet: a rede pública e mundial

Chegamos, então, à rede que você mais usa no dia a dia. A internet é uma rede mundial de computadores, aberta e pública, que conecta praticamente qualquer dispositivo do planeta que tenha um endereço IP válido. Ninguém detém o controle central dela, e por isso ela funciona de forma descentralizada, com diversos provedores e organizações cooperando entre si.

Na prática, a internet é o ambiente que você usa para pesquisar, comprar, estudar e se comunicar sem restrição de empresa ou instituição. Justamente por ser aberta, ela também exige cuidado redobrado com segurança, já que qualquer pessoa pode tentar acessar os mesmos recursos que você.

## Intranet: a rede privada de uma organização

A intranet usa a mesma tecnologia da internet, ou seja, os mesmos protocolos, como o TCP/IP e o HTTP, mas restringe o acesso apenas aos membros de uma organização. Uma empresa, por exemplo, disponibiliza nela documentos internos, sistemas de RH, comunicados e ferramentas que só os funcionários enxergam.

Aqui está um ponto que merece atenção redobrada: a banca costuma afirmar que a intranet “sempre” fica isolada da internet ou que “nunca” tem qualquer ponto de conexão externa. Isso é errado. Muitas intranets se conectam à internet por meio de [firewalls](/aplicativos-para-seguranca-antivirus-firewall-antispyware/) e VPNs, sempre com controle rígido de acesso. O que caracteriza a intranet não é a ausência total de conexão externa, mas sim a restrição de quem pode entrar.

## Extranet: quando a intranet abre uma porta para fora

A extranet nasce a partir da intranet, porém amplia o acesso para pessoas de fora da organização, como fornecedores, parceiros comerciais ou clientes específicos. Dessa forma, uma parte controlada da rede interna fica visível para quem a empresa autoriza, mediante login e permissões bem definidas.

Pense em um fornecedor que precisa consultar o estoque de uma fábrica para planejar entregas. A empresa não vai liberar toda a intranet para ele, mas pode liberar, através de uma extranet, apenas o sistema de consulta de estoque, protegido por senha. Se você quiser se aprofundar ainda mais nessa distinção, com mais exemplos e questões comentadas, temos um artigo inteiro dedicado a [internet, intranet e extranet](/o-que-e-extranet/).

#### Quem enxerga cada camada da rede

INTERNET EXTRANET INTRANET

🔵 Todo mundo acessa

🟣 Empresa + parceiros

🟢 Só os funcionários

| Rede | Quem acessa | Exemplo de uso |
| --- | --- | --- |
| Internet | Qualquer pessoa, no mundo todo | Pesquisar, navegar, comprar online |
| Intranet | Somente membros da organização | Portal interno de RH, sistemas corporativos |
| Extranet | Membros da organização e parceiros externos autorizados | Portal de fornecedores, consulta de pedidos |

## HTTP: o idioma que o navegador usa para conversar com o servidor

Toda vez que você digita um endereço no navegador, o computador precisa pedir aquela página a um servidor, em algum lugar do mundo, e o servidor precisa responder. O HTTP (HyperText Transfer Protocol) é justamente o protocolo que define as regras dessa conversa: como o pedido é formulado, como a resposta chega e como o conteúdo, seja texto, imagem ou vídeo, é transmitido.

O detalhe que mais cai em prova é este: o HTTP, por padrão, transmite os dados em texto claro, sem criptografia. Isso significa que, se alguém interceptar essa comunicação no meio do caminho, consegue ler tudo o que está sendo transmitido, incluindo senhas e dados sensíveis, caso o site não use proteção adicional.

## HTTPS: o HTTP com uma camada de segurança

O HTTPS (HTTP Secure) resolve exatamente essa fragilidade. Ele adiciona uma camada de criptografia por meio dos protocolos TLS, ou o mais antigo SSL, sobre o HTTP tradicional. Assim, mesmo que alguém intercepte os dados no meio do caminho, encontra apenas informação criptografada, sem conseguir interpretar o conteúdo.

O cadeado que aparece ao lado do endereço no navegador indica que a conexão usa HTTPS, ou seja, que os dados trafegam criptografados entre o seu navegador e o servidor. Isso garante confidencialidade e integridade, mas não significa, por si só, que o site é confiável ou livre de golpes.

Esse ponto costuma confundir o candidato: o HTTPS protege o caminho dos dados, não o conteúdo do site. Um site malicioso também pode usar HTTPS. Por isso, não confunda “conexão segura” com “site confiável”.

🔓

HTTP

Dados em texto claro.  
Qualquer um pode interceptar.

🔒

HTTPS

Dados criptografados via TLS/SSL.  
Protege o caminho, não garante confiança.

## VPN: estendendo a rede privada para fora da empresa

A VPN (Virtual Private Network, ou Rede Privada Virtual) cria um túnel criptografado sobre uma rede pública, geralmente a própria internet, permitindo que um usuário externo acesse recursos da intranet como se estivesse fisicamente dentro da empresa. Um funcionário em home office, por exemplo, ativa a VPN e passa a enxergar os sistemas internos normalmente, mesmo estando em outra cidade.

A palavra-chave aqui é “túnel”: os dados saem criptografados do dispositivo do usuário, atravessam a internet pública dentro desse túnel protegido e só são decriptografados ao chegar ao destino autorizado. Consequentemente, mesmo trafegando por uma rede pública, a comunicação mantém as características de privacidade de uma rede interna.

Na prova, fique atento a mais uma **pegadinha**: a banca pode afirmar que a VPN “elimina totalmente” qualquer risco de segurança ou que “substitui” o firewall. Nenhuma das duas coisas é verdadeira. A VPN protege o tráfego em trânsito, mas não substitui outras camadas de proteção, como [firewall e antivírus](/aplicativos-para-seguranca-antivirus-firewall-antispyware/), além da própria autenticação do usuário.

#### Como o túnel da VPN atravessa a internet pública

🧑‍💻

Funcionário  
em home office

túnel criptografado

🌐

Internet  
pública

túnel criptografado

🏢

Rede interna  
da empresa

## Segurança em redes de computadores

Quanto mais as organizações dependem de redes, mais peso a segurança da informação ganha nas provas. As ameaças mais cobradas incluem malwares, ataques de negação de serviço (DDoS) e interceptação de dados. Para reduzir esses riscos, os administradores aplicam criptografia, autenticação robusta e segmentação da rede em sub-redes menores. A segurança deixa de ser um produto instalado uma vez e passa a ser um processo contínuo, com atualização constante de protocolos e conscientização dos usuários.

## Exemplos de questão Certo ou Errado

**“O roteador atua na camada de enlace do modelo OSI e tem como função conectar múltiplos dispositivos dentro de uma mesma rede local.”**

_Errado._ O roteador atua na camada de rede, e conectar dispositivos dentro da mesma rede local é função do switch. A banca embaralha dois conceitos corretos, mas atribui cada um ao dispositivo errado.

**“A intranet, por definição, nunca mantém qualquer conexão com a internet.”**

_Errado._ Como você viu ao longo da aula, a intranet pode se conectar à internet, desde que exista controle de acesso, como firewall e VPN, entre as duas redes.

## Resumo geral da aula de redes de computadores para concursos

Uma rede de computadores conecta dispositivos para troca de dados e se classifica, quanto à extensão, em PAN, LAN, MAN ou WAN, além de se organizar fisicamente em topologias como estrela, barramento, anel ou malha. Dentro desse universo, a internet é pública e mundial, a intranet restringe o acesso aos membros de uma organização, mesmo podendo ter pontos de conexão externa controlados, e a extranet libera parte da intranet para parceiros externos autorizados. Já o HTTP transmite dados sem criptografia, enquanto o HTTPS adiciona essa criptografia através do TLS/SSL. Por fim, a VPN cria um túnel criptografado que permite acessar a intranet a partir de fora, sem que isso substitua outras camadas de segurança. Nos equipamentos, o hub opera na camada física, o switch na de enlace e o roteador na de rede, e o modelo OSI tem sete camadas, contra quatro do TCP/IP. Para testar o que você absorveu até aqui, aproveite também o nosso [simulado de redes](/simulado-redes/) com questões comentadas.

### 📖 Glossário rápido da aula

**INTERNET**

Rede mundial e pública de computadores, sem controle central único.

**INTRANET**

Rede privada de uma organização, com acesso restrito aos seus membros.

**EXTRANET**

Extensão controlada da intranet, liberada para parceiros externos autorizados.

**HTTP**

Protocolo que define as regras de comunicação entre navegador e servidor, sem criptografia por padrão.

**HTTPS**

Versão do HTTP com criptografia adicional via TLS/SSL, garantindo confidencialidade dos dados.

**VPN**

Túnel criptografado sobre uma rede pública, usado para acessar recursos internos de fora da empresa.

**TCP/IP**

Conjunto de protocolos que organiza o tráfego de dados entre dispositivos em rede.

**FIREWALL**

Mecanismo que filtra o tráfego de rede, permitindo ou bloqueando conexões conforme regras de segurança.

### Treine com mais questões

Para fixar o conteúdo, resolva o [simulado de redes de computadores](/simulado-redes/), com 30 questões comentadas no estilo das bancas, e depois revise os temas em que errar.

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

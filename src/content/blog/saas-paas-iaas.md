---
title: "SaaS, PaaS e IaaS: diferenças e como cai em concurso"
description: "SaaS, PaaS e IaaS: entenda a diferença entre os modelos de serviço em nuvem, quem gerencia cada camada e as pegadinhas que cobram na prova."
category: "Redes"
date: 2026-09-24T00:17:25-03:00
updated: 2026-09-24T00:46:56Z
readingTime: "8 min"
image: "./images/saas-paas-e-iaas.webp"
imageAlt: "SaaS, PaaS e IaaS"
---

Poucos assuntos de computação em nuvem aparecem tanto em prova quanto **SaaS, PaaS e IaaS**. Além disso, a banca raramente pergunta só o significado da sigla. Ela quer saber quem gerencia o quê, e é justamente aí que o candidato perde pontos.

Por isso, vou mostrar o conceito de cada modelo, exemplos reais, uma tabela comparativa e as pegadinhas mais comuns. No final, você testa o conhecimento com 10 questões comentadas.

## O que são os modelos de serviço em nuvem

Primeiramente, entenda a lógica. Na nuvem, você contrata recursos computacionais de um provedor em vez de manter tudo na sua própria sala de servidores. Se quiser revisar a base do tema, veja o nosso artigo sobre [armazenamento em nuvem](/cloud-storage-armazenamento-de-dados-na-nuvem/).

O NIST, órgão de padronização dos Estados Unidos, define três modelos de serviço na publicação SP 800-145. A diferença entre eles está no quanto o provedor gerencia e no quanto sobra para o cliente. Ou seja, cada modelo divide as responsabilidades de um jeito.

Guarde esta ideia: quanto mais você sobe de IaaS para SaaS, menos controle o cliente tem e menos trabalho ele assume.

## IaaS: infraestrutura como serviço

Inicialmente, pense no nível mais baixo. No IaaS (Infrastructure as a Service), o provedor entrega processamento, armazenamento e rede. Em outras palavras, você aluga uma máquina virtual e faz o resto.

Dessa forma, o cliente instala e gerencia o sistema operacional, as aplicações e os dados. Por outro lado, o provedor cuida do hardware físico, da virtualização e do data center.

Exemplos clássicos:

-   Amazon EC2
-   Microsoft Azure Virtual Machines
-   Google Compute Engine

Aqui está um ponto que merece atenção: no IaaS, **o cliente controla o sistema operacional**. As bancas adoram perguntar isso.

## PaaS: plataforma como serviço

Na sequência, subimos um degrau. No PaaS (Platform as a Service), o provedor entrega um ambiente pronto para desenvolver e hospedar aplicações. Assim, o desenvolvedor foca apenas no código.

Nesse modelo, o cliente implanta suas aplicações e gerencia os dados. No entanto, ele não administra servidores, rede, armazenamento nem sistema operacional. O provedor assume toda essa camada.

Exemplos:

-   Google App Engine
-   Azure App Service
-   Heroku

Esse é um detalhe que costuma confundir o candidato. Se a questão afirmar que, no PaaS, o cliente gerencia o sistema operacional, marque errado.

## SaaS: software como serviço

Por fim, chegamos ao topo. No SaaS (Software as a Service), você usa uma aplicação completa pela internet, geralmente pelo navegador. Não instala nada no servidor e não programa nada.

Consequentemente, o provedor gerencia tudo: infraestrutura, plataforma e a própria aplicação. O usuário ajusta, no máximo, configurações pessoais, como preferências da conta.

Você usa SaaS todos os dias:

-   Gmail
-   Microsoft 365
-   Google Drive
-   Dropbox

![](./images/saas-paas-iaas-exemplos-1024x683.webp)

## SaaS, PaaS e IaaS lado a lado

Agora, compare os três modelos na mesma tela. Na prova, a banca pode explorar justamente essa diferença de responsabilidades.

### Tabela comparativa

☁️ SaaS, PaaS e IaaS: quem gerencia cada camada

   
| Camada | 🖥️ IaaS | 🧩 PaaS | 📧 SaaS |
| --- | --- | --- | --- |
| Dados e acessos | Cliente | Cliente | Cliente |
| Aplicação | Cliente | Cliente | Provedor |
| Ambiente de execução | Cliente | Provedor | Provedor |
| Sistema operacional | Cliente | Provedor | Provedor |
| Virtualização | Provedor | Provedor | Provedor |
| Servidores, rede e storage | Provedor | Provedor | Provedor |
| Exemplos | EC2, Azure VM | App Engine, Heroku | Gmail, Microsoft 365 |

💡 Dica de prova: se o cliente gerencia o sistema operacional, o modelo é IaaS.

### A analogia que ajuda a memorizar

Na prática, funciona assim com o transporte:

-   **IaaS** é alugar um carro: o veículo é do locador, mas você dirige, abastece e escolhe o caminho.
-   **PaaS** é contratar um carro com motorista: você só diz para onde quer ir.
-   **SaaS** é pegar um ônibus: tudo já está pronto, e você apenas usa o serviço.

## Como a banca cobra SaaS, PaaS e IaaS

Antes de tudo, fique atento a três armadilhas recorrentes.

A primeira troca as responsabilidades. A banca atribui ao cliente do PaaS a gestão do sistema operacional, ou diz que o usuário de SaaS administra a infraestrutura. Ambas as afirmações estão erradas.

A segunda mistura categorias. Não confunda os dois conceitos: SaaS, PaaS e IaaS são **modelos de serviço**, enquanto nuvem pública, privada, híbrida e comunitária são **modelos de implantação**. Se o item disser que “nuvem híbrida é um modelo de serviço”, está errado.

A terceira usa palavras absolutas. No estilo Cebraspe, termos como “sempre”, “somente” e “exclusivamente” costumam indicar erro. Por exemplo: “No IaaS, o provedor gerencia exclusivamente o sistema operacional” está errado, porque quem gerencia o sistema operacional é o cliente.

É aqui que aparece uma das principais pegadinhas: a banca descreve um cenário e pede o modelo. Então identifique o que o cliente controla. Se ele controla o sistema operacional, é IaaS. Se controla só o código, é PaaS. Se apenas usa o software, é SaaS.

## Conclusão

Em resumo, **SaaS, PaaS e IaaS** diferem pela divisão de responsabilidades entre provedor e cliente. O IaaS entrega infraestrutura, o PaaS entrega plataforma e o SaaS entrega o software pronto.

Portanto, memorize este ponto: quem gerencia o sistema operacional define boa parte das respostas. Agora resolva as questões abaixo e, em seguida, avance para os modelos de implantação e as características essenciais da nuvem, que costumam cair no mesmo item do edital.

📝 Teste seus conhecimentos: SaaS, PaaS e IaaS

10 questões comentadas. Clique na alternativa para ver a resposta.

Questão 1Estilo CEBRASPE

No modelo IaaS, o cliente é responsável por gerenciar o sistema operacional das máquinas virtuais que contrata.

CertoErrado

✅ Resposta correta: Certo

No IaaS, o provedor entrega a infraestrutura virtualizada, e o cliente instala e administra o sistema operacional, as aplicações e os dados.

Questão 2Estilo CEBRASPE

No modelo PaaS, o cliente gerencia o sistema operacional e os servidores, enquanto o provedor fornece apenas as ferramentas de desenvolvimento.

CertoErrado

✅ Resposta correta: Errado

No PaaS, o provedor gerencia servidores, rede, armazenamento e sistema operacional. O cliente cuida apenas das aplicações que implanta e dos dados.

Questão 3Estilo CEBRASPE

Serviços de correio eletrônico acessados pelo navegador, como o Gmail, são exemplos do modelo SaaS.

CertoErrado

✅ Resposta correta: Certo

O usuário consome uma aplicação pronta pela internet, sem gerenciar infraestrutura ou plataforma. Essa é a definição de SaaS.

Questão 4Estilo CEBRASPE

Nuvem pública, nuvem privada e nuvem híbrida são exemplos de modelos de serviço em computação em nuvem.

CertoErrado

✅ Resposta correta: Errado

Pública, privada, híbrida e comunitária são modelos de implantação. Os modelos de serviço são SaaS, PaaS e IaaS.

Questão 5Estilo CEBRASPE

No modelo SaaS, o usuário pode ajustar configurações específicas da aplicação, como preferências da própria conta, mas não controla a infraestrutura subjacente.

CertoErrado

✅ Resposta correta: Certo

Segundo o NIST, no SaaS o consumidor tem, no máximo, acesso a configurações limitadas da aplicação voltadas ao próprio usuário.

Questão 6Estilo CEBRASPE

No modelo IaaS, o provedor gerencia exclusivamente as aplicações do cliente, e este fica responsável pelo hardware físico do data center.

CertoErrado

✅ Resposta correta: Errado

A lógica está invertida. No IaaS, o provedor mantém o hardware físico e a virtualização, e o cliente gerencia sistema operacional e aplicações. Repare no termo absoluto "exclusivamente".

Questão 7Estilo FGV

Uma equipe de desenvolvimento quer publicar uma aplicação web sem se preocupar com a instalação e a atualização do sistema operacional dos servidores. O modelo de serviço mais adequado é:

**A)** SaaS**B)** PaaS**C)** IaaS**D)** Nuvem privada**E)** Nuvem híbrida

✅ Resposta correta: Letra B

O PaaS entrega a plataforma pronta. A equipe envia o código, e o provedor cuida do sistema operacional e da infraestrutura. As alternativas D e E são modelos de implantação.

Questão 8Estilo FCC

Uma empresa contratou máquinas virtuais em um provedor de nuvem e instalou nelas o sistema operacional e o banco de dados de sua preferência. Trata-se do modelo:

**A)** SaaS**B)** DaaS**C)** PaaS**D)** IaaS**E)** FaaS

✅ Resposta correta: Letra D

Quando o cliente instala e controla o sistema operacional sobre máquinas virtuais alugadas, o modelo é IaaS.

Questão 9Estilo VUNESP

Assinale a alternativa que apresenta apenas exemplos de SaaS.

**A)** Amazon EC2 e Google Compute Engine**B)** Google App Engine e Heroku**C)** Microsoft 365 e Google Drive**D)** Azure Virtual Machines e Heroku**E)** Amazon EC2 e Microsoft 365

✅ Resposta correta: Letra C

Microsoft 365 e Google Drive são aplicações prontas acessadas pela internet. EC2, Compute Engine e Azure VM são IaaS; App Engine e Heroku são PaaS.

Questão 10Estilo FGV

Em relação à divisão de responsabilidades entre cliente e provedor nos modelos de serviço em nuvem, é correto afirmar que:

**A)** no SaaS, o cliente gerencia a aplicação e o sistema operacional**B)** no PaaS, o cliente gerencia a virtualização**C)** no IaaS, o provedor gerencia o sistema operacional do cliente**D)** quanto mais se avança de IaaS para SaaS, maior é a parcela gerenciada pelo provedor**E)** nos três modelos, o cliente é responsável pelo hardware físico

✅ Resposta correta: Letra D

Do IaaS ao SaaS, o provedor assume cada vez mais camadas, e o cliente, cada vez menos. Em nenhum dos três modelos o cliente cuida do hardware físico.

## Fontes e referências

-   MELL, Peter; GRANCE, Timothy. [The NIST Definition of Cloud Computing (SP 800-145)](https://csrc.nist.gov/pubs/sp/800/145/final). NIST, 2011.
-   Microsoft. [Responsabilidade compartilhada na nuvem](https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility). Microsoft Learn.
-   Amazon Web Services. [Types of Cloud Computing](https://aws.amazon.com/types-of-cloud-computing/). AWS.
-   Google Cloud. [PaaS vs. IaaS vs. SaaS vs. CaaS](https://cloud.google.com/learn/paas-vs-iaas-vs-saas). Google Cloud.

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

---
title: "O que é Extranet? Diferença entre Internet, Intranet e Extranet para Concursos"
description: "Entenda o que é extranet e a diferença entre internet, intranet e extranet para concursos: quem acessa cada rede, pegadinhas e questões comentadas."
category: "Redes"
date: 2026-09-13T16:35:26-03:00
updated: 2026-10-05T11:00:00-03:00
readingTime: "13 min"
image: "./images/extranet.webp"
imageAlt: "O Que É Extranet"
---

Você já parou para pensar em como uma empresa consegue dar acesso ao sistema interno para um fornecedor, sem abrir a rede inteira para qualquer pessoa? É exatamente aí que entra a extranet, um dos conceitos mais cobrados pelas bancas quando o assunto é redes de computadores.

Antes de entrar nos detalhes, vale fixar uma ideia central que vale para internet, intranet e extranet: as três usam a mesma tecnologia, o conjunto de protocolos TCP/IP que sustenta a web inteira. Portanto, a diferença não está na tecnologia, mas em **quem pode acessar a rede**. Esse critério de acesso é o que você precisa gravar para não cair em pegadinha.

## O que é extranet, na prática

Extranet é a extensão controlada da intranet de uma organização para pessoas de fora dela, como fornecedores, clientes ou parceiros comerciais. Diferentemente da intranet, que fica restrita aos funcionários, essa extensão libera uma parte específica da rede para quem tem uma relação direta com a empresa.

Segundo o glossário de segurança do NIST (CNSSI 4009-2022), esse tipo de rede é “uma rede de computadores que uma organização usa para o tráfego de dados de aplicações entre ela e seus parceiros de negócio”. Ou seja, o acesso nunca é livre: existe sempre um vínculo comercial por trás dele.

Guarde esta ideia: extranet não é sinônimo de acesso público. Antes de tudo, ela pressupõe uma relação previamente estabelecida entre a empresa e quem está do outro lado da conexão.

## Como funciona o acesso a essa rede corporativa externa

![](./images/extranet-1-1024x683.webp)

Na prática, essa rede funciona como uma porta lateral da intranet, aberta apenas para visitantes autorizados. Assim, o usuário externo recebe login e senha próprios, com permissões limitadas àquilo que ele realmente precisa enxergar.

Além disso, a empresa costuma usar VPN, certificados digitais ou portais web protegidos por HTTPS, que o parceiro acessa normalmente pelo [navegador](/buscador-e-navegador/) como qualquer outra página, para garantir que só o usuário autenticado chegue até os dados. Dessa forma, o restante da rede interna continua isolado, fora do alcance de quem entra por essa via.

Não confunda os dois conceitos: a extranet amplia o alcance da rede corporativa, mas não elimina o controle de acesso. Pelo contrário, ela depende dele para existir com segurança.

## Um exemplo real de uso

Imagine uma fábrica que cria um portal para seus fornecedores. Por meio dele, cada fornecedor consulta o estoque, acompanha pedidos em andamento e envia notas fiscais diretamente no sistema da empresa.

Esse fornecedor não tem acesso ao restante da rede interna, como o setor financeiro ou o RH. Ele enxerga somente a área da extranet liberada para o papel dele, o que ilustra bem o conceito de acesso segmentado por perfil.

## Vantagens e riscos da extranet para as empresas

Para a empresa, a extranet resolve um problema concreto: integrar parceiros ao fluxo de trabalho sem duplicar sistemas nem abrir a rede inteira. Dessa forma, fornecedores atualizam pedidos, clientes acompanham entregas e contadores consultam documentos, tudo dentro de um ambiente controlado, sem depender de e-mail ou telefone para cada solicitação.

Por outro lado, ampliar o acesso da rede também amplia a superfície de ataque. Por esse motivo, a extranet exige cuidados extras: perfis de acesso bem definidos, autenticação forte e monitoramento constante das conexões externas. Não é à toa que esse tipo de rede aparece também em questões de segurança da informação, não somente nas que cobram a classificação de redes.

## Internet: a rede mundial que qualquer pessoa acessa

A internet conecta milhões de redes espalhadas pelo mundo, e qualquer pessoa com um provedor de acesso consegue entrar nela. Por isso, ela funciona como uma rede pública, aberta e sem dono único: nenhuma empresa ou governo controla a internet como um todo, embora organizações como a ICANN cuidem de partes específicas, como a distribuição de domínios.

Quando você digita um endereço no navegador, o protocolo DNS traduz aquele nome em um endereço IP e o seu computador localiza o servidor correto em algum lugar do planeta. Na prova, a internet aparece como a rede de alcance mundial e acesso irrestrito. Se a questão disser que a internet é uma rede privada, marque errado sem hesitar. Para revisar como os protocolos se conectam, veja a [aula completa sobre redes de computadores](/redes-de-computadores-para-concursos/).

## Intranet: a rede interna que só a empresa acessa

A intranet usa a mesma estrutura de protocolos da internet, mas funciona de forma fechada, dentro dos limites de uma organização. Somente funcionários e colaboradores autorizados acessam esse ambiente, geralmente por uma rede local ou por uma conexão remota autenticada, como uma VPN. A empresa a usa para compartilhar documentos internos, sistemas de gestão, comunicados e ferramentas de trabalho.

Aqui está um ponto que costuma confundir: a intranet não é uma rede fisicamente separada da internet, ela apenas restringe o acesso usando os mesmos protocolos. Tecnicamente, funciona como uma internet privada, e não como uma tecnologia diferente. O Cebraspe gosta de testar justamente isso.

## Extranet x intranet x internet: a diferença que a banca cobra

Por esse motivo, é fundamental separar bem os três conceitos antes da prova. A internet é aberta a qualquer pessoa no mundo. A intranet fica restrita ao público interno da organização. Já a extranet ocupa o meio-termo: parte da rede interna, liberada para um público externo específico e autenticado.

![O que e extranet tabela comparativa](./images/o-que-e-extranet-tabela-comparativa-1024x683.webp)

| Rede | Quem acessa | Alcance | Exemplo |
| --- | --- | --- | --- |
| **Internet** | Qualquer pessoa com provedor de acesso | Mundial | Sites públicos, redes sociais |
| **Intranet** | Funcionários da empresa | Interno | Portal do RH, sistema interno |
| **Extranet** | Funcionários + parceiros externos autenticados | Interno estendido | Portal do fornecedor |

Aliás, essa classificação trata de quem pode acessar a rede, não do alcance geográfico dela. Não misture esse critério com a classificação de LAN, MAN e WAN, que trata de outra coisa: a distância física coberta pela rede.

## Pegadinhas de prova sobre esse tema

Cabe destacar que as bancas adoram testar esse conceito com afirmações absolutas. Se a questão disser que a extranet é “totalmente aberta ao público” ou que “qualquer usuário da internet pode acessá-la livremente”, desconfie: a afirmação está errada.

Se a questão disser que a intranet usa uma tecnologia diferente da internet, desconfie: ambas se baseiam no TCP/IP. Quando a banca usar termos como “exclusivamente” ou “somente” para limitar o conceito de uma das três redes, leia com atenção redobrada, porque esse tipo de linguagem absoluta costuma esconder a pegadinha.

Outra pegadinha frequente inverte extranet e intranet, apostando na distração do candidato. Se a banca afirmar que essa rede serve exclusivamente ao público interno da empresa, marque a questão como incorreta, porque essa é justamente a definição de intranet.

Na sua prova, sempre relacione a extranet à ideia de parceria externa autenticada. Esse é um detalhe que costuma confundir o candidato, mas que se resolve com uma pergunta simples: quem está acessando tem vínculo direto com a empresa, e esse acesso passa por login?

## Perguntas frequentes sobre extranet

### **O que é extranet, resumindo em uma frase?**

_É a parte da rede de uma empresa liberada, mediante autenticação, para parceiros externos como fornecedores e clientes._

### **A internet e a intranet usam tecnologias diferentes?**

_Não. As duas usam o mesmo conjunto de protocolos TCP/IP. A diferença está em quem pode acessar cada rede, e não na tecnologia empregada._

### **Qual a principal diferença entre internet e intranet?**

_A internet é pública, e qualquer pessoa com acesso a um provedor consegue entrar nela, enquanto a intranet fica restrita aos funcionários e colaboradores autorizados de uma organização. O critério que separa as duas é o público, não a estrutura técnica._

### **Extranet e VPN são a mesma coisa?**

_Não. Essa rede define quem pode acessar o sistema da empresa; a VPN é apenas uma das tecnologias usadas para tornar esse acesso seguro._

### **Em que tipo de questão esse tema mais aparece?**

_Ele costuma cair em comparações com intranet e internet, quando a banca descreve um cenário e pede para você identificar o tipo de rede envolvido._

### **Preciso saber configurar esse tipo de rede para a prova?**

_Não. As bancas cobram o conceito, quem acessa e o tipo de autenticação exigida, não os detalhes técnicos de implementação._

## Para fechar

Em resumo, a extranet resolve um problema real das empresas: como compartilhar informações com quem está fora dos seus muros, sem abrir mão do controle. Ela une exatamente esses dois pontos, alcance externo e autenticação obrigatória.

Agora que o conceito está claro, aproveite para revisar o quadro comparativo acima e treine a diferenciação entre as três redes no [simulado de redes de computadores](/simulado-redes/). Se ainda tiver dúvidas sobre a estrutura geral das redes, vale revisitar o [guia de redes de computadores para concursos](/redes-de-computadores-para-concursos/) antes de avançar para o próximo tópico.

Para fixar esse conteúdo, resolva agora as questões comentadas logo abaixo. Elas seguem o estilo das principais bancas e ajudam você a identificar, na prática, se o conceito de extranet já está bem consolidado.

## Fontes e Referências

-   NIST Computer Security Resource Center, glossário, termo “Extranet” (CNSSI 4009-2022)
-   IETF RFC 4949 Ver. 2, Internet Security Glossary

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

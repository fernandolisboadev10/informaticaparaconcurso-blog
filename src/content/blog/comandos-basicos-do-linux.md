---
title: "Comandos Básicos do Linux: Guia Passo a Passo para Quem Nunca Usou o Terminal"
description: "Comandos básicos do Linux do zero: navegar, criar, copiar e apagar arquivos. Guia passo a passo com exemplos práticos para iniciantes."
category: "Sistemas"
date: 2026-08-07T11:54:15-03:00
updated: 2026-09-13T14:28:22Z
readingTime: "7 min"
image: "./images/linux.webp"
imageAlt: "Comandos Básicos do Linux: Guia Passo a Passo para Quem Nunca Usou o Terminal"
---

Você abre o terminal pela primeira vez e encontra uma tela preta com um cursor piscando. Nenhum ícone, nenhum menu, nenhuma pista visual — só aquele espaço vazio esperando você digitar alguma coisa. Essa sensação de travamento é normal. Praticamente todo mundo que hoje domina os comandos básicos do [Linux](/linux-para-concursos/) passou exatamente por esse momento antes de perder o medo do terminal.

Este guia resolve esse travamento. Você vai aprender os comandos básicos do Linux na ordem certa, um de cada vez, com exemplos que pode testar agora mesmo no seu computador. Ao final, você navega entre pastas, cria arquivos e organiza seus documentos direto pelo terminal, sem precisar consultar nada — e ainda encontra, logo abaixo, um simulador para praticar tudo sem instalar nada na sua máquina.

## Por que vale a pena aprender pelo terminal

Interfaces gráficas escondem a lógica por trás de cada ação: você clica em “copiar”, clica em “colar”, e o sistema faz o resto sem explicar nada. O terminal funciona ao contrário — cada ação vira um comando explícito, visível, que você digita e entende. É justamente por isso que concursos de TI e vagas de suporte técnico cobram esse conhecimento com tanta frequência. Para ver como as bancas comparam os dois sistemas, leia [Windows vs Linux para concursos](/windows-vs-linux-para-concursos/).

Existe também um motivo bem prático: os servidores que hospedam a maior parte da internet quase nunca têm interface gráfica. Ou seja, quem administra um sistema de verdade trabalha pelo terminal, não pelo mouse. Aprender os comandos básicos do Linux agora poupa você de um segundo aprendizado — bem mais estressante — depois, sob pressão, direto em produção.

## Entenda a lógica antes de decorar comandos

Os comandos básicos do Linux seguem quase sempre a mesma receita: primeiro vem o comando (o que você quer fazer), depois, opcionalmente, uma opção que ajusta o comportamento dele — geralmente com um traço na frente — e por fim o alvo, ou seja, a pasta ou o arquivo em questão. Uma vez que você enxerga essa estrutura, qualquer comando novo fica muito mais fácil de decifrar, mesmo que você nunca tenha visto ele antes.

Abra o terminal agora — no elementary OS, no Ubuntu ou em qualquer distribuição baseada em Debian, o atalho costuma ser Ctrl + Alt + T — e acompanhe os exemplos digitando junto. Se preferir não instalar nada ainda, use o simulador interativo no final deste artigo: ele reproduz o comportamento real do terminal direto no navegador.

## Descubra onde você está

O primeiro comando que você aprende é o `pwd`. Ele mostra o caminho completo da pasta em que você está agora, algo como `/home/fernando`. Pense nele como um GPS: antes de se mover para qualquer lugar, você confirma sua posição atual.

Em seguida vem o `ls`, que lista tudo o que existe dentro da pasta atual. Sozinho, ele mostra só os nomes. Acrescente `-l` e você ganha uma versão detalhada, com tamanho e data de cada item. Acrescente `-a` e os arquivos ocultos — aqueles que começam com ponto — também aparecem na lista.

## Caminhe entre as pastas

Você usa o `cd` para entrar em uma pasta específica. Digite `cd Documentos` e você se move para dentro dela, desde que ela exista na pasta atual. Para voltar um nível, digite `cd ..` — os dois pontos representam a pasta “de cima”. Já para ir direto à sua pasta pessoal, de qualquer lugar do sistema, digite `cd ~`.

Um erro comum de quem está começando é digitar o nome da pasta com letra maiúscula ou minúscula trocada. Afinal, o Linux diferencia essas letras (diferente do que ocorre ao [organizar arquivos e pastas no Windows](/informatica-concursos-gerenciamento-arquivos-pastas/)), então `cd documentos` e `cd Documentos` são dois comandos completamente diferentes para o sistema. Por isso, se aparecer uma mensagem de pasta não encontrada, confira a escrita antes de suspeitar de qualquer outra coisa.

Pratique agora: digite `pwd`, depois `ls`, escolha uma pasta e entre nela com `cd`. Confirme com `pwd` de novo e volte com `cd ..`. Repetir essa sequência grava o padrão na memória muito mais rápido do que só ler sobre ela — e é exatamente esse ciclo que o simulador no final deste artigo permite treinar, sem nenhum risco de bagunçar arquivos de verdade.

## Crie pastas e arquivos

Para criar uma pasta nova, você usa `mkdir` seguido do nome que quiser, como em `mkdir Provas`. Se o nome tiver espaço, coloque-o entre aspas: `mkdir "Minhas Provas"`.

Já para criar um arquivo vazio, o comando é `touch`. Digite `touch anotacoes.txt` e um arquivo em branco aparece na pasta atual, pronto para você abrir e editar normalmente.

## Copie, mova e apague com segurança

O comando `cp` copia um arquivo. `cp anotacoes.txt backup.txt` cria uma cópia com outro nome; `cp anotacoes.txt Provas/` copia o arquivo para dentro de outra pasta. Para copiar uma pasta inteira, com tudo o que ela contém, acrescente `-r`: `cp -r Provas Provas_backup`. Sem esse `-r`, o comando simplesmente recusa a cópia de uma pasta.

O `mv`, por sua vez, faz duas coisas diferentes dependendo do destino: se for uma pasta existente, ele move o arquivo para lá; se for um nome novo, ele renomeia. Assim, `mv anotacoes.txt Provas/` move o arquivo, enquanto `mv anotacoes.txt notas_finais.txt` renomeia.

Já o `rm` apaga. E aqui vai o aviso mais importante deste guia: diferente da interface gráfica, o `rm` não manda nada para a lixeira. O arquivo desaparece direto, sem chance de arrependimento depois do Enter. Por isso, confira sempre o nome antes de confirmar — principalmente ao usar `rm -r`, que apaga uma pasta inteira de uma vez só.

## Use o sudo com responsabilidade

Alguns comandos mexem em partes do sistema que pertencem ao administrador, não a um usuário comum. Para essas situações existe o `sudo`: você o coloca na frente do comando, o sistema pede sua senha e, então, executa a ação com privilégios administrativos.

Na prática, você precisa de `sudo` para instalar um programa novo ou editar um arquivo de configuração do sistema — mas não precisa dele para criar uma pasta ou copiar um arquivo dentro da sua própria pasta pessoal. Usar `sudo` em tudo “por garantia” não é uma boa prática; reserve-o para quando o sistema realmente pedir.

## Instale seu primeiro programa

Em distribuições baseadas em Debian, como o Ubuntu e o elementary OS, você instala programas com o `apt`. A sequência é sempre a mesma: primeiro `sudo apt update`, que atualiza a lista de programas disponíveis nos repositórios; depois `sudo apt install` seguido do nome do programa que você quer, como em `sudo apt install gimp`.

## Quadro-resumo para consulta rápida

Guarde esta tabela por perto enquanto pratica os comandos básicos do Linux no terminal:

## O próximo passo é praticar

Você não precisa decorar todos os comandos básicos do Linux de uma vez. Escolha um deles, use por alguns dias até ele virar automático e só então avance para o próximo. Essa é a mesma lógica que qualquer pessoa usa para aprender um idioma novo: pouco de cada vez, com constância, vale muito mais do que uma leitura única e apressada.

Se você ainda não tem o Linux instalado, ou só quer treinar antes de mexer no seu computador de verdade, use o simulador de terminal logo abaixo. Ele roda direto no navegador, sem instalação, e reproduz o comportamento dos comandos que você acabou de aprender.

Depois que `pwd`, `ls`, `cd`, `mkdir`, `touch`, `cp`, `mv`, `rm` e `sudo` já estiverem confortáveis na sua rotina, você estará pronto para o próximo nível: permissões de arquivo, processos e os comandos que administram o sistema por trás das telas. Para a visão geral do que cai em prova, siga para o guia [Linux para concursos](/linux-para-concursos/) e treine no [simulado de Sistemas Operacionais](/simulado-sistemas/).

## Agora é a sua vez

Ler sobre comandos e digitar comandos são duas habilidades diferentes — e só a segunda fica na memória. Abra o simulador de terminal interativo logo abaixo, escolha três ou quatro comandos deste guia e repita a sequência algumas vezes: crie uma pasta, entre nela, crie um arquivo, copie, mova, renomeie e apague. Errar ali não tem consequência nenhuma, porque a página apaga tudo quando você sai dela — então é o lugar ideal para testar à vontade, inclusive o `rm -r`, sem medo de perder nada de verdade.

**[Pratique agora, sem instalar nada: clique aqui e abra o terminal Linux interativo.](/linux.html)** Teste os comandos deste artigo direto no navegador — nada fica salvo, então pode errar à vontade.

📚 Mais conteúdos de Informática para concursos: [fernandolisboa.pro](https://fernandolisboa.pro)

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

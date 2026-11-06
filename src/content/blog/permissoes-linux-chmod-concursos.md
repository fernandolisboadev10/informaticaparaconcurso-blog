---
title: "Permissões no Linux: chmod 755, rwx e Questões de Concurso"
seoTitle: "Permissões no Linux (chmod 755) para Concursos"
description: "Permissões no Linux para concursos: como ler o ls -l, calcular o chmod 755, o x em diretórios, chown, umask e 12 questões comentadas."
category: "Sistemas"
date: 2026-11-05T20:50:00-03:00
readingTime: "11 min"
tags: ["permissões no Linux", "chmod", "chmod 755", "Linux para concursos", "rwx", "Noções de Informática"]
image: "./images/permissoes-linux-chmod-concursos.webp"
imageAlt: "Homem estudando permissões no Linux em um notebook, com o pinguim do Linux, ícones de usuário, grupo, cadeado, olho, lápis e engrenagem flutuando ao redor e o título Permissões no Linux chmod 755"
related:
  - linux-para-concursos
  - comandos-basicos-do-linux
  - simulado-sistemas
  - windows-vs-linux-para-concursos
---

Se existe um item de Linux que reaparece em prova com roupa nova, é o de permissões. A banca escreve algo como "o comando `chmod 755 arquivo` concede ao proprietário leitura, escrita e execução e, ao grupo e aos demais, apenas leitura e execução", e o candidato que decorou o número sem entender a conta fica na dúvida na hora de julgar.

Este artigo é o aprofundamento do bloco de permissões do guia [Linux para concursos](/linux-para-concursos/). Aqui você aprende a ler o `ls -l`, a calcular o `chmod` nas duas formas, a pegadinha do `x` em diretórios, o papel do `chown` e do `umask` e as permissões especiais. No fim, há um quiz com 12 itens no estilo Certo ou Errado.

## Como ler as permissões no ls -l

Tudo começa na saída do comando `ls -l`, que mostra uma linha por arquivo. Veja um exemplo:

```
-rwxr-xr-- 1 maria equipe 4096 nov  5 10:00 relatorio.sh
```

Essa linha tem duas partes importantes para a prova. A primeira é o bloco de dez caracteres do início, e a segunda são os dois nomes que aparecem depois (o dono e o grupo).

-   **1º caractere, o tipo:** `-` é arquivo comum, `d` é diretório e `l` é link simbólico;
-   **3 caracteres seguintes, o dono:** aqui `rwx`;
-   **3 seguintes, o grupo:** aqui `r-x`;
-   **3 últimos, os demais usuários:** aqui `r--`;
-   **Dono e grupo:** `maria` é o usuário dono e `equipe` é o grupo do arquivo.

Cada trio usa as mesmas letras: `r` (read, leitura), `w` (write, escrita) e `x` (execute, execução). Quando a permissão não existe, aparece um hífen no lugar da letra.

## O que significa cada permissão e como calcular o valor

No chmod numérico, cada permissão vale um número e você soma por trio. É a conta que a banca mais cobra:

| Permissão | Letra | Valor |
| --- | --- | --- |
| Leitura | `r` | 4 |
| Escrita | `w` | 2 |
| Execução | `x` | 1 |
| Nenhuma | `-` | 0 |

Para o exemplo `rwxr-xr--`: o dono tem 4 + 2 + 1 = **7**, o grupo tem 4 + 1 = **5** e os demais têm **4**. Junto, vira `754`. O `755` do enunciado, então, significa `rwxr-xr-x`: dono com tudo, grupo e demais com leitura e execução.

Os valores mais comuns e o que costumam representar:

| Valor | Permissões | Uso comum |
| --- | --- | --- |
| `755` | `rwxr-xr-x` | programas, scripts e diretórios |
| `644` | `rw-r--r--` | arquivos de texto comuns |
| `600` | `rw-------` | arquivos privados |
| `777` | `rwxrwxrwx` | evitar: qualquer usuário pode alterar |

A conta completa, com o passo a passo para converter sequências, também está no guia de Linux, na seção sobre o cálculo do chmod. Aqui o foco é ir além dela.

## Chmod simbólico: u, g, o, a e os sinais

Além do número, o `chmod` aceita uma forma com letras, e a banca gosta de misturar as duas. As letras dizem **quem** é afetado e os sinais dizem **o que** acontece:

-   **Quem:** `u` (dono), `g` (grupo), `o` (demais usuários) e `a` (todos);
-   **O quê:** `+` adiciona, `-` remove e `=` define exatamente;
-   **Permissões:** `r`, `w` e `x`.

Veja como isso aparece:

-   `chmod u+x script.sh`: adiciona execução só para o dono;
-   `chmod g-w arquivo.txt`: retira a escrita do grupo;
-   `chmod a-w arquivo.txt`: retira a escrita de todos;
-   `chmod u=rwx,g=rx,o=rx arquivo`: equivale ao `755`;
-   `chmod -R 750 pasta`: aplica a alteração à pasta e a todo o conteúdo dela (o `-R` é recursivo).

Um uso clássico é tornar um script executável com `chmod +x script.sh` e rodá-lo com `./script.sh`. Sem a permissão de execução, o sistema responde "Permission denied", mesmo que o arquivo seja legível.

## Permissões em diretórios: a pegadinha do x

Em arquivos, `r`, `w` e `x` fazem o que o nome diz. Em diretórios, o significado muda, e é aqui que muita gente erra:

-   **`r` (leitura):** permite listar os nomes dos itens do diretório;
-   **`w` (escrita):** permite criar, renomear e apagar itens dentro dele (e, na prática, precisa vir junto com o `x`);
-   **`x` (execução):** permite **entrar** no diretório (`cd`) e acessar os itens pelo nome.

Por isso um diretório com `r--` deixa você ver os nomes, mas não abrir os arquivos. Já `--x` deixa acessar um arquivo cujo nome você já conhece, mas não listar o conteúdo. A pegadinha típica é afirmar que o `x` serve para listar os arquivos: quem lista é o `r`.

## chown, chgrp e umask

O `chmod` muda **o que** cada um pode fazer. Outros comandos mudam **quem** é o dono, e é aí que a confusão acontece:

| Comando | O que faz | Exemplo |
| --- | --- | --- |
| `chmod` | altera as permissões | `chmod 755 arquivo` |
| `chown` | altera o dono (e, opcionalmente, o grupo) | `chown maria arquivo` ou `chown maria:equipe arquivo` |
| `chgrp` | altera o grupo | `chgrp equipe arquivo` |

Em geral, só o administrador (root) troca o dono com o `chown`. O dono do arquivo pode, no máximo, mudar o grupo para um dos grupos de que ele faz parte.

Já o `umask` define quais permissões são **retiradas** de arquivos e diretórios novos. Os pontos de partida são 666 para arquivos (sem execução) e 777 para diretórios. Com o `umask 022`, comum na maioria das distribuições, os novos arquivos saem com `644` e os novos diretórios com `755`. É por isso que você vê esses dois números por todo lado.

## Permissões especiais: SUID, SGID e sticky bit

Algumas provas de nível superior cobram, em nível de noções, três permissões especiais que usam um quarto dígito no `chmod` (por exemplo, `chmod 4755`):

-   **SUID (4):** o programa executa com os privilégios do dono. O `passwd` é o exemplo clássico: o usuário comum altera a própria senha, que fica em um arquivo protegido. Aparece como `s` no lugar do `x` do dono;
-   **SGID (2):** o programa executa com os privilégios do grupo. Em diretórios, os arquivos novos herdam o grupo do diretório. Aparece como `s` no lugar do `x` do grupo;
-   **Sticky bit (1):** em um diretório compartilhado, como o `/tmp`, cada usuário só consegue apagar ou renomear os próprios arquivos. Aparece como `t` no fim, por exemplo `drwxrwxrwt`.

## Os erros que a banca explora

Pegadinhas que aparecem com mais frequência nos itens de permissões:

-   **Trocar `chmod` por `chown`:** quem altera o dono é o `chown`, nunca o `chmod`;
-   **Errar a conta:** somar `r` como 1 ou `x` como 4. O certo é leitura 4, escrita 2 e execução 1;
-   **Esquecer a ordem:** dono, grupo e demais usuários, sempre nessa sequência;
-   **O `x` em diretório:** confundir entrar no diretório com listar o conteúdo;
-   **Achar que `777` é seguro:** ele libera tudo para todos e é considerado má prática;
-   **Ignorar o root:** o administrador, em regra, não é barrado pelas permissões comuns de leitura e escrita.

Se você quiser praticar a conta antes de resolver o quiz, volte à seção sobre o cálculo no guia de Linux e à lista de [comandos básicos do Linux](/comandos-basicos-do-linux/).

## Perguntas frequentes

### O que significa chmod 755?

Significa `rwxr-xr-x`: o dono pode ler, escrever e executar, e o grupo e os demais usuários podem ler e executar, mas não alterar. O 7 vem de 4 + 2 + 1 e o 5 vem de 4 + 1.

### Qual a diferença entre chmod 644 e 755?

O `644` (`rw-r--r--`) não dá permissão de execução a ninguém e é típico de arquivos comuns. O `755` (`rwxr-xr-x`) dá execução a todos e é típico de programas, scripts e diretórios.

### chmod 777 é seguro?

Não. Ele permite que qualquer usuário leia, altere e execute o arquivo, o que abre brecha de segurança. Em prova, é a alternativa que a banca costuma marcar como errada.

### Como ver as permissões de um arquivo?

Com o comando `ls -l`, que mostra as permissões, o dono e o grupo de cada arquivo. Para um arquivo só, use `ls -l nome_do_arquivo`.

## Conclusão: entenda a conta, não decore o número

O item de permissões é um dos mais previsíveis de Linux: a banca troca o número, inverte `chmod` e `chown` ou explora o `x` em diretórios. Quem entende a lógica de r, w, x e dono, grupo e demais acerta qualquer variação.

Agora resolva o quiz abaixo, com 12 itens comentados no estilo Certo ou Errado. Se errar algum, volte à seção correspondente e revise a explicação. Para treinar o restante do conteúdo de Sistemas, faça também o [simulado de sistemas operacionais](/simulado-sistemas/) e leia o comparativo [Windows e Linux para concursos](/windows-vs-linux-para-concursos/).

## Fontes e Referências

-   Linux man-pages. chmod(1), change file mode bits: [man7.org](https://man7.org/linux/man-pages/man1/chmod.1.html)
-   Linux man-pages. chown(1), change file owner and group: [man7.org](https://man7.org/linux/man-pages/man1/chown.1.html)
-   Linux man-pages. chgrp(1), change group ownership: [man7.org](https://man7.org/linux/man-pages/man1/chgrp.1.html)
-   Linux man-pages. umask(2), set file mode creation mask: [man7.org](https://man7.org/linux/man-pages/man2/umask.2.html)
-   Linux man-pages. inode(7), file type and mode: [man7.org](https://man7.org/linux/man-pages/man7/inode.7.html)

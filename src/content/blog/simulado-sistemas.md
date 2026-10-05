---
title: "Simulado Sistemas Operacionais"
description: "Simulado de sistemas operacionais com 30 questões comentadas das principais bancas. Treine agora e prepare-se para o concurso."
category: "Simulados"
date: 2026-09-25T20:11:01-03:00
updated: 2026-09-25T21:13:15Z
readingTime: "14 min"
image: "./images/sistemas.webp"
imageAlt: "Sistemas Operacionais"
---

Se você já sentiu dificuldade para fixar os conceitos de sistemas operacionais, este simulado de sistemas operacionais foi pensado justamente para resolver esse problema. Ao longo de trinta questões comentadas, você revisa os tópicos mais cobrados por bancas como Cebraspe, FGV, FCC, IADES, Cesgranrio e Vunesp, entre eles gerenciamento de processos, memória virtual, permissões e diferenças entre Windows e Linux. Além disso, cada questão traz um comentário detalhado, que explica o raciocínio correto e aponta as pegadinhas mais frequentes em prova. Dessa forma, você não apenas treina a resolução de questões, mas também consolida a teoria. Portanto, aproveite este simulado de sistemas operacionais para medir seu nível antes da prova.

## Gerenciamento de processos: como o sistema organiza as tarefas

Antes de tudo, vale entender o que acontece por trás da tela quando você abre um programa.

Cada programa em execução vira um processo, e o sistema operacional é responsável por decidir a ordem e o tempo que cada um recebe do processador, tarefa conhecida como escalonamento. Um processo passa por diferentes estados ao longo da execução: novo, pronto (esperando sua vez), em execução, em espera (aguardando algum recurso) e terminado.

Guarde esta ideia: um processo pronto já está na fila para usar o processador, enquanto um processo em espera depende de outro evento, como a leitura de um arquivo, para poder continuar. Essa diferença é um clássico de prova.

Vale destacar ainda o conceito de thread, uma unidade de execução dentro de um processo. Um único processo pode ter várias threads rodando ao mesmo tempo, compartilhando a mesma área de memória, o que torna a comunicação entre elas mais rápida do que entre processos diferentes.

## Memória virtual: a técnica que evita a falta de RAM

Na sequência, entra um dos recursos mais importantes de qualquer sistema operacional moderno.

Quando a memória RAM não é suficiente para todos os processos em execução, o sistema usa parte do disco como extensão dela, técnica chamada de memória virtual. Esse processo funciona por paginação: os dados são divididos em blocos de tamanho fixo, chamados páginas, movidos entre a RAM e o disco conforme a necessidade.

Esse é um detalhe que costuma confundir o candidato: a memória virtual não substitui a RAM, ela complementa, e como o disco é muito mais lento, o uso excessivo dessa técnica deixa o computador visivelmente mais lento, sinal de que a memória física está no limite.

A área do disco reservada para essa troca de páginas recebe o nome de arquivo de paginação no Windows e de swap no Linux. Quando o sistema passa a maior parte do tempo trocando páginas entre RAM e disco, em vez de executar processos de fato, ocorre o que se chama de thrashing, situação em que o desempenho despenca mesmo com o processador praticamente ocioso.

## Permissões de arquivos: o modelo que o Linux cobra em detalhe

Além disso, permissões de acesso a arquivos aparecem com frequência em questões sobre Linux.

O sistema divide as permissões em três categorias: leitura (r), escrita (w) e execução (x), aplicadas a três grupos distintos: o dono do arquivo, o grupo ao qual ele pertence e os demais usuários. O comando chmod altera essas permissões, seja por letras (chmod u+x arquivo) ou por notação numérica, na qual cada permissão recebe um valor (4 para leitura, 2 para escrita, 1 para execução) que se soma para formar o código final, como chmod 755.

Não confunda os dois conceitos: 755 significa que o dono tem leitura, escrita e execução (4+2+1=7), enquanto grupo e outros têm apenas leitura e execução (4+1=5).

O [artigo sobre comandos básicos do Linux](/comandos-basicos-do-linux/) traz a lista completa de comandos e permissões cobrados em prova.

## Windows x Linux: as diferenças que mais caem em prova

Por fim, a comparação entre os dois sistemas operacionais é praticamente garantida em qualquer edital de informática.

O Windows é um sistema proprietário, com código fechado e mantido pela Microsoft, enquanto o Linux é um sistema de código aberto, que qualquer pessoa pode estudar, modificar e distribuir livremente. Além disso, o Windows usa majoritariamente o sistema de arquivos NTFS, enquanto distribuições Linux costumam usar o ext4.

Vale destacar também a interface: o Windows prioriza historicamente o uso gráfico, enquanto o Linux é fortemente associado ao uso via linha de comando, embora hoje ofereça interfaces gráficas completas.

O [artigo sobre Windows x Linux para concursos](/windows-vs-linux-para-concursos/), a [introdução ao Linux para concursos](/linux-para-concursos/) e o [guia do Windows 7, 10 e 11 para concursos](/sistema-windows-7-10-11-para-concursos/) aprofundam essas diferenças com exemplos que já caíram em prova.

## Simulado de sistemas operacionais: hora de colocar em prática

Com esses conceitos revisados, chegou o momento de testar o que você aprendeu neste simulado de sistemas operacionais. Resolva as trinta questões no seu ritmo, sem consultar o comentário antes de responder, e anote os temas em que mais errar. Perceba como processos, memória virtual, permissões e a comparação entre sistemas se conectam na prática: entender o funcionamento interno de um sistema operacional facilita reconhecer a resposta certa, mesmo quando a banca troca os termos do enunciado.

Questão 1 Cesgranrio

Em uma instalação padrão do Windows, qual é o formato de sistema de arquivos utilizado por padrão em uma nova partição?

A) FAT32 B) NTFS C) exFAT D) HFS+ E) EXT4

Resposta correta: B

O NTFS (New Technology File System) é o sistema de arquivos padrão para novas partições em versões modernas do Windows. FAT32 é mais antigo e tem limitações, enquanto exFAT é usado em dispositivos removíveis. HFS+ e EXT4 são utilizados em sistemas Mac e Linux, respectivamente.

Questão 2 CEBRASPE

Qual é o gerenciador de pacotes padrão no Ubuntu, uma popular distribuição Linux?

A) RPM B) YUM C) DPKG D) APT E) ZYPPER

Resposta correta: D

O APT é o gerenciador de pacotes padrão no Ubuntu, que utiliza o DPKG como backend. RPM e YUM são usados em sistemas baseados em Red Hat, enquanto ZYPPER é do openSUSE.

Questão 3 FGV

No sistema Linux, qual comando é utilizado para listar o conteúdo de um diretório?

A) ls B) dir C) cd D) list E) show

Resposta correta: A

A resposta correta é ‘ls’, um comando utilizado em Linux para listar arquivos e diretórios. ‘dir’ é um comando do Windows, e ‘cd’ é usado para mudar de diretório, enquanto ‘list’ e ‘show’ não são comandos válidos para essa ação.

Questão 4 IADES

Qual comando no terminal Linux é utilizado para listar arquivos e diretórios de forma detalhada?

A) ls -l B) dir C) list -a D) cat -d E) show -f

Resposta correta: A

O comando ‘ls -l’ é utilizado para listar todos os arquivos e diretórios com detalhes. ‘dir’ é um comando do DOS, ‘list -a’ e ‘cat -d’ não existem, e ‘show -f’ não é correto no contexto do Linux.

Questão 5 Cesgranrio

No Linux, o que o símbolo ‘/’ representa?

A) Diretório raiz B) Diretório de usuário C) Arquivo temporário D) Sistema de backup E) Comando de execução

Resposta correta: A

No Linux, ‘/’ é o diretório raiz do sistema de arquivos. As outras opções não correspondem ao que representa o símbolo.

Questão 6 Cesgranrio

Qual é a principal função do sistema operacional em um computador?

A) Gerenciar hardware e software B) Armazenar dados C) Proteger contra virus D) Pleitear direitos do usuário E) Gerar relatórios

Resposta correta: A

O sistema operacional é responsável por gerenciar o hardware e software do computador. As outras opções são funções secundárias ou de softwares específicos.

Questão 7 FGV

Qual caminho representa um diretório no Windows?

A) /home/user/ B) C:\\Users\\nome\\ C) C:/Documents/ D) C::Users:name E) C|Users\\User

Resposta correta: B

O caminho correto no Windows utiliza barras invertidas e o formato ‘C:\\Users\\nome\\’. As outras opções usam sintaxes inválidas ou do Linux.

Questão 8 IADES

Qual é a principal diferença entre sistemas operacionais de 32 bits e 64 bits?

A) A quantidade de dispositivos suportados B) O tamanho máximo de memória RAM endereçada C) O número de usuários que podem acessar D) A velocidade de processamento E) O tipo de software que pode ser executado

Resposta correta: B

A opção correta é ‘O tamanho máximo de memória RAM endereçada’, pois sistemas de 64 bits podem endereçar muito mais memória do que os de 32 bits. As outras opções não são verdadeiras.

Questão 9 FGV

No Windows, qual é a função do registro do sistema?

A) Armazenar arquivos temporários B) Gerenciar configurações do sistema C) Executar aplicações D) Armazenar dados pessoais do usuário E) Criar backups de sistema

Resposta correta: B

O registro do Windows é um banco de dados que armazena configurações do sistema e de aplicativos. As outras opções não representam a função do registro.

Questão 10 VUNESP

Qual sistema de arquivos é padrão no Linux?

A) EXT4 B) NTFS C) FAT32 D) HFS+ E) ext3

Resposta correta: A

O EXT4 é o sistema de arquivos mais utilizado atualmente no Linux. NTFS e FAT32 são usados principalmente no Windows, enquanto HFS+ é típico de sistemas Apple e ext3 é uma versão anterior ao EXT4.

Questão 11 CEBRASPE

No Windows, os arquivos com extensões .dll são usados para armazenar bibliotecas de funções que podem ser utilizadas por múltiplos programas.

Certo Errado

Resposta correta: A

Arquivos .dll (Dynamic Link Library) contêm bibliotecas de funções e dados que podem ser usados simultaneamente por múltiplos aplicativos no Windows.

Questão 12 FCC

Qual é a principal função do firmware em um computador?

A) Controlar o dispositivo de hardware B) Executar programas de usuário C) Gerenciar arquivos D) Administrar recursos de rede E) Fornecer interface gráfica

Resposta correta: A

A alternativa A é correta; o firmware é um software instalado em hardware e controla suas funções. As outras opções não descrevem a função do firmware corretamente.

Questão 13 IADES

Em Windows, qual é o propósito do comando ‘chkdsk’?

A) Verificar e corrigir erros no disco B) Formatar o disco C) Criar uma nova partição D) Eliminar arquivos temporários E) Reinstalar o sistema

Resposta correta: A

O comando ‘chkdsk’ é utilizado para verificar e corrigir erros nos sistemas de arquivos. As outras opções não são funções deste comando.

Questão 14 FCC

Qual comando no Linux é utilizado para listar arquivos e diretórios em um diretório?

A) ls B) dir C) list D) show E) view

Resposta correta: A

O comando ‘ls’ é utilizado para listar arquivos e diretórios em Unix e Linux. As demais opções não são comandos válidos para esse propósito.

Questão 15 VUNESP

Qual das seguintes alternativas é um ambiente gráfico que pode ser usado no Linux?

A) GNOME B) Windows Explorer C) Command Prompt D) macOS Finder E) DOS

Resposta correta: A

GNOME é um ambiente gráfico para Linux, enquanto os demais são interfaces de sistemas diferentes.

Questão 16 IADES

O que acontece ao executar o comando ‘rm -rf /’ no Linux?

A) Remove arquivos temporários B) Desinstala o sistema operacional C) Apaga todos os arquivos do sistema D) Exclui arquivos em uma pasta específica E) Nenhuma das alternativas acima

Resposta correta: C

A opção correta é ‘Apaga todos os arquivos do sistema’, pois esse comando deletará todos os arquivos e diretórios desde a raiz. As outras alternativas são incorretas.

Questão 17 Cesgranrio

Qual das seguintes opções é uma das características do sistema operacional Windows?

A) Multitarefa B) Código aberto C) Baixa usabilidade D) Requer hardware específico E) Compatibilidade apenas com software Microsoft

Resposta correta: A

Windows é conhecido por sua capacidade de multitarefa, permitindo que vários programas sejam executados simultaneamente. As outras alternativas estão incorretas para esse sistema operacional.

Questão 18 FCC

No Linux, qual é o significado do símbolo ‘~’ na linha de comando?

A) Diretório raiz B) Diretório pessoal do usuário C) Diretório de sistema D) Diretório temporário E) Diretório de programas

Resposta correta: B

O símbolo ‘~’ representa o diretório pessoal do usuário logado no sistema. As outras opções não estão corretas para o significado deste símbolo.

Questão 19 CEBRASPE

No Windows 10, o recurso ‘Área de Trabalho Remota’ permite que um usuário acesse outro computador através da rede, assumindo o controle como se estivesse fisicamente presente.

A) Accesos apenas arquivos, não controla B) Controla remotamente o computador C) Desinstala programas remotamente D) Apenas monitora a tela E) Funciona apenas em rede local

Resposta correta: B

O recurso ‘Área de Trabalho Remota’ permite controle completo do computador remoto. Outras opções como ‘Accesos apenas arquivos, não controla’ ou ‘Apenas monitora a tela’ estão erradas, pois não descrevem corretamente o recurso.

Questão 20 FGV

Qual é a função do arquivo ‘hosts’ em sistemas operacionais?

A) Mapear nomes de host a endereços IP B) Armazenar senhas do sistema C) Controlar processos do SO D) Configurar drivers de dispositivos E) Gerar logs do sistema

Resposta correta: A

O arquivo ‘hosts’ mapeia nomes de host para endereços IP, facilitando a tradução de endereços. As outras opções não correspondem à função deste arquivo.

Questão 21 CEBRASPE

O comando ‘df’ no Linux exibe o uso de espaço em disco. Qual opção é usada para mostrar em formato legível por humanos?

A) -h B) -l C) -k D) -H E) -m

Resposta correta: A

A opção ‘-h’ (human-readable) faz com que o comando ‘df’ mostre o uso de disco em unidades como MB e GB, tornando-o mais fácil de entender.

Questão 22 FGV

Qual sistema de arquivos é utilizado pelo padrão Linux?

A) ext4 B) NTFS C) FAT32 D) HFS E) ReFS

Resposta correta: A

O sistema de arquivos padrão para muitas distribuições Linux é o ‘ext4’. NTFS é geralmente usado no Windows, e os outros tipos de sistemas de arquivos são adequados para contextos diferentes.

Questão 23 CEBRASPE

O GRUB é um gerenciador de inicialização, comumente usado em sistemas operacionais Linux.

Certo Errado

Resposta correta: A

O GRUB (GRand Unified Bootloader) é amplamente utilizado em distribuições Linux para gerenciar o processo de inicialização do sistema.

Questão 24 VUNESP

Qual o significado da sigla ‘BIOS’ em um sistema de computação?

A) Basic Input Output System B) Binary Integrated Operating System C) Boot Input Operating System D) Basic Internal Operating System E) Binary Input Output Software

Resposta correta: A

A sigla ‘BIOS’ representa ‘Basic Input Output System’, que gerencia a comunicação entre o hardware e o sistema operacional. As demais opções são incorretas.

Questão 25 FCC

No sistema operacional Windows, qual recurso é utilizado para recuperar arquivos que foram deletados da lixeira?

A) Restaurar do backup B) Armazenamento em nuvem C) Recuperação de arquivos D) Software antivírus E) Restaurar o sistema

Resposta correta: C

A resposta correta é ‘Recuperação de arquivos’, que refere-se a ferramentas que podem tentar restaurar arquivos excluídos. As outras opções mencionadas têm funções diferentes e não são específicas para recuperação de arquivos deletados.

Questão 26 VUNESP

No Windows, qual recurso é utilizado para gerenciar e organizar as janelas abertas?

A) Painel de Controle B) Explorador de Arquivos C) Gerenciador de Tarefas D) Área de Trabalho E) Menu Iniciar

Resposta correta: C

O Gerenciador de Tarefas ajuda a monitorar e gerenciar as janelas e aplicativos em execução. Os demais recursos têm finalidades distintas, como configuração e navegação de arquivos.

Questão 27 Cesgranrio

Qual dos seguintes sistemas de arquivos é utilizado por padrão no Linux?

A) NTFS B) FAT32 C) EXT4 D) HFS+ E) APFS

Resposta correta: C

O sistema de arquivos EXT4 (Fourth Extended File System) é o padrão em muitas distribuições Linux. NTFS e FAT32 são utilizados por Windows, HFS+ por Mac e APFS é o sistema de arquivos mais recente para Mac.

Questão 28 FCC

Qual comando do Linux é usado para listar diretórios e arquivos, incluindo os ocultos?

A) ls -a B) ls -l C) ls -la D) ls -h E) ls -r

Resposta correta: A

A alternativa A é correta porque ‘ls -a’ lista todos os arquivos, inclusive os ocultos. As outras opções fazem listagens com variações que não incluem todos os arquivos.

Questão 29 VUNESP

Qual é o nome do terminal padrão no Windows 10?

A) Windows Terminal B) Command Prompt C) Powershell D) Git Bash E) Bash

Resposta correta: B

O ‘Command Prompt’, também conhecido como ‘cmd’, é o terminal padrão da versão clássica do Windows. ‘Windows Terminal’ é um novo aplicativo que pode incluir outros terminais, mas não é o tradicional.

Questão 30 IADES

No Windows, o que a ferramenta ‘msconfig’ permite ao usuário fazer?

A) Gerenciar aplicativos de inicialização B) Instalar novos drivers C) Limpar o registro D) Formatar o disco E) Atualizar o sistema

Resposta correta: A

O ‘msconfig’ é utilizado para gerenciar aplicativos que iniciam junto com o sistema. As demais opções não são funções dessa ferramenta.

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

---
title: "Simulado Arquivos"
description: "Simulado de organização de arquivos com 30 questões comentadas. Revise backup, pastas e compactação para o concurso."
category: "Simulados"
date: 2026-08-23T13:00:32-03:00
updated: 2026-09-25T20:02:47Z
readingTime: "15 min"
image: "./images/arquivos.webp"
imageAlt: "Arquivos"
---

Organização e gerenciamento de arquivos parecem simples à primeira vista, mas concentram diversas pegadinhas de prova, e este simulado de organização de arquivos comprova isso na prática. Ao longo de trinta questões comentadas, você revisa estrutura de pastas, extensões, compactação, backup e boas práticas de armazenamento, sempre no formato adotado por Cebraspe, Cesgranrio, FCC, FGV, IADES e Vunesp. Cada questão traz um comentário que esclarece o conceito por trás da resposta correta, o que ajuda a fixar o conteúdo de forma definitiva. Assim, você entende não apenas o que decorar, mas também o porquê de cada regra. Portanto, resolva este simulado de organização de arquivos antes de considerar o assunto encerrado.

## Estrutura de pastas e hierarquia: como o sistema organiza tudo

Antes de tudo, vale entender a lógica por trás da hierarquia de pastas, porque a banca costuma testar exatamente essa organização.

Todo sistema operacional organiza os arquivos em uma estrutura de árvore, partindo de um diretório raiz e se ramificando em pastas e subpastas. Dentro dela, existem dois jeitos de indicar onde um arquivo está: o caminho absoluto, que parte da raiz até o arquivo, e o caminho relativo, que parte da pasta atual em que você se encontra.

Guarde esta ideia: quando a banca descreve um caminho começando pela unidade ou pela raiz do sistema, ela está falando de caminho absoluto. Quando o caminho parte de onde você já está, é relativo.

O [artigo sobre gerenciamento de arquivos e pastas](/informatica-concursos-gerenciamento-arquivos-pastas/) detalha essa hierarquia com exemplos de comandos e atalhos que aparecem direto em prova.

## Extensões e tipos de arquivo: o que cada uma revela

Na sequência, entram as extensões, e aqui o candidato costuma errar por não associar a extensão à sua função real.

A extensão indica ao sistema operacional qual programa deve abrir aquele arquivo e como interpretar seu conteúdo. Documentos de texto usam .docx ou .odt, planilhas usam .xlsx ou .csv, imagens usam .jpg ou .png, e arquivos executáveis usam .exe.

Esse é um detalhe que costuma confundir o candidato: a extensão não garante, sozinha, que o conteúdo é seguro. Um arquivo malicioso pode ser disfarçado com dupla extensão, como “documento.pdf.exe”, para enganar quem não presta atenção.

O [artigo sobre tipos de arquivo, extensões e formatos](/tipos-de-arquivo/) traz a lista completa das extensões mais cobradas pelas bancas.

## Compactação de arquivos: reduzir tamanho sem perder dados

Além disso, a compactação também é tema certo, principalmente quando a prova envolve transferência ou armazenamento de arquivos.

Formatos como ZIP e RAR reduzem o tamanho de um ou mais arquivos agrupando-os em um único pacote, o que facilita o envio por e-mail ou a economia de espaço em disco. Na compactação sem perdas, usada nesses formatos, nenhum dado é descartado no processo, o arquivo original é totalmente recuperado ao ser descompactado.

Vale destacar: isso é diferente da compactação com perdas, comum em imagens e vídeos, na qual parte da informação é descartada para reduzir ainda mais o tamanho final. Não confunda os dois conceitos, essa distinção já apareceu em provas anteriores.

## Boas práticas de organização: o que a banca considera correto

Antes de chegar ao armazenamento final, vale revisar as boas práticas que as bancas costumam validar ou contestar em questões de certo e errado.

Nomear arquivos de forma clara, sem espaços ou caracteres especiais (como acentos, barras ou símbolos), evita problemas de compatibilidade entre sistemas operacionais diferentes. Da mesma forma, manter uma hierarquia de pastas por categoria ou data facilita tanto a localização quanto o backup seletivo dos arquivos.

Outro ponto recorrente é a diferença entre mover e copiar um arquivo: ao mover, o arquivo original deixa de existir no local de origem; ao copiar, uma duplicata é criada, e o original permanece intacto. Na prática, arrastar um arquivo entre pastas da mesma unidade move o arquivo, enquanto arrastar entre unidades diferentes cria uma cópia, a menos que você force a ação contrária.

## Backup e armazenamento em nuvem: onde guardar o que importa

Por fim, chegamos ao destino final dos arquivos: onde e como guardá-los com segurança.

A regra mais cobrada continua sendo a 3-2-1: três cópias dos dados, em dois tipos de mídia diferentes, com uma cópia fora do local principal. Dessa forma, mesmo que o computador falhe ou seja perdido, os arquivos continuam recuperáveis.

O armazenamento em nuvem entra justamente como essa cópia externa: os dados ficam hospedados em servidores remotos, acessíveis de qualquer lugar com internet, e normalmente com backup automático incluído pelo próprio serviço.

A [regra 3-2-1 de backup](/regra-3-2-1/) e o [artigo sobre arma](/cloud-storage-armazenamento-de-dados-na-nuvem/)[z](/cloud-storage-armazenamento-de-dados-na-nuvem/)[enamento de dados na nuvem](/cloud-storage-armazenamento-de-dados-na-nuvem/) mostram como essas duas estratégias se complementam na prática.

## Simulado de organização de arquivos: hora de colocar em prática

Com esses conceitos revisados, chegou o momento de testar o que você aprendeu neste simulado de organização de arquivos. Resolva as trinta questões no seu ritmo, sem consultar o comentário antes de responder, e anote os temas em que mais errar. Esse é o método mais eficiente para transformar detalhes que pareciam simples em pontos garantidos na sua prova..

Questão 1 FCC

No Windows, qual é a função da ferramenta ‘Gerenciador de Arquivos’?

A) Executar programas automaticamente B) Visualizar o uso da CPU C) Gerenciar armazenamento de arquivos e pastas D) Monitorar a rede E) Realizar backups automáticos

Resposta correta: C

A alternativa C é correta, pois a ferramenta ‘Gerenciador de Arquivos’ permite que os usuários gerenciem arquivos e pastas. As demais opções não descrevem a função dessa ferramenta.

Questão 2 IADES

Qual dos seguintes formatos é geralmente mais adequado para armazenar documentos de texto?

A) .jpg B) .mp4 C) .pdf D) .exe E) .docx

Resposta correta: C

A opção C é correta, pois .pdf é um formato amplamente utilizado para documentos, enquanto os outros são para outros tipos de arquivo, como imagens e vídeos.

Questão 3 IADES

No contexto de organização de informações, o que é um sistema de gerenciamento de arquivos?

A) Um software de edição de textos B) Uma ferramenta para backup automático C) Um programa que organiza arquivos e pastas D) Um software que apenas copia arquivos E) Um aplicativo de redes sociais

Resposta correta: C

A opção C está correta, pois um sistema de gerenciamento de arquivos organiza e permite a manipulação de arquivos e pastas. As outras alternativas não refletem a função de um sistema de gerenciamento de arquivos.

Questão 4 CEBRASPE

No Windows 10, é possível agendar a execução de programas usando o Agendador de Tarefas.

Certo Errado

Resposta correta: 0

O Agendador de Tarefas permite agendar a execução de programas e scripts em horários definidos pelo usuário.

Questão 5 CEBRASPE

No Explorador de Arquivos do Windows, ao “recortar” (Ctrl+X) um arquivo e depois “colar” (Ctrl+V) em outra pasta, o resultado é:

A) É criada uma cópia do arquivo no destino, mantendo o original no local de origem B) O arquivo é movido da pasta de origem para a pasta de destino, sendo removido do local original C) O arquivo é excluído permanentemente, sem ser enviado à Lixeira D) O arquivo é compactado automaticamente em um .zip E) É criado um atalho (link) para o arquivo original, sem movê-lo

Resposta correta: B

Recortar e colar (Ctrl+X + Ctrl+V) move o arquivo — diferente de copiar e colar (Ctrl+C + Ctrl+V), que duplica o arquivo, mantendo o original no lugar.

Questão 6 VUNESP

Qual comando é usado para listar os arquivos em um diretório no Windows?

A) ls B) dir C) list D) files E) show

Resposta correta: B

O comando ‘dir’ é o correto para listar arquivos no Windows. As outras opções não são comandos válidos no CMD do Windows.

Questão 7 FCC

No Windows 10, onde você pode acessar rapidamente a opção de configuração de pastas?

A) Painel de Controle B) Explorador de Arquivos C) Menu Iniciar D) Terminal E) Gerenciador de Tarefas

Resposta correta: B

A opção de configuração de pastas é acessível rapidamente através do Explorador de Arquivos. As outras opções não têm essa funcionalidade direta relacionada a pastas.

Questão 8 FGV

O que é um atalho de desktop no Windows?

A) Um arquivo temporário B) Um link para acessar um arquivo ou programa rapidamente C) Um tipo de diretório D) Um software de segurança E) Um registro de conexão

Resposta correta: B

Um atalho de desktop é um link que permite acessar rapidamente um arquivo ou programa. As outras opções não se relacionam com a função de um atalho.

Questão 9 FCC

Qual a diferença entre arquivos e pastas?

A) Pastas são menores que arquivos B) Arquivos armazenam dados, enquanto pastas organizam arquivos C) Pastas podem conter arquivos, mas arquivos não podem conter pastas D) Pastas são sempre arquivos compactados E) Arquivos são sempre executáveis e pastas não

Resposta correta: B

A alternativa B é a correta, pois descreve exatamente a diferença entre arquivos e pastas. As outras alternativas não representam a realidade sobre arquivos e pastas.

Questão 10 Cesgranrio

Qual a função de um diretório em um sistema de arquivos?

A) Executar programas diretamente B) Armazenar arquivos temporários C) Organizar arquivos em grupos D) Aumentar a segurança do sistema E) Proteger arquivos do acesso não autorizado

Resposta correta: C

Os diretórios servem para organizar arquivos em grupos, facilitando a localização e o gerenciamento. As outras opções não são funções primárias de diretórios.

Questão 11 FCC

Qual é a principal vantagem de usar pastas para organizar arquivos em um computador?

A) Aumentar a velocidade do sistema B) Facilitar o acesso e a localização de arquivos C) Reduzir o espaço ocupado D) Impedir a abertura de arquivos duplicados E) Aumentar a segurança do sistema

Resposta correta: B

A principal vantagem de usar pastas é a organização, facilitando o acesso e a localização de arquivos. As outras opções não estão diretamente relacionadas à função das pastas.

Questão 12 VUNESP

Qual comando do Windows permite pesquisar arquivos no sistema?

A) dir B) search C) explorer D) find E) cmd

Resposta correta: A

O comando ‘dir’ é usado no prompt de comando para listar arquivos e diretórios em uma pasta específica. ‘search’ não é um comando válido, ‘find’ é um comando para procurar texto em arquivos, e ‘cmd’ é para abrir o prompt de comando.

Questão 13 VUNESP

O que caracteriza um sistema de gerenciamento de banco de dados (SGBD)?

A) Integração de arquivos e pastas B) Controle de acesso ao computador C) Manipulação de dados estruturados D) Aumento da capacidade do disco E) Backup de arquivos automaticamente

Resposta correta: C

Um SGBD é projetado para manipular dados estruturados de forma eficaz. As demais opções não refletem a função de um SGBD.

Questão 14 FGV

Qual comando é utilizado no Windows para abrir o Gerenciador de Arquivos?

A) dir B) explorer C) ls D) cd E) run

Resposta correta: B

A opção B é correta. O comando ‘explorer’ inicia o Gerenciador de Arquivos do Windows. As outras opções estão incorretas, pois são comandos de terminal ou não abrem o gerenciador de arquivos.

Questão 15 VUNESP

Em um sistema operacional, as pastas são utilizadas para:

A) Organizar arquivos de forma hierárquica. B) Armazenar apenas programas executáveis. C) Impedir o acesso a arquivos pessoais. D) Tempo de abertura dos arquivos. E) Realizar cópias de segurança.

Resposta correta: A

As pastas são fundamentais para a organização de arquivos, permitindo uma estrutura clara e hierárquica. As outras alternativas estão incorretas, pois, embora algumas possam envolver a gestão de arquivos, não refletem a função primária das pastas.

Questão 16 CEBRASPE

O comando ‘df’ é usado no Windows para verificar o espaço utilizado e disponível em discos e sistemas de arquivos.

A) Certo, é um comando universal. B) Certo, mas não em versões mais novas do Windows. C) Errado, ‘df’ é um comando do Linux. D) Errado, o Windows usa ‘dir’ para isso. E) Errado, para isso, é necessário software de terceiros.

Resposta correta: C

O comando ‘df’ é utilizado em sistemas baseados em UNIX/Linux, não aplicável no Windows.

Questão 17 Cesgranrio

Qual dos seguintes comandos é utilizado para abrir um terminal de comandos em sistemas Windows?

A) cmd B) terminal C) command D) execute E) run

Resposta correta: A

O comando ‘cmd’ é utilizado para abrir o terminal de comandos no Windows. As outras opções não são comandos válidos desse sistema.

Questão 18 FGV

No sistema operacional Linux, qual comando é utilizado para listar arquivos e pastas no diretório atual?

A) dir B) ls C) list D) show E) view

Resposta correta: B

A opção B é correta, pois ‘ls’ é o comando que lista arquivos e diretórios em Linux. As outras opções são incorretas ou de outros sistemas operacionais.

Questão 19 Cesgranrio

Em um sistema de arquivos, o que caracteriza um diretório?

A) Armazena apenas arquivos executáveis B) Contém referências a outros arquivos e diretórios C) É sempre oculto para o usuário D) Não pode ser nomeado pelo usuário E) Não pode conter subdiretórios

Resposta correta: B

Um diretório serve para organizar arquivos e pode conter referências a outros arquivos e outros diretórios. As outras opções estão erradas, pois um diretório pode ser visível e personalizável.

Questão 20 IADES

Qual a função da extensão de um arquivo, como .txt ou .jpg?

A) Especificar o tamanho do arquivo B) Indicar a codificação do arquivo C) Definir o tipo e o formato do arquivo D) Aumentar a segurança do arquivo E) Alterar a localização do arquivo

Resposta correta: C

A opção C está correta porque a extensão de um arquivo especifica seu tipo e formato, facilitando sua identificação pelo sistema operacional. As demais respostas não correspondem à função real das extensões.

Questão 21 CEBRASPE

No Windows, a extensão de arquivo “.exe” identifica tipicamente:

A) Um arquivo executável, capaz de iniciar um programa B) Um arquivo de texto simples C) Um arquivo de imagem comprimida D) Um arquivo de planilha eletrônica E) Um arquivo de áudio

Resposta correta: A

A extensão .exe identifica um arquivo executável do Windows — ao ser aberto, ele inicia a execução de um programa.

Questão 22 IADES

O que significa o termo ‘backup’ em informática?

A) Restaurar arquivos B) Proteger arquivos contra vírus C) Criação de cópias de segurança D) Edição de arquivos E) Compilação de programas

Resposta correta: C

A opção C é correta, pois ‘backup’ refere-se à criação de cópias de segurança para evitar a perda de dados. As outras opções não descrevem o conceito corretamente.

Questão 23 VUNESP

Em sistemas operacionais, o que é a extensão de um arquivo?

A) Um método de compressão de dados B) Uma parte opcional do nome do arquivo que indica seu tipo C) Um tipo de segurança de arquivos D) Uma unidade de medida de espaço E) Um comando para abrir arquivos

Resposta correta: B

A alternativa correta indica que a extensão é uma parte do nome de um arquivo que ajuda a identificar seu formato. Os outros itens falham em descrever a função real da extensão.

Questão 24 Cesgranrio

Ao organizar arquivos em um sistema operacional, você deve considerar que a estrutura de pastas deve ser lógica e hierárquica. Qual é a principal vantagem de se utilizar pastas de forma estruturada ao armazenar arquivos?

A) Facilita a busca por arquivos relevantes. B) Aumenta o espaço em disco disponível. C) Impede o acesso a arquivos indesejados. D) Melhora a velocidade do sistema operacional. E) Reduz a necessidade de backups frequentes.

Resposta correta: A

A resposta correta é a alternativa A, pois uma estrutura de pastas organizada torna a localização e a gestão de arquivos mais eficiente. As outras alternativas, embora possam ter relação com a organização, não refletem diretamente a principal vantagem de uma boa estrutura de pastas.

Questão 25 IADES

Qual é o comando utilizado no Windows para renomear um arquivo?

A) Ctrl + R B) F2 C) Alt + R D) Shift + R E) Ctrl + N

Resposta correta: B

A opção B é correta; ao pressionar F2, o Windows permite que o usuário renomeie arquivos selecionados. As outras alternativas não têm essa função.

Questão 26 FCC

No sistema operacional, o que é uma pasta?

A) Um programa de edição de texto B) Um arquivo de imagem C) Um local onde arquivos são armazenados D) Um dispositivo de armazenamento externo E) Um componente de rede

Resposta correta: C

Uma pasta é um local onde arquivos são armazenados no sistema operacional, permitindo a organização dos mesmos. As outras opções descrevem outros tipos de elementos do sistema.

Questão 27 Cesgranrio

Qual a principal diferença entre um arquivo e uma pasta?

A) Um arquivo contém dados, enquanto uma pasta contém arquivos B) Uma pasta é um tipo de arquivo C) Os arquivos são maiores que as pastas D) Pastas não podem ser alteradas E) Arquivos sempre possuem uma extensão

Resposta correta: A

Um arquivo contém dados específicos, enquanto uma pasta é uma estrutura de armazenamento que contém arquivos ou outras pastas. As outras afirmações não são corretas.

Questão 28 CEBRASPE

Ao excluir um arquivo do disco rígido local no Windows usando apenas a tecla Delete (sem combinar com Shift), o arquivo é:

A) Apagado permanentemente e de forma imediata, sem possibilidade de recuperação B) Automaticamente enviado para um serviço de armazenamento em nuvem C) Movido para a Lixeira, podendo ser restaurado posteriormente D) Compactado e renomeado automaticamente E) Bloqueado para edição, mas mantido na pasta original

Resposta correta: C

Por padrão, excluir um arquivo local com Delete o move para a Lixeira, de onde pode ser restaurado. Usar Shift+Delete é que causa exclusão permanente, pulando a Lixeira.

Questão 29 FGV

Que tipo de arquivo é normalmente utilizado para criar documentos de texto no Microsoft Word?

A) .exe B) .doc C) jpg D) .mp3 E) .html

Resposta correta: B

‘.doc’ é a extensão padrão para arquivos criados no Microsoft Word. As outras extensões não são usadas para documentos de texto nesse aplicativo.

Questão 30 FGV

No Windows, qual comando é utilizado para exibir uma lista dos arquivos em um diretório através do prompt de comando?

A) dir B) list C) show D) files E) display

Resposta correta: A

O comando ‘dir’ é o utilizado para listar arquivos em um diretório no Windows. As outras opções não são comandos válidos nesse contexto.

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

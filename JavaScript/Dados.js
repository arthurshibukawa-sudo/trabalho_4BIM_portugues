/* ==========================================================================
   Dados.js: todos os textos do site (contos, resenhas e cordéis).
   Aqui ficam só os dados. As páginas são montadas pelo DOM no script.js.
   Para mudar ou acrescentar um texto, edite este arquivo.

   Formato de cada item de "conteudo":
     { p: "parágrafo" }
     { h3: "subtítulo" }
     { epigrafe: "citação que abre uma estrofe" }
     { versos: ["verso 1", "verso 2"] }            (um parágrafo, com quebra de linha)
     { negrito: "Avaliação:", p: "texto" }         (parágrafo com início em negrito)
   ========================================================================== */

const AUTORES = ["Luis Carlos", "Arthur Seiji", "Davi Silva", "Kauã Hideyuki"];

const DADOS = {
  conto: {
    pagina: "conto.html",
    rotulo: "Conto",
    plural: "Contos",
    intro: [
      "O conto é uma narrativa curta, com poucos personagens, um conflito central e um desfecho que costuma ser rápido e marcante. Por ser breve, ele vai direto ao ponto e consegue emocionar ou fazer pensar em poucas páginas.",
      "Os contos desta página são releituras inspiradas no romance Hibisco Roxo, da escritora nigeriana Chimamanda Ngozi Adichie. Em cada um deles, imaginamos novos caminhos para os personagens e discutimos temas como liberdade, autoritarismo, coragem e a força de ter voz."
    ],
    textos: [
      {
        id: "texto-conto-1",
        titulo: "Hibisco Roxo – Um Novo Começo",
        autor: "Luis Carlos",
        aviso: false,
        metaCard: ["Autoria: Luis Carlos da Costa Amaral Filho"],
        metaLeitor: "Autoria: Luis Carlos da Costa Amaral Filho",
        resumo: "Kambili e Jaja vivem sob as regras rígidas do pai, Eugene, até visitarem a tia Ifeoma e descobrirem a liberdade de ter voz.",
        conteudo: [
          { p: "A casa de Kambili sempre foi um lugar silencioso, onde todos tinham medo de desobedecer às regras rígidas de seu pai, Eugene. Ela e seu irmão Jaja viviam presos a uma rotina de cobranças, violência e falta de liberdade. Apesar de tudo, Kambili ainda guardava dentro de si a esperança de que um dia sua família pudesse viver em paz." },
          { p: "Quando foram visitar a tia Ifeoma, tudo começou a mudar. Na casa da tia, Kambili conheceu duas pessoas novas: Amara, uma menina alegre e corajosa que adorava escrever poesias, e Chinedu, um jovem vizinho que sonhava em ser jornalista e lutar pela liberdade de expressão." },
          { p: "Amara logo se tornou amiga de Kambili e a incentivou a falar sobre seus sentimentos. Já Chinedu conversava bastante com Jaja, mostrando que era possível questionar as injustiças sem perder a esperança." },
          { p: "Com o passar dos dias, Kambili começou a sorrir mais e descobriu que não precisava ter medo de expressar suas opiniões. Jaja também ficou mais confiante e percebeu que a liberdade era algo que todos mereciam." },
          { p: "Quando voltaram para casa, Eugene percebeu que seus filhos estavam diferentes. Ao contrário do que esperava, eles não aceitaram mais viver calados. Jaja finalmente teve coragem de dizer:" },
          { p: "— Pai, nós somos seus filhos, não seus prisioneiros. Queremos ser respeitados e ter o direito de escolher nossos caminhos." },
          { p: "Eugene ficou furioso no primeiro momento, mas, ao perceber que estava perdendo a convivência com os filhos, começou a refletir sobre suas atitudes." },
          { p: "Algum tempo depois, a família passou por uma grande mudança. Kambili e Jaja foram morar com tia Ifeoma, onde puderam estudar, crescer e viver sem medo. Eugene, sozinho, começou a perceber o quanto suas atitudes haviam machucado aqueles que mais amava." },
          { p: "Kambili continuou escrevendo poesias com a ajuda de Amara, enquanto Jaja passou a lutar por uma sociedade mais justa, inspirado nas conversas com Chinedu." },
          { p: "Em uma manhã ensolarada, Kambili observou os hibiscos roxos florescendo no jardim da tia. Pela primeira vez, aquelas flores representavam algo além de beleza: representavam liberdade, coragem e esperança." },
          { p: "Ela sorriu e pensou que, assim como os hibiscos, mesmo em meio às dificuldades, era possível florescer novamente." },
          { p: "E assim, Kambili descobriu que o silêncio não precisava ser seu destino, pois sua voz também merecia ser ouvida." }
        ]
      },
      {
        id: "texto-conto-2",
        titulo: "Ascensão de Eugene",
        autor: "Arthur Seiji",
        aviso: true,
        metaCard: ["Releitura de “Hibisco Roxo” | Autoria: Arthur Seiji Shibukawa Araújo"],
        metaLeitor: "Releitura de “Hibisco Roxo” | Autoria: Arthur Seiji Shibukawa Araújo",
        resumo: "Releitura sombria em que Eugene, dono de um jornal independente durante uma ditadura, aceita um acordo com o regime e se torna parte do que combatia. Contém violência e menção a suicídio.",
        conteudo: [
          { p: "Em 1989, durante a ditadura de Ibrahim Babangida, Eugene, um empresário influente, era proprietário de um jornal independente que denunciava a corrupção, os abusos militares e as ligações do governo com o tráfico de drogas. Suas publicações tornaram-se uma ameaça ao regime." },
          { p: "Certa madrugada, militares invadiram a redação, destruíram documentos e queimaram arquivos que poderiam comprometer as autoridades. O editor foi capturado e morreu sob tortura na prisão. Para encobrir o crime, o governo divulgou que ele estava envolvido em atividades criminosas e que o jornal ameaçava a segurança nacional." },
          { p: "Pouco depois, Eugene também foi capturado e levado para uma instalação militar. Durante semanas, sofreu interrogatórios e violência psicológica. Entretanto, diferentemente do editor, ele possuía riqueza, influência social e poder econômico, tornando-se útil demais para ser eliminado." },
          { p: "Os militares ofereceram-lhe liberdade, proteção política e a reabertura do jornal em troca de sua colaboração. Inicialmente, Eugene resistiu, mas começou a acreditar que poderia combater a ditadura por dentro. Convencido de que o acordo seria temporário, aceitou a proposta." },
          { p: "O jornal voltou a circular, agora sob rigoroso controle governamental. Sua empresa alimentícia também passou a colaborar com o regime, permitindo que sua estrutura logística fosse utilizada em operações clandestinas de transporte de armas contrabandeadas para aliados do governo." },
          { p: "Com a ascensão de Sani Abacha, em 1993, Eugene tornou-se ainda mais poderoso. Seus negócios prosperaram, sua influência política aumentou e ele passou a frequentar os mesmos círculos que antes denunciava. Gradualmente, deixou de questionar a corrupção, justificando suas escolhas como sacrifícios necessários para conquistar poder suficiente para transformar o país." },
          { p: "Entretanto, quanto mais privilégios recebia, mais dependente se tornava do regime. O jornal perdera sua função de denunciar injustiças, e sua empresa ajudava a sustentar as atividades clandestinas do governo." },
          { p: "Eugene finalmente compreendeu que não estava combatendo o sistema por dentro: havia se tornado parte dele. Consumido pela culpa, pela perda de seus antigos ideais e pela percepção de que contribuíra para perpetuar a ditadura, Eugene chega ao fim da trajetória sem conseguir recuperar a própria identidade. Sua história termina tragicamente com seu suicídio, simbolizando a destruição moral de um homem que, ao tentar preservar seu poder, sacrificou tudo aquilo que afirmava defender." }
        ]
      },
      {
        id: "texto-conto-3",
        titulo: "O Final",
        autor: "Kauã Hideyuki",
        aviso: true,
        metaCard: ["Releitura de “Hibisco Roxo” | Autoria: Kauã Hideyuki Cares Kubota"],
        metaLeitor: "Releitura de “Hibisco Roxo” | Autoria: Kauã Hideyuki Cares Kubota",
        resumo: "Jaja, narrador da história, descobre que Kambili foi machucada por Eugene e vai atrás do pai. Escondido em casa, ele enfrenta a perseguição do pai até a chegada inesperada de alguém do passado da família. Contém violência.",
        conteudo: [
          { p: "Após ver Kambili machucada no hospital, sabia que havia algo errado, então me certifiquei de procurar o que tinha acontecido com ela. Kambili não quis me contar o que houve, então sabia que havia sido Eugene. Fui atrás dele; quando cheguei, ele disse que não havia feito nada, mas o sangue em seu quarto dizia tudo. Fui para cima dele, porém ele estava armado, então tive que me esconder." },
          { p: "Corri ao andar de cima e entrei no meu quarto, onde fiz um esconderijo para o caso de meu pai vir atrás de mim de novo. A cada passo que ele dava no corredor, meu coração batia mais rápido enquanto eu ligava para tia Ifeoma para explicar o que tinha acontecido e pedir ajuda, já que estava em perigo. Ela havia me dito que estava no hospital com Kambili e Amaka e que já ligara para um amigo “especial”." },
          { p: "Cada vez Eugene parecia mais perto. Passos cada vez mais altos — e agora gritando:" },
          { p: "— “NÃO ADIANTA SE ESCONDER, TENHO O DIA INTEIRO, MAS VOCÊ… TALVEZ VOCÊ NÃO TENHA.”" },
          { p: "Ele estava no quarto de Kambili agora, quando viu uma carta minha para ela dizendo do meu esconderijo e que, se acontecesse algo, era para ela se esconder lá e ligar para mim com o celular escondido lá dentro. Então Eugene mais uma vez grita:" },
          { p: "— “ENTÃO VOCÊS DOIS ESTAVAM TENTANDO SE ESCONDER DE MIM ESSE TEMPO TODO?! PATÉTICO! AGORA JÁ SEI ONDE VOCÊ ESTÁ.”" },
          { p: "Ele começou a vir em direção ao meu quarto. Eu havia dado aquela carta para Kambili como uma cortina de fumaça para ele não encontrar o real esconderijo onde eu estava. Ele chegou ao quarto e começou a quebrar tudo atrás de mim, porém não achou nada. Cada vez mais enfurecido, gritava com ainda mais força e raiva:" },
          { p: "— “PARE DE SE ESCONDER, VENHA LOGO, SENÃO…”" },
          { p: "Senão? Ele não terminou de falar o que iria dizer. Só sei que ele parou de falar e de andar." },
          { p: "O quarto parecia silencioso. Silencioso demais, na verdade. Prendi a respiração, tentando não fazer nenhum som no escuro, enquanto parecia que ele tentava fingir que não estava mais lá… ou que realmente não estava." },
          { p: "Comecei a me questionar o que havia acontecido quando escutei, no andar de baixo, uma pessoa caminhando lentamente. Não pareciam ser os passos do meu pai. Pareciam passos mais pesados, mais cheios de ódio, mas que não necessariamente faziam muito barulho — na verdade, nem sei como os escutei, só sei que escutei. E acho que Eugene também, já que ele começou a andar em direção à escada. Com a voz duvidosa, ele perguntou:" },
          { p: "— “Quem está aí? Seja quem for, acho melhor sair daqui, estou armado.”" },
          { p: "Nesse instante, tia Ifeoma me liga dizendo que ele havia chegado ali. Perguntei: ele? Ele quem? — tentando falar o mais baixo possível para que Eugene não me escutasse, mas também para que tia Ifeoma ouvisse. Então ela disse:" },
          { p: "— “Eu e seu pai somos irmãos de sangue, mas antigamente o Papa Nnukwu havia adotado um menino, um terceiro filho, mas que, após fazer 19 anos, tinha fugido de casa por Eugene tentar obrigá-lo a fazer parte da Igreja Católica. Seu pai naquela época era quatro anos mais velho que ele e o agredia também, assim como fazia com vocês, assim como ele fez com Kambili.”" },
          { p: "O peso daquela história ecoou na casa inteira — a mesma rigidez e violência que sempre marcaram o mundo de Eugene. Logo em seguida, escutei uma voz firme dizendo:" },
          { p: "— “Fique tranquilo, Eugene, eu também estou armado… Não só armado, mas também com sede de vingança… com vontade de me vingar por tudo que você fez comigo, mas também pelo que você fez com seus filhos e esposa.”" }
        ]
      }
    ]
  },
  resenha: {
    pagina: "resenha.html",
    rotulo: "Resenha",
    plural: "Resenhas",
    intro: [
      "A resenha é um texto que apresenta uma obra, como um livro, um filme ou uma peça, e ao mesmo tempo dá uma opinião sobre ela. Normalmente traz um resumo do enredo, destaca os pontos principais, comenta os personagens e os temas e, no final, avalia se a obra vale a leitura.",
      "Mais do que dizer se gostamos ou não, a resenha justifica a opinião com argumentos, ajudando o leitor a decidir se quer conhecer a obra. Aqui você encontra nossas resenhas de três obras da literatura, com análises dos personagens e das mensagens que cada história deixa."
    ],
    textos: [
      {
        id: "texto-resenha-1",
        titulo: "A Metamorfose",
        autor: "Luis Carlos",
        aviso: false,
        metaCard: ["Obra de Franz Kafka | Resenha: Luis Carlos da Costa Amaral Filho", "Data de publicação: 26/12/1915"],
        metaLeitor: "Obra de Franz Kafka | Resenha: Luis Carlos da Costa Amaral Filho · Data de publicação: 26/12/1915",
        resumo: "Resenha do clássico de Franz Kafka, em que Gregor Samsa acorda transformado em inseto e passa a ser rejeitado pela família. Inclui a análise de três personagens.",
        conteudo: [
          { p: "O livro A Metamorfose, escrito por Franz Kafka, conta a história de Gregor Samsa, um homem que trabalha para sustentar sua família. Certo dia, ele acorda e percebe que se transformou em um inseto gigante. A partir desse acontecimento, sua vida muda completamente." },
          { p: "Com essa transformação, Gregor passa a enfrentar dificuldades para se comunicar e conviver com sua família. Aos poucos, as pessoas que antes dependiam dele começam a tratá-lo com rejeição e desprezo, fazendo com que ele se sinta sozinho e excluído." },
          { p: "A obra mostra temas importantes, como a solidão, o preconceito, a falta de compreensão e a desvalorização das pessoas. Também faz o leitor refletir sobre como alguém pode ser tratado de maneira diferente quando deixa de ser considerado útil pela sociedade." },
          { p: "Na minha opinião, A Metamorfose é um livro muito bom e que traz uma reflexão sobre o comportamento humano. Apesar de ter uma história estranha e triste, a mensagem que ela traz é muito importante, pois nos ensina a não julgar as pessoas pelas suas aparências ou por suas condições." },
          { p: "Concluindo, recomendo a leitura desse livro, pois ele nos faz pensar sobre a importância do respeito, da empatia e da valorização de todos os seres humanos." },
          { h3: "Os personagens que mais gostei" },
          { h3: "1. Gregor Samsa (O Protagonista)" },
          { p: "Gregor Samsa é o eixo central da narrativa. Antes de acordar transformado em um inseto monstruoso, era o único provedor financeiro da casa, sustentando os pais e a irmã após a falência da família. Ele representa a desumanização causada pelo trabalho. Gregor só tinha valor enquanto era útil e produtivo. A partir do momento em que adoece e deixa de gerar lucro, torna-se um fardo invisível e descartável, levando à reflexão sobre o quanto a nossa identidade e o amor que recebemos estão condicionados à nossa utilidade financeira." },
          { h3: "2. Grete Samsa (A Irmã)" },
          { p: "Grete Samsa, inicialmente, é a única pessoa que demonstra empatia por Gregor, assumindo a tarefa de alimentá-lo e limpar seu quarto. Com o passar do tempo, porém, ela amadurece, arruma um emprego e lidera a decisão da família de se livrar do irmão. Ela simboliza a metamorfose psicológica e os limites da empatia. Enquanto Gregor sofre uma transformação física, Grete sofre uma transformação moral: ela passa de uma jovem doce e dependente para uma adulta pragmática e fria. Mostra como o cansaço, a pressão financeira e a busca pela própria sobrevivência podem endurecer o ser humano." },
          { h3: "3. Sr. Samsa (O Pai)" },
          { p: "O Sr. Samsa é uma figura autoritária que, antes da transformação do filho, vivia acomodado e endividado, dependendo do salário de Gregor. Após o ocorrido, ele retoma o controle da casa, volta a trabalhar usando um uniforme e passa a tratar o filho com violência física e desprezo (como no episódio em que atira maçãs nele). Ele representa o autoritarismo, a opressão e o egoísmo. Reflete a relação conturbada do próprio Kafka com seu pai, mostrando como estruturas de poder familiares podem ser cruéis e oportunistas, explorando o indivíduo enquanto ele é forte e esmagando-o quando demonstra fraqueza." }
        ]
      },
      {
        id: "texto-resenha-2",
        titulo: "O Pequeno Príncipe",
        autor: "Arthur Seiji",
        aviso: false,
        metaCard: ["Obra de Antoine de Saint-Exupéry | Resenha: Arthur Seiji Shibukawa Araújo"],
        metaLeitor: "Obra de Antoine de Saint-Exupéry | Resenha: Arthur Seiji Shibukawa Araújo",
        resumo: "Resenha sobre o aviador que reencontra a infância no Pequeno Príncipe e sobre o que os adultos dos asteroides ensinam: não deixar de sonhar.",
        conteudo: [
          { p: "No livro, começamos conhecendo o narrador, um aviador que teve seus dons criativos ofuscados ao longo de sua vida, mas que ainda guarda sua sensibilidade artística e imaginação. Ele relembra de quando, na infância, desenhou uma jiboia engolindo um elefante. Entretanto, após seu avião cair no deserto do Saara, reencontra a pureza e a leveza da infância no nosso Pequeno Príncipe, um garoto de cabelos loiros vindo de outro planeta, o asteroide B-612, cuja jornada acompanhamos ao longo da história." },
          { p: "De modo geral, apesar de ser considerado um conto infantil, acredito que o livro engloba muito mais do que isso, pois, a cada vez que leio a história, ela se adapta a diferentes contextos da vida. Na obra, consegui me identificar com quase todos os personagens dos asteroides, exceto com o próprio Pequeno Príncipe — justamente aquele com quem mais pude e mais me sinto motivado a me identificar. Um dos pontos fortes do livro é a maneira como ele nos incentiva a não perder o “Pequeno Príncipe” que existe dentro de nós. Talvez ele tenha sido ofuscado pelas pressões da vida adulta, mas ainda reside em nosso interior; basta começarmos “desenhando um carneiro”." },
          { p: "Ademais, algo muito interessante na obra é que todos os asteroides são habitados por adultos com suas próprias mentalidades e pensamentos adultos. Por exemplo, o rei não pensava em se divertir; para ele, ordens e respeito estavam acima de tudo, demonstrando o lado severo dos adultos. O bêbado, por sua vez, não conseguia se soltar e ser ele mesmo, então bebia para esquecer os problemas. O único problema era que seu maior motivo para beber era justamente não ter coragem de beber, o que o entristecia ainda mais, demonstrando o lado inseguro dos adultos." },
          { p: "O Pequeno Príncipe, por mais que tenha uma criança como protagonista, mostra, por meio dos habitantes dos seis asteroides, diferentes características que, quando reunidas, podem formar a imagem de um “adulto”. Um adulto sem sonhos, sem expectativas, que vive trabalhando sem parar e que não consegue enxergar o mundo ao seu redor. A mensagem que interpreto na obra é: não seja um “adulto” no sentido de perder a capacidade de sonhar. Não cresça a ponto de perder o seu Pequeno Príncipe, porque, por mais úteis que parecessem ser, todos aqueles adultos vivem sozinhos, tristes e solitários." },
          { p: "O Pequeno Príncipe é uma obra clássica e uma das mais emblemáticas da literatura, escrita, ilustrada e publicada pelo aviador e escritor francês Antoine de Saint-Exupéry em 1943 (primeiramente nos Estados Unidos; na França, foi lançado apenas em 1946). Até hoje, permanece como uma história capaz de alcançar leitores de diferentes idades." }
        ]
      },
      {
        id: "texto-resenha-3",
        titulo: "Contos de Humor da América Latina",
        autor: "Kauã Hideyuki",
        aviso: false,
        metaCard: ["Coletânea de contos | Resenha: Kauã Hideyuki Cares Kubota", "Ano de publicação: 2026 · Avaliação: ⭐⭐⭐☆☆ (3/5)"],
        metaLeitor: "Coletânea de contos | Resenha: Kauã Hideyuki Cares Kubota · Ano de publicação: 2026",
        resumo: "Resenha de uma coletânea de dez contos humorísticos de autores latino-americanos, que usam a ironia para criticar a vaidade, o preconceito e a desigualdade social.",
        conteudo: [
          { negrito: "Avaliação:", p: "⭐⭐⭐☆☆ (3/5)" },
          { p: "O livro Contos de Humor da América Latina é uma coletânea de dez contos escritos por diferentes autores latino-americanos, incluindo nomes como Machado de Assis, Arthur Azevedo e Teresa de la Parra. As histórias apresentam situações engraçadas, irônicas e inesperadas que retratam o comportamento das pessoas e os costumes da sociedade. Por meio do humor e do sarcasmo, os escritores criticam problemas como a vaidade, o preconceito, a desigualdade social e a valorização exagerada das aparências e das posições sociais." },
          { p: "Minha opinião sobre o livro foi negativa, pois não gosto de ler, tenho dificuldades na leitura e achei a linguagem formal demais. Recomendaria o livro para quem gosta de ler e/ou gosta de consumir conteúdo humorístico." },
          { p: "Se eu fosse autor do livro, tentaria adotar uma linguagem mais casual e visual, para que pessoas com dificuldades de leitura conseguissem ler mais facilmente." },
          { p: "Sua relação com a atualidade é boa, apesar de a maioria dos contos ter sido escrita há algumas décadas, já que o humor, querendo ou não, foi, é e sempre será um conteúdo consumido, pois sempre é legal ver ou ler algo engraçado." }
        ]
      }
    ]
  },
  cordel: {
    pagina: "cordel.html",
    rotulo: "Cordel",
    plural: "Cordéis",
    intro: [
      "O cordel é uma forma de literatura popular escrita em versos rimados, nascida na tradição oral e muito ligada ao Nordeste do Brasil. O nome vem de Portugal, onde pequenos folhetos eram pendurados em cordas ou cordéis para serem vendidos em feiras e mercados. No Brasil, essa prática ganhou força e identidade próprias: os folhetos costumam ter capa ilustrada com xilogravura e são escritos por poetas chamados cordelistas.",
      "Com linguagem simples, ritmo marcado e muita criatividade, o cordel conta histórias, faz críticas sociais, defende ideias e emociona. Hoje ele é reconhecido como patrimônio cultural brasileiro. Nos cordéis desta página, usamos essa tradição para falar de temas atuais, como direitos humanos e liberdade."
    ],
    textos: [
      {
        id: "texto-cordel-1",
        titulo: "A Voz do Povo e os Direitos Humanos",
        autor: "Luis Carlos",
        aviso: false,
        metaCard: ["Autoria: Luis Carlos da Costa Amaral Filho"],
        metaLeitor: "Autoria: Luis Carlos da Costa Amaral Filho",
        resumo: "Em versos rimados, o cordel defende que todas as pessoas têm direito à dignidade, ao respeito e à liberdade, sem distinção de cor, condição social ou religião.",
        conteudo: [
          { versos: [
              "Lá no sertão brasileiro,",
              "Onde o sol brilha ligeiro,",
              "Vou contar uma história,",
              "De respeito e de vitória,",
              "De um povo batalhador,",
              "Que merece paz e amor."
          ] },
          { versos: [
              "Todo mundo tem direito,",
              "De viver com dignidade,",
              "De ser tratado com respeito,",
              "E ter sua liberdade.",
              "Não importa a sua cor,",
              "Todos têm o mesmo valor!"
          ] },
          { versos: [
              "Seja rico ou seja pobre,",
              "Todo mundo é cidadão,",
              "Ninguém deve ser tratado",
              "Com desprezo ou humilhação.",
              "Pois os direitos humanos",
              "Devem valer para todos os manos!"
          ] },
          { versos: [
              "Toda criança merece",
              "Ter escola e proteção,",
              "Ter comida em sua mesa,",
              "E carinho no coração.",
              "Ter um lar para morar,",
              "E o direito de sonhar."
          ] },
          { versos: [
              "Não importa a religião,",
              "Nem o jeito de falar,",
              "Cada um tem sua escolha,",
              "E devemos respeitar.",
              "Pois viver em união",
              "É construir uma nação!"
          ] },
          { versos: [
              "Vamos todos dar as mãos,",
              "E lutar por igualdade,",
              "Combater o preconceito,",
              "A injustiça e a maldade.",
              "Pois um mundo de respeito",
              "É um mundo mais perfeito!"
          ] },
          { versos: [
              "E termino meu cordel",
              "Com uma grande reflexão:",
              "Direitos humanos são para todos,",
              "Não importa a condição.",
              "Respeitar é o caminho,",
              "Para ninguém viver sozinho!"
          ] }
        ]
      },
      {
        id: "texto-cordel-2",
        titulo: "Liberdade",
        autor: "Arthur Seiji",
        aviso: false,
        metaCard: ["Autoria: Arthur Seiji Shibukawa Araújo"],
        metaLeitor: "Autoria: Arthur Seiji Shibukawa Araújo",
        resumo: "Versos sobre o direito de pensar, falar e escolher o próprio caminho e a própria fé, com respeito à escolha de cada pessoa.",
        conteudo: [
          { versos: [
              "Que cada homem tenha o direito",
              "De pensar e escolher seu caminho,",
              "De buscar sua própria verdade",
              "Sem que o obriguem a andar sozinho.",
              "Pois a fé que nasce na alma",
              "Não floresce sob espinho."
          ] },
          { versos: [
              "Que se possa falar e pensar,",
              "Questionar sem medo ou prisão,",
              "Ter sua crença respeitada",
              "Sem sofrer qualquer imposição.",
              "Liberdade é dar ao outro",
              "O mesmo espaço e condição."
          ] },
          { versos: [
              "E no silêncio de cada consciência,",
              "Onde ninguém pode interferir,",
              "Há quem procure o Grande Arquiteto",
              "E há quem prefira não O seguir.",
              "Livre é aquele que escolhe",
              "O próprio modo de existir."
          ] }
        ]
      },
      {
        id: "texto-cordel-3",
        titulo: "Direitos Humanos",
        autor: "Davi Silva",
        aviso: false,
        metaCard: ["Autoria: Davi Silva Nascimento"],
        metaLeitor: "Autoria: Davi Silva Nascimento",
        resumo: "Versos que partem de artigos sobre vida, liberdade, segurança e o fim da escravidão para refletir sobre o preconceito que ainda existe hoje.",
        conteudo: [
          { epigrafe: "Todo ser humano tem direito à vida, à liberdade e à segurança pessoal" },
          { versos: [
              "a vida pode ser uma ilusão",
              "mas pra uma pessoa que não quis viver",
              "segurança pode ser uma confusão",
              "mas também pra quem quer ter liberdade de ver",
              "alguns que no passado foram libertos",
              "hoje em dia estão presos pelo seu próprio ego",
              "que as brincadeiras comecem",
              "mas que a insegurança consuma-os",
              "diversão e o que tem",
              "proteção e o que queríamos"
          ] },
          { epigrafe: "Ninguém será mantido em escravidão ou servidão; a escravidão e o tráfico de escravos serão proibidos em todas as suas formas" },
          { versos: [
              "estavam presos no passado",
              "hoje em dia também com o preconceito",
              "libertados no pretérito",
              "agora eles sorriem pra cuidar de seus meios",
              "pretos não são monstros",
              "são pessoas normais",
              "mas o brancos no passado",
              "eles viam o contrario"
          ] }
        ]
      },
      {
        id: "texto-cordel-4",
        titulo: "Artigos dos Direitos Humanos",
        autor: "Kauã Hideyuki",
        aviso: false,
        metaCard: ["Autoria: Kauã Hideyuki Cares Kubota"],
        metaLeitor: "Autoria: Kauã Hideyuki Cares Kubota",
        resumo: "Versos que transformam os primeiros artigos da Declaração dos Direitos Humanos em cordel: igualdade, vida, liberdade, segurança e o fim da escravidão.",
        conteudo: [
          { versos: [
              "Todos os seres humanos nascem,",
              "livres e iguais em direitos e dignidade.",
              "São dotados de razão e consciência e devem,",
              "agir com espírito de fraternidade."
          ] },
          { versos: [
              "Havendo direito à vida,",
              "há direito à liberdade,",
              "há direito à segurança pessoal,",
              "para toda a humanidade."
          ] },
          { versos: [
              "Ninguém deverá ser mantido,",
              "com alguém em servidão",
              "nem ser como objeto usado,",
              "nem sofrer escravidão"
          ] }
        ]
      }
    ]
  }
};

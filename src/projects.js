const projects = [
  {
    id: 1,
    name: 'Song Identifier',
    description:
      'Uma aplicação que reconhece qual música está tocando no ambiente e disponibiliza links pra plataformas de streaming(Spotify, iTunes, Deezer, Youtube, etc.)',
    image: 'https://github.com/natanielsantos159/songidentifier/raw/master/src/images/preview.gif',
    repository: 'https://github.com/natanielsantos159/songidentifier',
    website: 'https://natanielsantos159.github.io/songidentifier/',
    tags: ['Projeto Pessoal'],
    technologies: ['React', 'JavaScript', 'CSS3'],
    skills: [
      'Solicitar acesso ao microfone e gravar áudio',
      'Manipular dados providos pelo microfone do usuário',
      'Fazer upload de arquivo para o servidor',
      'Conceito de `blob` e `buffer`',
      'Criar arquivo a partir de um `blob`',
      'Implementar um `visualizador de áudio` do microfone utilizando `Vanilla Javascript`'
    ]
  },
  {
    id: 2,
    name: 'Trivia',
    description:
      'Um jogo de perguntas e respostas baseado no jogo Trivia (tipo um show do milhão americano rs) utilizando React e Redux, desenvolvendo em grupo suas funcionalidades de acordo com as demandas definidas em um quadro Kanban.',
    image: 'https://github.com/natanielsantos159/trivia-redux/raw/main-group-16/public/trivia.gif',
    repository: 'https://github.com/natanielsantos159/trivia-redux',
    website: 'https://natanielsantos159.github.io/trivia-redux/',
    tags: ['Módulo de Front-End', 'Projeto em Grupo'],
    technologies: ['React', 'Redux', 'JavaScript', 'CSS3'],
    skills: [
      'Criar um `store` Redux em aplicações React',
      'Criar `reducers` no Redux em aplicações React',
      'Criar `actions` no Redux em aplicações React',
      'Criar `dispatchers` no Redux em aplicações React',
      'Conectar Redux aos componentes React',
      'Criar actions assíncronas na sua aplicação React que faz uso de Redux.'
    ]
  },
  {
    id: 3,
    name: 'TrybeWallet',
    description:
      'TrybeWallet é uma aplicação feita pra gerenciar despesas, com conversão de moedas de diversos países.',
    image:
      'https://github.com/natanielsantos159/trybe-wallet/raw/main/public/ezgif.com-gif-maker%20(2).gif',
    repository: 'https://github.com/natanielsantos159/trybe-wallet',
    website: 'https://natanielsantos159.github.io/trybe-wallet',
    tags: ['Módulo de Front-End'],
    technologies: ['React', 'Redux', 'JavaScript', 'CSS3'],
    skills: [
      'Criar um `store` Redux em aplicações React',
      'Criar `reducers` no Redux em aplicações React',
      'Criar `actions` no Redux em aplicações React',
      'Criar `dispatchers` no Redux em aplicações React',
      'Conectar Redux aos componentes React',
      'Criar actions assíncronas na sua aplicação React que faz uso de Redux.'
    ]
  },
  {
    id: 4,
    name: 'TrybeTunes',
    description:
      'Uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.',
    image:
      'https://github.com/natanielsantos159/trybetunes/raw/main/src/images/trybetuneshomepage.png',
    repository: 'https://github.com/natanielsantos159/trybetunes',
    website: 'https://natanielsantos159.github.io/trybetunes/',
    tags: ['Módulo de Front-End'],
    technologies: ['React', 'Redux', 'JavaScript', 'CSS3'],
    skills: [
      'Fazer requisições e consumir dados vindos de uma `API`',
      'Utilizar os ciclos de vida de um componente React',
      'Utilizar a função `setState` de forma a garantir que um determinado código só é executado após o estado ser atualizado',
      'Utilizar o componente `BrowserRouter` corretamente',
      'Criar rotas, mapeando o caminho da URL com o componente correspondente, via `Route`',
      'Utilizar o `Switch` do `React Router`',
      'Usar o componente `Redirect` pra redirecionar para uma rota específica',
      'Criar links de navegação na aplicação com o componente `Link`'
    ]
  },
  {
    id: 5,
    name: 'Recipes App',
    description: `Um app de receitas de bebibas e comidas completo, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

    Nela é possível ver, buscar, filtrar, favoritar e acompanhar o processo de preparação de receitas e drinks!
    
    A base de dados são 2 APIs distintas, uma para comidas e outra para bebidas.
    
    O layout tem como foco dispositivos móveis, então todos os protótipos estão desenvolvidos em telas menores.`,
    image:
      'https://github.com/natanielsantos159/recipes-app-project/blob/main-group-18-development/src/images/Captura%20de%20tela%20de%202022-01-17%2016-37-13.png?raw=true',
    repository: 'https://github.com/natanielsantos159/recipes-app-project',
    website: 'https://natanielsantos159.github.io/recipes-app-project/',
    tags: ['Módulo de Front-End', 'Projeto em Grupo'],
    technologies: ['React', 'JavaScript', 'CSS3'],
    skills: [
      'Utilizar `Redux` para gerenciar estado',
      'Utilizar a biblioteca `React-Redux`',
      'Utilizar a `Context API` do React para gerenciar estado',
      'Utilizar o React Hook `useState`',
      'Utilizar o React Hook `useContext`',
      'Utilizar o React Hook `useEffect`',
      'Criar `Hooks` customizados'
    ]
  },
  {
    id: 6,
    name: 'Trybe Futebol Club',
    description: `O TFC é um site informativo sobre partidas e classificações de futebol! ⚽`,
    image:
      'https://github.com/natanielsantos159/trybe-futebol-clube/raw/nataniel-santos-trybe-futebol-clube/front-example.png?raw=true',
    repository: 'https://github.com/natanielsantos159/trybe-futebol-clube',
    tags: ['Módulo de Back-End'],
    technologies: ['React', 'TypeScript', 'NodeJS', 'Express', 'Sequelize', 'MySQL', 'Docker', 'Mocha', 'JWT'],
    skills: [
      'Realizar a dockerização dos apps, network, volume e compose',
      'Modelar dados com `MySQL` através do `Sequelize`',
      'Criar e associar tabelas usando `models` do `sequelize`',
      'Construir uma `API REST` com endpoints para consumir os models criados',
      'Fazer um `CRUD` utilizando `ORM`',
      'Testar uma aplicação back-end utilizando `Mocha, Chai e Sinon`',
    ]
  },
  {
    id: 7,
    name: 'ChoqueFlix',
    description:
      'Um site baseado no design da Netflix com o tema do canal do youtube Choque de Cultura.',
    image:
      'https://joaoreisjpk-portfolio.vercel.app/_next/static/images/ChoqueFlix-b84ac8a612b3da3489472a646f18646c.png',
    repository: 'https://github.com/joaoreisjpk/ChoqueFlix--JS-CSS-Vanilla',
    website: 'https://choqueflix.vercel.app/',
    tags: ['Projeto Pessoal', 'Projeto em Grupo'],
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    skills: [
      'Manipular elementos do DOM utitilizando `JavaScript`',
      'Consumir APIs',
      'Salvar informações no LocalStorage',
      'Criar animations utilizando CSS3',
      'Trabalhar em equipe'
    ]
  },
  {
    id: 8,
    name: 'Open Weather Project',
    description:
      'O intuito desse desafio é identificar o clima atual e a previsão do clima nos próximos 5 dias da cidade pesquisada através do site',
    image:
      'https://camo.githubusercontent.com/62914ed4a1179a94c28ffd900a47802de36c0b7dbba21db8412e86d20d99257e/687474703a2f2f692e696d6775722e636f6d2f48437a6a5641622e676966',
    repository: 'https://github.com/natanielsantos159/open-weather-desafio',
    website: 'https://open-weather-desafio.vercel.app/',
    tags: ['Projeto Pessoal'],
    technologies: ['JavaScript', 'NextJS', 'CSS3'],
    skills: [
      'Criar rotas no `Next.js`',
      'Utilizar autocomplete de cidades utilizando a API do `Google Maps`',
      'Página de pesquisa de cidade',
      'Página que mostra o clima da cidade pesquisada',
      'Página que mostra a previsão do clima nos próximos 5 dias da cidade pesquisada',
      'Opção de mudar a escala de grau: `Celsius` ou `Fahrenheit`',
      'Pesquisa por geolocalização',
      'Internacionalização para inglês/espanhol',
    ]
  },
  {
    id: 9,
    name: 'Store Manager',
    description:
      'Minha primeira API RESTful desenvolvida utilizando a arquitetura MSC! A API trata-se de um sistema de gerenciamento de vendas, onde será possível criar, visualizar, deletar e atualizar produtos e vendas',
    repository: 'https://github.com/natanielsantos159/store-manager',
    tags: ['Módulo de Back-End'],
    technologies: ['NodeJS', 'Express', 'MySQL'],
    skills: [
      'Entender o funcionamento da camada de Model',
      'Delegar responsabilidades específicas para essa camada',
      'Conectar sua aplicação com diferentes bancos de dados',
      'Estruturar uma aplicação em camadas',
      'Delegar responsabilidades específicas para cada parte do app',
      'Melhorar manutenibilidade e reusabilidade do código',
      'Entender e aplicar os padrões REST',
      'Escrever assinaturas para APIs intuitivas e facilmente entendíveis',
    ]
  },
  {
    id: 10,
    name: 'Talker Manager',
    description:
      'Projeto introdutório ao NodeJs e Node Express do módulo de back-end da Trybe. Foi desenvoldida uma API de um CRUD (Create, Read, Update e Delete) de palestrantes por meio de endpoints que irão ler e escrever em um arquivo, isso utilizando o módulo fs.',
    repository: 'https://github.com/natanielsantos159/talker-manager-project',
    tags: ['Módulo de Back-End'],
    technologies: ['NodeJS', 'Express'],
    skills: [
      'Realizar operações assíncronas utilizando callbacks;',
      'Realizar operações assíncronas utilizando `Promises`;',
      'Ler e escrever arquivos localmente com `NodeJS`;',
      'Escrever seus próprios scripts que criam e consomem `Promises`;',
      'Reescrever código que usa callbacks para que use `Promises`;',
      'Realizar chamadas de funções de forma consciente;',
      'Entender os conceitos básicos de como o JavaScript funciona;',
      'Detectar e solucionar problemas no código de forma mais objetiva;',
      'Entender a diferença entre execução síncrona e assíncrona;',
      'Entender o que é o `HTTP`, o que é uma API e o que os dois têm a ver com o Express;',
      'Escrever APIs utilizando `Node` e `Express`;',
      'Entender a estrutura de uma aplicação `Express` e como organizar seu código;',
      'Criar rotas e aplicar `middlewares`.'
    ]
  },
  {
    id: 11,
    name: 'Blogs API',
    description:
      'Uma API CRUD para um site de blogs, ultizando Express, Node.js e Sequelize',
    repository: 'https://github.com/natanielsantos159/blogs-api',
    tags: ['Módulo de Back-End'],
    technologies: ['Express', 'NodeJS', 'Sequelize', 'MySQL', 'JWT'],
    skills: [
      'Criar e associar tabelas usando `models` do `sequelize`',
      'Construir endpoints para consumir os models',
      'Fazer um `CRUD` com o `ORM`',
    ]
  },
  {
    id: 12,
    name: 'Trybe Smith',
    description:
      'Uma API CRUD de itens medievais em TypeScript.',
    repository: 'https://github.com/natanielsantos159/trybe-smith',
    tags: ['Módulo de Back-End'],
    technologies: ['TypeScript', 'NodeJS', 'Express', 'MySQL', 'JWT'],
    skills: [
      'Declarar variáveis e funções com tipagens `Typescript`',
      'Construir uma API Node Express utilizando o `Typescript`.',
    ]
  },
  {
    id: 13,
    name: 'Movie Card Library',
    description:
      'Projeto introdutório ao React do módulo de Front-end da Trybe. Foi desenvolvido ma biblioteca de cartões de filmes',
    image:
      'https://github.com/natanielsantos159/project-movie-cards-library/blob/nataniel-santos-movie-cards-library/src/images/Captura%20de%20tela%20de%202022-01-18%2021-12-10.png?raw=true',
    repository: 'https://github.com/natanielsantos159/project-movie-cards-library',
    website: 'https://natanielsantos159.github.io/project-movie-cards-library',
    tags: ['Módulo de Front-End'],
    technologies: ['React', 'JavaScript', 'CSS3'],
    skills: [
      'Saber a melhor forma para instalar um gerenciador de pacotes',
      'Inicializar um projeto em `React`',
      'Utilizar JSX no `React`',
      'Utilizar o `ReactDOM.render` para renderizar elementos numa página web',
      'Utilizar o `import` para usar código externo junto ao seu',
      'Criar componentes `React` corretamente',
      'Fazer uso de `props` corretamente',
      'Fazer composição de componentes corretamente',
      'Criar múltiplos componentes dinamicamente',
      'Utilizar `PropTypes` para checar o tipo de uma prop no uso de um componente',
      'Utilizar `PropTypes` para garantir a presença de props obrigatórias no uso de um componente',
      'Utilizar `PropTypes` para checar que uma prop é um objeto de formato específico',
      'Utilizar `PropTypes` para garantir que uma prop é um array com elementos de um determinado tipo'
    ]
  },
  {
    id: 14,
    name: 'Todo List',
    description: 'Uma aplicação simples de lista de tarefas',
    image:
      'https://github.com/natanielsantos159/todo-list-project/raw/main/Captura%20de%20tela%20de%202021-12-22%2017-06-03.png',
    repository: 'https://github.com/natanielsantos159/todo-list-project',
    website: 'https://natanielsantos159.github.io/todo-list-project',
    tags: ['Módulo de Fundamentos'],
    technologies: ['JavaScript', 'CSS3'],
    skills: ['Manipular `CSS`', 'Manipular `JavaScript`']
  },
  {
    id: 15,
    name: 'Pixels Art',
    description: 'App simples pra desenhar pixel art',
    image:
      'https://github.com/natanielsantos159/pixels-art-project/blob/nataniel-santos-project-pixels-art/Captura%20de%20tela%20de%202022-01-17%2014-43-46.png?raw=true',
    repository: 'https://github.com/natanielsantos159/pixels-art-project',
    website: 'https://natanielsantos159.github.io/pixels-art-project/',
    tags: ['Módulo de Fundamentos'],
    skills: ['Manipular o `DOM`', 'Manipular o `JavaScript`'],
    technologies: ['JavaScript', 'CSS3']
  },
];

export default projects;

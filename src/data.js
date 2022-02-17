const projects = [
  {
    name: "Song Identifier",
    description: "Uma aplicação que reconhece qual música está tocando no ambiente e disponibiliza links pra plataformas de streaming(Spotify, iTunes, Deezer, Youtube, etc.)",
    image:
      "https://github.com/natanielsantos159/songidentifier/raw/master/src/images/preview.gif",
    repository: "https://github.com/natanielsantos159/songidentifier",
    website: "https://natanielsantos159.github.io/songidentifier/",
    tags: ["Projeto Pessoal"],
    skills: [
      "Solicitar acesso ao microfone e gravar áudio",
      "Manipular dados providos pelo microfone do usuário",
      "Fazer upload de arquivo para o servidor",
      "Conceito de `blob` e `buffer`",
      "Criar arquivo a partir de um `blob`",
      "Implementar um `visualizador de áudio` do microfone utilizando `Vanilla Javascript`",
    ],
  },
  {
    name: "Trivia",
    description: "Um game de perguntas que utiliza a API do Trivia",
    image:
      "https://github.com/natanielsantos159/trivia-redux/raw/main-group-16/public/trivia.gif",
    repository: "https://github.com/natanielsantos159/trivia-redux",
    website: "https://natanielsantos159.github.io/trivia-redux/",
    tags: ["Módulo de Front-End", "Projeto em Grupo"],
    skills: [
      "Criar um `store` Redux em aplicações React",
      "Criar `reducers` no Redux em aplicações React",
      "Criar `actions` no Redux em aplicações React",
      "Criar `dispatchers` no Redux em aplicações React",
      "Conectar Redux aos componentes React",
      "Criar actions assíncronas na sua aplicação React que faz uso de Redux.",
    ],
  },
  {
    name: "TrybeWallet",
    description:
      "TrybeWallet é uma aplicação feita pra gerenciar despesas, com conversão de moedas de diversos países.",
    image:
      "https://github.com/natanielsantos159/trybe-wallet/raw/main/public/ezgif.com-gif-maker%20(2).gif",
    repository: "https://github.com/natanielsantos159/trybe-wallet",
    website: "https://natanielsantos159.github.io/trybe-wallet",
    tags: ["Módulo de Front-End"],
    skills: [
      "Criar um `store` Redux em aplicações React",
      "Criar `reducers` no Redux em aplicações React",
      "Criar `actions` no Redux em aplicações React",
      "Criar `dispatchers` no Redux em aplicações React",
      "Conectar Redux aos componentes React",
      "Criar actions assíncronas na sua aplicação React que faz uso de Redux.",
    ],
  },
  {
    name: "TrybeTunes",
    description:
      "Uma aplicação web para pesquisar e salvar as músicas favoritas",
    image:
      "https://github.com/natanielsantos159/trybetunes/raw/main/src/images/trybetuneshomepage.png",
    repository: "https://github.com/natanielsantos159/trybetunes",
    website: "https://natanielsantos159.github.io/trybetunes/",
    tags: ["Módulo de Front-End"],
    skills: [
      "Fazer requisições e consumir dados vindos de uma `API`",
      "Utilizar os ciclos de vida de um componente React",
      "Utilizar a função `setState` de forma a garantir que um determinado código só é executado após o estado ser atualizado",
      "Utilizar o componente `BrowserRouter` corretamente",
      "Criar rotas, mapeando o caminho da URL com o componente correspondente, via `Route`",
      "Utilizar o `Switch` do `React Router`",
      "Usar o componente `Redirect` pra redirecionar para uma rota específica",
      "Criar links de navegação na aplicação com o componente `Link`",
    ],
  },
  {
    name: "Todo List",
    description: "Uma aplicação simples de lista de tarefas",
    image:
      "https://github.com/natanielsantos159/todo-list-project/raw/main/Captura%20de%20tela%20de%202021-12-22%2017-06-03.png",
    repository: "https://github.com/natanielsantos159/todo-list-project",
    website: "https://natanielsantos159.github.io/todo-list-project",
    tags: ["Módulo de Fundamentos"],
    skills: ["Manipular `CSS`", "Manipular `Javascript`"],
  },
  {
    name: "Pixels Art",
    description: "App simples pra desenhar pixel art",
    image:
      "https://github.com/natanielsantos159/pixels-art-project/blob/nataniel-santos-project-pixels-art/Captura%20de%20tela%20de%202022-01-17%2014-43-46.png?raw=true",
    repository: "https://github.com/natanielsantos159/pixels-art-project",
    website: "https://natanielsantos159.github.io/pixels-art-project/",
    tags: ["Módulo de Fundamentos"],
    skills: ["Manipular o `DOM`", "Manipular o `Javascript`"],
  },
  {
    name: "Recipes App",
    description: "Um app de receitas de bebibas e comidas completo.",
    image:
      "https://github.com/natanielsantos159/recipes-app-project/blob/main-group-18-development/src/images/Captura%20de%20tela%20de%202022-01-17%2016-37-13.png?raw=true",
    repository: "https://github.com/natanielsantos159/recipes-app-project",
    website: "https://natanielsantos159.github.io/recipes-app-project/",
    tags: ["Módulo de Front-End", "Projeto em Grupo"],
    skills: [
      "Utilizar `Redux` para gerenciar estado",
      "Utilizar a biblioteca `React-Redux`",
      "Utilizar a `Context API` do React para gerenciar estado",
      "Utilizar o React Hook `useState`",
      "Utilizar o React Hook `useContext`",
      "Utilizar o React Hook `useEffect`",
      "Criar `Hooks` customizados",
    ],
  },
  {
    name: "Talker Manager",
    description:
      "Projeto introdutório ao NodeJs e Node Express do módulo de back-end da Trybe",
    repository: "https://github.com/natanielsantos159/talker-manager-project",
    tags: ["Módulo de Back-End"],
    skills: [
      "Realizar operações assíncronas utilizando callbacks;",
      "Realizar operações assíncronas utilizando `Promises`;",
      "Ler e escrever arquivos localmente com `NodeJS`;",
      "Escrever seus próprios scripts que criam e consomem `Promises`;",
      "Reescrever código que usa callbacks para que use `Promises`;",
      "Realizar chamadas de funções de forma consciente;",
      "Entender os conceitos básicos de como o JavaScript funciona;",
      "Detectar e solucionar problemas no código de forma mais objetiva;",
      "Entender a diferença entre execução síncrona e assíncrona;",
      "Entender o que é o `HTTP`, o que é uma API e o que os dois têm a ver com o Express;",
      "Escrever APIs utilizando `Node` e `Express`;",
      "Entender a estrutura de uma aplicação `Express` e como organizar seu código;",
      "Criar rotas e aplicar `middlewares`.",
    ],
  },
  {
    name: "Movie Card Library",
    description:
      "Projeto introdutório ao React do módulo de Front-end da Trybe.",
    image: "https://github.com/natanielsantos159/project-movie-cards-library/blob/nataniel-santos-movie-cards-library/src/images/Captura%20de%20tela%20de%202022-01-18%2021-12-10.png?raw=true",
    repository:
      "https://github.com/natanielsantos159/project-movie-cards-library",
    website: "https://natanielsantos159.github.io/project-movie-cards-library",
    tags: ["Módulo de Front-End"],
    skills: [
      "Saber a melhor forma para instalar um gerenciador de pacotes",
      "Inicializar um projeto em `React`",
      "Utilizar JSX no `React`",
      "Utilizar o `ReactDOM.render` para renderizar elementos numa página web",
      "Utilizar o `import` para usar código externo junto ao seu",
      "Criar componentes `React` corretamente",
      "Fazer uso de `props` corretamente",
      "Fazer composição de componentes corretamente",
      "Criar múltiplos componentes dinamicamente",
      "Utilizar `PropTypes` para checar o tipo de uma prop no uso de um componente",
      "Utilizar `PropTypes` para garantir a presença de props obrigatórias no uso de um componente",
      "Utilizar `PropTypes` para checar que uma prop é um objeto de formato específico",
      "Utilizar `PropTypes` para garantir que uma prop é um array com elementos de um determinado tipo",
    ],
  },
];

export default projects;

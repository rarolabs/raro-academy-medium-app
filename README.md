# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# language: pt

# Funcionalidade: Consumo dos artigos publicados
  Como usuário comum do sistema, logado ou em modo anônimo
  Quero ver a lista com todos os artigos publicados em nosso repositório

  ## Cenario: Lista de artigos publicados
    Dado que o usuário acesse o sistema de publicação de artigos
    Quando o usuário navega para a tela de home
    E existem artigos publicados
    Então devem ser apresentados todos os artigos publicados
    E os artigos deverão conter o título, o autor, a data de publicação e o resumo

  ## Cenario: Tela de listagem sem artigos publicados
    Dado que o usuário acesse o sistema de publicação de artigos
    E não existem artigos publicados
    Então o sistema deve apresentar uma mensagem dizendo que não existem artigos publicados

  ## Cenario: Acessar um artigo para leitura
    Dado que o usuário acesse o sistema de publicação de artigos
    Quando o usuário navega para a tela de home
    E o usuário selecionar um artigo
    Então deve ser apresentado o artigo selecionado
    E o artigo deverá conter o título, o autor e o conteúdo do artigo

# Funcionalidade: Login na plataforma
  Como um usuário já cadastrado na plataforma
  Quero me autenticar no sistema
  Para que eu consiga criar e publicar artigos

  ## Cenario: Login realizado com sucesso
    Dado que o usuário acesse o sistema de publicação de artigos
    E que não esteja logado na plataforma
    Quando o usuário navega para a tela de login
    E se autentica com usuário e senha corretos
    Então o sistema redireciona este usuário para a tela de seus artigos

  ## Cenario: Login não realizado
    Dado que o usuário acesse o sistema de publicação de artigos
    E que não esteja logado na plataforma
    Quando o usuário navega para a tela de login
    E tenta se autenticar com usuário ou senha incorretos
    Então o sistema deve apresentar uma mensagem de erro "Usuário ou senha inválidos"
    E o sistema não redireciona este usuário para a tela de seus artigos
  
  ## Cenario: Logout do sistema
    Dado que o usuário acesse o sistema de publicação de artigos
    E que o usuário esteja logado na plataforma
    Quando o usuário clica na opção "Logout"
    Então o sistema deve deslogar o usuário e redirecionar este usuário para a tela listagem de artigos

# Funcionalidade: Navegação na plataforma
  Como usuário comum do sistema, logado ou em modo anônimo
  Quero navegar pelas diversas Funcionalidade do sistema

  ## Cenario: Usuario não autenticado
    Dado que o usuário não esteja logado na plataforma
    E acesse o sistema de publicação de artigos
    Então o sistema deverá apresentar o menu de navegação para a tela de "home (listagem de artigos)"
    E o sistema deverá apresentar o menu de navegação para a tela de "login"

  ## Cenario: Usuario autenticado
    Dado que o usuário esteja logado na plataforma
    E acesse o sistema de publicação de artigos
    Então o sistema deverá apresentar o menu de navegação para a tela de "home (listagem de artigos)"
    E o sistema deverá apresentar o menu de navegação para a tela de "meus artigos"
    E o sistema deverá apresentar o menu de navegação para a tela de "novo artigo"
    E o sistema deverá apresentar o menu para logout

# Funcionalidade: Gestão dos meus artigos
  Como um usuário já autenticado na plataforma
  Quero ver a lista dos artigos que eu publiquei
  Para que eu possa editar e excluir estes artigos

  ## Cenario: Usuário não possui artigos publicados
    Dado que o usuário autenticado acesse o sistema de publicação de artigos
    E navegue para a tela de meus artigos
    Quando o usuário não possui artigos publicados
    Então o sistema deve apresentar uma mensagem reportando que não há artigos publicados

  ## Cenario: Usuário possui artigos publicados
    Dado que o usuário autenticado acesse o sistema de publicação de artigos
    E navegue para a tela de meus artigos
    Quando o usuário possui artigos publicados
    Então o sistema deve apresentar todos os artigos publicados
    E o sistema deverá apresentar a opção de editar o artigo

  ## Cenario: Criar um novo artigo
    Dado que o usuário autenticado acesse o sistema de publicação de artigos
    E acesse a tela de novo artigo
    Quando o usuário preenche todos os campos do cadastro do artigo
    E clica em salvar
    Então o sistema deve salvar o artigo
    E redirecionar o usuário para a tela de exibição deste novo artigo

  ## Cenario: Editar um artigo
    Dado que o usuário autenticado acesse o sistema de publicação de artigos
    E acesse a tela de artigos ou de meus artigos
    E clique no botão de editar do artigo
    Quando o usuário preenche todos os campos do cadastro do artigo
    E clica em salvar
    Então o sistema deve salvar o artigo
    E redirecionar o usuário para a tela de exibição deste novo artigo

  ## Cenario: Excluir um artigo
    Dado que o usuário autenticado acesse o sistema de publicação de artigos
    E acesse a tela de edição de determinado artigo
    E clique no botão de excluir do artigo
    Então o sistema deve excluir o artigo
    E redirecionar o usuário para a tela de meus artigos
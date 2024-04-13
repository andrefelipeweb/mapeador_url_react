<<<<<<< HEAD
# MAPEADOR DE URL CRIADO COM REACT E NODE

## Descrição
Esse projeto é uma aplicação web que permite aos usuários analisar e fazer o download de sitemaps de URLs de um determinado site. 
Ele fornece uma interface simples para inserir uma URL, analisar o sitemap associado e fazer o download do sitemap como um arquivo JSON.

## Funcionalidades
- **Análise de URL**: Os usuários podem inserir uma URL de um site para análise.
- **Obtenção de Sitemap**: A aplicação verifica o arquivo `robots.txt` do site para obter o URL do sitemap ou tenta acessar diretamente `/sitemap.xml`.
- **Download do Sitemap**: Após a análise, os usuários podem fazer o download do sitemap como um arquivo JSON.

## Tecnologias Utilizadas
- **Express.js**: Framework web para Node.js utilizado para criar o servidor backend.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as URLs dos sitemaps.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB, utilizado para modelar os dados da aplicação.
- **Axios**: Cliente HTTP baseado em Promise utilizado para fazer requisições HTTP.
- **xml2js**: Biblioteca para Node.js utilizada para analisar XML e converter para JSON.
- **bcrypt**: Biblioteca utilizada para hash de senhas.
- **jsonwebtoken**: Biblioteca utilizada para criação e verificação de tokens JWT para autenticação de usuários.
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **HTML/CSS**: Linguagens de marcação e estilo para o desenvolvimento do frontend.
- **JavaScript (ES6+)**: Linguagem de programação para o desenvolvimento tanto do frontend quanto do backend.
- **dotenv**: Módulo utilizado para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **cors**: Middleware utilizado para habilitar o CORS (Cross-Origin Resource Sharing) no servidor Express.
- **Body-parser**: Middleware utilizado para fazer o parse do corpo das requisições HTTP no servidor Express.

## Instalação e Execução
1. Clone o repositório do projeto para o seu ambiente local.
git@github.com:andrefelipeweb/mapeador_url_react.git

2. Instale as dependências do backend:
cd pasta-do-backend
npm install

3. Instale as dependências do frontend:
cd pasta-do-frontend
npm install

4. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do diretório `backend` com as seguintes variáveis:
DB_USER=seu_usuario
DB_PASS=sua_senha
Substitua `seu_usuario` e `sua_senha` pelo seu usuário e senha do MongoDB.

5. Execute o servidor backend e frontend:
Na respectiva pasta de cada um entre com npm start

6. Acesse a aplicação em seu navegador através do endereço `http://localhost:3000`.

## Contribuição
Contribuições são bem-vindas! Se você quiser contribuir com este projeto, por favor, siga estes passos:
1. Faça um fork do repositório.
2. Crie uma nova branch com a sua feature: `git checkout -b minha-feature`
3. Faça commit das suas alterações: `git commit -m 'Adicionando uma nova feature'`
4. Envie as suas alterações para a branch: `git push origin minha-feature`
5. Envie um pull request para revisão.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).


=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> e2fda4f (Initialize project using Create React App)

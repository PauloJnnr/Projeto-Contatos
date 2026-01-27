# Lista de Contatos - React

Uma aplicação web moderna para gerenciar uma lista de contatos, desenvolvida com React, TypeScript, Redux e Styled Components.

## 🎯 Funcionalidades

- ✅ **Adicionar Contatos**: Formulário simples para cadastrar novos contatos
- ✅ **Listar Contatos**: Visualização de todos os contatos cadastrados
- ✅ **Editar Contatos**: Modifique informações de contatos existentes
- ✅ **Remover Contatos**: Delete contatos da lista
- ✅ **Persistência de Dados**: Dados gerenciados com Redux

## 📋 Dados do Contato

Cada contato contém as seguintes informações:
- **Nome Completo**: Nome completo do contato
- **E-mail**: Endereço de e-mail do contato
- **Telefone**: Número de telefone do contato

## 🛠️ Tecnologias Utilizadas

- **React 18.2.0**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Adiciona tipagem estática ao JavaScript
- **Redux Toolkit**: Gerenciamento previsível do estado da aplicação
- **Styled Components**: Biblioteca para estilização em CSS-in-JS
- **React Router DOM**: Roteamento entre páginas

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para executar:

1. **Navegue até o diretório do projeto**
   ```bash
   cd contatos
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie a aplicação**
   ```bash
   npm start
   ```

A aplicação abrirá automaticamente em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── BotaoAdicionar/       # Botão flutuante para adicionar contatos
│   ├── Tarefa/               # Componente de exibição/edição de contato
│   └── FiltroCard/           # Componente de filtro (não utilizado em contatos)
├── containers/
│   ├── BarraLateral/         # Sidebar da aplicação
│   ├── Formulario/           # Formulário para criar novo contato
│   └── ListaDeTarefas/       # Lista de contatos
├── pages/
│   ├── Home/                 # Página principal com lista de contatos
│   └── Cadastro/             # Página de cadastro de novo contato
├── models/
│   └── Tarefa.ts             # Classe de modelo para Contato
├── store/
│   ├── reducers/
│   │   └── tarefas.ts        # Redux reducer para gerenciar contatos
│   └── index.ts              # Configuração da store Redux
├── styles/
│   ├── index.ts              # Estilos globais
│   └── variaveis.ts          # Variáveis de cores
└── App.tsx                   # Componente principal da aplicação
```

## 🚀 Como Usar

### Adicionar um Contato
1. Clique no botão flutuante **"+ Adicionar Contato"** no canto inferior direito
2. Preencha os campos: Nome Completo, E-mail e Telefone
3. Clique em "Cadastrar Contato"

### Editar um Contato
1. Na lista de contatos, clique no botão **"Editar"**
2. Modifique os dados desejados
3. Clique em **"Salvar"** para confirmar as alterações

### Remover um Contato
1. Na lista de contatos, clique no botão **"Remover"**
2. O contato será deletado imediatamente

## 📊 Estado da Aplicação (Redux)

O Redux gerencia os contatos através da store com as seguintes ações:

- `adicionarContato`: Adiciona um novo contato à lista
- `removerContato`: Remove um contato pelo ID
- `editarContato`: Atualiza as informações de um contato existente

## 🎨 Estilos

A aplicação utiliza **Styled Components** para uma estilização componentizada e dinâmica:
- Componentes estilizados em arquivos `styles.ts` separados
- Tema de cores consistente através de `variaveis.ts`
- Estilos globais em `styles/index.ts`

## 🔧 Scripts Disponíveis

- `npm start`: Inicia a aplicação em modo desenvolvimento
- `npm build`: Cria uma versão otimizada para produção
- `npm test`: Executa os testes da aplicação
- `npm eject`: Expõe todas as configurações (não reversível)

## 📝 Licença

Este projeto foi desenvolvido como atividade de aprendizado.

---


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

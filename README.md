# React + TypeScript + Vite

![image](https://github.com/user-attachments/assets/3a5226e2-c696-49aa-81e1-314e680b7fde)

[FIGMA](https://www.figma.com/design/2snqrdvs82BVfwowwOLWpE/StarWars-%2F-RickandMorty?node-id=0-1&p=f&t=mZAQl6mlkrpx8hiE-0)

## Sobre o Projeto
Este projeto é uma aplicação React com TypeScript que utiliza a API GraphQL do Rick and Morty para exibir uma lista de personagens e gerenciar favoritos. A interface é construída com Tailwind CSS para estilização e oferece funcionalidades como adicionar e remover personagens dos favoritos, buscar personagens e navegação paginada.

## Preparação do Ambiente

### Configurações Iniciais
**Clone o projeto:**
`
git clone <url-do-repositório>
`
## Instale as dependências:
`yarn`

## Tecnologias e Ferramentas
- React com TypeScript para a construção da interface.
- React router dom para rotas
- Tailwind CSS para estilização.
- Apollo Client para consumo da API GraphQL.
- Zustand para gerenciamento global
- CLSX e Tailwind Merge para classes condicionais e combinações eficientes.
- ESLint e Prettier para garantir a padronização e formatação do código.
- Husky e lint-staged para automatizar hooks de Git.
- Commitlint para garantir commits no padrão conventional commits.
- Jest e React Testing Library para testes unitários com padrão Triple A de organização.

## Estrutura dos arquivos

- src: Este é o diretório principal que contém o código fonte do projeto.
- app: Pode incluir componentes principais e configurações do nível mais alto do aplicativo, como os contextos (useFavoriteStore.ts) e testes relacionados (useFavorite.test.ts).
- assets: Normalmente contém recursos estáticos como imagens (background_stars.jpg, logo.png, etc.) e fontes.
- router: Configuram as rotas do React Router, que determinam qual componente é renderizado com base na URL acessada pelo usuário
- components: Contém os componentes React utilizados no projeto. Subdiretórios como view e internal podem organizar componentes por tipo ou funcionalidade.
- store: Geralmente contém arquivos relacionados ao gerenciamento de estado, como pode ser sugerido pelo arquivo useFavoriteStore.ts.
- utils: Diretório para funções utilitárias que podem ser usadas em várias partes do projeto.
- view: Contém componentes relacionados às visualizações específicas da aplicação, como páginas ou layouts mais complexos.
- public: Diretório para arquivos que devem ser acessíveis publicamente na web, como o index.html.

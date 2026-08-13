
[English version below](#english-version)

# Portfólio Pessoal

Este é o repositório do meu portfólio pessoal, onde compartilho meus projetos, experiências e habilidades. Sinta-se à vontade para explorar o código e acessar a versão ao vivo para conhecer meu trabalho.

## Layout

Sidebar fixa (foto, nome, links) à esquerda e conteúdo rolável à direita, dividido nas seções:

- **Sobre**: Breve apresentação.
- **Experiência**: Timeline com experiências profissionais.
- **Projetos**: Listagem curada manualmente, com destaque de features e stack por projeto — veja abaixo como adicionar um novo.
- **Skills**: Tecnologias e ferramentas que utilizo, filtráveis por categoria (Linguagens, Back-end, Front-end, Ferramentas).

### Como adicionar um projeto à listagem

A seção Projetos é curada manualmente (não busca mais via API do GitHub, pra permitir descrição e features reais por projeto). Para adicionar um projeto:

1. Adicione uma entrada em `src/data/projects.js` com os dados técnicos (`id`, `language`, `tech`, `repoUrl`, `demoUrl`, `private`).
2. Adicione o conteúdo textual correspondente (`name`, `description`, `features`) em `src/i18n/translations.js`, dentro de `projetos.items.<id>`, nos dois idiomas (`pt` e `en`).

## Tecnologias Utilizadas

- React
- Tailwind CSS
- Framer Motion

## Rodando o Projeto Localmente

=>Pré-requisitos: instalar Node.js (npm necessário)

1. Clone o repositório: `git clone https://github.com/merlinmec/portfolio.git`
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm start`

## Contato

- [LinkedIn](https://www.linkedin.com/in/joao-manoel-carvalho/)
- [Email](mailto:joaomanoel190701@gmail.com)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
## {#english-version}

# Personal Portfolio 

This is the repository for my personal portfolio, where I share my projects, experiences, and skills. Feel free to explore the code and check out the live version to get to know my work.

## Layout

A fixed sidebar (photo, name, links) on the left and scrollable content on the right, split into these sections:

- **About**: A brief introduction.
- **Experience**: Timeline of my professional experience.
- **Projects**: Manually curated listing, with per-project features and stack highlights — see below how to add a new one.
- **Skills**: Technologies and tools I use, filterable by category (Languages, Backend, Frontend, Tools).

### How to add a project to the list

The Projects section is manually curated (no longer fetched via the GitHub API, to allow a real description and features per project). To add a project:

1. Add an entry to `src/data/projects.js` with the technical data (`id`, `language`, `tech`, `repoUrl`, `demoUrl`, `private`).
2. Add the matching text content (`name`, `description`, `features`) to `src/i18n/translations.js`, under `projetos.items.<id>`, in both languages (`pt` and `en`).

## Technologies Used

- React
- Tailwind CSS
- Framer Motion

## Running the Project Locally

=>Prerequisites: install Node.js (npm required)

1. Clone the repository: `git clone https://github.com/merlinmec/portfolio.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`

## Contact

- [LinkedIn](https://www.linkedin.com/in/joao-manoel-carvalho/)
- [Email](mailto:joaomanoel190701@gmail.com)

// Catálogo de projetos em destaque no portfólio.
//
// Curado manualmente (não é mais buscado via API do GitHub) — para adicionar
// um projeto novo: crie a entrada aqui com os dados técnicos, e o conteúdo
// textual (nome, descrição, features) em `src/i18n/translations.js`, dentro
// de `projetos.items.<id>` nos dois idiomas.
//
// `private: true` esconde o botão "Ver no GitHub" (link morto pra quem
// visita) e mostra um selo de "repositório privado" no lugar — tornar o
// repo público no GitHub resolve isso sem precisar mexer aqui.
export const projects = [
  {
    id: 'fin-mec',
    language: 'Java',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'Testcontainers', 'Docker'],
    repoUrl: 'https://github.com/merlinmec/fin-mec',
    demoUrl: null,
    private: true,
  },
  {
    id: 'instagram-tracker',
    language: 'TypeScript',
    tech: ['Node.js', 'TypeScript', 'Playwright', 'GitHub Actions'],
    repoUrl: 'https://github.com/merlinmec/instagram-tracker',
    demoUrl: null,
    private: true,
  },
  {
    id: 'pixel-type',
    language: 'TypeScript',
    tech: ['TypeScript', 'React', 'Vite', 'Canvas API'],
    repoUrl: 'https://github.com/merlinmec/pixel-type',
    demoUrl: null,
    private: false,
  },
];

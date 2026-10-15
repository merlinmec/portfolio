// Catálogo de projetos em destaque no portfólio.
//
// Curado manualmente (não é mais buscado via API do GitHub) — para adicionar
// um projeto novo: crie a entrada aqui com os dados técnicos, e o conteúdo
// textual (nome, problema, solução e a legenda de cada print) em
// `src/i18n/translations.js`, dentro de `projetos.items.<id>` nos dois idiomas.
//
// `images` são os prints em `public/projetos/<id>/<nome>.webp`, na ordem da
// galeria: o primeiro é a capa. A legenda de cada um fica em `shots.<nome>`.
//
// `private: true` esconde o botão "Ver no GitHub" (link morto pra quem
// visita) e mostra um selo de "repositório privado" no lugar — tornar o
// repo público no GitHub resolve isso sem precisar mexer aqui.
export const projects = [
  {
    id: 'fin-mec',
    images: ['dashboard', 'relatorios', 'lancamentos', 'metas'],
    language: 'Java',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'React', 'TypeScript', 'Testcontainers', 'Docker'],
    repoUrl: 'https://github.com/merlinmec/fin-mec',
    // /demo cria uma conta de visitante temporária, já com dados fictícios (docs/DEMO.md no repo).
    demoUrl: 'https://fin-mec-demo.onrender.com/demo',
    private: false,
  },
  {
    id: 'mec-qrsafe',
    images: ['editor', 'raio-x', 'estrutura', 'bloqueio'],
    language: 'Kotlin',
    tech: ['Kotlin', 'Spring Boot', 'Reed-Solomon', 'React', 'TypeScript', 'Canvas API', 'ZXing (testes)', 'Docker'],
    repoUrl: 'https://github.com/merlinmec/mec-qrsafe',
    // O editor inteiro, sem conta nem dados guardados (docs/DEMO.md no repo).
    demoUrl: 'https://mec-qrsafe.onrender.com',
    private: false,
  },
  {
    id: 'arvore',
    images: ['painel', 'hoje', 'areas', 'revisao'],
    language: 'Java',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Flyway', 'React', 'TypeScript', 'PWA', 'Testcontainers'],
    repoUrl: 'https://github.com/merlinmec/arvore',
    // /demo cria um visitante com dez semanas de dados fictícios, num schema próprio (docs/DEMO.md no repo).
    demoUrl: 'https://arvore-demo.onrender.com/demo',
    private: false,
  },
  {
    id: 'pixel-type',
    images: ['bordas', 'braille', 'blocos'],
    language: 'TypeScript',
    tech: ['TypeScript', 'React', 'Vite', 'Canvas API'],
    repoUrl: 'https://github.com/merlinmec/pixel-type',
    demoUrl: null,
    private: false,
  },
  {
    id: 'mec-lineup',
    images: ['preview-posicao', 'formas-reais', 'marcar-referencia', 'menu'],
    language: 'TypeScript',
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'IndexedDB (Dexie)', 'Vitest'],
    repoUrl: 'https://github.com/merlinmec/mec-lineup',
    demoUrl: null,
    private: false,
  },
];

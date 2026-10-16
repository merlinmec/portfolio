// Textos da interface nos dois idiomas. O conteúdo de cada projeto não
// mora aqui: fica em src/content/projetos/<idioma>/<projeto>.md.

export const idiomas = ['pt', 'en'] as const;
export type Idioma = (typeof idiomas)[number];

const contato = {
  email: 'joaomanoel190701@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joao-manoel-carvalho/',
  github: 'https://github.com/merlinmec',
};

const pt = {
  htmlLang: 'pt-BR',
  meta: {
    titulo: 'João Manoel Carvalho | Desenvolvedor back-end',
    descricao:
      'Portfólio de João Manoel Carvalho, desenvolvedor back-end em Java e Kotlin. Projetos com código aberto, demos e as decisões técnicas por trás de cada um.',
  },
  pularConteudo: 'Pular para o conteúdo',
  nav: {
    inicio: 'Início',
    projetos: 'Projetos',
    trajetoria: 'Trajetória',
    contato: 'Contato',
    menu: 'Menu',
    principal: 'Navegação principal',
    trocarIdioma: 'Read in English',
    idiomaCurto: 'EN',
    temaClaro: 'Usar tema claro',
    temaEscuro: 'Usar tema escuro',
  },
  hero: {
    nome: ['João Manoel', 'Carvalho'],
    lead: 'Desenvolvedor back-end. Java e Kotlin no servidor, com a regra de negócio testada antes de chegar na tela.',
    verProjetos: 'Ver projetos',
    curriculo: 'Currículo',
    arteAlt: 'A marca mec desenhada em pontos de braille',
    legenda: 'Desenhado em braille pelo Text-Art, um dos projetos abaixo.',
  },
  projetos: {
    titulo: 'Projetos',
    intro: 'Projetos pessoais, cada um nascido de um problema concreto. Todos com código aberto.',
    problema: 'O problema',
    solucao: 'A solução',
    verCaso: 'Ver o projeto',
    todosRepos: 'Todos os repositórios no GitHub',
  },
  trajetoria: {
    titulo: 'Trajetória',
    texto:
      'Trabalho com back-end em Java na EDU3, que faz software de gestão escolar. Fora do trabalho, construo o que não caberia no dia a dia: um encoder de QR escrito do zero, um app de finanças com mais de 300 testes no backend, um conversor de imagem em texto.',
    itens: [
      {
        quando: 'Hoje',
        titulo: 'Desenvolvedor back-end na EDU3',
        texto:
          'Crio e evoluo funcionalidades em Java usadas por instituições de ensino. Também passo por front-end e banco de dados, e participo das decisões técnicas das features sob minha responsabilidade, do desenho da solução até a entrega.',
      },
      {
        quando: 'Out 2026',
        titulo: 'mec-qrsafe chega à v1.0',
        texto: 'Encoder completo nas 40 versões do QR, conferido módulo a módulo contra o ZXing.',
        projeto: 'mec-qrsafe',
      },
      {
        quando: 'Set 2026',
        titulo: 'Árvore e MEC Lineup',
        texto:
          'Um app de hábitos organizado por áreas da vida e um minimapa de lineups de Valorant que roda offline.',
        projeto: 'arvore',
      },
      {
        quando: 'Ago 2026',
        titulo: 'fin-mec, Text-Art e mec-qrsafe começam',
        texto: 'Três projetos no mesmo mês: finanças pessoais, arte de texto e QR codes que não quebram.',
        projeto: 'fin-mec',
      },
      {
        quando: 'Nov 2024',
        titulo: 'Primeira versão deste portfólio',
        texto: 'Em React com Create React App. Esta versão foi refeita em Astro.',
      },
    ],
  },
  contato: {
    titulo: 'Contato',
    texto:
      'Aberto a vagas de desenvolvimento back-end e a projetos freelance. O jeito mais rápido é por e-mail.',
    qrLegenda: 'Aponte a câmera para abrir meu LinkedIn. QR gerado e validado pelo mec-qrsafe.',
    qrAlt: 'QR code que abre o perfil de João Manoel Carvalho no LinkedIn',
    ...contato,
  },
  rodape: {
    feitoCom: 'Feito com Astro. Código no GitHub.',
    voltarTopo: 'Voltar ao topo',
  },
  projeto: {
    voltar: 'Todos os projetos',
    inicio: 'Início',
    linguagem: 'Linguagem',
    stack: 'Stack',
    links: 'Links',
    demo: 'Abrir a demo',
    codigo: 'Ver o código',
    telas: 'Telas',
    ampliar: 'Ampliar',
    proximo: 'Próximo projeto',
  },
  naoEncontrado: {
    titulo: 'Página não encontrada',
    texto: 'O endereço pode ter mudado com a nova versão do site.',
    voltar: 'Voltar ao início',
  },
  meses: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
};

const en: typeof pt = {
  htmlLang: 'en',
  meta: {
    titulo: 'João Manoel Carvalho | Back-end developer',
    descricao:
      'Portfolio of João Manoel Carvalho, a back-end developer working in Java and Kotlin. Open-source projects, live demos and the technical decisions behind each one.',
  },
  pularConteudo: 'Skip to content',
  nav: {
    inicio: 'Home',
    projetos: 'Projects',
    trajetoria: 'Journey',
    contato: 'Contact',
    menu: 'Menu',
    principal: 'Main navigation',
    trocarIdioma: 'Ler em português',
    idiomaCurto: 'PT',
    temaClaro: 'Switch to light theme',
    temaEscuro: 'Switch to dark theme',
  },
  hero: {
    nome: ['João Manoel', 'Carvalho'],
    lead: 'Back-end developer. Java and Kotlin on the server, with the business rules tested before they reach the screen.',
    verProjetos: 'See projects',
    curriculo: 'Résumé',
    arteAlt: 'The mec mark drawn in braille dots',
    legenda: 'Drawn in braille by Text-Art, one of the projects below.',
  },
  projetos: {
    titulo: 'Projects',
    intro: 'Personal projects, each one born from a concrete problem. All of them open source.',
    problema: 'The problem',
    solucao: 'The solution',
    verCaso: 'See the project',
    todosRepos: 'All repositories on GitHub',
  },
  trajetoria: {
    titulo: 'Journey',
    texto:
      "I work on the back-end in Java at EDU3, a company that builds school management software. Outside work, I build what wouldn't fit in my day job: a QR encoder written from scratch, a finance app with over 300 back-end tests, an image-to-text converter.",
    itens: [
      {
        quando: 'Now',
        titulo: 'Back-end developer at EDU3',
        texto:
          'I build and evolve Java features used by schools. I also work on the front-end and the database, and I take part in the technical decisions on the features I own, from solution design to delivery.',
      },
      {
        quando: 'Oct 2026',
        titulo: 'mec-qrsafe reaches v1.0',
        texto: 'A complete encoder across all 40 QR versions, checked module by module against ZXing.',
        projeto: 'mec-qrsafe',
      },
      {
        quando: 'Sep 2026',
        titulo: 'Árvore and MEC Lineup',
        texto: 'A habit app organized by areas of life, and a Valorant lineup minimap that works offline.',
        projeto: 'arvore',
      },
      {
        quando: 'Aug 2026',
        titulo: 'fin-mec, Text-Art and mec-qrsafe begin',
        texto: "Three projects in the same month: personal finance, text art and QR codes that don't break.",
        projeto: 'fin-mec',
      },
      {
        quando: 'Nov 2024',
        titulo: 'First version of this portfolio',
        texto: 'Built in React with Create React App. This version was rebuilt in Astro.',
      },
    ],
  },
  contato: {
    titulo: 'Contact',
    texto: 'Open to back-end development roles and freelance projects. Email is the fastest way to reach me.',
    qrLegenda: 'Point your camera here to open my LinkedIn. QR generated and validated by mec-qrsafe.',
    qrAlt: "QR code that opens João Manoel Carvalho's LinkedIn profile",
    ...contato,
  },
  rodape: {
    feitoCom: 'Built with Astro. Source on GitHub.',
    voltarTopo: 'Back to top',
  },
  projeto: {
    voltar: 'All projects',
    inicio: 'Started',
    linguagem: 'Language',
    stack: 'Stack',
    links: 'Links',
    demo: 'Open the demo',
    codigo: 'View the code',
    telas: 'Screens',
    ampliar: 'Enlarge',
    proximo: 'Next project',
  },
  naoEncontrado: {
    titulo: 'Page not found',
    texto: 'The address may have changed with the new version of the site.',
    voltar: 'Back to home',
  },
  meses: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export const ui = { pt, en };

export const t = (idioma: Idioma) => ui[idioma];

/** Rotas por idioma: o português fica na raiz, o inglês em /en. */
export const rotas = {
  inicio: (idioma: Idioma) => (idioma === 'pt' ? '/' : '/en/'),
  projeto: (idioma: Idioma, slug: string) =>
    idioma === 'pt' ? `/projetos/${slug}/` : `/en/projects/${slug}/`,
};

/** "2026-08" vira "ago 2026" / "Aug 2026". */
export const formatarMes = (idioma: Idioma, anoMes: string) => {
  const [ano, mes] = anoMes.split('-').map(Number);
  return `${ui[idioma].meses[mes - 1]} ${ano}`;
};

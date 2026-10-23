// Textos da interface nos dois idiomas (os mesmos da versão em React).
// Os dados de cada projeto ficam em src/content/projetos/<idioma>/<projeto>.md.

export const idiomas = ['pt', 'en'] as const;
export type Idioma = (typeof idiomas)[number];

const contato = {
  email: 'joaomanoel190701@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joao-manoel-carvalho/',
  github: 'https://github.com/merlinmec',
};

const pt = {
  htmlLang: 'pt-BR',
  ogLocale: 'pt_BR',
  meta: {
    titulo: 'João Manoel Carvalho | Desenvolvedor de Software',
    descricao:
      'Portfólio de João Manoel Carvalho, desenvolvedor de software com foco em back-end (Java, Spring) e React.',
  },
  pularConteudo: 'Pular para o conteúdo',
  navbar: {
    logoAlt: 'Logo João Manoel — MEC DEV',
    homeAria: 'Ir para o início',
    langSwitchAria: 'Mudar para inglês',
    principal: 'Navegação principal',
    nav: {
      sobre: 'Sobre',
      experiencia: 'Experiência',
      projetos: 'Projetos',
      skills: 'Skills',
      contato: 'Contato',
    },
  },
  sobre: {
    eyebrow: 'Olá, eu sou o João',
    headlineTop: 'Desenvolvedor',
    headlineBottom: 'Back-end',
    // [frase, quanto tempo ela fica na tela em ms]
    frases: [
      ['Java & Spring no back-end', 2500],
      ['APIs, regras de negócio, banco de dados', 2200],
      ['Um pouco de React quando o projeto pede', 2200],
      ['Sempre aprendendo algo novo', 2000],
    ] as [string, number][],
    paragrafo:
      'Sou desenvolvedor <b>back-end</b>, com experiência em <b>Java</b> e <b>Spring</b> — construindo APIs, regras de negócio e integrações. Também transito pelo front-end com <b>React</b> quando o projeto pede. Confira meus projetos e veja como posso agregar valor às suas ideias!',
    focusAreas: ['Java', 'Spring', 'Kotlin', 'TypeScript', 'React'],
    cta: 'Ver projetos',
    cv: 'Meu currículo',
    cvArquivo: '/curriculo.pdf',
    cvDownload: 'Curriculo-Joao-Manoel.pdf',
    arteAlt: 'A marca mec desenhada em pontos de braille',
    legenda: 'Desenhado em braille pelo Text-Art, um dos meus projetos.',
  },
  experiencia: {
    eyebrow: 'Trajetória',
    title: 'Experiência',
    description: 'Desenvolvedor back-end Java — aplicando isso na prática no dia a dia.',
    items: [
      {
        quando: 'Atual',
        role: 'Desenvolvedor Back-end — EDU3',
        description:
          'Atuo no desenvolvimento back-end em Java na EDU3, empresa de software para gestão de sistemas escolares, criando e evoluindo funcionalidades usadas por instituições de ensino. Além do back-end, participo de outras frentes do desenvolvimento (como front-end e banco de dados) e já colaborei em decisões técnicas de features que passaram pela minha responsabilidade, do desenho da solução até a entrega.',
      },
    ],
  },
  projetos: {
    eyebrow: 'Trabalho',
    title: 'Projetos',
    viewAllBtn: 'Ver todos os projetos no GitHub',
    demo: 'Ver demo',
    github: 'Ver no GitHub',
    problemLabel: 'O problema.',
    solutionLabel: 'A solução.',
    techLabel: 'Tecnologias',
    galeria: {
      ampliar: (legenda: string) => `Ampliar: ${legenda}`,
      mostrar: (n: number, legenda: string) => `Mostrar imagem ${n}: ${legenda}`,
    },
    ariaDemo: (nome: string) => `Ver demo do projeto ${nome}`,
    ariaGithub: (nome: string) => `Ver código do projeto ${nome} no GitHub`,
  },
  skills: {
    eyebrow: 'Ferramentas',
    title: 'Skills',
    description:
      'Tecnologias que uso no dia a dia — no trabalho, nos projetos pessoais e na construção deste site.',
    categories: {
      all: 'Todas',
      languages: 'Linguagens',
      backend: 'Back-end',
      frontend: 'Front-end',
      tools: 'Ferramentas',
    },
  },
  contato: {
    eyebrow: 'Vamos conversar',
    title: 'Contato',
    description:
      'Estou sempre aberto a oportunidades interessantes — seja uma vaga CLT, projetos freelance, colaborações técnicas ou até uma conversa despretensiosa. Vamos nos conectar!',
    role: 'Desenvolvedor de Software Back-end',
    linkedinBtn: 'Me Encontre no LinkedIn',
    ariaLinkedin: 'Meu perfil no LinkedIn',
    qrLegenda:
      'Aponte a câmera para abrir meu LinkedIn. QR gerado e validado pelo mec-qrsafe, um dos meus projetos.',
    qrAlt: 'QR code que abre o perfil de João Manoel Carvalho no LinkedIn',
    ...contato,
  },
  footer: {
    bio: 'Desenvolvedor back-end apaixonado por construir sistemas robustos e bem testados. Aberto a vagas CLT, freelas e colaborações.',
    linksTitle: 'Links Rápidos',
    projectsTitle: 'Projetos em Destaque',
    viewAll: 'Ver todos os projetos',
    ariaGithub: 'Meu perfil no GitHub',
    ariaLinkedin: 'Meu perfil no LinkedIn',
    ariaEmail: 'Me mandar um e-mail',
    location: 'Teresina, PI',
    tagline: 'Desenvolvedor Back-end · Java & Spring · React',
    copyright: (ano: number) => `© ${ano} João Manoel Carvalho — feito com Astro & Tailwind CSS.`,
  },
  naoEncontrado: {
    titulo: 'Página não encontrada',
    texto: 'O endereço pode ter mudado com a nova versão do site.',
    voltar: 'Voltar ao início',
  },
};

const en: typeof pt = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  meta: {
    titulo: 'João Manoel Carvalho | Software Developer',
    descricao:
      'Portfolio of João Manoel Carvalho, a software developer focused on back-end (Java, Spring) and React.',
  },
  pularConteudo: 'Skip to content',
  navbar: {
    logoAlt: 'João Manoel logo — MEC DEV',
    homeAria: 'Go to homepage',
    langSwitchAria: 'Mudar para português',
    principal: 'Main navigation',
    nav: {
      sobre: 'About',
      experiencia: 'Experience',
      projetos: 'Projects',
      skills: 'Skills',
      contato: 'Contact',
    },
  },
  sobre: {
    eyebrow: "Hi, I'm João",
    headlineTop: 'Developer',
    headlineBottom: 'Back-end',
    frases: [
      ['Java & Spring on the back-end', 2500],
      ['APIs, business logic, databases', 2200],
      ['A bit of React when the project needs it', 2200],
      ['Always learning something new', 2000],
    ],
    paragrafo:
      "I'm a <b>back-end</b> developer, experienced in <b>Java</b> and <b>Spring</b> — building APIs, business logic and integrations. I also work on the front-end with <b>React</b> when the project calls for it. Check out my projects and see how I can add value to your ideas!",
    focusAreas: ['Java', 'Spring', 'Kotlin', 'TypeScript', 'React'],
    cta: 'View projects',
    cv: 'My resume',
    cvArquivo: '/resume.pdf',
    cvDownload: 'Resume-Joao-Manoel.pdf',
    arteAlt: 'The mec mark drawn in braille dots',
    legenda: 'Drawn in braille by Text-Art, one of my projects.',
  },
  experiencia: {
    eyebrow: 'Journey',
    title: 'Experience',
    description: 'Back-end Java developer — applying it in practice, day to day.',
    items: [
      {
        quando: 'Current',
        role: 'Back-end Developer — EDU3',
        description:
          'I work on back-end development in Java at EDU3, a software company for school management systems, building and evolving features used by educational institutions. Besides back-end, I take part in other fronts of development (like front-end and databases) and have already contributed to technical decisions on features under my responsibility, from design to delivery.',
      },
    ],
  },
  projetos: {
    eyebrow: 'Work',
    title: 'Projects',
    viewAllBtn: 'View all projects on GitHub',
    demo: 'View demo',
    github: 'View on GitHub',
    problemLabel: 'The problem.',
    solutionLabel: 'The solution.',
    techLabel: 'Technologies',
    galeria: {
      ampliar: (legenda) => `Enlarge: ${legenda}`,
      mostrar: (n, legenda) => `Show image ${n}: ${legenda}`,
    },
    ariaDemo: (nome) => `View demo of project ${nome}`,
    ariaGithub: (nome) => `View ${nome} project's code on GitHub`,
  },
  skills: {
    eyebrow: 'Tools',
    title: 'Skills',
    description: 'Technologies I use day to day — at work, in personal projects, and building this site.',
    categories: {
      all: 'All',
      languages: 'Languages',
      backend: 'Backend',
      frontend: 'Frontend',
      tools: 'Tools',
    },
  },
  contato: {
    eyebrow: "Let's talk",
    title: 'Contact',
    description:
      "I'm always open to exciting opportunities — whether it's full-time roles, freelance projects, tech collaborations, or even a friendly conversation. Let's connect!",
    role: 'Back-end Software Developer',
    linkedinBtn: 'Reach Me on LinkedIn',
    ariaLinkedin: 'My LinkedIn profile',
    qrLegenda:
      'Point your camera here to open my LinkedIn. QR generated and validated by mec-qrsafe, one of my projects.',
    qrAlt: "QR code that opens João Manoel Carvalho's LinkedIn profile",
    ...contato,
  },
  footer: {
    bio: 'Back-end developer passionate about building robust, well-tested systems. Open to full-time roles, freelance work, and collaborations.',
    linksTitle: 'Quick Links',
    projectsTitle: 'Featured Projects',
    viewAll: 'View all projects',
    ariaGithub: 'My GitHub profile',
    ariaLinkedin: 'My LinkedIn profile',
    ariaEmail: 'Send me an email',
    location: 'Teresina, PI',
    tagline: 'Back-end Developer · Java & Spring · React',
    copyright: (ano) => `© ${ano} João Manoel Carvalho — built with Astro & Tailwind CSS.`,
  },
  naoEncontrado: {
    titulo: 'Page not found',
    texto: 'The address may have changed with the new version of the site.',
    voltar: 'Back to home',
  },
};

export const ui = { pt, en };

export const t = (idioma: Idioma) => ui[idioma];

export const outroIdioma = (idioma: Idioma): Idioma => (idioma === 'pt' ? 'en' : 'pt');

/** O português fica na raiz, o inglês em /en. */
export const inicio = (idioma: Idioma) => (idioma === 'pt' ? '/' : '/en/');

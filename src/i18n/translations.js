import React from 'react';

export const translations = {
  pt: {
    navbar: {
      logoAlt: 'Logo João Manoel — MEC DEV',
      homeAria: 'Ir para o início',
      langSwitchAria: 'Mudar para inglês',
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
      sequence: [
        'Java & Spring no back-end',
        2500,
        'APIs, regras de negócio, banco de dados',
        2200,
        'Um pouco de React quando o projeto pede',
        2200,
        'Sempre aprendendo algo novo',
        2000,
      ],
      paragraph: () => (
        <>
          Sou desenvolvedor <b>back-end</b>, com experiência em <b>Java</b> e <b>Spring</b> —
          construindo APIs, regras de negócio e integrações. Também transito pelo front-end com{' '}
          <b>React</b> quando o projeto pede. Confira meus projetos e veja como posso agregar
          valor às suas ideias!
        </>
      ),
      focusAreas: ['Java', 'Spring', 'Kotlin', 'TypeScript', 'React'],
      cta: 'Ver projetos',
      cv: 'Meu currículo',
    },
    contato: {
      eyebrow: 'Vamos conversar',
      title: 'Contato',
      description:
        'Estou sempre aberto a oportunidades interessantes — seja uma vaga CLT, projetos freelance, colaborações técnicas ou até uma conversa despretensiosa. Vamos nos conectar!',
      role: 'Desenvolvedor de Software Back-end',
      linkedin: 'Me Encontre no LinkedIn',
      ariaLinkedin: 'Meu perfil no LinkedIn',
    },
    experiencia: {
      eyebrow: 'Trajetória',
      title: 'Experiência',
      description: 'Desenvolvedor back-end Java — aplicando isso na prática no dia a dia.',
      items: [
        {
          role: 'Desenvolvedor Back-end — EDU3',
          period: 'Atual',
          description:
            'Atuo no desenvolvimento back-end em Java na EDU3, empresa de software para gestão de sistemas escolares, criando e evoluindo funcionalidades usadas por instituições de ensino. Além do back-end, participo de outras frentes do desenvolvimento (como front-end e banco de dados) e já colaborei em decisões técnicas de features que passaram pela minha responsabilidade, do desenho da solução até a entrega.',
        },
        {
          role: 'Projetos Independentes',
          period: 'Contínuo',
          description:
            'Desenvolvo projetos próprios com Java, Spring e React, aplicando boas práticas de programação e princípios de design de software. Uso esses projetos para explorar tecnologias e problemas que não apareceriam no dia a dia do trabalho, e para consolidar decisões de arquitetura de ponta a ponta.',
        },
      ],
    },
    projetos: {
      eyebrow: 'Trabalho',
      title: 'Projetos',
      viewAllBtn: 'Ver todos os projetos no GitHub',
      demo: 'Ver demo',
      github: 'Ver no GitHub',
      privateLabel: 'Repositório privado',
      featuresLabel: 'Funcionalidades',
      ariaDemo: (name) => `Ver demo do projeto ${name}`,
      ariaGithub: (name) => `Ver código do projeto ${name} no GitHub`,
      items: {
        'fin-mec': {
          name: 'fin-mec',
          description:
            'API de controle financeiro pessoal em Spring Boot — hoje com a base de autenticação pronta: sessão por cookie, hash de senha com Argon2, rate limiter próprio contra brute-force e testes de integração reais contra Postgres.',
          features: [
            'Hash de senha com Argon2 em vez do bcrypt padrão',
            'Rate limiter próprio contra tentativas de login/registro em excesso',
            'Testes de integração reais com Testcontainers + PostgreSQL, não só mock',
          ],
        },
        'instagram-tracker': {
          name: 'Instagram Tracker Pro',
          description:
            'Sistema automatizado que monitora seguidores e deixar-de-seguir em perfis do Instagram, rodando na nuvem via GitHub Actions e notificando por Telegram.',
          features: [
            'Anti-banimento: sessão persistida, intervalos randômicos, backoff exponencial, user-agent camuflado',
            'Intercepta o tráfego GraphQL/API diretamente (Network Interception) em vez de raspar o DOM',
            'Execução agendada gratuita 2x ao dia via GitHub Actions',
          ],
        },
        'pixel-type': {
          name: 'Textura',
          description:
            'Converte uma imagem em arte de caracteres — texto de verdade, selecionável e colável — rodando inteiro no navegador, sem backend.',
          features: [
            'Algoritmo próprio: luminância, grade com correção de proporção, dithering Floyd–Steinberg, rampa de densidade, codificação em Braille',
            'Núcleo em TypeScript puro, sem dependência de DOM — testável isoladamente',
            'Preview em tempo real, copiar e baixar como .txt',
          ],
        },
      },
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
    footer: {
      bio: 'Desenvolvedor back-end apaixonado por construir sistemas robustos e bem testados. Aberto a vagas CLT, freelas e colaborações.',
      linksTitle: 'Links Rápidos',
      projectsTitle: 'Projetos em Destaque',
      viewAll: 'Ver todos os projetos',
      projectBlurbs: {
        'fin-mec': 'API de controle financeiro',
        'instagram-tracker': 'Monitor de seguidores automatizado',
        'pixel-type': 'Conversor de imagem em ASCII art',
      },
      ariaGithub: 'Meu perfil no GitHub',
      ariaLinkedin: 'Meu perfil no LinkedIn',
      ariaEmail: 'Me mandar um e-mail',
      email: 'joaomanoel190701@gmail.com',
      location: 'Teresina, PI',
      tagline: 'Desenvolvedor Back-end · Java & Spring · React',
      copyright: (year) => `© ${year} João Manoel Carvalho — feito com React & Tailwind CSS.`,
    },
  },

  en: {
    navbar: {
      logoAlt: 'João Manoel logo — MEC DEV',
      homeAria: 'Go to homepage',
      langSwitchAria: 'Mudar para português',
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
      sequence: [
        'Java & Spring on the back-end',
        2500,
        'APIs, business logic, databases',
        2200,
        'A bit of React when the project needs it',
        2200,
        'Always learning something new',
        2000,
      ],
      paragraph: () => (
        <>
          I'm a <b>back-end</b> developer, experienced in <b>Java</b> and <b>Spring</b> —
          building APIs, business logic and integrations. I also work on the front-end with{' '}
          <b>React</b> when the project calls for it. Check out my projects and see how I can add
          value to your ideas!
        </>
      ),
      focusAreas: ['Java', 'Spring', 'Kotlin', 'TypeScript', 'React'],
      cta: 'View projects',
      cv: 'My resume',
    },
    contato: {
      eyebrow: "Let's talk",
      title: 'Contact',
      description:
        "I'm always open to exciting opportunities — whether it's full-time roles, freelance projects, tech collaborations, or even a friendly conversation. Let's connect!",
      role: 'Back-end Software Developer',
      linkedin: 'Reach Me on LinkedIn',
      ariaLinkedin: 'My LinkedIn profile',
    },
    experiencia: {
      eyebrow: 'Journey',
      title: 'Experience',
      description: 'Back-end Java developer — applying it in practice, day to day.',
      items: [
        {
          role: 'Back-end Developer — EDU3',
          period: 'Current',
          description:
            'I work on back-end development in Java at EDU3, a software company for school management systems, building and evolving features used by educational institutions. Besides back-end, I take part in other fronts of development (like front-end and databases) and have already contributed to technical decisions on features under my responsibility, from design to delivery.',
        },
        {
          role: 'Independent Projects',
          period: 'Ongoing',
          description:
            "I build my own projects with Java, Spring and React, applying good programming practices and software design principles. I use these projects to explore technologies and problems that wouldn't come up in my day-to-day work, and to consolidate end-to-end architecture decisions.",
        },
      ],
    },
    projetos: {
      eyebrow: 'Work',
      title: 'Projects',
      viewAllBtn: 'View all projects on GitHub',
      demo: 'View demo',
      github: 'View on GitHub',
      privateLabel: 'Private repository',
      featuresLabel: 'Key features',
      ariaDemo: (name) => `View demo of project ${name}`,
      ariaGithub: (name) => `View ${name} project's code on GitHub`,
      items: {
        'fin-mec': {
          name: 'fin-mec',
          description:
            "A personal finance API in Spring Boot — currently with the auth foundation in place: cookie-based sessions, Argon2 password hashing, a custom rate limiter against brute-force, and real integration tests against Postgres.",
          features: [
            'Argon2 password hashing instead of plain bcrypt',
            'Custom rate limiter against excessive login/register attempts',
            'Real integration tests with Testcontainers + PostgreSQL, not just mocks',
          ],
        },
        'instagram-tracker': {
          name: 'Instagram Tracker Pro',
          description:
            'An automated system that tracks follows/unfollows on Instagram profiles, running in the cloud via GitHub Actions and notifying through Telegram.',
          features: [
            'Anti-ban: persisted session, randomized intervals, exponential backoff, disguised user-agent',
            'Intercepts GraphQL/API traffic directly (network interception) instead of scraping the DOM',
            'Free scheduled runs twice a day via GitHub Actions',
          ],
        },
        'pixel-type': {
          name: 'Textura',
          description:
            'Converts an image into character art — real, selectable, copy-pasteable text — running entirely in the browser, no backend.',
          features: [
            'Own algorithm: luminance, aspect-corrected grid, Floyd–Steinberg dithering, density ramp, Braille encoding',
            'Core written in plain TypeScript with no DOM dependency — independently testable',
            'Real-time preview, copy and download as .txt',
          ],
        },
      },
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
    footer: {
      bio: 'Back-end developer passionate about building robust, well-tested systems. Open to full-time roles, freelance work, and collaborations.',
      linksTitle: 'Quick Links',
      projectsTitle: 'Featured Projects',
      viewAll: 'View all projects',
      projectBlurbs: {
        'fin-mec': 'Personal finance API',
        'instagram-tracker': 'Automated follower tracker',
        'pixel-type': 'Image-to-ASCII-art converter',
      },
      ariaGithub: 'My GitHub profile',
      ariaLinkedin: 'My LinkedIn profile',
      ariaEmail: 'Send me an email',
      email: 'joaomanoel190701@gmail.com',
      location: 'Teresina, PI',
      tagline: 'Back-end Developer · Java & Spring · React',
      copyright: (year) => `© ${year} João Manoel Carvalho — built with React & Tailwind CSS.`,
    },
  },
};

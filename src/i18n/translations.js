import React from 'react';

export const translations = {
  pt: {
    sidebar: {
      title: 'Desenvolvedor de Software Back-end',
      bio: 'Foco em back-end com Java e Spring, também atuando com React no front-end. Sempre em busca de aprender e evoluir tecnicamente.',
      cv: 'Meu currículo',
      logoAlt: 'Logo João Manoel — MEC DEV',
      photoAlt: 'Ilustração de João Manoel',
      homeAria: 'Ir para o início',
      langSwitchAria: 'Mudar para inglês',
      nav: {
        sobre: 'Sobre',
        experiencia: 'Experiência',
        projetos: 'Projetos',
        skills: 'Skills',
      },
      social: {
        github: 'Meu perfil no GitHub',
        linkedin: 'Meu perfil no LinkedIn',
        instagram: 'Meu perfil no Instagram',
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
      focusAreas: ['Java', 'Spring', 'Estágio ativo — EDU3', 'React'],
      cta: 'Ver projetos',
    },
    experiencia: {
      eyebrow: 'Trajetória',
      title: 'Experiência',
      description:
        'Estudante de Ciências da Computação e desenvolvedor Java — onde venho aplicando isso na prática.',
      items: [
        {
          role: 'Estagiário — EDU3',
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
      title: 'Projetos Recentes',
      viewAllBtn: 'Ver todos os projetos no GitHub',
      loading: 'Carregando projetos…',
      demo: 'Ver demo',
      github: 'Ver no GitHub',
      ariaDemo: (name) => `Ver demo do projeto ${name}`,
      ariaGithub: (name) => `Ver código do projeto ${name} no GitHub`,
      defaultDescription: 'Projeto em andamento — descrição em breve.',
      defaultLanguage: 'Projeto',
      errorMsg: (githubUser) => (
        <>
          Não consegui carregar os projetos agora (API do GitHub indisponível ou limite de
          requisições atingido). Veja todos direto no{' '}
          <a
            className="underline hover:text-accent transition-all"
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </>
      ),
      emptyMsg: (topic) => (
        <>
          Nenhum projeto marcado ainda. Adicione a topic <code>{topic}</code> nos repositórios que
          você quiser destacar aqui.
        </>
      ),
    },
    skills: {
      eyebrow: 'Ferramentas',
      title: 'Skills',
      description:
        'Tecnologias que uso no dia a dia — no trabalho, nos projetos pessoais e na construção deste site.',
    },
  },

  en: {
    sidebar: {
      title: 'Back-end Software Developer',
      bio: 'Focused on back-end development with Java and Spring, also working with React on the front-end. Always looking to learn and grow as a developer.',
      cv: 'My resume',
      logoAlt: 'João Manoel logo — MEC DEV',
      photoAlt: 'Illustration of João Manoel',
      homeAria: 'Go to homepage',
      langSwitchAria: 'Mudar para português',
      nav: {
        sobre: 'About',
        experiencia: 'Experience',
        projetos: 'Projects',
        skills: 'Skills',
      },
      social: {
        github: 'My GitHub profile',
        linkedin: 'My LinkedIn profile',
        instagram: 'My Instagram profile',
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
      focusAreas: ['Java', 'Spring', 'Active internship — EDU3', 'React'],
      cta: 'View projects',
    },
    experiencia: {
      eyebrow: 'Journey',
      title: 'Experience',
      description:
        "Computer Science student and Java developer — where I've been applying it in practice.",
      items: [
        {
          role: 'Intern — EDU3',
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
      title: 'Recent Projects',
      viewAllBtn: 'View all projects on GitHub',
      loading: 'Loading projects…',
      demo: 'View demo',
      github: 'View on GitHub',
      ariaDemo: (name) => `View demo of project ${name}`,
      ariaGithub: (name) => `View ${name} project's code on GitHub`,
      defaultDescription: 'Project in progress — description coming soon.',
      defaultLanguage: 'Project',
      errorMsg: (githubUser) => (
        <>
          Couldn't load the projects right now (GitHub API unavailable or rate limit reached).
          See them all directly on{' '}
          <a
            className="underline hover:text-accent transition-all"
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </>
      ),
      emptyMsg: (topic) => (
        <>
          No projects tagged yet. Add the <code>{topic}</code> topic to the repositories you want
          to feature here.
        </>
      ),
    },
    skills: {
      eyebrow: 'Tools',
      title: 'Skills',
      description: 'Technologies I use day to day — at work, in personal projects, and building this site.',
    },
  },
};

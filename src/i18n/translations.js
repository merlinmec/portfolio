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
      problemLabel: 'O problema.',
      techLabel: 'Tecnologias',
      solutionLabel: 'A solução.',
      gallery: {
        open: (caption) => `Ampliar: ${caption}`,
        show: (n, caption) => `Mostrar imagem ${n}: ${caption}`,
        dialog: (name) => `Imagens do projeto ${name}`,
        close: 'Fechar',
        previous: 'Imagem anterior',
        next: 'Próxima imagem',
        counter: (n, total) => `${n} de ${total}`,
      },
      ariaDemo: (name) => `Ver demo do projeto ${name}`,
      ariaGithub: (name) => `Ver código do projeto ${name} no GitHub`,
      items: {
        'fin-mec': {
          name: 'fin-mec',
          problem:
            'Planilha de gastos só mostra o passado: não avisa que a fatura vai estourar nem quanto vai sobrar no fim do mês.',
          solution:
            'Um app de finanças pessoais que junta contas, cartão, orçamento e metas e projeta o saldo dia a dia, com toda a regra financeira testada no backend.',
          shots: {
            dashboard: 'Visão geral do mês, com a previsão de saldo',
            relatorios: 'Relatórios de receitas e despesas',
            lancamentos: 'Lançamentos, com parcelas e transferências',
            metas: 'Metas de economia',
          },
        },
        arvore: {
          name: 'Árvore',
          problem:
            'Apps de hábito contam sequências, mas não mostram em que área da vida você está avançando e qual está largando.',
          solution:
            'Hábitos e metas organizados numa árvore de áreas, com a consistência de cada galho ao longo das semanas, diário e revisão semanal.',
          shots: {
            painel: 'Painel: consistência por área e o ano em heatmap',
            hoje: 'Hoje: o plano do dia, agrupado por área',
            areas: 'Áreas e subáreas, com o progresso da semana',
            revisao: 'Revisão semanal guiada',
          },
        },
        'pixel-type': {
          name: 'Text-Art',
          problem: 'Conversores de ASCII art borram os traços finos e deixam desenho e anime irreconhecíveis.',
          solution:
            'Converte a imagem em texto direto no navegador, com detecção de borda própria que preserva o line art, pronto pra copiar e colar.',
          shots: {
            bordas: 'Bordas: a Grande Onda desenhada só com traços',
            braille: 'Braille: alta resolução para tons contínuos',
            blocos: 'Blocos: poucos níveis, legível até de longe',
          },
        },
        'mec-lineup': {
          name: 'MEC Lineup',
          problem: 'No meio da partida não dá tempo de procurar vídeo de lineup no YouTube.',
          solution:
            'Um minimapa com cada habilidade no tamanho real do jogo e o print de onde mirar, a um clique e sem internet.',
          shots: {
            'preview-posicao': 'Passe o mouse na posição e veja onde mirar',
            'formas-reais': 'Habilidade desenhada no tamanho real do jogo',
            'marcar-referencia': 'Marcando no print a referência de mira',
            menu: 'Escolha do mapa',
          },
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
        'fin-mec': 'Gestão financeira pessoal full-stack',
        arvore: 'Hábitos, metas e progresso por área',
        'pixel-type': 'Conversor de imagem em arte de texto',
        'mec-lineup': 'Lineups de Valorant no minimapa',
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
      problemLabel: 'The problem.',
      techLabel: 'Technologies',
      solutionLabel: 'The solution.',
      gallery: {
        open: (caption) => `Enlarge: ${caption}`,
        show: (n, caption) => `Show image ${n}: ${caption}`,
        dialog: (name) => `${name} project images`,
        close: 'Close',
        previous: 'Previous image',
        next: 'Next image',
        counter: (n, total) => `${n} of ${total}`,
      },
      ariaDemo: (name) => `View demo of project ${name}`,
      ariaGithub: (name) => `View ${name} project's code on GitHub`,
      items: {
        'fin-mec': {
          name: 'fin-mec',
          problem:
            "A spending spreadsheet only shows the past: it won't warn you that the card bill is about to blow up, or how much will be left at the end of the month.",
          solution:
            'A personal finance app that brings accounts, credit cards, budgets and goals together and forecasts the balance day by day, with every financial rule tested on the backend.',
          shots: {
            dashboard: 'Monthly overview with the balance forecast',
            relatorios: 'Income and expense reports',
            lancamentos: 'Transactions, with installments and transfers',
            metas: 'Savings goals',
          },
        },
        arvore: {
          name: 'Árvore',
          problem:
            "Habit apps count streaks, but they don't show which area of your life is moving forward and which one you're letting slide.",
          solution:
            'Habits and goals organized as a tree of life areas, with the consistency of each branch over the weeks, a daily journal and a weekly review.',
          shots: {
            painel: 'Dashboard: consistency by area and the year as a heatmap',
            hoje: 'Today: the day plan, grouped by area',
            areas: "Areas and sub-areas, with this week's progress",
            revisao: 'Guided weekly review',
          },
        },
        'pixel-type': {
          name: 'Text-Art',
          problem: 'ASCII art converters smear thin strokes and leave drawings and anime unrecognizable.',
          solution:
            'Turns an image into text right in the browser, with custom edge detection that keeps line art intact, ready to copy and paste.',
          shots: {
            bordas: 'Edges: The Great Wave drawn with strokes only',
            braille: 'Braille: high resolution for continuous tones',
            blocos: 'Blocks: few levels, readable even from afar',
          },
        },
        'mec-lineup': {
          name: 'MEC Lineup',
          problem: "Mid-match, there's no time to look up a Valorant lineup video on YouTube.",
          solution:
            'A minimap with every ability at its real in-game size and a screenshot of where to aim, one click away and offline.',
          shots: {
            'preview-posicao': 'Hover a position to see where to aim',
            'formas-reais': 'Ability drawn at its real in-game size',
            'marcar-referencia': 'Marking the aim reference on the screenshot',
            menu: 'Map selection',
          },
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
        'fin-mec': 'Full-stack personal finance app',
        arvore: 'Habits, goals and progress by area',
        'pixel-type': 'Image-to-text-art converter',
        'mec-lineup': 'Valorant lineups on the minimap',
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

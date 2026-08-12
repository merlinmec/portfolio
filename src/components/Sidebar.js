import React from 'react';
import Photo from '../assets/jm.svg';
import Logo from '../assets/logo.svg';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';
import { BiHomeAlt } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsCodeSlash } from 'react-icons/bs';
import { Link } from 'react-scroll';

const navItems = [
  { to: 'home', label: 'Sobre', icon: BiHomeAlt },
  { to: 'experiencia', label: 'Experiência', icon: BsClipboardData },
  { to: 'projetos', label: 'Projetos', icon: BsBriefcase },
  { to: 'skills', label: 'Skills', icon: BsCodeSlash },
];

const socialLinks = [
  { href: 'https://github.com/merlinmec', label: 'Meu perfil no GitHub', icon: FaGithub },
  {
    href: 'https://www.linkedin.com/in/joao-manoel-carvalho/',
    label: 'Meu perfil no LinkedIn',
    icon: FaLinkedin,
  },
  {
    href: 'https://www.instagram.com/joao_carv19/',
    label: 'Meu perfil no Instagram',
    icon: FaInstagram,
  },
];

const Sidebar = () => {
  return (
    <aside
      className="w-full border-b border-white/10 bg-primary lg:sticky lg:top-0 lg:h-screen
      lg:w-[420px] lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-white/10"
    >
      <div className="flex flex-col gap-y-8 px-6 py-8 lg:h-full lg:justify-between lg:px-12 lg:pb-14 lg:pt-8">
        <div>
          <div className="flex items-center justify-between lg:justify-start lg:mb-4">
            <Link
              to="home"
              smooth={true}
              className="cursor-pointer"
              aria-label="Ir para o início"
            >
              <img src={Logo} alt="Logo João Manoel — MEC DEV" className="h-14 w-auto lg:h-[70px]" />
            </Link>
          </div>

          <div className="flex items-center gap-x-5 lg:flex-col lg:items-start lg:gap-x-0 lg:gap-y-5">
            <div className="lg:flex lg:w-full lg:justify-end">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl lg:h-64 lg:w-64">
                <img
                  src={Photo}
                  alt="Ilustração de João Manoel"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div>
              <h1 className="font-primary text-xl font-bold uppercase leading-tight tracking-wide lg:text-2xl">
                João Manoel Carvalho
              </h1>
              <p className="mt-1 text-sm text-accent-light">
                Desenvolvedor de Software Back-end
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Foco em back-end com Java e Spring, também atuando com React no front-end.
            Sempre em busca de aprender e evoluir tecnicamente.
          </p>

          <div className="mt-6 flex items-center gap-x-4 text-xl text-white/70">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors duration-300 ease-out hover:text-accent"
              >
                <Icon />
              </a>
            ))}
          </div>

          <a
            href="/curriculo.pdf"
            download="curriculo_Joao_Manoel.pdf"
            className="btn-outline mt-6 flex h-[44px] w-full max-w-[220px] items-center justify-center
            gap-x-2 rounded-full text-sm font-primary lg:w-full lg:max-w-none"
          >
            <FaDownload /> Meu currículo
          </a>
        </div>

        <nav aria-label="Navegação principal" className="mt-8 lg:mt-0">
          <ul className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to} className="shrink-0 lg:shrink">
                <Link
                  to={to}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  offset={-20}
                  className="side-nav-link flex cursor-pointer items-center gap-x-3 rounded-full
                  border border-transparent px-4 py-2 text-sm text-white/60 transition-all duration-300 ease-out
                  hover:text-white lg:rounded-lg"
                >
                  <Icon className="text-base" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

import React from 'react';
import Photo from '../assets/jm.svg';
import Logo from '../assets/logo.svg';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';
import { BiHomeAlt } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsCodeSlash } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

const NAV_ITEMS = [
  { to: 'home', key: 'sobre', icon: BiHomeAlt },
  { to: 'experiencia', key: 'experiencia', icon: BsClipboardData },
  { to: 'projetos', key: 'projetos', icon: BsBriefcase },
  { to: 'skills', key: 'skills', icon: BsCodeSlash },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/merlinmec', key: 'github', icon: FaGithub },
  { href: 'https://www.linkedin.com/in/joao-manoel-carvalho/', key: 'linkedin', icon: FaLinkedin },
  { href: 'https://www.instagram.com/joao_carv19/', key: 'instagram', icon: FaInstagram },
];

const Sidebar = () => {
  const { t } = useLanguage();

  return (
    <aside
      className="w-full border-b border-white/10 bg-primary lg:sticky lg:top-0 lg:h-screen
      lg:w-[420px] lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-white/10"
    >
      <div className="flex flex-col gap-y-8 px-6 py-8 lg:h-full lg:justify-between lg:px-12 lg:pb-14 lg:pt-8">
        <div>
          <div className="flex items-center justify-between lg:mb-4">
            <Link to="home" smooth={true} className="cursor-pointer" aria-label={t.sidebar.homeAria}>
              <img src={Logo} alt={t.sidebar.logoAlt} className="h-14 w-auto lg:h-[70px]" />
            </Link>
            <LanguageSwitch />
          </div>

          <div className="flex items-center gap-x-5 lg:flex-col lg:items-start lg:gap-x-0 lg:gap-y-5">
            <div className="lg:flex lg:w-full lg:justify-end">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl lg:h-64 lg:w-64">
                <img
                  src={Photo}
                  alt={t.sidebar.photoAlt}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div>
              <h1 className="font-primary text-xl font-bold uppercase leading-tight tracking-wide lg:text-2xl">
                João Manoel Carvalho
              </h1>
              <p className="mt-1 text-sm text-accent-light">{t.sidebar.title}</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-white/60">{t.sidebar.bio}</p>

          <div className="mt-6 flex items-center gap-x-4 text-xl text-white/70">
            {SOCIAL_LINKS.map(({ href, key, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.sidebar.social[key]}
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
            <FaDownload /> {t.sidebar.cv}
          </a>
        </div>

        <nav aria-label="Navegação principal" className="mt-8 lg:mt-0">
          <ul className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {NAV_ITEMS.map(({ to, key, icon: Icon }) => (
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
                  {t.sidebar.nav[key]}
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

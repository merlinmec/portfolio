import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

const FOOTER_NAV = ['sobre', 'experiencia', 'projetos', 'skills', 'contato'];

const SOCIAL_ICON_CLASS =
  'flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 ' +
  'transition-colors duration-300 ease-out hover:border-accent/40 hover:text-accent';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto grid gap-10 md:grid-cols-3">
        {/* Marca + bio + contato direto */}
        <div>
          <p className="font-primary text-lg font-bold text-accent-light">João Manoel Carvalho</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">{t.footer.bio}</p>

          <a
            href="mailto:joaomanoel190701@gmail.com"
            aria-label={t.footer.ariaEmail}
            className="mt-4 flex items-center gap-x-2 text-sm text-white/60 transition-colors
            duration-300 ease-out hover:text-white"
          >
            <FaEnvelope className="shrink-0 text-accent-light" aria-hidden="true" />
            {t.footer.email}
          </a>

          <p className="mt-2 flex items-center gap-x-2 text-sm text-white/60">
            <FaMapMarkerAlt className="shrink-0 text-accent-light" aria-hidden="true" />
            {t.footer.location}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://github.com/merlinmec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.ariaGithub}
              className={SOCIAL_ICON_CLASS}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/joao-manoel-carvalho/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.ariaLinkedin}
              className={SOCIAL_ICON_CLASS}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Links rápidos — mesmas seções da navbar */}
        <div>
          <p className="font-primary text-xs uppercase tracking-[0.2em] text-white/40">
            {t.footer.linksTitle}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER_NAV.map((key) => (
              <li key={key}>
                <Link
                  to={key === 'sobre' ? 'home' : key}
                  smooth={true}
                  offset={-100}
                  className="cursor-pointer text-white/60 transition-colors duration-300 ease-out hover:text-white"
                >
                  {t.navbar.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Projetos em destaque — resumo de 1 linha de cada */}
        <div>
          <p className="font-primary text-xs uppercase tracking-[0.2em] text-white/40">
            {t.footer.projectsTitle}
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {projects.map((project) => (
              <li key={project.id}>
                <p className="font-medium text-white/80">{t.projetos.items[project.id].name}</p>
                <p className="text-white/50">{t.footer.projectBlurbs[project.id]}</p>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/merlinmec?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-accent transition-colors duration-300 ease-out hover:text-accent-light"
          >
            {t.footer.viewAll} ↗
          </a>
        </div>
      </div>

      <div
        className="container mx-auto mt-12 flex flex-col gap-2 border-t border-white/5 pt-6
        text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>{t.footer.copyright(year)}</p>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  );
};

export default Footer;

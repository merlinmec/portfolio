import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaGithub, FaExternalLinkAlt, FaJava, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { BsCodeSlash, BsLockFill } from 'react-icons/bs';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

const GITHUB_USER = 'merlinmec';

const CARD_GRADIENTS = [
  'from-accent/25 to-black/60',
  'from-indigo-500/25 to-black/60',
  'from-fuchsia-500/20 to-black/60',
  'from-violet-600/25 to-black/60',
];

const LANGUAGE_ICONS = {
  Java: { icon: FaJava, color: '#f89820' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  HTML: { icon: FaHtml5, color: '#E34F26' },
  CSS: { icon: FaCss3, color: '#1572B6' },
};
const DEFAULT_LANGUAGE_ICON = { icon: BsCodeSlash, color: '#A78BFA' };

const Projetos = () => {
  const { t } = useLanguage();

  return (
    <section className="section border-b border-white/5" id="projetos">
      <div className="container mx-auto">
        <SectionHeading eyebrow={t.projetos.eyebrow} title={t.projetos.title} />

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const content = t.projetos.items[project.id];
            const { icon: LangIcon, color: langColor } =
              LANGUAGE_ICONS[project.language] || DEFAULT_LANGUAGE_ICON;

            return (
              <motion.div
                key={project.id}
                variants={fadeIn('up', 0.15 + index * 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}
                className={`group relative flex flex-col justify-between overflow-hidden
                rounded-2xl border border-white/10 bg-gradient-to-br p-6
                ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]}
                transition-all duration-300 ease-out hover:border-accent/60 hover:-translate-y-1`}
              >
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl
                      border border-white/15 bg-black/30"
                      aria-hidden="true"
                    >
                      <LangIcon className="text-xl" style={{ color: langColor }} />
                    </span>
                    <h3 className="font-primary text-xl font-bold leading-tight break-words">
                      {content.name}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-white/70">{content.description}</p>

                  <p className="mt-4 text-xs uppercase tracking-wider text-white/40">
                    {t.projetos.featuresLabel}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {content.features.map((feature) => (
                      <li key={feature} className="flex gap-x-2 text-sm text-white/60">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.projetos.ariaDemo(content.name)}
                      className="btn-outline flex items-center gap-x-2 rounded-full px-4 py-2 hover:text-accent"
                    >
                      <FaExternalLinkAlt /> {t.projetos.demo}
                    </a>
                  )}
                  {project.private ? (
                    <span className="flex items-center gap-x-2 rounded-full border border-white/10 px-4 py-2 text-white/40">
                      <BsLockFill /> {t.projetos.privateLabel}
                    </span>
                  ) : (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.projetos.ariaGithub(content.name)}
                      className="btn-outline flex items-center gap-x-2 rounded-full px-4 py-2 hover:text-accent"
                    >
                      <FaGithub /> {t.projetos.github}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          className="btn btn-sm mt-12"
          onClick={() => window.open(`https://github.com/${GITHUB_USER}?tab=repositories`, '_blank')}
        >
          {t.projetos.viewAllBtn}
        </button>
      </div>
    </section>
  );
};

export default Projetos;

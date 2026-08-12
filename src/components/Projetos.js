import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaGithub, FaExternalLinkAlt, FaJava, FaHtml5, FaCss3, FaPython, FaPhp } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiKotlin, SiCplusplus, SiSharp, SiGo, SiRust, SiDart } from 'react-icons/si';
import { BsCodeSlash } from 'react-icons/bs';
import SectionHeading from './SectionHeading';

const GITHUB_USER = 'merlinmec';
const FEATURED_TOPIC = 'portfolio';

const CARD_GRADIENTS = [
  'from-accent/25 to-black/60',
  'from-indigo-500/25 to-black/60',
  'from-fuchsia-500/20 to-black/60',
  'from-violet-600/25 to-black/60',
  'from-blue-500/20 to-black/60',
  'from-purple-400/20 to-black/60',
];

const LANGUAGE_ICONS = {
  Java: { icon: FaJava, color: '#f89820' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  HTML: { icon: FaHtml5, color: '#E34F26' },
  CSS: { icon: FaCss3, color: '#1572B6' },
  Python: { icon: FaPython, color: '#3776AB' },
  Kotlin: { icon: SiKotlin, color: '#7F52FF' },
  PHP: { icon: FaPhp, color: '#777BB4' },
  'C++': { icon: SiCplusplus, color: '#00599C' },
  'C#': { icon: SiSharp, color: '#68217A' },
  Go: { icon: SiGo, color: '#00ADD8' },
  Rust: { icon: SiRust, color: '#DEA584' },
  Dart: { icon: SiDart, color: '#0175C2' },
};
const DEFAULT_LANGUAGE_ICON = { icon: BsCodeSlash, color: '#A78BFA' };

const formatDate = (isoDate) => {
  if (!isoDate) return null;
  return new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric' })
    .format(new Date(isoDate))
    .replace('.', '')
    .toUpperCase();
};

const Projetos = () => {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error');
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const featured = data
          .filter((repo) => !repo.fork && (repo.topics || []).includes(FEATURED_TOPIC))
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        setRepos(featured);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section border-b border-white/5" id="projetos">
      <div className="container mx-auto">
        <SectionHeading eyebrow="Trabalho" title="Projetos Recentes" />

        <button
          className="btn btn-sm mb-12"
          onClick={() => window.open(`https://github.com/${GITHUB_USER}?tab=repositories`, '_blank')}
        >
          Ver todos os projetos no GitHub
        </button>

        {error && (
          <p className="text-white/70">
            Não consegui carregar os projetos agora (API do GitHub indisponível ou limite de
            requisições atingido). Veja todos direto no{' '}
            <a
              className="underline hover:text-accent transition-all"
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        )}

        {!error && repos === null && <p className="text-white/70">Carregando projetos…</p>}

        {!error && repos && repos.length === 0 && (
          <p className="text-white/70">
            Nenhum projeto marcado ainda. Adicione a topic <code>{FEATURED_TOPIC}</code> nos
            repositórios que você quiser destacar aqui.
          </p>
        )}

        {!error && repos && repos.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {repos.map((repo, index) => {
              const date = formatDate(repo.pushed_at);
              const { icon: LangIcon, color: langColor } =
                LANGUAGE_ICONS[repo.language] || DEFAULT_LANGUAGE_ICON;
              return (
                <motion.div
                  key={repo.id}
                  variants={fadeIn('up', 0.15 + index * 0.1)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden
                  rounded-2xl border border-white/10 bg-gradient-to-br p-8
                  ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]}
                  transition-all duration-300 ease-out hover:border-accent/60 hover:-translate-y-1`}
                >
                  <div>
                    <div className="mb-5 flex items-center justify-between gap-2">
                      <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs uppercase tracking-wider text-white/80">
                        {repo.language || 'Projeto'}
                      </span>
                      {date && (
                        <span className="text-xs uppercase tracking-wider text-white/50">
                          {date}
                        </span>
                      )}
                    </div>

                    <div className="mb-4 flex items-center gap-4">
                      <span
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl
                        border border-white/15 bg-black/30"
                        aria-hidden="true"
                      >
                        <LangIcon className="text-2xl" style={{ color: langColor }} />
                      </span>
                      <h3 className="font-primary text-2xl font-bold leading-tight break-words">
                        {repo.name}
                      </h3>
                    </div>

                    <p className="leading-relaxed text-white/70">
                      {repo.description || 'Projeto em andamento — descrição em breve.'}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver demo do projeto ${repo.name}`}
                        className="btn-outline flex items-center gap-x-2 rounded-full px-4 py-2 hover:text-accent"
                      >
                        <FaExternalLinkAlt /> Ver demo
                      </a>
                    )}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código do projeto ${repo.name} no GitHub`}
                      className="btn-outline flex items-center gap-x-2 rounded-full px-4 py-2 hover:text-accent"
                    >
                      <FaGithub /> Ver no GitHub
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projetos;

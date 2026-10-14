import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { BsArrowsFullscreen, BsChevronLeft, BsChevronRight, BsLockFill, BsX } from 'react-icons/bs';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

const GITHUB_USER = 'merlinmec';
const EASE_OUT = [0.16, 1, 0.3, 1];

const imageSrc = (projectId, name) => `/projetos/${projectId}/${name}.webp`;

/**
 * Um projeto por faixa: a imagem lidera (~60% da largura) e o texto diz só o problema e a solução —
 * o README de cada repositório explica o resto. As faixas alternam o lado da imagem no desktop.
 */
const Projetos = () => {
  const { t } = useLanguage();

  return (
    <section className="section border-b border-white/5" id="projetos">
      <div className="container mx-auto">
        <SectionHeading eyebrow={t.projetos.eyebrow} title={t.projetos.title} />

        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <Projeto key={project.id} project={project} reversed={index % 2 === 1} />
          ))}
        </div>

        <button
          className="btn btn-sm mt-16"
          onClick={() => window.open(`https://github.com/${GITHUB_USER}?tab=repositories`, '_blank')}
        >
          {t.projetos.viewAllBtn}
        </button>
      </div>
    </section>
  );
};

const Projeto = ({ project, reversed }) => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const content = t.projetos.items[project.id];

  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <motion.div
        className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, clipPath: 'inset(6% 4% 6% 4% round 16px)' }}
        whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0% round 16px)' }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: reduceMotion ? 0.3 : 0.9, ease: EASE_OUT }}
      >
        <Galeria project={project} content={content} />
      </motion.div>

      <motion.div
        className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.2, ease: EASE_OUT }}
      >
        <h3 className="font-primary text-3xl font-bold leading-tight text-white">{content.name}</h3>

        <div className="mt-5 max-w-prose space-y-3 text-base leading-relaxed text-white/70">
          <p>
            <span className="font-medium text-white">{t.projetos.problemLabel}</span> {content.problem}
          </p>
          <p>
            <span className="font-medium text-white">{t.projetos.solutionLabel}</span> {content.solution}
          </p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.projetos.techLabel}>
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs leading-5 text-white/70"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.projetos.ariaDemo(content.name)}
              className="btn flex items-center gap-x-2 px-5 py-2.5 leading-5"
            >
              <FaExternalLinkAlt aria-hidden="true" /> {t.projetos.demo}
            </a>
          )}
          {project.private ? (
            <span className="flex items-center gap-x-2 rounded-full border border-white/10 px-4 py-2 text-white/40">
              <BsLockFill aria-hidden="true" /> {t.projetos.privateLabel}
            </span>
          ) : (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.projetos.ariaGithub(content.name)}
              className="btn-outline flex items-center gap-x-2 rounded-full px-5 py-2.5 leading-5 hover:text-accent-light"
            >
              <FaGithub aria-hidden="true" /> {t.projetos.github}
            </a>
          )}
        </div>
      </motion.div>
    </article>
  );
};

/** Capa grande com troca suave, miniaturas embaixo e tela cheia ao clicar. */
const Galeria = ({ project, content }) => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const trigger = useRef(null);
  const images = project.images;
  const caption = (name) => content.shots[name];

  const close = useCallback(() => {
    setFullscreen(false);
    // devolve o foco pra capa, como qualquer diálogo
    requestAnimationFrame(() => trigger.current?.focus());
  }, []);

  return (
    <div>
      <button
        ref={trigger}
        type="button"
        onClick={() => setFullscreen(true)}
        aria-label={t.projetos.gallery.open(caption(images[active]))}
        className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10
        bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition-colors duration-300
        hover:border-accent/50 focus-visible:border-accent"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={images[active]}
            src={imageSrc(project.id, images[active])}
            alt=""
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700
            ease-out group-hover:scale-[1.015]"
          />
        </AnimatePresence>
        <span
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full
          bg-black/60 text-white/90 backdrop-blur transition-opacity duration-300
          lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100"
          aria-hidden="true"
        >
          <BsArrowsFullscreen className="text-sm" />
        </span>
      </button>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-white/55" aria-live="polite">
          {caption(images[active])}
        </p>
        {images.length > 1 && (
          <div className="-mx-1 flex shrink-0 gap-2 overflow-x-auto px-1 py-1">
            {images.map((name, index) => (
              <button
                key={name}
                type="button"
                onClick={() => setActive(index)}
                aria-label={t.projetos.gallery.show(index + 1, caption(name))}
                aria-pressed={index === active}
                className={`relative aspect-[16/10] w-16 shrink-0 overflow-hidden rounded-md border transition
                duration-200 ${
                  index === active
                    ? 'border-accent opacity-100'
                    : 'border-white/10 opacity-50 hover:border-white/30 hover:opacity-90'
                }`}
              >
                <img
                  src={imageSrc(project.id, name)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {fullscreen && (
          <TelaCheia
            project={project}
            content={content}
            index={active}
            onChange={setActive}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

/** Os prints em tamanho real: Esc fecha, setas trocam, e no celular dá pra arrastar pro lado. */
const TelaCheia = ({ project, content, index, onChange, onClose }) => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const images = project.images;
  const total = images.length;
  const name = images[index];

  const go = useCallback((delta) => onChange((index + delta + total) % total), [index, total, onChange]);

  useEffect(() => {
    closeButton.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowRight' && total > 1) go(1);
      else if (event.key === 'ArrowLeft' && total > 1) go(-1);
      else if (event.key === 'Tab') {
        // o foco não sai do diálogo enquanto ele está aberto
        const focusable = dialog.current.querySelectorAll('button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, onClose, total]);

  return createPortal(
    <motion.div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-label={t.projetos.gallery.dialog(content.name)}
      className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: EASE_OUT }}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p className="font-primary text-base text-white">
          {content.name}
          {total > 1 && (
            <span className="ml-3 text-sm tabular-nums text-white/50">
              {t.projetos.gallery.counter(index + 1, total)}
            </span>
          )}
        </p>
        <button
          ref={closeButton}
          type="button"
          onClick={onClose}
          aria-label={t.projetos.gallery.close}
          className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white/80
          transition-colors hover:bg-white/10 hover:text-white"
        >
          <BsX aria-hidden="true" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
        onClick={(event) => event.target === event.currentTarget && onClose()}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={name}
            src={imageSrc(project.id, name)}
            alt={content.shots[name]}
            className="max-h-full max-w-full cursor-grab rounded-lg object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]
            active:cursor-grabbing"
            initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduceMotion ? 0 : -24 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            drag={total > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
          />
        </AnimatePresence>

        {total > 1 && (
          <>
            <NavButton side="left" label={t.projetos.gallery.previous} onClick={() => go(-1)}>
              <BsChevronLeft aria-hidden="true" />
            </NavButton>
            <NavButton side="right" label={t.projetos.gallery.next} onClick={() => go(1)}>
              <BsChevronRight aria-hidden="true" />
            </NavButton>
          </>
        )}
      </div>

      <p className="px-4 pb-5 pt-3 text-center text-sm leading-6 text-white/65 sm:px-6">{content.shots[name]}</p>
    </motion.div>,
    document.body
  );
};

const NavButton = ({ side, label, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full
    border border-white/15 bg-black/50 text-lg text-white/80 transition-colors hover:border-accent hover:text-white
    sm:flex ${side === 'left' ? 'left-4' : 'right-4'}`}
  >
    {children}
  </button>
);

export default Projetos;

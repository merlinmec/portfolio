import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { fadeIn } from '../variants';
import { useLanguage } from '../context/LanguageContext';

const Sobre = () => {
  const { t, language } = useLanguage();

  return (
    <section
      className="relative min-h-[85vh] overflow-hidden flex items-center px-6 py-16 lg:py-0"
      id="home"
    >
      <div className="bg-dot-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full
        bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative container mx-auto max-w-3xl">
        <motion.span
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className="eyebrow"
        >
          {t.sobre.eyebrow}
        </motion.span>

        <motion.h1
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className="font-primary font-black uppercase leading-[0.95] text-[48px] sm:text-[64px] lg:text-[88px]"
        >
          <span className="block text-white">{t.sobre.headlineTop}</span>
          <span className="text-gradient block">{t.sobre.headlineBottom}</span>
        </motion.h1>

        <motion.div
          key={language}
          variants={fadeIn('up', 0.35)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-6 text-xl text-white/70 font-secondary lg:text-2xl"
        >
          <TypeAnimation
            sequence={t.sobre.sequence}
            speed={50}
            className="text-accent-light"
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={fadeIn('up', 0.45)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-6 max-w-xl text-white/70"
        >
          {t.sobre.paragraph()}
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.55)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {t.sobre.focusAreas.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.65)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="projetos"
            smooth={true}
            spy={true}
            offset={-20}
            className="btn btn-sm cursor-pointer flex items-center justify-center"
          >
            {t.sobre.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Sobre;

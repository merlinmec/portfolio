import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';

const Experiencia = () => {
  const { t } = useLanguage();

  return (
    <section className="section border-b border-white/5" id="experiencia">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow={t.experiencia.eyebrow}
          title={t.experiencia.title}
          description={t.experiencia.description}
        />

        <div className="relative">
          <div
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent lg:left-6"
            aria-hidden="true"
          />
          <div className="space-y-10">
            {t.experiencia.items.map((exp, index) => (
              <motion.div
                key={exp.role}
                variants={fadeIn('up', 0.2 + index * 0.15)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}
                className="relative pl-16 lg:pl-20"
              >
                <span
                  className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full
                  border-2 border-accent bg-primary font-primary text-sm text-accent
                  shadow-[0_0_25px_rgba(139,92,246,0.45)] lg:left-1 lg:h-12 lg:w-12"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="card p-6">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-primary text-lg font-semibold uppercase tracking-wide">
                      {exp.role}
                    </h3>
                    <span className="rounded-full border border-accent/40 px-3 py-1 text-xs uppercase tracking-wider text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <p className="leading-relaxed text-white/70">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;

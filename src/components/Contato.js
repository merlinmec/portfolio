import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaLinkedin } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';

// GitHub já fica acessível em cada card de Projetos e no rodapé — aqui o
// LinkedIn é o único CTA, sem concorrência de peso visual.
const Contato = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="contato">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow={t.contato.eyebrow}
          title={t.contato.title}
          description={t.contato.description}
        />

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.5 }}
          className="card flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-primary text-lg font-semibold uppercase tracking-wide">
              João Manoel Carvalho
            </p>
            <p className="mt-1 text-sm text-white/60">{t.contato.role}</p>
          </div>

          <a
            href="https://www.linkedin.com/in/joao-manoel-carvalho/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.contato.ariaLinkedin}
            className="btn btn-sm flex items-center gap-x-2"
          >
            <FaLinkedin /> {t.contato.linkedin}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contato;

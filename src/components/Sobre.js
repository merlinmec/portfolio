import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { fadeIn } from '../variants';

const focusAreas = ['Java', 'Spring', 'Estágio ativo — EDU3', 'React'];

const Sobre = () => {
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
          Olá, eu sou o João
        </motion.span>

        <motion.h1
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className="font-primary font-black uppercase leading-[0.95] text-[48px] sm:text-[64px] lg:text-[88px]"
        >
          <span className="block text-white">Desenvolvedor</span>
          <span className="text-gradient block">Back-end</span>
        </motion.h1>

        <motion.div
          variants={fadeIn('up', 0.35)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-6 text-xl text-white/70 font-secondary lg:text-2xl"
        >
          <TypeAnimation
            sequence={[
              'Java & Spring no back-end',
              2500,
              'APIs, regras de negócio, banco de dados',
              2200,
              'Um pouco de React quando o projeto pede',
              2200,
              'Sempre aprendendo algo novo',
              2000,
            ]}
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
          Sou desenvolvedor <b>back-end</b>, com experiência em <b>Java</b> e <b>Spring</b> —
          construindo APIs, regras de negócio e integrações. Também transito pelo front-end com{' '}
          <b>React</b> quando o projeto pede. Confira meus projetos e veja como posso agregar
          valor às suas ideias!
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.55)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {focusAreas.map((item) => (
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
            Ver projetos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Sobre;

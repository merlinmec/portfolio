import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';
import SectionHeading from './SectionHeading';
import { FaJava, FaReact, FaHtml5, FaCss3, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiSpring, SiJavascript, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'Spring', icon: SiSpring, color: '#6DB33F' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
];

const Skills = () => {
  return (
    <section className="section min-h-screen flex flex-col justify-center" id="skills">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Ferramentas"
          title="Skills"
          description="Tecnologias que uso no dia a dia — no trabalho, nos projetos pessoais e na construção deste site."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3"
        >
          {skills.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              variants={fadeIn('up', 0)}
              className="card flex flex-col items-center gap-y-3 px-4 py-6 text-center
              transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/25"
            >
              <Icon className="text-3xl" style={{ color }} aria-hidden="true" />
              <span className="font-secondary text-sm text-white/80">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

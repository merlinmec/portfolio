import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';
import SectionHeading from './SectionHeading';
import { FaJava, FaReact, FaHtml5, FaCss3, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiSpring, SiJavascript, SiTailwindcss, SiTypescript, SiKotlin, SiDocker } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  { name: 'Java', icon: FaJava, color: '#f89820', category: 'languages' },
  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF', category: 'languages' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'languages' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'languages' },
  { name: 'Spring', icon: SiSpring, color: '#6DB33F', category: 'backend' },
  { name: 'React', icon: FaReact, color: '#61DAFB', category: 'frontend' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', category: 'frontend' },
  { name: 'CSS3', icon: FaCss3, color: '#1572B6', category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', category: 'frontend' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'tools' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff', category: 'tools' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'tools' },
];

// Só entram aqui categorias com pelo menos uma skill — evitar aba vazia.
const CATEGORY_ORDER = ['all', 'languages', 'backend', 'frontend', 'tools'];

const Skills = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all' ? skills : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="section min-h-screen flex flex-col justify-center" id="skills">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label={t.skills.title}>
          {CATEGORY_ORDER.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-1.5 text-sm font-primary transition-all duration-300 ease-out ${
                activeCategory === category
                  ? 'border-accent bg-accent/15 text-accent'
                  : 'border-white/15 text-white/60 hover:border-white/30 hover:text-white'
              }`}
            >
              {t.skills.categories[category]}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3"
        >
          {filteredSkills.map(({ name, icon: Icon, color }) => (
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

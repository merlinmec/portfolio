import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h2 leading-tight">{title}</h2>
      {description && (
        <p className={`max-w-xl text-white/70 ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { prefersReducedMotion } from '../variants';
import { BrazilFlag, USAFlag } from './flags/Flags';

const LanguageSwitch = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const isPt = language === 'pt';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.sidebar.langSwitchAria}
      className={`relative flex h-9 w-16 shrink-0 items-center rounded-full border p-1
      transition-colors duration-300 ease-out
      ${isPt ? 'border-emerald-400/30 bg-emerald-500/10' : 'border-sky-400/30 bg-sky-500/10'}
      hover:brightness-125`}
    >
      <motion.span
        layout
        transition={
          prefersReducedMotion() ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 28 }
        }
        className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white
        shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
        style={{ marginLeft: isPt ? 0 : 'auto' }}
      >
        {isPt ? <BrazilFlag /> : <USAFlag />}
      </motion.span>
    </button>
  );
};

export default LanguageSwitch;

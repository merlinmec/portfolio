import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { prefersReducedMotion } from '../variants';
import { BrazilFlagFill, USAFlagFill } from './flags/Flags';

const LanguageSwitch = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const isPt = language === 'pt';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.sidebar.langSwitchAria}
      className="relative flex h-9 w-[72px] shrink-0 items-center overflow-hidden rounded-full
      border border-white/20 p-1 transition-all duration-300 ease-out hover:brightness-110"
    >
      <span className="absolute inset-0" aria-hidden="true">
        {isPt ? (
          <BrazilFlagFill className="h-full w-full" />
        ) : (
          <USAFlagFill className="h-full w-full" />
        )}
      </span>

      <motion.span
        layout
        transition={
          prefersReducedMotion() ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 28 }
        }
        className="relative z-10 h-7 w-7 rounded-full bg-white/95 shadow-[0_2px_8px_rgba(0,0,0,0.5)]
        ring-2 ring-white/40"
        style={{ marginLeft: isPt ? 0 : 'auto' }}
      />
    </button>
  );
};

export default LanguageSwitch;

import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'pt';
    return window.localStorage.getItem('portfolio-language') || 'pt';
  });

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const toggleLanguage = () => setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));

  const value = { language, toggleLanguage, t: translations[language] };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage precisa ser usado dentro de um LanguageProvider');
  }
  return context;
};

import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

const NAV_ITEMS = ['sobre', 'experiencia', 'projetos', 'skills', 'contato'];

// Altura aproximada da navbar sticky — usada como offset pro scroll não
// esconder o topo da seção atrás dela.
const SCROLL_OFFSET = -100;

const Navbar = () => {
  const { t } = useLanguage();
  // Controlado à mão em vez de confiar só no activeClass do react-scroll:
  // aquele só atualiza depois que o spy detecta a posição final do scroll
  // (~ao fim da animação), o que sentia como atraso pra ficar roxo. Aqui o
  // clique já marca ativo na hora; onSetActive continua cobrindo o scroll
  // manual do usuário.
  const [activeKey, setActiveKey] = useState('sobre');

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/90 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-4 py-4">
        <Link
          to="home"
          smooth={true}
          className="shrink-0 cursor-pointer"
          aria-label={t.navbar.homeAria}
          onClick={() => setActiveKey('sobre')}
        >
          <img src={Logo} alt={t.navbar.logoAlt} className="h-20 w-auto" />
        </Link>

        {/* py-2 -my-2 on the scroll container: overflow-x-auto forces overflow-y to
            compute as auto too (CSS spec quirk), which clips the active pill's
            background/padding without this extra vertical breathing room. */}
        <nav aria-label="Navegação principal" className="min-w-0 flex-1 overflow-x-auto py-2 -my-2">
          <ul className="flex items-center gap-1 whitespace-nowrap">
            {NAV_ITEMS.map((key) => (
              <li key={key}>
                <Link
                  to={key === 'sobre' ? 'home' : key}
                  smooth={true}
                  spy={true}
                  offset={SCROLL_OFFSET}
                  onSetActive={() => setActiveKey(key)}
                  onClick={() => setActiveKey(key)}
                  className={`nav-link cursor-pointer rounded-full border border-transparent px-4 py-2
                  text-sm transition-all duration-300 ease-out ${
                    activeKey === key ? 'bg-accent/15 text-accent' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {t.navbar.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center">
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import arrowDown from '@phosphor-icons/core/regular/arrow-down.svg?raw';
import arrowLeft from '@phosphor-icons/core/regular/arrow-left.svg?raw';
import arrowUp from '@phosphor-icons/core/regular/arrow-up.svg?raw';
import arrowUpRight from '@phosphor-icons/core/regular/arrow-up-right.svg?raw';
import envelopeSimple from '@phosphor-icons/core/regular/envelope-simple.svg?raw';
import githubLogo from '@phosphor-icons/core/regular/github-logo.svg?raw';
import linkedinLogo from '@phosphor-icons/core/regular/linkedin-logo.svg?raw';
import list from '@phosphor-icons/core/regular/list.svg?raw';
import moon from '@phosphor-icons/core/regular/moon.svg?raw';
import sun from '@phosphor-icons/core/regular/sun.svg?raw';

// Phosphor (família única, peso regular): o SVG entra inline no HTML,
// sem fonte de ícones nem JS.
export const icones = {
  'arrow-down': arrowDown,
  'arrow-left': arrowLeft,
  'arrow-up': arrowUp,
  'arrow-up-right': arrowUpRight,
  email: envelopeSimple,
  github: githubLogo,
  linkedin: linkedinLogo,
  menu: list,
  lua: moon,
  sol: sun,
};

export type NomeIcone = keyof typeof icones;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => {
  const reduceMotion = prefersReducedMotion();
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : staggerChildren,
        delayChildren: reduceMotion ? 0 : delayChildren,
      },
    },
  };
};

export const fadeIn = (direction, delay) => {
  const reduceMotion = prefersReducedMotion();
  return {
    hidden: {
      y: reduceMotion ? 0 : direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      opacity: 0,
      x: reduceMotion ? 0 : direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: reduceMotion
        ? { type: 'tween', duration: 0.3, delay: 0 }
        : { type: 'spring', stiffness: 100, damping: 18, mass: 0.6, delay },
    },
  };
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Space Grotesk',
      secondary: 'Inter',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        surface: '#131118',
        accent: '#8B5CF6',
        'accent-light': '#C4B5FD',
        'accent-dark': '#6D28D9',
      },
    },
  },
  plugins: [],
};

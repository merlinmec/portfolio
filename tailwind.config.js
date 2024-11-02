module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Verifique os caminhos corretos para seus arquivos
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
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
        accent: '#C3092D',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};

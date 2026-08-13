import React from 'react';
import Navbar from './components/Navbar';
import Sobre from './components/Sobre';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';
import Skills from './components/Skills';
import Contato from './components/Contato';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      <main>
        <Sobre />
        <Experiencia />
        <Projetos />
        <Skills />
        <Contato />
      </main>
      <Footer />
    </div>
  );
};

export default App;

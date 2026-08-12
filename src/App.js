import React from 'react';
import Sidebar from './components/Sidebar';
import Sobre from './components/Sobre';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="bg-primary text-white">
      <div className="lg:flex lg:items-start">
        <Sidebar />
        <main className="w-full lg:min-w-0 lg:flex-1">
          <Sobre />
          <Experiencia />
          <Projetos />
          <Skills />
        </main>
      </div>
    </div>
  );
};

export default App;

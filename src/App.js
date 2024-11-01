import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';
import Contato from './components/Contato';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <Experiencia />
      <Projetos />
      <Contato />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;

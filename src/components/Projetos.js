import React from 'react';
//motion
import {motion} from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//imagens dos projetos
import Proj1 from '../assets/portfolio-img1.png'
import Proj2 from '../assets/portfolio-img2.png'
import Proj3 from '../assets/portfolio-img3.png'

const Projetos = () => {
  return (
    <section className="section" id="projetos">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
            variants={fadeIn('right', 0.5)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}  
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Projetos <br/>
                Recentes
              </h2>
              <p className='max-w-sm mb-16'> 
                Aqui estão alguns dos meus projetos recentes que gostaria que você explorasse.
                Para ver mais, basta acessar meu GitHub.
              </p>
              <button 
              className='btn btn-sm'
              onClick={() => window.open('https://github.com/merlinmec?tab=repositories', '_blank')}
              >
                Ver todos os Projetos no Git
              </button>
            </div>
            {/* imagens */}
            <div 
            className='group relative overflow-hidden border-2 border-white/50 rounded-x1 cursor-pointer'
            onClick={() => window.open('https://github.com/merlinmec/HiberMenta', '_blank')}
            >
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Proj1} alt=''></img>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
              transition-all duration-500 z-50'>
                <span className='text-gradient'>Teste Apresentação Projeto</span>
              </div>  
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
              transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>PROJETO</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.5)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='flex-1 flex flex-col gap-y-10'>
            {/* segundo projeto */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1 cursor-pointer'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Proj2} alt=''></img>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
              transition-all duration-500 z-50'>
                <span className='text-gradient'>Teste Apresentação Projeto 2</span>
              </div>  
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
              transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>PROJETO 2</span>
              </div>
            </div>
            {/* terceiro projeto */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1 cursor-pointer'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Proj3} alt=''></img>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
              transition-all duration-500 z-50'>
                <span className='text-gradient'>Teste Apresentação Projeto 3</span>
              </div>  
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
              transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>PROJETO 3</span>
              </div>
            </div>
          </motion.div >
          
        </div>
      </div>
    </section>
  );
};

export default Projetos;

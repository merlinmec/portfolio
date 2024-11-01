import React from 'react';
//motion
import {motion} from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Estagiário EDU3',
    description:
    'Est eiusmod sint dolore sit fugiat laboris incididunt fugiat id Est eiusmod sint dolore sit fugiat laboris incididunt fugiat id Est eiusmod sint dolore sit fugiat laboris incididunt fugiat id',
  },
  {
    name: 'Projetos Independentes',
    description:
    'Est eiusmod sint dolore sit fugiat laboris incididunt fugiat id',
  },
];


const Experiencia = () => {
  return (
    <section className="section" id="experiencia">
      <div className='container mx-auto  '>
        <div className='flex flex-col lg:flex-row'>
          {/* text & imagem*/}
          <motion.div 
            variants={fadeIn('right', 0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>O que eu faço</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Sou estudante de Ciências da Computação e Desenvolvedor Kotlin.
            </h3>
            <button className='btn btn-sm'>Veja meus Projetos</button>
          </motion.div>
          {/* services */}
          <motion.div 
            variants={fadeIn('left', 0.5)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 '>
            <div>
              {services.map((service, index) => {
                const {name, description} = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px]' key={index}>
                    <div className='max-w-[575px]'>
                      <h4 className='text-[20px] tracking-wider font-primary
                      font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                  </div>
                );                
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;

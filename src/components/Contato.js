import React from 'react';
//motion
import {motion} from 'framer-motion';
//variants
import { fadeIn } from '../variants';


const Contato = () => {
  return (
    <section className="py-16 lg:section" id="contato">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}  
            className='flex-1 flex justify-start items-center'>
            <div>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Vamos trabalhar<br /> juntos!</h2>
            </div>
          </motion.div>
          {/* formulario */}
          <motion.form 
            variants={fadeIn('left', 0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-18 p-6 items-start'
            action="https://formspree.io/f/mjkvyprj"
            method="POST"
          >
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
              focus:border-accent transition-all' 
              type='email' 
              name='email'
              placeholder='Seu email'
            />
            <textarea 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
              focus:border-accent transition-all resize-none mb-12' 
              placeholder='Sua mensagem '
              name='message'
              ></textarea>
            <button type='submit' className='btn btn-lg'>Mandar mensagem</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contato;

import React from 'react';
// images
import Image from '../assets/jm.svg';
// icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// type animations
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className="min-h-[85vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              JOAO <span>MANOEL</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" 
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className="mr-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">Eu sou</span>
              <TypeAnimation
                sequence={['Desenvolvedor', 2000, 'Estudante', 2000, 'MecDev', 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.5)} 
              initial="hidden" 
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0' 
            >
              Sou desenvolvedor de software com experiência em <b>Kotlin</b>, <b>Java</b>, <b>React</b> e <b>Docker</b>. Estou focado em soluções back-end e sempre busco melhorar minhas habilidades.
              Confira meus projetos e veja como posso agregar valor às suas ideias!
            </motion.p >
            <motion.div 
              variants={fadeIn('up', 0.6)} 
              initial="hidden" 
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <a href="https://github.com/merlinmec" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
              </a>
              <a href="https://www.linkedin.com/in/joao-manoel-carvalho/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
              </a>
              <a href="https://www.instagram.com/joao_carv19/" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
              </a>
              <a
              href="/curriculo.pdf"
              download="curriculo_Joao_Manoel.pdf"
              className="text-gradient btn-link"
              >
                Meu Currículo
              </a>
            </motion.div>
          </div>
          {/* minha imagem */}
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial="hidden" 
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

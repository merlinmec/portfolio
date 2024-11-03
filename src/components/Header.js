import React from 'react';
import Logo from '../assets/logo.svg';
// links
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          {/* button */}
          <Link 
            to="contato" 
            smooth={true} 
            spy={true}
            offset={50} 
            className="btn btn-sm cursor-pointer flex items-center justify-center"
          >
            Trabalhe comigo
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import './Footer.css';
import { FaBeer, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer">
        <div className='footer-item'>
          <FaEnvelope/>
          <a href='mailto:tushargupta9041@gmail.com'>  tushargupta9041@gmail.com</a>
        </div>
        <div className='footer-item'>
          <FaGithub/>
          <a href="https://github.com/TyshGrand" target="_blank" rel="noopener noreferrer">  Tysh Grand</a>
        </div>
        <div className='footer-item'>
           <FaLinkedin/>
            <a href="https://www.linkedin.com/in/tushargupta12/"  target="_blank" rel="noopener noreferrer">  Tushar Gupta</a>

        </div>
    </footer>
  );
}

export default Footer;
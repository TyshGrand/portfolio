import React from 'react';
import './Navbar.css';

function Navbar({ activeSection, scrollToSection, aboutRef, experienceRef, educationRef, achievementsRef, contactRef }) {
    // console.log('Navbar received activeSection:', activeSection);

  return (
    <div>
    <nav className="navbar">
      <ul>
      <h1 className="navbar-title">Tushar Gupta </h1>
      <div></div>
        <li>
          <button
            onClick={() => scrollToSection(aboutRef, 'about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection(experienceRef, 'experience')}
            className={activeSection === 'experience' ? 'active' : ''}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection(educationRef, 'education')}
            className={activeSection === 'education' ? 'active' : ''}
          >
            Education
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection(achievementsRef, ' achievements')}
            className={activeSection === 'achievements' ? 'active' : ''}
          >
            Achievements
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection(contactRef, 'contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
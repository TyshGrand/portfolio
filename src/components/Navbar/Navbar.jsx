import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ activeSection, scrollToSection, aboutRef, experienceRef, educationRef, achievementsRef, contactRef }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (ref, section) => {
    // console.log(ref,section)
    scrollToSection(ref, section);
    setMenuOpen(false); // Close menu on mobile after selection
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">Tushar Gupta</h1>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <button
            onClick={() => handleNavClick(aboutRef, 'about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick(experienceRef, 'experience')}
            className={activeSection === 'experience' ? 'active' : ''}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick(educationRef, 'education')}
            className={activeSection === 'education' ? 'active' : ''}
          >
            Education
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick(achievementsRef, 'achievements')}
            className={activeSection === 'achievements' ? 'active' : ''}
          >
            Achievements
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick(contactRef, 'contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;

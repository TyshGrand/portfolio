import React, { useRef, useEffect, useState } from 'react';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import './OnePageScroll.css'; // New CSS for one-page layout
import BubbleBackground from './components/BubbleBackground/BubbleBackground';

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);  
  const scrollContainerRef = useRef(null); 
  const scrollMainRef = useRef(null); 



  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (ref, sectionName) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionName); // <--- Update active section on click
  };

  
useEffect(() => {
  const container = scrollContainerRef.current;

  const handleScroll = () => {
    const scrollPosition = container.scrollTop;
    const offset = container.clientHeight / 3;

    let currentActiveSection = 'about';

    if (contactRef.current && scrollPosition >= contactRef.current.offsetTop - offset) {
      currentActiveSection = 'contact';
    } else if (achievementsRef.current && scrollPosition >= achievementsRef.current.offsetTop - offset) {
      currentActiveSection = 'achievements';
    } else if (educationRef.current && scrollPosition >= educationRef.current.offsetTop - offset) {
      currentActiveSection = 'education';
    } else if (experienceRef.current && scrollPosition >= experienceRef.current.offsetTop - offset) {
      currentActiveSection = 'experience';
    } else if (aboutRef.current && scrollPosition >= aboutRef.current.offsetTop - offset) {
      currentActiveSection = 'about';
    }

    setActiveSection(currentActiveSection);
  };

  if (container) {
    container.addEventListener('scroll', handleScroll);
  } else{
    console.warn('No container found.');
    return;
  }

  return () => {
    if (container) {
      container.removeEventListener('scroll', handleScroll);
    }
  };
}, []);


// useEffect(() => {
//   const main = scrollMainRef.current;

//   const handleMouseMove = (e) => {
//     const rect = main.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     // Set mouse position
//     main.style.setProperty('--mouse-x', `${x}px`);
//     main.style.setProperty('--mouse-y', `${y}px`);

//     // Background position to match zoomed area
//     main.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
//     main.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);

//     // Set the zoom bubble radius
//     main.style.setProperty('clip-path', `circle(25vw at ${x}px ${y}px)`);
//     main.style.setProperty('--clip-size', `25vw`);
//     main.style.setProperty('--clip-center', `${x}px ${y}px`);
//   };

//   const handleMouseEnter = () => {
//     main.style.setProperty('--clip-size', '25vw');
//   };

//   const handleMouseLeave = () => {
//     main.style.setProperty('--clip-size', '0px');
//   };

//   main.addEventListener('mousemove', handleMouseMove);
//   main.addEventListener('mouseenter', handleMouseEnter);
//   main.addEventListener('mouseleave', handleMouseLeave);

//   return () => {
//     main.removeEventListener('mousemove', handleMouseMove);
//     main.removeEventListener('mouseenter', handleMouseEnter);
//     main.removeEventListener('mouseleave', handleMouseLeave);
//   };
// }, []);

  return (
    <div ref={scrollContainerRef} className="one-page-scroll-container">
<Navbar
  activeSection={activeSection}
  scrollToSection={scrollToSection}
  aboutRef={aboutRef}
  experienceRef={experienceRef}
  educationRef={educationRef}
  achievementsRef={achievementsRef}
  contactRef={contactRef}
/>
<main ref={scrollMainRef} className="one-page-scroll-main">
  <section ref={aboutRef} id="about" className="scroll-section">
    <About />
  </section>
  <section ref={experienceRef} id="experience" className="scroll-section">
    <Experience />
  </section>
  <section ref={educationRef} id="education" className="scroll-section">
    <Education />
  </section>
  <section ref={achievementsRef} id="achievements" className="scroll-section">
    <Achievements />
  </section>
  <section ref={contactRef} id="contact" className="scroll-section">
    <Contact />
  </section>
  </main>
  <Footer/>
</div> 
   
  );
}

export default App;

 
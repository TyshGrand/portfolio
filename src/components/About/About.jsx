import React from 'react';
import profilePicture from '../../assets/img/pfp.jpg'; // adjust if needed
import './About.css'; // assuming CSS is in same folder

function About() {
  return (
    <div className="holographic-container">
      <div className="holographic-card">
        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2>Welcome to my Website</h2>
              <p>
                Hi 👋, I am Tushar. I'm a Data Scientist with a strong focus on full-stack development
                and artificial intelligence. Since graduating in 2023, I've been passionate about
                turning data into meaningful insights and building intelligent systems that solve
                real-world problems. Whether it's training models, fine-tuning algorithms, or
                integrating AI into full-stack applications, I love exploring the possibilities at
                the intersection of software and data.
              </p>
            </div>
            <div className="about-image">
              <img src={profilePicture} alt="Tushar" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

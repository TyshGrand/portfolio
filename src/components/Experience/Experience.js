import React from 'react';
// import './Experience.css'; // Optional: Component-specific styles

function Experience() {
  const experiences = [
    {
      title: 'Job Title at Company Name',
      company: 'Company Name',
      location: 'City, Country',
      dates: 'Start Date - End Date (or Present)',
      description: [
        'Responsibility 1 and key achievements.',
        'Responsibility 2 and notable contributions.',
        'Used technologies such as [list technologies].',
      ],
    },
    // Add more experience entries here
  ];

  return (
    <section className="experience-section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <p className="company">{exp.company}, {exp.location}</p>
          <p className="dates">{exp.dates}</p>
          <ul>
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
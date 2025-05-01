import React from 'react';
import './Education.css'; // Optional: Component-specific styles

function Education() {
  const educationList = [
    {
      degree: 'Degree Name, Major',
      university: 'University Name',
      location: 'City, Country',
      graduationDate: 'Graduation Year',
      description: 'Relevant coursework, projects, honors, or thesis topic.',
    },
    // Add more education entries here
  ];

  return (
    <section className="education-section">
      <h2>Education</h2>
      {educationList.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.degree}</h3>
          <p className="university">{edu.university}, {edu.location}</p>
          <p className="graduation-date">Graduation Date: {edu.graduationDate}</p>
          {edu.description && <p className="description">{edu.description}</p>}
        </div>
      ))}
    </section>
  );
}

export default Education;
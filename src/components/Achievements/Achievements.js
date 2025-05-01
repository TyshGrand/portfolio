import React from 'react';
// import './Achievements.css'; // Optional: Component-specific styles

function Achievements() {
  const achievementsList = [
    'Award or Recognition 1',
    'Project Highlight or Notable Contribution 2',
    'Skill Proficiency or Certification 3',
    // Add more achievements here
  ];

  return (
    <section className="achievements-section">
      <h2>Achievements</h2>
      <ul>
        {achievementsList.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
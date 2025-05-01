import React from 'react';
import './Contact.css'; // Optional: Component-specific styles

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! You can connect with me through the following channels:</p>
      <ul>
        <li><strong>Email:</strong> <a href={`mailto:your-email@example.com`}>your-email@example.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></li>
        {/* Add other contact methods like GitHub, Twitter, etc. */}
        {/* <li><strong>GitHub:</strong> <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">github.com/your-github-username</a></li> */}
      </ul>
      {/* You could also add a simple contact form here if you integrate with a backend service */}
    </section>
  );
}

export default Contact;
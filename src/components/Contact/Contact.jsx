import React from 'react';
import './Contact.css'; // Optional: Component-specific styles

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! You can connect with me through the following channels:</p>
      <div className='contacts-container'>
        <link rel="stylesheet" 
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" 
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>

      <ul>
        <li>
          <a href="https://github.com/TyshGrand" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github icon"></i>    </a>
        </li>
        <li>
          <a href="#"><i class="fab fa-linkedin-in icon"></i></a></li>
        <li>
          <a href="#"><i class="fa fa-envelope icon"></i></a></li>
      </ul>
      </div>
      
    </section>
  );
}

export default Contact;
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:cheborbrighton805@gmail.com">cheborbrighton805@gmail.com</a></p>
      <p>Phone: <a href="tel:+254115081710">0115081710</a></p>
      <p>
        <a href="https://github.com/brightonchebor" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://linkedin.com/in/brighton-chebor" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </p>
    </section>
  );
};

export default Contact;

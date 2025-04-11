import React from 'react';
import './Contact.css';

const Contact: React.FC = () => (
  <section className="contact-section">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:rithesh@example.com">rithesh@example.com</a></p>
    <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
    <p>Instagram: <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">@yourusername</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
  </section>
);

export default Contact;
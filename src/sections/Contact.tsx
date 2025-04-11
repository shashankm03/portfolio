// import React from 'react';
// import './Contact.css';

// const Contact: React.FC = () => (
//   <section className="contact-section">
//     <h2>Contact</h2>
//     <p>Email me at <a href="mailto:rithesh@example.com">rithesh@example.com</a></p>
//   </section>
// );

// export default Contact;

import React from 'react';
import './Contact.css';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => (
  <section className="contact-section">
    <h2>Contact</h2>
    <ul>
      <li>
        <FaEnvelope /> Email: <a href="shashankmahaladkar@gmail.com">XXXXX@gmail.com</a>
      </li>
      <li>
        <FaInstagram /> Instagram: <a href="https://instagram.com/shashank_mahaladkar" target="_blank" rel="noopener noreferrer">@shanxx</a>
      </li>
    </ul>
  </section>
);

export default Contact;

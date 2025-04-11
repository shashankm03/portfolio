import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    © {new Date().getFullYear()} Shashank. All rights reserved.
  </footer>
);

export default Footer;
import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About: React.FC = () => (
  <motion.section 
    className="about-section"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2>About Me</h2>
    <p>
      Hello! I’m <span className="highlight">Shashank</span>, a passionate and detail-oriented 
      <span className="highlight"> Full Stack Developer</span> with a strong foundation in 
      <span className="highlight"> backend systems</span>, 
      <span className="highlight"> machine learning</span>, and 
      <span className="highlight"> AI-based applications</span>. 
      I’m currently pursuing a research internship at <span className="highlight">IIT Tirupati</span> and 
      have developed multiple projects like a <span className="highlight">movie recommender system</span>, 
      an <span className="highlight">AI-driven health monitor</span>, and a 
      <span className="highlight"> reinforcement learning game</span>.
    </p>
    <p>
      When I’m not coding, I  play <span className="highlight">basketball</span>, 
      strategizing in <span className="highlight">chess</span> (current rating 1300).
    </p>
  </motion.section>
);

export default About;

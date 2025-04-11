import React from 'react';
import './Profile.css';
import { motion } from 'framer-motion';

const Profile: React.FC = () => (
  <motion.section
    className="profile-section"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="profile-content">
      <h2>Hi, I'm <span className="highlight">Shashank</span> 👋</h2>
      <p className="subtitle">Full Stack Developer | AI Enthusiast | Tech Explorer</p>
      <p>
        I'm a curious mind driven by <span className="highlight">problem-solving</span> and a love for creating 
        intuitive, impactful digital experiences. Whether it's developing an AI-based healthcare solution, 
        fine-tuning a recommendation engine, or exploring the mechanics of reinforcement learning through games — 
        I'm all in 💻🚀
      </p>
      <p>
        Outside of code, you’ll find me on the <span className="highlight">basketball court 🏀</span> or at the gym 💪. 
      </p>
    </div>
  </motion.section>
);

export default Profile;

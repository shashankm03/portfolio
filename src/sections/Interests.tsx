import React from 'react';
import './Interests.css';
import { FaMotorcycle, FaCar, FaCode, FaBasketballBall, FaDumbbell, FaChess } from 'react-icons/fa';

const Interests: React.FC = () => (
  <section className="interests-section">
    <h2>Interests</h2>
    <div className="interests-cards">
      <div className="interest-card">
        <FaCode className="interest-icon" />
        <h3>Coding</h3>
        <p>
          Enjoy building projects and solving problems with code. Always exploring new frameworks, APIs, and AI/ML technologies.
        </p>
      </div>
      <div className="interest-card">
        <FaBasketballBall className="interest-icon" />
        <h3>Basketball</h3>
        <p>
          University-level basketball player. Love the strategy, pace, and team dynamics on and off the court.
        </p>
      </div>
      <div className="interest-card">
        <FaDumbbell className="interest-icon" />
        <h3>Fitness</h3>
        <p>
          Regular at the gym. Focused on strength training, discipline, and pushing physical limits.
        </p>
      </div>
      <div className="interest-card">
        <FaChess className="interest-icon" />
        <h3>Chess</h3>
        <p>
          Chess enthusiast with a 1300 rating. Strategic thinking and pattern recognition keep me coming back.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;

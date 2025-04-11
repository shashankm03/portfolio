import React from 'react';
import './WorkExperience.css';
import { FaBriefcase } from 'react-icons/fa';

const WorkExperience: React.FC = () => (
  <section className="work-section">
    <h2>Work Experience</h2>

    <div className="work-card">
      <FaBriefcase className="work-icon" />
      <div className="work-details">
        <h3>Full Stack Intern</h3>
        <p><strong>Company:</strong> Stacklane</p>
        <p><strong>Duration:</strong> March 2025 – Present</p>
        <p>
          Working on frontend development and cloud deployment strategies. 
          Contributing to scalable UI components, integrating REST APIs, and applying 
          DevOps practices using platforms like <strong>AWS</strong> and <strong>Azure</strong>. 
          Actively building a HackerNews clone using <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Prisma</strong>, and <strong>PostgreSQL</strong>.
        </p>
      </div>
    </div>

    <div className="work-card">
      <FaBriefcase className="work-icon" />
      <div className="work-details">
        <h3>Research Intern – Reinforcement Learning Game Development</h3>
        <p><strong>Institute:</strong> IIT Tirupati</p>
        <p><strong>Duration:</strong> May 2024 – July 2024</p>
        <p>
          Worked under the guidance of <strong>Dr. Sridhar Chimalakonda (HoD CSE)</strong> to develop a 
          gamified educational tool using <strong>Python</strong> and <strong>Pygame</strong> that 
          demonstrates reinforcement learning concepts across five progressive levels. 
          Emphasized intuitive design and step-wise complexity to teach AI fundamentals.
        </p>
      </div>
    </div>
  </section>
);

export default WorkExperience;

import React from 'react';
import './Projects.css';
import { FaMicroscope, FaHeartbeat, FaFilm, FaBookOpen, FaGlobe } from 'react-icons/fa';

const Projects: React.FC = () => (
  <section className="projects-section">
    <h2>Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <FaHeartbeat className="project-icon" />
        <h3>GenAI Healthcare Monitor</h3>
        <p>
          A GenAI-powered real-time health monitoring web app with wearable data integration, abnormality detection, and rare disease prediction using synthetic data.
        </p>
      </div>
      <div className="project-card">
        <FaBookOpen className="project-icon" />
        <h3>Book Recommendation System</h3>
        <p>
          Developed a content-based recommendation engine using author bibliography, NLP techniques, and cosine similarity for personalized book suggestions.
        </p>
      </div>
      <div className="project-card">
        <FaFilm className="project-icon" />
        <h3>Movie Recommendation Engine</h3>
        <p>
          Created a TF-IDF powered movie recommender with a user-friendly React interface, enabling real-time similarity-based results.
        </p>
      </div>
      <div className="project-card">
        <FaMicroscope className="project-icon" />
        <h3>Plant Disease Classifier</h3>
        <p>
          Built a CNN-based model to classify leaf diseases using image data. Includes data augmentation, model evaluation, and deployment with Streamlit.
        </p>
      </div>
      <div className="project-card">
        <FaGlobe className="project-icon" />
        <h3>Portfolio Website</h3>
        <p>
          This very site – developed using Vite + React, showcasing my experience, projects, and contact information with stylish animations and clean UX.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;

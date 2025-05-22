import React from 'react';
import './Projects.css';
import charityImg from '../../assets/charity-platform.png'; // Put your image in this path

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <img src={charityImg} alt="Charity Donation Platform" className="project-image" />
        <h3>Charity Donation Platform</h3>
        <p>
          A centralized web platform connecting local donors with charities. Features include role-based authentication, JWT security, payment integration, and an admin dashboard.
        </p>
        <ul>
          <li><strong>Tech Stack:</strong> Django, DRF, MySQL, Bootstrap</li>
          <li><strong>Features:</strong> JWT auth, Payment gateway, Role-based access, Admin panel</li>
          <li><strong>Outcome:</strong> Certified and deployed project hosted on GitHub</li>
        </ul>
        <a
          href="https://github.com/brightonchebor/charity-donation-platform.git"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;

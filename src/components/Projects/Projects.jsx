import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Charity Donation Platform</h3>
        <p>
          A centralized web platform connecting local donors with charities. Features include role-based authentication, JWT security, payment integration, and an admin dashboard.
        </p>
        <ul>
          <li><strong>Tech Stack:</strong> Django, DRF, MySQL, Bootstrap</li>
          <li><strong>Features:</strong> JWT auth, Payment gateway, Role-based access, Admin panel</li>
          <li><strong>Outcome:</strong> Certified and deployed project hosted on GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;

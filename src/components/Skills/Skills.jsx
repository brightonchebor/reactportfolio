import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div>
          <h3>Languages</h3>
          <p>Python, SQL, JavaScript, HTML, CSS</p>
        </div>
        <div>
          <h3>Frameworks</h3>
          <p>Django, Django REST Framework, Flask, Bootstrap</p>
        </div>
        <div>
          <h3>Databases</h3>
          <p>MySQL, PostgreSQL, SQLite, MS SQL Server</p>
        </div>
        <div>
          <h3>Tools</h3>
          <p>Git, GitHub, Docker, Linux, VS Code, Postman, Mailtrap, Pytest</p>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <p>Problem-solving, Team Collaboration, Time Management</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

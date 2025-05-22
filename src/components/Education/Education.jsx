import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <h2>Education & Certification</h2>
      <div className="edu-block">
        <h3>Pwani University</h3>
        <p><strong>BSc. Telecommunication and Information Technology</strong></p>
        <p>Sept 2021 – Present</p>
        <p><em>Relevant Coursework:</em> Data Structures, Web Development, Database Systems</p>
      </div>
      <div className="edu-block">
        <h3>eMobilis Kenya (2023)</h3>
        <p>Certified for developing a Django-based Charity Donation Platform with JWT, REST APIs, and Payment Gateway</p>
      </div>
    </section>
  );
};

export default Education;

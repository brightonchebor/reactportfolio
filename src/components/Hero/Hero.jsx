import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.png'; // Make sure the image is stored here

const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={profile} alt="Brighton Chebor" className="profile-pic" />
        <h1>Brighton Chebor</h1>
        <h2>Backend Software Developer</h2>
        <p>
          Passionate about building secure and scalable backend systems using Django and Flask.
        </p>
        <div className="hero-buttons">
          <a href="reactportfolio/Brighton_Chebor_CV.pdf" download>Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

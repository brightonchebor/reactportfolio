import React from "react";
import "./Hero.css";
import profileImg from '../../assets/profile.png'; // adjust path as needed


const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero" id="hero">
      <img src={profileImg} alt="Profile" className="hero-img" />
      <h1>Welcome to My Portfolio</h1>
      <p>I’m a developer passionate about building beautiful experiences.</p>
      <button onClick={() => scrollToSection("contact")}>Contact Me</button>
    </section>
  );
};

export default Hero;

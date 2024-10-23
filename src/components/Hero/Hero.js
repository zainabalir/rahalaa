import React from 'react';
import './hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover Iraq’s rich history and culture</h1>
        <button className="hero-btn">Explore More</button>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default HeroSection;

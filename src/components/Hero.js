import React from 'react';
import './Hero.css';
import heroImage from '../img/f8062e00ad23ffe6bfbbb9c47ff59e5f7932e7e0.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          LET'S<br />
          EXPLORE<br />
          UNIQUE<br />
          CLOTHES.
        </h1>
        
        <p className="hero-subtitle">
          Live for Influential and Innovative fashion!
        </p>
        
        <button className="hero-button">
          Shop Now
        </button>
      </div>
      
      <div className="hero-image">
        <img 
          src={heroImage} 
          alt="Fashion Model in Pink Outfit" 
          className="hero-img"
        />
      </div>
    </section>
  );
}

export default Hero;

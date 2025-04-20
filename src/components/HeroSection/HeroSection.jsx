import React from 'react';
import { Link } from 'react-router-dom';
import './herosection.css';

// hero section component to use with the home page
// will be used together with the TodaysSpecial component

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src="/images/Cura-Cafe.png" alt="Cura Cafe Logo" />
      </div>
      
      <div className="hero-content">
        <h1>Welcome to Cura Cafe</h1>
            <p>From our cozy kitchen to you, we serve love in every bite. Each day, we bring a unique sandwich to life, crafted with care and the freshest ingredients. </p>
            <p><strong>** All daily orders must be placed before 10 AM same-day. </strong> We aim for you to receive your orders between 12pm-1pm. </p>
            <Link to="/contact" className="contact-us-button">
                Contact Us to Order
            </Link>
            <Link to="/menu" className="weekly-menu-link">
                View Full Weekly Menu
            </Link>
            <Link to="/services" className="services-link">
                Explore Our Services
            </Link>
            
        
      </div>
    </section>
  );
};

export default HeroSection;

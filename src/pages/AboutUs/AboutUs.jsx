import React from 'react';
import './aboutus.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <h2>Behind Cura Foods </h2>
      <p>
        We are Paulo and Gabi, and Cura Foods is our passion project to bring to life our love for food and experimenting in the kitchen. We believe that food is not just about sustenance; it's about connection, creativity, and joy. Our mission is to create delicious, wholesome meals that nourish both the body and the soul.
      </p>
      <p>
        Everyday it's a different meal, and we take pride in crafting unique sandwiches that are not only delicious but also made with the freshest ingredients.
        Our Menu changes weekly, and we are always looking for new ways to surprise and delight our customers. So check back often to see what we have cooking in our kitchen!
      </p>
      <Link to="/menu" class="weekly-menu-link">
        View Full Weekly Menu
      </Link>
      <Link to="/contact" class="contact-us-button">
        Get in Touch with Us
      </Link>
        
    
    </div>
  );
};

export default AboutUs;

import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import './servicespage.css';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://cura-menu.onrender.com/api/services')
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p>Have a special event coming up and you want to make to impress your guests? We can help you with that! Get in touch with us. </p>
      <Link to="/contact" className="contact-us-button">
        Contact Us
      </Link>
      
      <div className="services-list">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>


    );
};

export default ServicesPage;
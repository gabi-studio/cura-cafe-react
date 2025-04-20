import React from 'react';
import './ServiceCard.css';

// This component represents a service card that displays information about a specific service offered 

const ServiceCard = ({ service }) => {
  const { name, description, imageUrl, priceRange, isActive } = service;

  return (
    <div className="service-card">
      <img src={imageUrl} alt={name} className="service-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>Price Range:</strong> {priceRange}</p>
      <p><strong>Status:</strong> {isActive ? 'Available' : 'Unavailable'}</p>
    </div>
  );
};

export default ServiceCard;

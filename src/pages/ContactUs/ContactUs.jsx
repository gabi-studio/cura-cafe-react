import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <h2>Contact Us</h2>
      <p>To place a daily order, send us a message <strong>before 10 AM same day</strong>.</p>
      <p>For catering services, <strong>please allow at least 1 week before your event</strong>, this leaves us time to prepare only the best for you.</p>
      
      <div class="contact-info">
        <p><strong>Phone:</strong> 416-456-7890</p>
        <p><strong>Email:</strong> contact@curafoods.com</p>
      </div>
    </div>
  );
};

export default ContactUs;

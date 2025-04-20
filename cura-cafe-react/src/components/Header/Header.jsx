import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

// header component for the Cura Cafe website
// includes navigation links to different pages

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

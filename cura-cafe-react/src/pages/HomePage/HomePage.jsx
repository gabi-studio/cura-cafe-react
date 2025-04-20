import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import TodaysSpecial from '../../components/TodaysSpecial/TodaysSpecial';
import HeroSection from '../../components/HeroSection/HeroSection';

const HomePage = () => {
    return (
      <div className="home-page">
        <HeroSection />
        
        <TodaysSpecial />
        </div>
      

    );
  };

export default HomePage;

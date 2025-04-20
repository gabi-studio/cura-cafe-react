
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItemCard from '../MenuItemCard/MenuItemCard';
import './todaysspecial.css';

// This component fetches today's specials based on current date from the API and displays them
// It uses the MenuItemCard component to display each special item
// loading state and error handling for the API request

const TodaysSpecial = () => {
  const [specialItems, setSpecialItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://cura-menu.onrender.com/api/menu')
      .then((response) => response.json())
      .then((data) => {
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const todaysItems = data.filter(
          (item) => item.dayOfWeek === today && item.quantity > 0
        );
        setSpecialItems(todaysItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching today\'s specials:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading today's specials...</p>;
  }


  return (
    <div className="todays-special">
      {specialItems.length > 0 ? (
        <div className="special-items">
          {specialItems.map((item) => (
            <MenuItemCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <p>No specials available for today.</p>
      )}
      
    </div>
  );
};

export default TodaysSpecial;

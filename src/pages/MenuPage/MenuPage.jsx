import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MenuPage.css';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('https://cura-menu.onrender.com/api/menu');
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchMenuItems();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="menu-page">
        <h1>This Week's Menu</h1>
        <p>Loading menu...</p>
      </div>
    );
  }

  return (
    <div className="menu-page">
      <h1>This Week's Menu</h1>
      <Slider {...settings}>
        {menuItems.map((item) => (
          <div key={item._id}>
            <MenuItemCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MenuPage;

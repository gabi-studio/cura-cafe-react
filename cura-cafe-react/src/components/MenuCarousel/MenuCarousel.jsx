// src/components/MenuCarousel/MenuCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import MenuItemCard from '../MenuItemCard/MenuItemCard';

// using react-slick for carousel functionality on the weekly menu page
// https://react-slick.neostack.com/docs/get-started


const MenuCarousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Adjust based on your design
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <MenuItemCard key={item._id} item={item} />
      ))}
    </Slider>
  );
};

export default MenuCarousel;

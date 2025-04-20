import React from 'react';
import './menuitemcard.css';

// individual menu card component to use on menu page and in the home page for the daily special
// This component represents a menu item card that displays information about a specific menu item
// should show "sold out" status if the quantity is 0

const MenuItemCard = ({ item }) => {
  const {
    name,
    description,
    imageUrl,
    price,
    ingredients,
    quantity,
    dayOfWeek,
  } = item;

  return (
    <div className="menu-item-card">
      <h2 className="menu-item-title">{dayOfWeek}'s Sandwich</h2>
      <img src={imageUrl} alt={name} className="menu-item-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>Ingredients:</strong> {ingredients}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
      {quantity === 0 ? (
        <p className="sold-out">Sold Out for the Day</p>
      ) : (
        <p><strong>Available</strong> only on {dayOfWeek}</p>
        
      )}
    </div>
  );
};

export default MenuItemCard;

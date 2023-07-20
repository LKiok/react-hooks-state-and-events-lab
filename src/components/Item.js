import React, { useState } from 'react';

function Item() {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <button onClick={handleAddToCart}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
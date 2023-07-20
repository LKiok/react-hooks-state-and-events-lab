import React, { useState } from 'react';

const items = [
  {
    id: 1,
    name: 'Yogurt',
    category: 'Dairy',
  },
  {
    id: 2,
    name: 'pomegranate',
    category: 'Produce',
  },
  {
    id: 3,
    name: 'Lettuce',
    category: 'Produce',
  },
  {
    id: 4,
    name: 'String Cheese',
    category: 'Dairy',
  },
  {
    id: 5,
    name: 'Cookies',
    category: 'Dessert',
  }
];

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;

  return (
    <div>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">All Categories</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
import React, { useState } from 'react';
import './App.css';
import ShoppingList from './ShoppingList';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <h1>My Grocery List App</h1>
      </header>
      <main>
        <ShoppingList />
      </main>
      <footer>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </footer>
    </div>
  );
}

export default App;
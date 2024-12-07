import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      className="p-2 border rounded-full "
      onClick={toggleTheme}
    >
      {theme === 'light' ? <FaSun /> : <FaMoon />}
    </button>
//     
  );
};

export default ThemeToggle;

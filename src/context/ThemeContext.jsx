import React, { createContext, useState, useEffect } from 'react';

// Create the Context
export const ThemeContext = createContext();

// Create the Provider Component
export const ThemeProvider = ({ children }) => {
  // Check localStorage first, default to 'dark' (The Nebula Faction) if nothing is found
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Whenever the theme state changes, update the HTML element and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // The function to toggle between the two themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
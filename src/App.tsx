import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import './App.css'

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkModeState = !darkMode;
    setDarkMode(newDarkModeState);
    document.documentElement.classList.toggle('dark', newDarkModeState);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Lógica de modo oscuro */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <h1 className="text-3xl font-bold mb-4 mt-4 dark:text-white text-[#213547]">
        Wingman Product Catalog
      </h1>
      <input
        type="text"
        className="border p-2 mb-4 rounded w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
        placeholder="Search Products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default App;
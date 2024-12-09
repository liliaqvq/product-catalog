import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}
//Navbar so we can contain the dark/light mode button
const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="p-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Product Catalog</h1>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 dark:hover:bg-teal-700 transition-all"
      >
        {darkMode ? (
          <FaSun className="text-xl" />
        ) : (
          <FaMoon className="text-xl" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
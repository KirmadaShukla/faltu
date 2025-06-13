import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
  
const Header = () => {
  return (
    <header className="bg-white shadow-sm" data-source="src/Components/Header.jsx">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Your Brand
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header; 
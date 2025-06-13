import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Your Logo
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link to="/about" className="flex items-center text-gray-600 hover:text-gray-900">
              <FaInfoCircle className="mr-2" />
              About
            </Link>
            <Link to="/contact" className="flex items-center text-gray-600 hover:text-gray-900">
              <FaEnvelope className="mr-2" />
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
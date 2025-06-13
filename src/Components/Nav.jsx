import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Nav = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/about', label: 'About', icon: FaInfoCircle },
    { path: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <nav className="flex space-x-6" data-source="src/components/Nav.jsx">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <item.icon className="mr-2" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
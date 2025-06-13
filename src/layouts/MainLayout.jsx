import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Nav from '../components/Nav';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm editable" data-source="src/Components/Header.jsx" contentEditable="true" style={{ outline: 'transparent dashed 1px' }}>
        <div className="max-w-6xl mx-auto px-4 editable" contentEditable="true" style={{ outline: 'transparent dashed 1px' }}>
          <div className="flex justify-between items-center h-16 editable" contentEditable="true" style={{ outline: 'transparent dashed 1px' }}>
            <a className="text-2xl font-bold text-gray-900 editable" href="/" data-discover="true" contentEditable="true" style={{ outline: 'transparent dashed 1px' }}>
              Your Brand
            </a>
            <Nav />
          </div>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
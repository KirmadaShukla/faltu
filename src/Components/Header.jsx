import React from 'react';
import Nav from './Nav.jsx';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 editable" contentEditable="true" draggable="true">
        <div className="flex justify-between items-center h-16 editable" contentEditable="true" draggable="true">
          <a className="text-2xl font-bold text-gray-900 editable" href="/" data-discover="true" contentEditable="true" draggable="true">
            Your Brand
            <div className="drag-handle">⋮⋮</div>
          </a>
          <nav className="flex space-x-6 editable" data-source="src/components/Nav.jsx" contentEditable="true" draggable="true">
            <a className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 editable" href="/" data-discover="true" contentEditable="true" draggable="true">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
              </svg>
              Home
              <div className="drag-handle">⋮⋮</div>
            </a>
            <a className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 editable" href="/about" data-discover="true" contentEditable="true" draggable="true">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
              </svg>
              About
              <div className="drag-handle">⋮⋮</div>
            </a>
            <a className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 editable" href="/contact" data-discover="true" contentEditable="true" draggable="true">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
              Contact
              <div className="drag-handle">⋮⋮</div>
            </a>
            <div className="drag-handle">⋮⋮</div>
          </nav>
          <div className="drag-handle">⋮⋮</div>
        </div>
        <div className="drag-handle">⋮⋮</div>
      </div>
      <div className="drag-handle">⋮⋮</div>
    </header>
  );
};

export default Header;
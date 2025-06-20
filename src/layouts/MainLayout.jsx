import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm editable" data-source="src/Components/Header.jsx" contenteditable="true" draggable="true" style={{ outline: "transparent dashed 1px" }}>
        <div className="max-w-6xl mx-auto px-4 editable" contenteditable="true" draggable="true">
          <div className="flex justify-between items-center h-16 editable" contenteditable="true" draggable="true">
            <a className="text-2xl font-bold text-gray-900 editable" href="/" data-discover="true" contenteditable="true" draggable="true">Your Brand<div className="drag-handle">⋮⋮</div></a>
            <nav className="flex space-x-6 editable" data-source="src/components/Nav.jsx" contenteditable="true" draggable="true">
              <a className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 editable" href="/" data-discover="true" contenteditable="true" draggable="true">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
                </svg>Home<div className="drag-handle">⋮⋮</div>
              </a>
              <a className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 editable" href="/about" data-discover="true" contenteditable="true" draggable="true">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/>
                </svg>About<div className="drag-handle">⋮⋮</div>
              </a>
              <a className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 editable" href="/contact" data-discover="true" contenteditable="true" draggable="true">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                </svg>Contact<div className="drag-handle">⋮⋮</div>
              </a>
              <div className="drag-handle">⋮⋮</div>
            </nav>
            <div className="drag-handle">⋮⋮</div>
          </div>
          <div className="drag-handle">⋮⋮</div>
        </div>
        <div className="drag-handle">⋮⋮</div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-900 text-white editable" data-source="src/Components/Footer.jsx" contenteditable="true" draggable="true" style={{ outline: "transparent dashed 1px" }}>
        <div className="max-w-6xl mx-auto px-4 py-12 editable" contenteditable="true" draggable="true" style={{ outline: "transparent dashed 1px" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 editable" contenteditable="true" draggable="true" style={{ outline: "transparent dashed 1px" }}>
            <div className="col-span-1 md:col-span-2 editable" contenteditable="true" draggable="true" style={{ outline: "transparent dashed 1px" }}>
              <h2 className="text-2xl font-bold mb-4 editable" contenteditable="true" draggable="true" style={{ outline: "transparent dashed 1px" }}>Your Brand<div className="drag-handle">⋮⋮</div></h2>
              <p className="text-gray-400 mb-4 editable" contenteditable="true" draggable="true">Empowering businesses with innovative solutions for the digital age.<div className="drag-handle">⋮⋮</div></p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                  </svg>
                </a>
              </div>
              <div className="drag-handle">⋮⋮</div>
            </div>
            <div className="editable" contenteditable="true" draggable="true" style={{ outline: "transparent dashed 1px" }}>
              <h3 className="text-lg font-semibold mb-4 editable" contenteditable="true" draggable="true">Company<div className="drag-handle">⋮⋮</div></h3>
              <ul className="space-y-2">
                <li className="editable" contenteditable="true" draggable="true" style={{ outline: "transparent dashed 1px" }}>
                  <a className="text-gray-400 hover:text-white transition-colors duration-300 editable" href="/about" data-discover="true" contenteditable="true" draggable="true">About<div className="drag-handle">⋮⋮</div></a>
                  <div className="drag-handle">⋮⋮</div>
                </li>
                <li className="editable" contenteditable="true" draggable="true" style={{ outline: "transparent dashed 1px" }}>
                  <a className="text-gray-400 hover:text-white transition-colors duration-300 editable" href="/careers" data-discover="true" contenteditable="true" draggable="true">Careers<div className="drag-handle">⋮⋮</div></a>
                  <div className="drag-handle">⋮⋮</div>
                </li>
                <li className="editable" contenteditable="true" draggable="true">
                  <a className="text-gray-400 hover:text-white transition-colors duration-300 editable" href="/contact" data-discover="true" contenteditable="true" draggable="true">Contact<div className="drag-handle">⋮⋮</div></a>
                  <div className="drag-handle">⋮⋮</div>
                </li>
              </ul>
              <div className="drag-handle">⋮⋮</div>
            </div>
            <div className="editable" contenteditable="true" draggable="true" style={{ outline: "transparent dashed 1px" }}>
              <h3 className="text-lg font-semibold mb-4 editable" contenteditable="true" draggable="true" style={{ outline: "transparent dashed 1px" }}>Resources<div className="drag-handle">⋮⋮</div></h3>
              <ul className="space-y-2">
                <li className="editable" contenteditable="true" draggable="true">
                  <a className="text-gray-400 hover:text-white transition-colors duration-300 editable" href="/blog" data-discover="true" contenteditable="true" draggable="true">Blog<div className="drag-handle">⋮⋮</div></a>
                  <div className="drag-handle">⋮⋮</div>
                </li>
                <li className="editable" contenteditable="true" draggable="true">
                  <a className="text-gray-400 hover:text-white transition-colors duration-300 editable" href="/documentation" data-discover="true" contenteditable="true" draggable="true">Documentation<div className="drag-handle">⋮⋮</div></a>
                  <div className="drag-handle">⋮⋮</div>
                </li>
                <li className="editable" contenteditable="true" draggable="true">
                  <a className="text-gray-400 hover:text-white transition-colors duration-300 editable" href="/support" data-discover="true" contenteditable="true" draggable="true">Support<div className="drag-handle">⋮⋮</div></a>
                  <div className="drag-handle">⋮⋮</div>
                </li>
              </ul>
              <div className="drag-handle">⋮⋮</div>
            </div>
            <div className="editable" contenteditable="true" draggable="true">
              <h3 className="text-lg font-semibold mb-4 editable" contenteditable="true" draggable="true">Legal<div className="drag-handle">⋮⋮</div></h3>
              <ul className="space-y-2">
                <li className="editable" contenteditable="true" draggable="true">
                  <a className="text-gray-400 hover:text-white transition-colors duration-300 editable" href="/privacy" data-discover="true" contenteditable="true" draggable="true">Privacy<div className="drag-handle">⋮⋮</div></a>
                  <div className="drag-handle">⋮⋮</div>
                </li>
                <li className="editable" contenteditable="true" draggable="true">
                  <a className="text-gray-400 hover:text-white transition-colors duration-300 editable" href="/terms" data-discover="true" contenteditable="true" draggable="true">Terms<div className="drag-handle">⋮⋮</div></a>
                  <div className="drag-handle">⋮⋮</div>
                </li>
                <li className="editable" contenteditable="true" draggable="true">
                  <a className="text-gray-400 hover:text-white transition-colors duration-300 editable" href="/security" data-discover="true" contenteditable="true" draggable="true">Security<div className="drag-handle">⋮⋮</div></a>
                  <div className="drag-handle">⋮⋮</div>
                </li>
              </ul>
              <div className="drag-handle">⋮⋮</div>
            </div>
            <div className="drag-handle">⋮⋮</div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 editable" contenteditable="true" draggable="true">
            <p className="editable" contenteditable="true" draggable="true">© 2025 Your Brand. All rights reserved.<div className="drag-handle">⋮⋮</div></p>
            <div className="drag-handle">⋮⋮</div>
          </div>
          <div className="drag-handle">⋮⋮</div>
        </div>
        <div className="drag-handle">⋮⋮</div>
      </footer>
      <div className="drag-handle">⋮⋮</div>
    </div>
  );
};

export default MainLayout;
.text-gray-400 {
  font-size: 12px;
  color: rgb(171, 95, 95);
  background-color: rgb(238, 129, 129);
  margin: 10px;
}
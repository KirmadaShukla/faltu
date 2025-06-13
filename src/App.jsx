import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-gray-800 p-4">
          <a className="text-2xl font-bold text-gray-900" href="/">Your Brand</a> {/* Updated line */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 p-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Your Brand
        </footer>
      </div>
    </Router>
  );
}

export default App;
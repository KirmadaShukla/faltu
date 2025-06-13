/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const mainStyles = css`
  flex: 1;
  padding: 20px;
`;

function App() {
  const [showNavigation, setShowNavigation] = useState(true);

  return (
    <div css={containerStyles}>
      <BrowserRouter>
        {showNavigation && <Navigation />}
        <main css={mainStyles}>
          <a className="text-2xl font-bold text-gray-900">Your Brand</a> {/* Added link here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
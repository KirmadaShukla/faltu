/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Nav from './Nav.jsx';

const Header = ({}) => {
  return (
    <header css={headerStyle}>
      <div css={headerInnerStyle} contenteditable="true" draggable="true">
        <div css={headerNavWrapperStyle} contenteditable="true" draggable="true">
          <a
            css={brandStyle}
            href="/"
            data-discover="true"
            contenteditable="true"
            draggable="true"
          >
            Your Brand
            <div className="drag-handle">⋮⋮</div>
          </a>
          <nav css={navStyle} data-source="src/components/Nav.jsx" contenteditable="true" draggable="true">
            <Nav />
          </nav>
          <div className="drag-handle">⋮⋮</div>
        </div>
        <div className="drag-handle">⋮⋮</div>
      </div>
      <div className="drag-handle">⋮⋮</div>
    </header>
  );
};

const headerStyle = css`
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const headerInnerStyle = css`
  max-width: 6xl;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;


const headerNavWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const brandStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: #374151;
`;

const navStyle = css`
  display: flex;
  gap: 1rem;
`;

export default Header;
import React from 'react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <span className="coffee-icon">☕</span>
          <span className="brand-name">Brew & Books</span>
          <span className="brand-tagline">Artisan Coffee & Study Lounge</span>
        </div>
        <ul className="nav-links">
          {['home', 'about', 'services'].map((page) => (
            <li key={page}>
              <button 
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? 'active' : ''}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
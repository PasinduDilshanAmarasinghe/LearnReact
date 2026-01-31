import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Brew & Books</h3>
          <p>Artisan Coffee & Study Lounge</p>
          <p className="footer-tagline">Where ideas percolate and creativity flows</p>
        </div>
        <div className="footer-section">
          <h4>Visit Us</h4>
          <p>456 Study Street<br/>Portland, OR 97204</p>
          <p className="hours">
            Weekdays: 6am - 10pm<br/>
            Weekends: 7am - 11pm
          </p>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <p>hello@brewandbooks.com</p>
          <p>(555) 987-6543</p>
          <div className="social-icons">
            <span className="social-icon">📱</span>
            <span className="social-icon">📷</span>
            <span className="social-icon">📘</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Brew & Books. Brewed with love and served with purpose.</p>
      </div>
    </footer>
  );
};

export default Footer;
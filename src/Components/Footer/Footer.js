import React from 'react';
import './styles/style.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <p className="footer__text">
          <span>Email:</span>
          <a href="mailto:paytonburr@outlook.com" className="footer__link">
            {' '}
            paytonburr@outlook.com
          </a>
        </p>
        <p className="footer__text">
          <span>Call/Text:</span> (385) 775-2047
        </p>
      </div>
    </footer>
  );
}

export default Footer;

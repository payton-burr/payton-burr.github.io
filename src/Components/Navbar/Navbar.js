/* eslint-disable react/self-closing-comp */
import React from 'react';
import './styles/style.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Payton</h2>
        <ul className="navbar-nav">
          <li className="navbar-item">
            <a href="#" alt="Projects" className="navbar-link">
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" alt="Contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

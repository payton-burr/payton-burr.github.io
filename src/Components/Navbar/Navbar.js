/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import './styles/style.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo" data-aos="fade-down">
          Payton
        </h2>
        <ul className="navbar-nav">
          <li className="navbar-item" data-aos="fade-down" data-aos-delay="200">
            <a href="#" alt="Projects" className="navbar-link">
              Projects
            </a>
          </li>
          <li className="navbar-item" data-aos="fade-down" data-aos-delay="300">
            <a href="#" alt="Contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/* eslint-disable react/self-closing-comp */
import React from 'react';
import './styles/style.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Payton</h2>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <a className="navbar-link">Projects</a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

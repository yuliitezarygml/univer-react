import React from 'react';
import './Header.css';
import logo from '../img/Vector.png';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img 
          src={logo} 
          alt="Fashion Logo" 
          className="header-logo"
        />
        <span className="header-brand">FASHION</span>
      </div>

      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#catalogue" className="nav-link">CATALOGUE</a>
          </li>
          <li className="nav-item">
            <a href="#fashion" className="nav-link">FASHION</a>
          </li>
          <li className="nav-item">
            <a href="#favourite" className="nav-link">FAVOURITE</a>
          </li>
          <li className="nav-item">
            <a href="#lifestyle" className="nav-link">LIFESTYLE</a>
          </li>
        </ul>
      </nav>

      <div className="header-right">
        <button className="signup-btn">SIGN UP</button>
      </div>
    </header>
  );
}

export default Header;

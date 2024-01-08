import React from 'react';
import '../styles/Header.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Sarvam</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#blog">Blog</a>
          <a href="#contacts">Contacts</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

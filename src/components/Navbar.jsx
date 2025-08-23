import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div id="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-text">SecuTrack</span>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Navigation Links */}
      <ul id="Nav-links" className={isMenuOpen ? 'nav-open' : ''}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><a href="#key-features" onClick={(e) => { e.preventDefault(); scrollToSection('key-features'); }}>Features</a></li>
        <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How It Works</a></li>
        <li><NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
      </ul>

      {/* Auth Buttons */}
      <div className={`navbar-right ${isMenuOpen ? 'nav-open' : ''}`}>
        <NavLink to="/login" className="login-btn" onClick={closeMenu}>Login</NavLink>
        <NavLink to="/signup" className="signup-btn" onClick={closeMenu}>Sign Up</NavLink>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </div>
  )
}

export default Navbar

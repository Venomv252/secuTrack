import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div id="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-text">SecuTrack</span>
        </div>
      </div>

      <ul id="Nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><a href="#key-features" onClick={(e) => { e.preventDefault(); scrollToSection('key-features'); }}>Features</a></li>
        <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How It Works</a></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <div className="navbar-right">
        <NavLink to="/login" className="login-btn">Login</NavLink>
        <NavLink to="/signup" className="signup-btn">Sign Up</NavLink>
      </div>
    </div>
  )
}

export default Navbar

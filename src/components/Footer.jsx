import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <a href='mailto:shiran1431911@gmail.com' className="footer-link">
            <FaEnvelope /> shiran1431911@gmail.com
          </a>
        </div>
        
        <div className="footer-section">
          <h4>Social</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/aryanraj7/" className="footer-link">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="#" className="footer-link">
              <FaGithub /> GitHub
            </a>
            <a href="#" className="footer-link">
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Links</h4>
          <NavLink to="#" className="footer-link">Privacy Policy</NavLink>
          <NavLink to="#" className="footer-link">Terms of Service</NavLink>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 SecuTrack. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer

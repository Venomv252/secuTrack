import React from "react";
import { NavLink } from "react-router-dom";
import "./homepage.css";

const CallToAction = () => {
  return (
    <div id="call-to-action">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to protect your digital identity?</h2>
          <NavLink to="/user/dashboard/aryan" className="cta-button">
            Start Securing Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
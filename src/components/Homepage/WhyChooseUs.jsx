import React from "react";
import "./homepage.css";

const WhyChooseUs = () => {
  const benefits = [
    "Simple to use, no tech expertise required.",
    "Proactive monitoring, not just reactive.",
    "Trusted technology stack (React, Node.js, MongoDB, APIs).",
    "Built for individuals, students, and professionals."
  ];

  return (
    <div id="why-choose-us">
      <div className="container">
        <h2>Why Choose SecuTrack</h2>
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <span className="checkmark">✓</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
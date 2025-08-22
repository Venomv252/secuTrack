import React from "react";
import "./homepage.css";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create your SecuTrack account."
    },
    {
      number: "2",
      title: "Add Your Accounts",
      description: "Enter your email & phone for monitoring."
    },
    {
      number: "3",
      title: "Stay Protected",
      description: "Receive alerts, reports, and recommendations."
    }
  ];

  return (
    <div id="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
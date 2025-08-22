import React from "react";
import "./homepage.css";

const KeyFeatures = () => {
  const features = [
    {
      title: "Data Breach Monitoring",
      description: "Scan emails & phone numbers against leaks."
    },
    {
      title: "Personal Security Score",
      description: "Evaluate & track your digital safety level."
    },
    {
      title: "Real-Time Alerts",
      description: "Instant notifications when your data is exposed."
    },
    {
      title: "AI-Powered Risk Insights",
      description: "Smart recommendations to fix weak points."
    },
    {
      title: "Weekly Auto-Checks",
      description: "Automated monitoring of your accounts."
    },
    {
      title: "Secure Dashboard",
      description: "Role-based panels for users, mentors, admins."
    }
  ];

  return (
    <div id="key-features">
      <div className="container">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
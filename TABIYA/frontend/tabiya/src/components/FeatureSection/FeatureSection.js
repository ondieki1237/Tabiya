import React from "react";
import "./FeatureSection.css";
import { FaStar, FaBolt, FaShieldAlt } from "react-icons/fa";

const FeatureSection = () => (
  <div className="features-container">
    <h2>Key Features</h2>
    <div className="feature-card">
      <FaStar className="feature-icon" />
      <h3>High Quality</h3>
      <p>Experience top-notch service quality.</p>
    </div>
    <div className="feature-card">
      <FaBolt className="feature-icon" />
      <h3>Fast and Reliable</h3>
      <p>You can count on us to find match Job.</p>
    </div>
    <div className="feature-card">
      <FaShieldAlt className="feature-icon" />
      <h3>Secure</h3>
      <p>We prioritize your security and privacy.</p>
    </div>
  </div>
);

export default FeatureSection;
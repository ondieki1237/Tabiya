import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./HeroSection.css";
import logo from "../Images/logo.png"; // Import the logo image

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to navigate to the signup page
  const handleGetStartedClick = () => {
    navigate("/signup");
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Logo */}
        <img src={logo} alt="Skills Navigator Logo" className="hero-logo" />

        {/* Text */}
        <div className="hero-text">
          <h1>Skills Navigator</h1>
          <p>Your Number One Job WebApp!</p>
        </div>
      </div>

      {/* Get Started Button */}
      <button className="hero-btn" onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;

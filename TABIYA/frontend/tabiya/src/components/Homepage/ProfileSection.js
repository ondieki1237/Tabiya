import React from "react";
import "./ProfileSection.css";

function ProfileSection() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-details">
          <h2 className="username">John Doe</h2>
          <p className="fullname">Johnathan Doe</p>
          <p className="bio">A tech enthusiast and web developer.</p>
          <p className="location">Location: New York, USA</p>
          <p className="contact">
            Contact: john.doe@example.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;

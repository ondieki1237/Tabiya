import React from "react";
import "./UserSetting.css";

function UserSettings() {
  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      <ul>
        <li>Edit Profile</li>
        <li>Change Password</li>
        <li>Privacy Settings</li>
        <li>Notification Preferences</li>
      </ul>
    </div>
  );
}

export default UserSettings;

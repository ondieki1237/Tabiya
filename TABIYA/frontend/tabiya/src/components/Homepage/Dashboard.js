import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Your Dashboard</h2>
      <div className="metrics">
        <div className="metric">
          <h3>Followers</h3>
          <p>1200</p>
        </div>
        <div className="metric">
          <h3>Posts</h3>
          <p>45</p>
        </div>
      </div>
      <div className="recommendations">
        <h3>Personalized Recommendations</h3>
        <ul>
          <li>React for Beginners</li>
          <li>CSS Grid Layouts</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

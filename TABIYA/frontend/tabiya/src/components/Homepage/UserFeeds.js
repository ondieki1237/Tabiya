import React from "react";
import "./UserFeeds.css";

function UserFeed() {
  return (
    <div className="feed-container">
      <h2>User Feed</h2>
      <div className="post">
        <p>Just posted a new blog about React Hooks!</p>
        <div className="interactions">
          <span>10 Likes</span> | <span>2 Shares</span>
        </div>
      </div>
      <div className="post">
        <p>Commented on "Understanding JSX" by Jane Doe.</p>
        <div className="interactions">
          <span>5 Likes</span> | <span>3 Replies</span>
        </div>
      </div>
    </div>
  );
}

export default UserFeed;

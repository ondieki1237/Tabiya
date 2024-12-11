import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'; // Import the CSS file
// import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the user data object with username and password
    const userData = { username, password };

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User registered successfully:", data);

   
        localStorage.setItem("user_id", data.user_id);  // Assuming the API returns a user_id

       
        navigate("/login");
      } else {
        console.log("Error during registration:", data.message);

        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error processing your request. Please try again later.");
    }
  };

  const redirectToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? 
          <span onClick={redirectToLogin} className="login-link">Log in</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;

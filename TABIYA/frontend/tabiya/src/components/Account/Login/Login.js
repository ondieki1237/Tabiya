import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const [username, setUsername] = useState(""); // Changed from email to username
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login data to the backend API with username and password
    const loginData = { username, password };
    
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      
      if (response.ok) {
        console.log("Login successful:", data);

        // Store user_id in local storage
        localStorage.setItem("user_id", data.user_id);
        
        // Redirect to the dashboard or homepage after successful login
        navigate("/dashboard");
      } else {
        console.log("Login failed:", data.message);
        // Handle error (display an alert or show an error message)
        alert("Login failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle fetch error (show an alert, etc.)
      alert("There was an error processing your request. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>  {/* Changed label to Username */}
        <input
          type="text"  // Changed input type to text
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
        <button type="submit">Log In</button>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;

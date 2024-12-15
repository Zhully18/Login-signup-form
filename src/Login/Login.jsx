import React, { useState } from "react";
import "./Login.css"; // Import CSS for styling

const Login = () => {
  // State to toggle between "Login" and "Sign Up" modes
  const [currentState, setCurrentState] = useState("Login");

  return (
    <>
      <div className="login-container">
        {/* Right Section: Image */}
        <div className="image-section">
          {/* Background image is set via CSS */}
        </div>

        {/* Left Section: Form Section */}
        <div className="form-section">
          {/* Display the current state as the heading */}
          <h2>{currentState}</h2>

          {/* Form */}
          <form className="login-form">
            {/* Show username field only in "Sign Up" mode */}
            {currentState === "Login" ? null : (
              <>
                <label htmlFor="name">Username</label>
                <input
                  type="text" // Corrected type to "text" for the username field
                  id="name"
                  placeholder="Username"
                  required
                />
              </>
            )}

            {/* Email Field */}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email@gmail.com"
              required
            />

            {/* Password Field */}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
            />

            {/* Options Section */}
            <div className="options">
              {/* Link to reset the password */}
              <p className="forgot-password">forgot password?</p>

              {/* Toggle between "Login" and "Sign Up" */}
              {currentState === "Login" ? (
                <p
                  onClick={() => setCurrentState("Sign Up")}
                  className="cursor-pointer"
                >
                  Create account
                </p>
              ) : (
                <p
                  onClick={() => setCurrentState("Login")}
                  className="cursor-pointer"
                >
                  Login Here
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="login-button">
              {/* Change button text based on the current state */}
              {currentState === "Login" ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

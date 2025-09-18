import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './CSS/SignUp.css';

const SignUp = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    gender: "",
    email: "",
    DOB: "",
    phno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regex patterns
    const usernameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    // Username validation
    if (!usernameRegex.test(state.username)) {
      alert("Username should contain only alphabets.");
      return;
    }

    // Password validation
    if (state.password.length < 8) {
      alert("Password should be at least 8 characters long.");
      return;
    }

    // Email validation
    if (!emailRegex.test(state.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // DOB validation
    if (!state.DOB) {
      alert("Date of birth is required.");
      return;
    }

    // Gender validation
    if (!state.gender) {
      alert("Please select your gender.");
      return;
    }

    // Phone number validation
    if (!phoneRegex.test(state.phno)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    try {

      const emailResponse = await axios.get(`http://localhost:3000/users?email=${state.email}`);
      if (emailResponse.data.length > 0) {
        alert("Email already exists. Please choose another one or login.");
        return;
      }

      // If validation passes, submit the data
      const payload = { ...state };
      await axios.post("http://localhost:3000/users", payload);
      alert("Signup successful!");
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong while submitting the form.");
    }
  };

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>SIGN UP</h2>

        <label htmlFor="username">USER NAME:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter the Username"
          value={state.username}
          onChange={handleChange}
        />

        <label htmlFor="password">SET PASSWORD:</label>
        <input
          type="password"
          name="password"
          placeholder="Set the password"
          value={state.password}
          onChange={handleChange}
        />

        <label htmlFor="email">EMAIL:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter the email"
          value={state.email}
          onChange={handleChange}
        />

        <label htmlFor="DOB">DATE OF BIRTH:</label>
        <input
          type="date"
          name="DOB"
          value={state.DOB}
          onChange={handleChange}
        />

        <div className="gender-options">
          <label className="gender-title">GENDER:</label>
          <div className="gender-option">
            <label htmlFor="male">MALE</label>
            <input
              type="radio"
              name="gender"
              value="MALE"
              id="male"
              checked={state.gender === "MALE"}
              onChange={handleChange}
            />
          </div>

          <div className="gender-option">
            <label htmlFor="female">FEMALE</label>
            <input
              type="radio"
              name="gender"
              value="FEMALE"
              id="female"
              checked={state.gender === "FEMALE"}
              onChange={handleChange}
            />
          </div>
        </div>

        <label htmlFor="phno">PHONE NO:</label>
        <input
          type="tel"
          name="phno"
          placeholder="Enter the phone number"
          value={state.phno}
          onChange={handleChange}
        />

        <div className="loginSignUp-agree">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={state.agree}
            onChange={handleChange}
          />
          <label htmlFor="agree">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>

        <button type="submit">Continue</button>

        <p className="loginSignUp">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

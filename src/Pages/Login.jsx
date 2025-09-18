import React, { useState } from "react";
import axios from "axios";
import './CSS/Login.css';

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { username, password, email } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!usernameRegex.test(username)) {
      alert("Username should contain only alphabets.");
      return;
    }

    if (password.length < 8) {
      alert("Password should be at least 8 characters long.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/users?username=${username}`);

      if (response.data.length === 0) {
        alert("User not found. Please sign up.");
        return;
      }

      const user = response.data[0];

      if (user.password !== password || user.email !== email) {
        alert("Incorrect password or email. Please try again.");
        return;
      }

      alert("Login Successful!");

    } catch (err) {
      console.error(err);
      alert("Error during login. Please try again.");
    }
  };

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>LOGIN</h2>

        <label htmlFor="username">USER NAME:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter the Username"
          value={username}
          onChange={handleChange}
        />

        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter the password"
          value={password}
          onChange={handleChange}
        />

        <label htmlFor="email">EMAIL:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter the email"
          value={email}
          onChange={handleChange}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Login;

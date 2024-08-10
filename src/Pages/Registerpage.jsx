import React, { useState } from 'react';
import '../css/Register.css';
import { Link, useNavigate} from 'react-router-dom';

export default function RegisterPage() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/");
  }

  return (
    <div id="registration-container">
      <form id="registration-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div id="forms-group">
          <label htmlFor="name">Your Name:</label>
          <input
            name="name"
            type="text"
            id="name"
            value={input.name}
            onChange={(e)=> setInput({...input,[e.target.name]: e.target.value})}
            required
          />
        </div>
        <div id="forms-group">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            id="email"
            value={input.email}
            onChange={(e)=> setInput({...input,[e.target.name]: e.target.value})}
            required
          />
        </div>
        <div id="forms-group">
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            id="password"
            value={input.password}
            onChange={(e)=> setInput({...input,[e.target.name]: e.target.value})}
            required
          />
        </div>
        <button type="submit" id="register-button">Register</button>
        <div id="login-link">
        <p>Already have an account? <Link to="/">Login here</Link></p>
      </div>
      </form>

    </div>
  );
}
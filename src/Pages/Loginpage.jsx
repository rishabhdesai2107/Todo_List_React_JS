import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../css/Login.css';

export default function Loginpage() {
  const [input, setInput] = useState({
    email:'',
    password:''
  });


  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(
      input.email === loggeduser.email && input.password === loggeduser.password
    ){
      navigate("/TodoListpage");
      localStorage.setItem("loggedin",true);
    }
    else{
      alert("Wrong Email or Password entered");
    }
  };

  return (
    <div id="login-container">
      <form id="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div id="form-group">
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
        <div id="form-group">
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
        <button type="submit" id="login-button">Login</button>
        <div id="register-link">
        <p>Don't have an account? <Link to="/Registerpage">Register here</Link></p>
      </div>
      </form>

    </div>
  );
}
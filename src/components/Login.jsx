import React from "react";
import "../styles/componentsStyles/login.css";

const Login = () => {
  return (
    <div className="form-container">
      <form className="form">
      <h1>Login</h1>
        <label htmlFor="email ">Email</label> <br />
        <input type="email" id="email" name="email" placeholder="email" className="form-input" /> <br />
        <label htmlFor="password">Password</label> <br />
        <input type="password" id="password" name="password" placeholder="password" className="form-input" /><br />
        <button type="submit" className="form-btn">LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
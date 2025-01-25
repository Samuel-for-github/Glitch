import React from "react";
import "../styles/componentsStyles/signup.css";

const Signup = () => {
  return (
    <div className="Sform-container">
      <form className="form">
      <h1>Create Account</h1>
        <label htmlFor="email ">Email</label> <br />
        <input type="email" id="email" name="email" placeholder="email" className="Sform-input" /> <br />
        <label htmlFor="password">Password</label> <br />
        <input type="password" id="password" name="password" placeholder="password" className="Sform-input" /><br />
        <button type="submit" className="Sform-btn">GET STARTED</button>
      </form>
    </div>
  );
}

export default Signup;
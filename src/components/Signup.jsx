import React, {useContext} from "react";
import "../styles/componentsStyles/signup.css";
import loginContext from "../context/LoginContext.js";
import {IoArrowBackCircleOutline} from "react-icons/io5";

const Signup = () => {
    const {setAllowLogin, setAllowSignup} = useContext(loginContext)
  return (
    <div className="Sform-container">
        <form className="Sform">
            <div>
                <IoArrowBackCircleOutline style={{left: 500, position: "absolute"}} size={34}
                                          onClick={() => setAllowSignup(false)}/>
            </div>
            <h1 className="sh1">Create Account</h1>
            <label htmlFor="email ">Email</label> <br/>
            <input type="email" id="email" name="email" placeholder="email" className="Sform-input"/> <br/>
            <label htmlFor="password">Password</label> <br/>
            <input type="password" id="password" name="password" placeholder="password" className="Sform-input"/><br/>
            <button type="submit" className="Sform-btn">GET STARTED</button>
            <p style={{color: 'black', display:'inline'}}>Already have an account?</p><a className="logina" onClick={()=>{
            setAllowLogin(true)
            setAllowSignup(false)
        }}>Login</a>
        </form>
    </div>
  );
}

export default Signup;
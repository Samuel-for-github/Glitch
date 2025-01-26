import React, {useContext} from "react";
import "../styles/componentsStyles/login.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import loginContext from "../context/LoginContext.js";
const Login = () => {
    const {setAllowLogin, setAllowSignup} = useContext(loginContext)
  return (
    <div className="form-container">
        <form className="form">
            <div>
        <IoArrowBackCircleOutline style={{left: 500, position:"absolute"}} size={34} onClick={()=>setAllowLogin(false)}  />
            </div>
            <span className="space"></span>
            <h1 className="fh1">Login</h1>
            <label htmlFor="email ">Email</label> <br/>
            <input type="email" id="email" name="email" placeholder="email" className="form-input"/> <br/>
            <label htmlFor="password">Password</label> <br/>
            <input type="password" id="password" name="password" placeholder="password" className="form-input"/><br/>
            <button type="submit" className="form-btn">LOGIN</button>
            <p style={{color: 'black',display:'inline'}}>Don't have an account?</p><a className="signupa" onClick={()=>{
                setAllowLogin(false)
                setAllowSignup(true)
        }}>Sign Up</a>
        </form>
    </div>
  );
}

export default Login;
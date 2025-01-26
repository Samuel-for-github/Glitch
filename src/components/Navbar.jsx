import React, {useContext} from 'react';
import logo from '../assets/logo.png'
import '../styles/componentsStyles/navbar.css'
import loginContext from "../context/LoginContext.js";
import {useNavigate} from "react-router-dom";
const Navbar = () => {
    const {setAllowLogin} = useContext(loginContext)
    const navigate = useNavigate();
    const company = ()=>{
        navigate("/company")
    }
    const colleges = ()=>{
        navigate("/colleges")
    }
    return (
        <nav className="nav">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul className="list">
                <li><a href="/">Home</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">About Us</a></li>
                <li><a onClick={colleges} style={{cursor: "pointer"}}>Colleges</a></li>
                <li><a onClick={company} style={{cursor: "pointer"}}>Companies</a></li>
            </ul>
            <div className="login">
                <button onClick={()=>setAllowLogin(true)}>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
import React, {useContext} from 'react';
import logo from '../assets/logo.png'
import '../styles/componentsStyles/navbar.css'

import {useNavigate} from "react-router-dom";
import loginContext from "../context/LoginContext.js";
const Navbar = () => {
    const {setAllowLogin} = useContext(loginContext)
    return (
        <nav className="nav">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul className="list">
                <li><a href="">Home</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Colleges</a></li>
                <li><a href="">Companies</a></li>
            </ul>
            <div className="login">
                <button onClick={()=>setAllowLogin(true)}>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
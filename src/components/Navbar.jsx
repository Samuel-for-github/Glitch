import React from 'react';
import logo from '../assets/logo.png'
import '../styles/componentsStyles/navbar.css'

const Navbar = () => {
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
                <button>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
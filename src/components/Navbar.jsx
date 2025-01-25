import React from 'react';
import '../styles/componentsStyles/navbar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <p>Logo</p>
            </div>
            <ul className="list">
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Colleges</li>
                <li>Companies</li>
            </ul>
            <div>
                <p>Login</p>
            </div>
        </nav>
    );
};

export default Navbar;
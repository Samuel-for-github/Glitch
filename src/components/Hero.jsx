import React, {useContext} from 'react';
import '../styles/componentsStyles/hero.css'
import img1 from "../assets/images/img1.png"
import img2 from "../assets/images/img2.png"
import img3 from "../assets/images/img3.png"
import img4 from "../assets/images/img4.png"
import Navbar from "./Navbar.jsx";
import loginContext from "../context/LoginContext.js";

const Hero = () => {

    return (
        <main>
        <div className="container">
            <div className="main-box">
                <div className="mainText">
                    <h1>Your Gateway to
                        <br/>
                        Seamless Campus <span style={{color: "#C3FF00"}}>Hiring</span></h1>
                    <h2 className="subtext">Bridge the gap between talent and opportunity with a virtual campus
                        recruitment solution that
                        transforms hiring for institutions and organizations.
                    </h2>
                </div>

                <div className="btn-box">
                    <button className="btn">Get Started</button>
                </div>
            </div>
            <div className="right-box">
                <img style={{position: "absolute", top: 100, right: 250}} src={img1} alt="img1"/>
                <img style={{position: "absolute", right: 500, top: 200}} src={img2} alt="img1"/>
                <img style={{position: "absolute", right: 0, top: 200}} src={img3} alt="img1"/>
                <img style={{position: "absolute", top: 700, right: 250}} src={img4} alt="img1"/>
            </div>
        </div>
        </main>
    );
};

export default Hero;
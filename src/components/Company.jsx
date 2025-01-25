import React from "react";
import "../styles/componentsStyles/company.css";

const Company = () => {
    return (
        <>
            <div className="company">
                <div>
                    <h1>Digitalize Your Campus <span className="yellow">Placements</span></h1>
                    <p>Seamless campus Placements Automation, perfected for <br /> universities across the globe</p>
                    <button className="button-s">Get Started</button>
                </div>
                <div>
                    <h1>
                        UNIVERSITIES
                    </h1>
                    <p>trusted by 500++ leading colleges</p>
                    <p>across india</p>
                </div>
                <div className="grid">
                    <div className="box">1</div>
                    <div className="box">2</div>
                    <div className="box">3</div>
                    <div className="box">4</div>
                    <div className="box">5</div>
                    <div className="box">6</div>
                </div>
            </div>
        </>
    );
}

export default Company;
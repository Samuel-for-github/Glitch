import React from "react";
import "../styles/componentsStyles/college.css";
const Colleges = () => {
    return (
        <>
            <div className="f-container">
            <div className="fcontainer">
               <h2 id="heading1">
                Streamline Infrastructure For 
                </h2><br /> 
                <h2 id="heading2">
                Campus <span className="yellow">Placements</span>
                </h2>
                <p>
                Empowering organizations of every size, from <br /> innovative startups to global brands, to manage their entire hiring process <br />from applications to offers-on one powerful Platform
                </p> 
                <button type="button" className="fbutton"> Get Started</button>
            </div>

            <div className="flex-container">
                <div>
                    <p>
                       <span> 4.09 lackhs </span><br /> campus offers
                    </p>
                </div>
                <div>
                    <p>
                        <span>5.06 lackhs</span> <br /> online interviews
                    </p>
                </div>
                <div>
                    <p>
                        <span>2.51 million</span> <br /> applications
                    </p>
                </div>
                <div>
                    <p>
                        <span>20000+</span> <br /> job postings
                    </p>
                </div>
                <div>
                    <p>
                       <span>40000+</span> <br /> companies regustered
                    </p>
                </div>
               
            </div>

            <div className="grid-container">
                <div>
                    1
                </div>
                <div>
                   2
                </div>
                <div>
                    3
                </div>
                <div>
                    4
                </div>
                <div>
                    5
                </div>
                <div>
                   6
                </div>
                <div>
                    7
                </div>
                <div>
                    8
                </div>
                <div>
                    9
                </div>
            </div>
            </div>
        </>
    );
}

export default Colleges;
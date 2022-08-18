import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Brief = () => {

    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1000" className="brief-container">
            <div className="brief-text">
                <p className="brief-welcome">Welcome!</p>
                <h1 className="brief-name">Ahmed Ahmed</h1>
                <p className="brief-desc">I am a software developer that focusses on learning new technologies and topics and finding creative ways to display them.</p>
            </div>    
        </div>
    )
}

export default Brief;
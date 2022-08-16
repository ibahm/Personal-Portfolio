import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const NavBar = () => {
    useEffect(() => {
        Aos.init({once: true});
    }, []);

    return (
        <div className="nav-container">
            <ul>
                <li className="about" data-aos="fade-down" data-aos-duration="1000"><a href="#About">About</a></li>
                <li className="projects" data-aos="fade-down" data-aos-duration="1200"><a href="#">Projects</a></li>
                <li className="contact" data-aos="fade-down" data-aos-duration="1300"><a href="#">Contact</a></li>
                <li><div data-aos="fade-down" data-aos-duration="1400"><button className="nav-resume">Resume</button></div></li>
            </ul>
        </div>
    )
}

export default NavBar;
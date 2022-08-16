import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const NavBar = () => {

    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <div className="nav-container">
            <ul>
                <li className="about" data-aos="fade-down" data-aos-duration="1000"><a href="#">About</a></li>
                <li className="projects" data-aos="fade-down" data-aos-duration="1200"><a href="#">Projects</a></li>
                <li className="contact" data-aos="fade-down" data-aos-duration="1300"><a href="#">Contact</a></li>
                <li><button className="nav-resume" data-aos="fade-down" data-aos-duration="1400">Resume</button></li>
            </ul>
        </div>
    )
}

export default NavBar;
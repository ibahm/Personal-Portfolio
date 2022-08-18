import React, {useEffect} from "react";
import {Link} from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiChevronUp } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

const NavBar = () => {
    useEffect(() => {
        Aos.init({once: true});
    }, []);

    return (
        <div className="nav-container">
            <div data-aos="fade-right" data-aos-duration="800">
                <a href="https://github.com/ibahm" target="_blank" rel="noopener noreferrer">
                    <VscGithubAlt className="nav-github"/>
                </a>
            </div>    
            <ul>
                <li className="about" data-aos="fade-down" data-aos-duration="1000">
                    <Link to="about-container" spy={true} smooth={true} offset={-200} duration={500}>
                        <p>About</p>
                    </Link>    
                </li>
                <li className="projects" data-aos="fade-down" data-aos-duration="1200">
                    <Link to="projectlist-container" spy={true} smooth={true} offset={-200} duration={500}>
                        <p>Projects</p>
                    </Link>
                </li>
                <li className="contact" data-aos="fade-down" data-aos-duration="1300">
                    <Link to="contact-container" spy={true} smooth={true} offset={-200} duration={500}>
                        <p>Contact</p>
                    </Link>
                </li>
                <li>
                    <div data-aos="fade-down" data-aos-duration="1400">
                        <button className="nav-resume">CV</button>
                    </div>
                </li>
            </ul>
            <div data-aos="fade-left" data-aos-duration="1600">
                <Link to="brief-container" spy={true} smooth={true} offset={-350} duration={500}>
                    <FiChevronUp className="nav-top"/>
                </Link>  
            </div>
        </div>
    )
}

export default NavBar;
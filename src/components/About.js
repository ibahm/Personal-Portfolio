import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({once: true});
    }, []);

    return (
        <div data-aos="zoom-in-down" data-aos-duration="1000" className="about-container">
            <div className="about-text">
                <h1 className="about-name">About Me</h1>
                <p className="about-desc1">I am a software enthusiast that loves to learn topics and displaying my newly found skills through projects.
                 My love for programming began from my very first website in 2014 where I discovered the intricacy of <span>CSS</span>. Wanting to learn how to improve UI elements 
                 outside of CSS' reach, I discovered <span>JavaScript</span>.</p>
                 <p className="about-desc2">Throughout my time at university, I had taken part in a multitude of projects demonstrating my understanding of <span>Java</span> through projects including
                 <span> traversing a Finch Robot</span> and a <span>login and register page via Android studio</span> but through personal projects and online tests, I was able to maintain a growing 
                 understanding of JavaScript. I am always in pursuit of a challenge.</p>
            </div>
        </div>
    )
}

export default About;
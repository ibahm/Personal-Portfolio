import React, {useEffect} from "react";
import Project from "./Project";
import Aos from "aos";
import "aos/dist/aos.css";

const projects = [
    {head: "Personal Portfolio", text: "A web application designed to display my knowledge of UI/UX designs.", link: "https://github.com/ibahm/Personal-Portfolio", lang1: "React.js", lang2: "html", lang3:"css"},
    {head: "Shopping Cart", text: "A two page web application that demonstrates how to use Context API in React through a cart system.", link: "https://github.com/ibahm/Shopping-Cart-ContextAPI", lang1: "React.js", lang2: "html", lang3:"css"},
    {head: "Loop Walker", text: "A visual algorithm displaying the path taken from an array of directions using the p5 frameworks.", link: "https://github.com/ibahm/Loop-Walker", lang1: "p5.js", lang2: "algorithms", lang3:""},
]

const ProjectList = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    
    return (
        <div className="projectlist-container">
            <div className="projectlist-grid" data-aos="fade-down" data-aos-duration="1000">
                {projects.map(item => (
                    <Project head={item.head} text={item.text} link={item.link} lang1={item.lang1} lang2={item.lang2} lang3={item.lang3}/>
                ))}
            </div>
        </div>    
    )
}

export default ProjectList;
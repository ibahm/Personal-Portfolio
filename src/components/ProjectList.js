import React, {useEffect} from "react";
import Project from "./Project";

const projects = [
    {
        head: "Personal Portfolio", 
        text: "A web application designed to display my knowledge of UI/UX designs with relative information about myself available.", 
        link: "https://github.com/ibahm/Personal-Portfolio", 
        lang1: "react.js", lang2: "animation", lang3:"css",
        anim: "1000"
    },
    {
        head: "Shopping Cart", text: "A two page web application that demonstrates how to use Context API in React through a cart system.", 
        link: "https://github.com/ibahm/Shopping-Cart-ContextAPI", 
        lang1: "react.js", lang2: "html", lang3:"css",
        anim: "1400"
    },
    {
        head: "Loop Walker", 
        text: "A visual algorithm displaying the path taken from an array of directions using the p5 frameworks.", 
        link: "https://github.com/ibahm/Loop-Walker", 
        lang1: "p5.js", lang2: "algorithms", lang3:"",
        anim: "1800"
    },
    {
        head: "Track Your Spending", 
        text: "A web application that allows you to track your financial activity by seeing your income and expenses with your total difference shown to you.", 
        link: "https://github.com/ibahm/Track-Your-Spending", 
        lang1: "react.js", lang2: "context api", lang3:"app reducer",
        anim: "2200"
    }
]

const ProjectList = () => {
    return (
        <div className="projectlist-container">
            <div className="projectlist-grid">
                {projects.map(item => (
                    <Project head={item.head} text={item.text} link={item.link} lang1={item.lang1} lang2={item.lang2} lang3={item.lang3} anim={item.anim}/>
                ))}
            </div>
        </div>    
    )
}

export default ProjectList;
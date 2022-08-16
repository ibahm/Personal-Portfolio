import React, {useEffect} from "react";
import { FiExternalLink } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({head, text, link, lang1, lang2, lang3}) => {

    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <div className="project-container">
            <div className="project-header">
                <h3>{head}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer" ><FiExternalLink className="project-link"/></a>
            </div>
            <div className="project-text">
                <p>{text}</p>
                <div className="project-footer">
                    <span>{lang1}</span>
                    <span>{lang2}</span>
                    <span>{lang3}</span>
                </div>
            </div>
        </div>
    )
}

export default Project;
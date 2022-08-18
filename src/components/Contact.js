import React from "react";
import {MdOutlineEmail} from "react-icons/md";

const Contact = () => {
    return (
        <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
            <div className="contact-container">
                <h1 className="contact-name">Contact Me</h1>
                <p className="contact-text">Feel free to send an email for any opportunity that would benefit us both.</p>
                <a href="mailto:ahmed.ibraahm@gmail.com" className="contact-email"><MdOutlineEmail/></a>
            </div>
        </div>    
    )
}

export default Contact;
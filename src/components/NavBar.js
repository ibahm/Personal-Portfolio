import React from "react";

const NavBar = () => {
    return (
        <div className="nav-container">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><button className="nav-resume">Resume</button></li>
            </ul>
        </div>
    )
}

export default NavBar;
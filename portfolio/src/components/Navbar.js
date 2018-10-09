import React from "react";

const Navbar = () =>

    <nav>
        <div className="nav-wrapper grey darken-1 nunito">
            <a href="/" className="brand-logo center">Logo</a>
            <ul> 
                <li><a href="/"><strong>About</strong></a></li>
                <li><a href="projects"><strong>Projects</strong></a></li>
                <li><a href="skills"><strong>Skills</strong></a></li> 
        </ul>  
        </div>
    </nav>



export default Navbar;

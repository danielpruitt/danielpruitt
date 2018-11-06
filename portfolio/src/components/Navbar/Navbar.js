import React from "react";
import "./Navbar.css";

export const Navbar = () =>
    <div className="navbar-fixed ">
        <nav>
            <div className="nav-wrapper grey white custFont">
                <a href="/" className="brand-logo center light-blue-text text-darken-1"><strong>Daniel Pruitt </strong></a>
                {/* <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
                <ul id="nav-moblile" className="left hide-on-med-and-down ">
                    <li ><a href="/"><strong className="light-blue-text text-darken-1">About</strong></a></li>
                    <li><a href="portfolio"><strong className="light-blue-text text-darken-1">Projects</strong></a></li>
                    <li><a href="skills"><strong className="light-blue-text text-darken-1">Skills</strong></a></li>
                </ul>
            </div>
        </nav>

        {/* <ul className="sidenav" id="mobile-demo">
            <li><a href="/">About</a></li>
            <li><a href="portfolio">Projects</a></li>
            <li><a href="skills">Skills</a></li>
            
        </ul> */}

    </div>


export default Navbar;

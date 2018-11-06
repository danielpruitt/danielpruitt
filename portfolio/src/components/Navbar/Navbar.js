import React from "react";

export const Navbar = () =>
    <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper grey darken-1 nunito">
                <a href="/" className="brand-logo center">Daniel Pruitt</a>
                {/* <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
                <ul id="nav-moblile" className="left hide-on-med-and-down">
                    <li><a href="/"><strong>About</strong></a></li>
                    <li><a href="portfolio"><strong>Projects</strong></a></li>
                    <li><a href="skills"><strong>Skills</strong></a></li>
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

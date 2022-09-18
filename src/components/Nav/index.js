import React from "react";

function Nav(){

    return(
        <div className="Nav">
            <ul style={{listStyleType:"none"}}>
                <li className="mx-2">
                    <a href='#about'>
                        About Me
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li className="mx-2">
                    <a href="contact">
                        Contact
                    </a>
                </li>
                <li className="mx-2">
                    <a href="Resume">
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
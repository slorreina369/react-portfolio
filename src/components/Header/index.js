import React from "react";

function Header(){
    return(
        <header className="flex-row px-1">
            <h2>
                <a data-testid='link' href='/'>
                    Lore Space
                </a>
            </h2>
            <nav>
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
            </nav>
        </header>
    );
};

export default Header;
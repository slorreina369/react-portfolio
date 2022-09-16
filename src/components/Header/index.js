import React from "react";

function Header(){
    return(
        <header>
            <h2>
                <a data-testid='link' href='/'>
                    Lore Space
                </a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a href='#about'>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="contact">
                            Contact
                        </a>
                    </li>
                    <li>
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
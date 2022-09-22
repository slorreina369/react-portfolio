import React from "react";

function Nav(props){
    const{
        currentPage,
        setCurrentPage
    } = props;

    return(
        <div className="Nav">
            <ul className="navList" style={{listStyleType:"none"}}>
                <li>
                    <a href='#about' onClick={() => setCurrentPage('aboutMe')} className={`mx-2 navLink ${(currentPage === 'aboutMe') && 'navActive'}`}>
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => setCurrentPage('portfolio')} className={`mx-2 navLink ${(currentPage === 'portfolio') && 'navActive'}`}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={() =>setCurrentPage('contact')} className={`mx-2 navLink ${(currentPage === 'contact') && 'navActive'}`}>
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#resume" onClick={() => setCurrentPage('resume')} className={`mx-2 navLink ${(currentPage === 'resume') && 'navActive'}`}>
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
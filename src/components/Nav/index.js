import React from "react";

function Nav(props){
    const{
        currentPage,
        setCurrentPage
    } = props;

    return(
        <div className="Nav">
            <ul style={{listStyleType:"none"}}>
                <li className="mx-2">
                    <a href='#about' onClick={() => setCurrentPage('aboutMe')}>
                        About Me
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio" onClick={() => setCurrentPage('portfolio')}>
                        Portfolio
                    </a>
                </li>
                <li className={`mx-2 ${currentPage && 'navActive'}`}>
                    <span onClick={() =>setCurrentPage('contact')}>Contact</span>
                </li>
                <li className="mx-2">
                    <a href="#resume" onClick={() => setCurrentPage('resume')}>
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
import React from "react";
import Nav from "../Nav";

function Header(props){
    const{
        currentPage,
        setCurrentPage
    } = props;
    
    return(
        <header className="flex-row px-1">
            <h2>
                <a href='/'>
                    Lore Space
                </a>
            </h2>
            <Nav
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            ></Nav>
        </header>
    );
};

export default Header;
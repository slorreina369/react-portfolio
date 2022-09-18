import React from "react";
import LogoGit from '../../assets/logo/LogoGit.png';
import LogoLink from '../../assets/logo/LogoLink.png';

function Footer(){
    return(
        <footer>
            <div>
                <h2>Reach out and learn more</h2>
                <a href="https://github.com/slorreina369"><img src={LogoGit} alt="Github logo" /></a>

                <a href="https://www.linkedin.com/in/lorreina-guyett-261babb2/"><img src={LogoLink} alt="LinkedIn logo" /></a>
            </div>
        </footer>
    )
};

export default Footer
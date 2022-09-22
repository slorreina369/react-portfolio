import React from "react";
import LogoGit from '../../assets/logo/LogoGit.png';
import LogoLink from '../../assets/logo/LogoLink.png';
import LogoTweet from '../../assets/logo/twitterLogo.png';

function Footer(){
    return(
        <footer>
            <div>
                <h2>Reach out and learn more</h2>
                <a className="footerLogo" href="https://github.com/slorreina369"><img src={LogoGit} alt="Github logo" /></a>

                <a className="footerLogo" href="https://www.linkedin.com/in/lorreina-guyett-261babb2/"><img src={LogoLink} alt="LinkedIn logo" /></a>
                
                <a className="footLogo" href="https://twitter.com/LorreinaG"><img src={LogoTweet} alt="TwitterLogo"/></a>
            </div>
        </footer>
    )
};

export default Footer
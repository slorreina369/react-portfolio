import React from "react";
import ResumeFile from '../../assets/project/Resume.pdf';
function Resume(){

    return(
        <section className="resume">
            <div>
                <h1>Resume</h1>
                <h2>Lorreina Guyett</h2>
                <p>714-585-9510 <br/>
                slorrein369@gmail.com</p>
            </div>
            Download my <a href={ResumeFile}>Resume</a>
        </section>
    )
};

export default Resume;
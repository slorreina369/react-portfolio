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
            <ul>
                <p>Front-End</p>
                <li>HTML</li>
                <li>CSS</li>
                <li>JQuery</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React</li>
            </ul>
            <ul>
                <p>Back-end</p>
                <li>APIs</li>
                <li>Express</li>
                <li>Node</li>
                <li>MySQL, Sequelize</li>
                <li>GraphQL</li>
            </ul>
        </section>
    )
};

export default Resume;
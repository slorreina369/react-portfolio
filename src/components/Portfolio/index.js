import React, { useState } from "react";
import Project from "../Project";

function Portfolio(){
    const [projects] = useState([
        {
            url:'https://slorreina369.github.io/cocktail-day/',
            img:require('../../assets/project/daily-cocktail.jpg')
        },
        {
            url:'https://slorreina369.github.io/run-buddy/',
            img:require('../../assets/project/run-buddy.jpg')
        },
        {
            url:'#',
            img:require('../../assets/project/calculations.jpg')
        },
        {
            url:'#',
            img:require('../../assets/project/oreo.jpeg')
        },
        {
            url:'#',
            img:require('../../assets/project/pastel-puzzle.jpg')
        },
        {
            url:'#',
            img:require('../../assets/project/surfing.jpg')
        }
    ]);

    return(
        <section>
            <h1>Portfolio</h1>
            <div>
                <ul className="projectList">
                    {projects.map((project) => (
                        <Project project={project}></Project>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;
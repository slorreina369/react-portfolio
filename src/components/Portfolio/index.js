import React, { useState } from "react";
import Project from "../Project";

function Portfolio(){
    const [projects] = useState([
        {
            name:'Daily Cocktail',
            url:'https://slorreina369.github.io/cocktail-day/',
            img:require('../../assets/project/daily-cocktail.jpg')
        },
        {
            name:'Run Buddy',
            url:'https://slorreina369.github.io/run-buddy/',
            img:require('../../assets/project/run-buddy.jpg')
        },
        {
            name:'Variables',
            url:'#',
            img:require('../../assets/project/variable.jpg')
        },
        {
            name:'Calc',
            url:'#',
            img:require('../../assets/project/calculations.jpg')
        },
        {
            name:'Pastel Puzzle',
            url:'#',
            img:require('../../assets/project/pastel-puzzle.jpg')
        },
        {
            name:'Surf and Turf',
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
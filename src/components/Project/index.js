import React from "react";

function Project({project}){
    return(
        <li>
            <a href={project.url}>
            <img className="projectImg" src={project.img}/> 
            <p>{project.name}</p>
            </a>
        </li>

    )
};

export default Project;
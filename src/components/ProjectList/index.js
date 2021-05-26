import React, { useState } from 'react'

function ProjectList() {

    const [projects] = useState([
        {
            name: 'Pantree',
            category: 'web app',
            image: '0.jpg',
            github: 'git@github.com:Silverlin19/Pantree2.0.git',
            live: 'https://silverlin19.github.io/Pantree2.0/'
        },
        
        
        
        {
            name: 'Run Buddy',
            category: 'web app',
            image: 'run-buddy.png',
            github: '',
            live: ''
        },
       

    ])
    return(
            <>
            {projects.map((project, i) => (
                <div className="col-lg-4 col-md-6 mb-4" key={project.name}>
            <div className="project-container">
                <div className="project-details d-flex justify-content-center align-items-center">
                    <ul className="list-unstyled project-list text-center">
                        <li className="project-title">{project.name} </li>
                        <li><a href={project.github} target="_blank" rel="noreferrer"><i className="fab fa-github-alt"></i></a></li>
                        <li><a href={project.live} target="_blank" rel="noreferrer"><i className="fas fa-desktop"></i></a></li>
                    </ul>
                </div>
                <img src={require(`../../assets/images/${project.image}`).default} alt={project.name}  className="img-thumbnail" />
            </div>
            </div>
            ))} 
            </>
        
    )
}

export default ProjectList;

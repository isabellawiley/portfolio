import '../styling/projects.css'
import allProjects from './assets/projects.json';
import ProjectCard from './ProjectCard';

function Projects({logosArr}){
    return(
        <div id='Projects' className='projects'>
            <h1>Projects</h1>
            <div className="projects-container">
                {allProjects.map((project) => {
                    return(<ProjectCard proj={project} key={project.name} logosArr={logosArr}/>)
                })}
            </div>
        </div>
    )
}

export default Projects;
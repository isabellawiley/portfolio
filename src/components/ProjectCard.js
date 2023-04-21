
function ProjectCard({proj, logosArr}){
    const {id, name, summary, links, description, tech} = proj;
    let techstackArr = ['JavaScript', 'React', 'Python', 'Flask', 'CSS', 'HTML', 'Ruby', 'Rails', 'Node.js', 'Redux', 'Bootstrap', 'SQLite', 'Swagger'];

    function fade(side) {    
        let current;
        let other;    
        if(side === 1){
            current = document.querySelector(`#front${id}`);
            other = document.querySelector(`#back${id}`);
        }
        else{
            other = document.querySelector(`#front${id}`);
            current = document.querySelector(`#back${id}`);
        }

        current.classList.add('visually-hidden');
        current.addEventListener('transitionend', function(e) {
            current.classList.add('hidden');
            other.classList.remove('hidden');
            setTimeout(function() {
                other.classList.remove('visually-hidden');
            }, 20);
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }

    return(
        <div className="project-card">
            <div className='project-front' id={`front${id}`}>
                <div className="project-front-content">
                    <span className='more-info' onClick={() => fade(1)}>&#10247;</span>
                    <h2>{name}</h2>
                    <h3>{summary}</h3>
                    <div className="project-stack">
                        {tech.map((stack) => {
                            return <span className="project-tooltip" data-text={techstackArr[stack]}>{logosArr[stack]}</span>
                        })}
                    </div>
                    <div className="project-links">
                        {links.map((link) => {
                            return <a key={link.url} href={link.url} target='_blank' rel="noreferrer"><button>{link.type}</button></a>
                        })}
                    </div>
                </div>
            </div>
            <div className='project-back visually-hidden hidden' id={`back${id}`}>
                <div className="project-back-content">
                    <span className='close' onClick={() => fade(2)}>&times;</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
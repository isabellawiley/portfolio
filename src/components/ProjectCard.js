
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
                            return <a className="card-btn" key={link.url} href={link.url} target='_blank' rel="noreferrer">{link.type}</a>
                        })}
                    </div>
                     {/* READ MORE BUTTON  */}
                    {/* <span className="info-btn" onClick={() => fade(1)}>Read More<svg className="info-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg></span> */}
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
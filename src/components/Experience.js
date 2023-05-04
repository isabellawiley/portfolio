import '../styling/experience.css'
import { ReactComponent as TDALogo} from './logos/tda-logo.svg';
import raccoonLabsLogo from './logos/raccoon-labs-logo.jpg';
import lefrakLogo from './logos/lefrak-logo.png';
import jobs from './assets/jobs.json';
import JobCard from './JobCard';

function Experience(){
    let jobLogos = [raccoonLabsLogo, <TDALogo/>, lefrakLogo];

    return(
        <div id='Experience' className="experience section">
            <svg preserveAspectRatio="none" viewBox="0 1 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
                <path d="M0 0 L50 100 L100 0 Z" fill="#FFFCF4" stroke="#FFFCF4"></path>
            </svg>
            <h1>Experience</h1>
            <div className='jobs-container'>
                {jobs.map((job) => {
                    return(<JobCard key={job.id} job={job} jobLogos={jobLogos}/>)
                })}
            </div>
            <svg preserveAspectRatio="none" viewBox="0 -2 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
                <path d="M0 100 L50 0 L100 100 Z" fill="#FFFCF4" stroke="#FFFCF4"></path>
            </svg>
        </div>
    )
}

export default Experience;
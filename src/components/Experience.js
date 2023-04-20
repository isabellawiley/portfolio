import '../styling/experience.css'
import { ReactComponent as TDALogo} from './logos/tda-logo.svg';
import raccoonLabsLogo from './logos/raccoon-labs-logo.jpg';
import lefrakLogo from './logos/lefrak-logo.png';
import jobs from './assets/jobs.json';
import JobCard from './JobCard';

function Experience(){
    let jobLogos = [raccoonLabsLogo, <TDALogo/>, lefrakLogo];

    return(
        <div id='Experience' className="experience">
            <h1>Experience</h1>
            <div className='jobs-container'>
                {jobs.map((job) => {
                    return(<JobCard key={job.id} job={job} jobLogos={jobLogos}/>)
                })}
            </div>
        </div>
    )
}

export default Experience;
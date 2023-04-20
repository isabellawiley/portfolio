import '../styling/experience.css'
import { ReactComponent as TDALogo} from './logos/tda-logo.svg';
import raccoonLabsLogo from './logos/raccoon-labs-logo.jpg';
import lefrakLogo from './logos/lefrak-logo.png'

function Experience(){

    return(
        <div className="experience">
            <h1>Experience</h1>
            <div className='jobs-container'>
                <div className="job-card">
                    <div className='job-card-inner'>
                        <div className='job-card-front'>
                            <div className='job-card-header'>
                                <img src={raccoonLabsLogo} alt='raccoon labs' />
                                <a href="www.raccoonlabsfx.com" target='_blank'><h2>Raccoon Labs</h2></a>
                            </div>
                            <h3>Lead Full Stack Developer</h3>
                            <p>Remote ~ October 2022 - current</p>
                        </div>
                        <div className='job-card-back'>
                            <p>Replicated existing personal Wix site with ReactJS.
                            Optimized existing user interface designs and implemented custom components that better suited the clients needs.
                            Utilized responsive CSS for all screen sizes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="job-card">
                    <div className='job-card-inner'>
                        <div className='job-card-front'>
                            <div className='job-card-header'>
                                <TDALogo />
                                <h2>TD Ameritrade</h2>
                            </div>
                            <h3>Tech Ops Engineering Intern</h3>
                            <p>Jersey City, NJ ~ Summer 2019, Spring 2020</p>
                        </div>
                        <div className='job-card-back'>
                            <p>Aided in creating a reporting system using Aqua Data Studio, Visual Studio, and Microsoft SSRS to display the privileges of users. 
                            Gained exposure to the Agile SDLC through sprint planning, backlog refinement, and daily standups.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="job-card">
                    <div className='job-card-inner'>
                        <div className='job-card-front'>
                            <div className='job-card-header'>
                                <img src={lefrakLogo} alt='lefrak'/>
                                <h2>Lefrak Realty Operations Group</h2>
                            </div>
                            <h3>IT Service Desk Intern</h3>
                            <p>New York, NY ~ Fall 2018</p>

                        </div>
                        <div className='job-card-back'>
                            <p>Actively created and modified code for documentation retrieval system. 
                            Handled incoming Service Desk phone or incident requests and communicated any issue impacting end users to management.
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
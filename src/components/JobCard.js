import {ReactComponent as ExtLink} from './logos/icons8-external-link.svg';

function JobCard({job, logo}){
    const {id, company, position, locDate, description, link} = job;

    function flip(){
        let card = document.querySelector(`#job${id}`);
        card.classList.toggle('is-flipped');
    }

    return(
        <div className="job-card" id={`job${id}`}>
            <div className='job-card-inner'>
                <div className='job-card-front'>
                    <div className='job-card-header'>
                        {typeof(logo) === "object" ? logo : 
                        <img src={logo} alt={company} />}
                        {link ? 
                        <a href={link} target='_blank' rel="noreferrer"><h2>{company}{<ExtLink/>}</h2></a>
                        :
                        <h2>{company}</h2>}
                        <span className='job-more-info' onClick={() => flip()}>&#10247;</span>
                    </div>
                    <h3>{position}</h3>
                    <p>{locDate}</p>
                </div>
                <div className='job-card-back'>
                    <span className='job-close' onClick={() => flip()}>&times;</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default JobCard;
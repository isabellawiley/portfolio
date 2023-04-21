import '../styling/about.css';
import Education from './Education';
import Skills from './Skills';

function About({logosArr}){

    function reveal(){
        let skills = document.querySelector(".skills-sect");
        let edu = document.querySelector(".edu-sect");
        let arr = [skills, edu];

        arr.forEach((sect) => {
            let windowHeight = window.innerHeight;
            let elementTop = sect.getBoundingClientRect().top;
            let elementVisible = 30;
    
            if(elementTop < windowHeight - elementVisible){
                sect.classList.add("active");
            }
            else{
                sect.classList.remove("active");
            }
        })
    }

    window.addEventListener("scroll", reveal);
    
    return(
        <div id='About' className='about section'>
            <div className="about-sect-1">
                <div className='headshot'>
                    <img src='/images/edited_headshot.jpg' alt='headshot'/>
                </div>
                <div className='blurb'>
                    <h1>Hi there! I'm Isabella.</h1>
                    {/* <h3>I'm a developer passionate about building software that makes a difference.</h3> */}
                    <h3>Passionate software developer looking to make a difference in this great, big world.</h3>
                </div>
            </div>
            <div className='about-sect-2'>
                <Skills logosArr={logosArr}/>
                <Education />
            </div>
        </div>
    )
}

export default About;
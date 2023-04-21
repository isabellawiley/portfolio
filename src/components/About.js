import '../styling/about.css';
import Education from './Education';
import Skills from './Skills';

function About({logosArr}){

    return(
        <div id='About' className='about section'>
            <div className="about-sect-1">
                <div className='headshot'>
                    <img src='/images/edited_headshot.jpg' alt='headshot'/>
                </div>
                <div className='blurb'>
                    <h1>Hi there! I'm Isabella</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
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
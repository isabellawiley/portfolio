import reactLogo from '../icons/reactLogo.png';
import JSlogo from '../icons/js-logo.jpg';
import rubyLogo from '../icons/rubyLogo.png'
import reduxLogo from '../icons/reduxLogo.jpg'
import cssLogo from '../icons/cssLogo.png'
import htmlLogo from '../icons/htmlLogo.png'
import pythonLogo from '../icons/pythonLogo.png'
import railsLogo from '../icons/railsLogo.png'

function Skills(){
    return(
        <div className="skills" id="skills">
            <h1 className="title">&lt;--- skills ---&gt;</h1>
            <div>
                <img class="logo" src={reactLogo} alt="React Logo" />
                <img class="logo" src={JSlogo} alt="JS Logo" />
                <img class="logo" src={rubyLogo} alt="Ruby Logo" />
                <img class="logo" src={reduxLogo} alt="Redux Logo" />
            </div>
            <div>
                <img class="logo" src={cssLogo} alt="CSS Logo" />
                <img class="logo" src={htmlLogo} alt="HTML Logo" />
                <img class="logo" src={pythonLogo} alt="Python Logo" />
                <img class="logo" src={railsLogo} alt="Rails Logo" />
            </div>
        </div>
    );
}

export default Skills;
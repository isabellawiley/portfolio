import { Container, Nav, Navbar } from "react-bootstrap";
import Scroll from "react-scroll";
import initals from '../icons/Initials_icon.png'

function NavBar(){
    // const about = document.querySelector('#about')
    // about.scrollIntoView({behavior: 'smooth', block: 'center'})
    return(
        <div >
            <ul>
                <img className='initials' src={initals} alt="Initials" />
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#resume'>Download Resume</a></li>
            </ul>
            
        </div>
    )
}

export default NavBar;
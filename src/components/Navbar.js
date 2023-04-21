import { useState } from "react";
import '../styling/navbar.css';
import { ReactComponent as Paw} from './logos/paw.svg';

function Navbar(){
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
        let body = document.querySelector('body');
        if(!isActive){
            body.classList.add('fixed-pos')
        }
        else {
            body.classList.remove('fixed-pos')
        }
    }

    return(
        <nav className="navigation">
            <div className="logo">isabella</div>
            <div className={isActive ? 'change' : 'menu'} onClick={() => handleClick()}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className={isActive ? 'navbar expanded' : 'navbar'}>
                <ul>
                    <li><a href="#About" onClick={() => handleClick()}>About</a></li>
                    <li><a href="#Experience" onClick={() => handleClick()}>Experience</a></li>
                    <li><a href="#Projects" onClick={() => handleClick()}>Projects</a></li>
                    {/* <li><a href="#Contact">Contact</a></li> */}
                    <li><a href="#Cats" onClick={() => handleClick()}><Paw/></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
import { useState } from "react";
import '../styling/navbar.css';
import { ReactComponent as Paw} from './logos/paw.svg';

function Navbar(){
    const [isActive, setIsActive] = useState(false);

    return(
        <nav className="navigation">
            <div className="logo">isabella</div>
            <div className={isActive ? 'change' : 'menu'} onClick={() => setIsActive(!isActive)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className={isActive ? 'navbar expanded' : 'navbar'}>
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    {/* <li><a href="#Contact">Contact</a></li> */}
                    <li><a href="#Cats"><Paw/></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
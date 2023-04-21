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

    function handleMenuClick(){
        setIsActive(!isActive);
        let body = document.querySelector('body');
        body.classList.remove('fixed-pos')
    }

    function handleIndicator(){
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (windowScroll / height) * 100;
        document.getElementById('bar').style.width = scrolled + "%";
    }

    
    function handleScroll() {
        const sections = document.querySelectorAll(".section");
        const navLi = document.querySelectorAll(".navbar ul li");
        var current = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 70) {
                current = section.getAttribute("id"); 
            }
        });
            
        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
                li.classList.add("active");
            }
        });
    }

    window.onscroll = function() {
        handleIndicator();
        handleScroll();
    };

    return(
        <div className="header">
            <div className="navigation">
                <div className="logo">isabella</div>
                <div className={isActive ? 'change' : 'menu'} onClick={() => handleClick()}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className={isActive ? 'navbar expanded' : 'navbar'}>
                    <ul>
                        <li className="active About"><a href="#About" onClick={() => handleMenuClick()}>About</a></li>
                        <li className="Experience"><a href="#Experience" onClick={() => handleMenuClick()}>Experience</a></li>
                        <li className="Projects"><a href="#Projects" onClick={() => handleMenuClick()}>Projects</a></li>
                        {/* <li><a href="#Contact">Contact</a></li> */}
                        <li className="Cats"><a href="#Cats" onClick={() => handleMenuClick()}><Paw/></a></li>
                    </ul>
                </div>
            </div>
            <div className="indicator-container">
                <div className="indicator-bar" id='bar'></div>
            </div>
        </div>
    )
}

export default Navbar;
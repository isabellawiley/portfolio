import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

function NavBar(){
    return(
        <div>
            <Navbar sticky="top">
                <Navbar.Brand>isabella</Navbar.Brand>
                <Container>
                    <Nav>
                        <Nav.Link><Link to="about" spy={true}>about</Link></Nav.Link>
                        <Nav.Link><Link to="projects" spy={true}>projects</Link></Nav.Link>
                        <Nav.Link><Link to="contact" spy={true}>contact</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {/* <header className="navbar">
                <nav>
                    <a href="#about"><Link to="about" spy={true}>about</Link></a>
                    <a href="#projects"><Link to="projects" spy={true}>projects</Link></a>
                    <a href="#contact"><Link to="contact" spy={true}>contact</Link></a>

                    
                </nav>
            </header> */}
        </div>
    )
}

export default NavBar;
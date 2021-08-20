import About from "./About";
import Contact from "./Contact";
import Navbar from "./NavBar";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <Navbar /> 
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default App;

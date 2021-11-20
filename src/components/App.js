import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./NavBar";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div>
      <Navbar /> 
      <div class="page">
        <Home />
        <About />
        <Skills />
        <Projects  />
        <Contact  />
      </div>
    </div>
  );
}

export default App;

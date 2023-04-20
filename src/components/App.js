import About from "./About";
import Experience from "./Experience";
import Navbar from "./Navbar";
import Projects from "./Projects";
import { ReactComponent as JSLogo} from "./logos/JSLogo.svg";
import { ReactComponent as ReactLogo } from "./logos/react-logo.svg";
import { ReactComponent as CSSLogo } from "./logos/css-logo.svg";
import { ReactComponent as HtmlLogo } from "./logos/html-logo.svg";
import { ReactComponent as NodejsLogo } from "./logos/nodejs-logo.svg";
import { ReactComponent as PythonLogo } from "./logos/python-logo.svg";
import { ReactComponent as RailsLogo } from "./logos/rails-logo.svg";
import { ReactComponent as ReduxLogo } from "./logos/redux-logo.svg";
import { ReactComponent as RubyLogo } from "./logos/ruby-logo.svg";
import { ReactComponent as SqliteLogo } from "./logos/sqlite-logo.svg";
import { ReactComponent as SwaggerLogo } from "./logos/swagger-logo.svg";
import { ReactComponent as FlaskLogo } from "./logos/flask-logo.svg";
import { ReactComponent as BootstrapLogo } from "./logos/bootstrap-logo.svg";
import Cats from "./Cats";
// import Contact from "./Contact";

function App() {
  let logosArr = [<JSLogo/>, <ReactLogo/>, <PythonLogo/>, <FlaskLogo/>, <CSSLogo/>, <HtmlLogo/>, <RubyLogo />, <RailsLogo/>, <NodejsLogo/>, <ReduxLogo/>, <BootstrapLogo/>, <SqliteLogo/>, <SwaggerLogo/>];
  
  return (
    <div>
      <Navbar />
      <About logosArr={logosArr}/>
      <Experience />
      <Projects logosArr={logosArr}/>
      {/* <Contact /> */}
      <Cats />
    </div>
  );
}

export default App;

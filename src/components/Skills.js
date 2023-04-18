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

function Skills(){

    return(
        <div className="skills-sect">
            <h2>Skills</h2>
            {/* <a href="https://cdnlogo.com/logo/javascript_18196.html"><img src="https://cdn.cdnlogo.com/logos/j/44/javascript.svg"/></a> */}
            <div className="skills-logos">
                <div className="skills-line-1">
                    <JSLogo />
                    <ReactLogo />
                    <PythonLogo />
                    <FlaskLogo />
                    <CSSLogo />
                    <HtmlLogo />
                </div>
                <div className="skills-line-2">
                    <RubyLogo />
                    <RailsLogo />
                    <NodejsLogo />
                    <ReduxLogo />
                </div>
                <div className="skills-line-3">
                    <BootstrapLogo />
                    <SqliteLogo />
                    <SwaggerLogo />
                </div>
                {/* <div className="skills-line-4"></div> */}
            </div>
        </div>
    )
}

export default Skills;

// Languages: JavaScript, Python, Ruby, HTML, CSS, SQL
// Libraries: React.js, Redux, SQLite
// Frameworks: Node.js, Flask, Ruby on Rails, Bootstrap, Swagger
// Miscellaneous: Git, Postman, Active Record, Jira
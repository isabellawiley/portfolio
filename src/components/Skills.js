
function Skills({logosArr}){
    let line1 = logosArr.slice(0,6);
    let line2 = logosArr.slice(6, 10);
    let line3= logosArr.slice(10);

    return(
        <div className="skills-sect">
            <h2>Skills</h2>
            <div className="skills-logos">
                <div className="skills-line-1">
                    {line1.map((logo) => {
                        return logo;
                    })}
                </div>
                <div className="skills-line-2">
                    {line2.map((logo) => {
                        return logo;
                    })}
                </div>
                <div className="skills-line-3">
                    {line3.map((logo) => {
                        return logo;
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;

// Languages: JavaScript, Python, Ruby, HTML, CSS, SQL
// Libraries: React.js, Redux, SQLite
// Frameworks: Node.js, Flask, Ruby on Rails, Bootstrap, Swagger
// Miscellaneous: Git, Postman, Active Record, Jira
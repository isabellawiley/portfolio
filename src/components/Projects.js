import { Button } from "react-bootstrap";

function Projects(){
    return(
        <div className="projects">
            <h1 className='title'>Projects</h1>
            <div className='projectCard'>
                <div className='projectColumns'>
                    <div className='project'>
                        <h3>MngMe</h3>
                        <p>MngMe is a virtual closet application that keeps track of the user’s closets, garments, and laundry.</p>
                    </div>
                </div>
                <div className='projectImageColumns'>
                    <img className='projectImage' src='https://images.unsplash.com/photo-1585914924626-15adac1e6402?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80' alt='mngme'/>
                    <div className='middle'>
                        <a href='https://youtu.be/SOL9EMb3xLo'>Demo</a>  <br/>
                        <a href='https://github.com/isabellawiley/phase-5-project'>GitHub</a>
                    </div>
                </div>
            </div>
            <div className='projectCard'>
                <div className='projectColumns'>
                    <div className='project'>
                        <h3>Marvel-Go</h3>
                        <p>Marvel-Go is a web application game that allows players to collect Marvel character cards.</p>
                    </div>
                </div>
                <div className='projectImageColumns'>
                    <img className='projectImage' src='https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80' alt='marvelgo'/>
                    <div className='middle'>
                        <a href='https://github.com/isabellawiley/phase-4-project-frontend'>GitHub Frontend</a>  <br/>
                        <a href='https://github.com/isabellawiley/phase-4-project-backend'>GitHub Backend</a>
                    </div>
                </div>
            </div>
            <div className='projectCard'>
                <div className='projectColumns'>
                    <div className='project'>
                        <h3>Seasons Eatings</h3>
                        <p>View recipes and produce based on the season.</p>
                    </div>
                </div>
                <div className='projectImageColumns'>
                    <img className='projectImage' src='https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80' alt='seasonseatings'/>
                    <div className='middle'>
                        {/* <Button href='https://github.com/isabellawiley/phase-3-frontend'>Frontend</Button> */}
                        <a href='https://github.com/isabellawiley/phase-3-frontend'>GitHub Frontend</a>  <br/>
                        <a href='https://github.com/esellers25/phase-3-ruby-group-project-rack-react'>GitHub Backend</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
import edited_headshot from '../icons/edited_headshot.jpg'

function About(){
    return(
        <div className='about'>
            {/* <h1>About</h1> */}
            <div className='coolCard'>
                <div className="columns">
                    <img className='headshot' src={edited_headshot} alt='headshot'/>
                </div>
                <div className="columns">
                    <div>
                        <h2 className='description'>
                            Hi, I'm Isabella. I'm a full stack software engineer with a passion for using my skills to help improve the lives of others.
                        </h2>
                    </div>
                </div>
            </div>


            {/* <Card className='resizedCard' transparent>
                <Row>
                    <Col>
                        <div>
                            <Image className='centered' src={edited_headshot} roundedCircle width={200} height={200}/>
                        </div>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Text>
                                Hi
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card> */}
        </div>
    )
}

export default About;
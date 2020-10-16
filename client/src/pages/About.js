import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import YPAbout from '../images/yardPAbout.png'

function About() {
    return (
        <Container>
            <br></br>
            <h2 className="headerAb">About</h2>
            <br></br>
            <Row>
                <Col className="col col-md-8 col-lg-8 col-sm-8">
                    <p>Yard Pal is designed to allow sellers to provide their inventory of items to potential buyers in their local area prior to the buyer showing up. This application will provide a more efficient way of selling items at the comfort of the buyer's home and the user will be interacting with a local seller in their area/neighborhood.</p>
                </Col>
                <Col className="col col-md-4 col-lg-4">
                    <img src={YPAbout} className="rounded-circle webimg" alt="YPImage" />
                </Col>
            </Row>
            <br />
            <h3 className="cntrb">Contributors</h3>
            <br />
            <Row>
                <Col className="col col-md-4 col-lg-4">
                    <div>
                        <p>
                            <img className="grabbedpics" src="https://avatars0.githubusercontent.com/u/64025581?s=460&u=13bdf158911b6527218703f4523b9dd75ec645b6&v=4" alt="ProPicS" />
                        </p>
                        <h4 className="authorN">Suresh Kumar</h4>
                    </div>
                    <br />
                </Col>
                <Col className="col col-md-8 col-lg-8">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <br />
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/s-suresh-kumar">
                            <img className="gitlink" src="https://stagewp.sharethis.com/wp-content/uploads/2018/02/github.png" alt="GitLinkS" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="github.com">
                            <img className="websitelink" src="https://hatfieldmedia.com/wp-content/uploads/2019/05/Hatfield-Website-Circular-Icons1.png" alt="PortS" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="github.com">
                            <img className="linkedinlink" src="https://media.glassdoor.com/sqll/34865/linkedin-squarelogo-1559685522766.png" alt="LinS" />
                        </a>
                    </p>
                </Col>
                <hr />
            </Row>
            <br />
            <Row>
                <Col className="col col-md-8 col-lg-8">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <br />
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/diuguide">
                            <img className="gitlink" src="https://stagewp.sharethis.com/wp-content/uploads/2018/02/github.png" alt="GitLinkE" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://diuguide.github.io/portfolio_react/">
                            <img className="websitelink" src="https://hatfieldmedia.com/wp-content/uploads/2019/05/Hatfield-Website-Circular-Icons1.png" alt="PortE" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/everett-diuguid-583632197/">
                            <img className="linkedinlink" src="https://media.glassdoor.com/sqll/34865/linkedin-squarelogo-1559685522766.png" alt="LinE" />
                        </a>
                    </p>
                </Col>
                <Col className="col col-md-4 col-lg-4">
                    <div>
                        <p>
                            <img className="grabbedpics" src="https://avatars0.githubusercontent.com/u/61917141?s=460&u=022d23bd3cbedcd57e2b51363de5ae72908c5ccd&v=4" alt="ProPicE" />
                        </p>
                        <h4 className="authorN">Everett Diuguid</h4>
                    </div>
                    <br />
                </Col>
                <hr />
            </Row>
            <br />
            <Row>
                <Col className="col col-md-4 col-lg-4">
                    <div>
                        <p>
                            <img className="grabbedpics" src="https://avatars2.githubusercontent.com/u/62404650?s=460&u=5dab2d5149877ee31b59f206474ad31488b09ade&v=4" alt="ProPicT" />
                        </p>
                        <h4 className="authorN">Thad Cole</h4>
                    </div>
                    <br />
                </Col>
                <Col className="col col-md-8 col-lg-8">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <br />
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/thadkingcole">
                            <img className="gitlink" src="https://stagewp.sharethis.com/wp-content/uploads/2018/02/github.png" alt="GitLinkT" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="github.com">
                            <img className="websitelink" src="https://hatfieldmedia.com/wp-content/uploads/2019/05/Hatfield-Website-Circular-Icons1.png" alt="PortT" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="github.com">
                            <img className="linkedinlink" src="https://media.glassdoor.com/sqll/34865/linkedin-squarelogo-1559685522766.png" alt="LinT" />
                        </a>
                    </p>
                </Col>
                <hr />
            </Row>
            <br />
            <Row>
                <Col className="col col-md-8 col-lg-8">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <br />
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/iariyami">
                            <img className="gitlink" src="https://stagewp.sharethis.com/wp-content/uploads/2018/02/github.png" alt="GitLinkI" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="github.com">
                            <img className="websitelink" src="https://hatfieldmedia.com/wp-content/uploads/2019/05/Hatfield-Website-Circular-Icons1.png" alt="PortI" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="github.com">
                            <img className="linkedinlink" src="https://media.glassdoor.com/sqll/34865/linkedin-squarelogo-1559685522766.png" alt="LinI" />
                        </a>
                    </p>
                </Col>
                <Col className="col col-md-4 col-lg-4">
                    <div>
                        <p>
                            <img className="grabbedpics" src="https://avatars2.githubusercontent.com/u/55123034?s=460&u=0798b9290bccdc2abbb945542827544044a19233&v=4" alt="ProPicI" />
                        </p>
                        <h4 className="authorN">Ibrahim Riyami</h4>
                    </div>
                    <br />
                </Col>
                <hr />
            </Row>
        </Container >
    )
}
export default About;
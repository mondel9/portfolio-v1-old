import React, {Component} from 'react';
import Scroll from 'react-scroll'
// import styled from 'styled-components';
import { Card, Row, Col, Image, Button} from 'react-bootstrap';

const Element = Scroll.Element;

class About extends Component {
    render(){
        return(
            <React.Fragment>
                <Row style={{backgroundColor:"#0E0828"}}>
                    <Col sm={1} style={{backgroundColor:"#0E0828"}}></Col>
                    <Col sm={10}> 
                        <Card style={{backgroundColor:"#0E0828", color:"#C7D3DD"}}>
                            <Element id="top" className="element"></Element>
                            <Card.Body>
                                <br/><br/><br/><br/>
                                <Card.Text style={{fontFamily:"PT Mono", color:"#79F3F7"}}>Hello, my name is</Card.Text>    
                                <Card.Text style={{fontSize:"60px", fontWeight:"bold"}}>Monica Del Valle.</Card.Text>
                                <Card.Text style={{fontSize:"50px", color:"#7580AD", fontWeight:"bold"}}>I like to code and solve problems.</Card.Text>
                                <br/>
                                <Button id="resume_button" size="lg" variant="link"
                                    href="https://drive.google.com/file/d/10BpbIvte2-IDpgrjrGPWKvaGlFwkTdPn/view?usp=sharing" target="__blank"
                                    style={{backgroundColor:"#0E0828", borderColor:"#79F3F7", fontFamily:"PT Mono",color:"#79F3F7"}} active>
                                        DOWNLOAD RÉSUMÉ</Button>
                                <br/><br/><br/><br/>
                                <Element id="about" className="element"></Element>
                                <br/><br/>
                                <Card.Text style={{fontFamily:"PT Mono", fontSize:"30px", fontWeight:"bold"}}>ABOUT ME</Card.Text>
                                <Row>
                                    <Col>
                                        <Card.Text style={{color:"#7580AD", lineHeight:"1.8"}}>
                                            I am a full-stack software engineer that designs and develops web applications.
                                            I graduated from the <span style={{color:"#79F3F7"}}>University of Central Florida</span> in 2019 with a Bachelor's degree in 
                                            <span style={{color:"#79F3F7"}}> Computer Science</span>.
                                            I am passionate about using computational techniques to advance the medical field and the healthcare industry, 
                                            as well as creating apps with the latest technologies and enhanced user experience. 
                                        </Card.Text>
                                        <Card.Text style={{color:"#7580AD", lineHeight:"1.8"}}>
                                            Some technologies I have workd with include:<br/>
                                        </Card.Text>
                                        <Row style={{color:"#7580AD", lineHeight:"1.8"}}>
                                            <Col>                                                              
                                                <span style={{color:"#79F3F7"}}>>  </span> Python<br/>
                                                <span style={{color:"#79F3F7"}}>>  </span> R<br/>
                                                <span style={{color:"#79F3F7"}}>>  </span> Java<br/>
                                                <span style={{color:"#79F3F7"}}>>  </span> Node.js<br/>
                                                <span style={{color:"#79F3F7"}}>>  </span> React.js<br/>
                                            </Col>
                                            <Col>
                                                <span style={{color:"#79F3F7"}}>>  </span> MongoDB<br/>
                                                <span style={{color:"#79F3F7"}}>>  </span> AWS Lambda<br/>
                                                <span style={{color:"#79F3F7"}}>>  </span> AWS DynamoDB<br/>
                                                <span style={{color:"#79F3F7"}}>>  </span> Express.js<br/>
                                                <span style={{color:"#79F3F7"}}>>  </span> Keras<br/>
                                            </Col>                    
                                        </Row><br/>
                                        <a href="https://github.com/mondel9" target="__blank">
                                            <Image src={require('./img/GitHub-Mark-Light-32px.png')} 
                                                style={{padding:"9px", width:"45px", height:"45px"}}/>
                                        </a>
                                        <a href="https://www.linkedin.com/in/monica-del-valle-1335b018b/" target="__blank">
                                            <Image src={require('./img/linkedin-32 (1).png')} 
                                                   style={{padding:"9px", width:"45px", height:"45px"}}/>
                                        </a>
                                        <a href="mailto:monica.dvalle17@gmail.com?">
                                            <Image src={require('./img/inbox-8-48.png')}
                                            style={{padding:"9px", width:"45px", height:"45px"}}/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <Image src={require('./img/headshot1.jpg')} fluid style={{padding:"9px", width:"320px", height:"300px"}}/>
                                    </Col>
                                </Row>
                                <hr style={{height:"1px",borderColor:"#79F3F7"}}/>
                            </Card.Body>
                        </Card>
                    </Col>
                <Col sm={1}></Col>
            </Row>
            </React.Fragment>
        );
    }
}

export default About;

import React, {Component} from 'react';
import Scroll from 'react-scroll'
// import styled from 'styled-components';
import { Card, Row, Col} from 'react-bootstrap';

const Element = Scroll.Element;

class Experience extends Component{
    render(){
        return(
            <React.Fragment>
                <Row style={{backgroundColor:"#0E0828"}}>
                    <Col sm={1} style={{backgroundColor:"#0E0828"}}></Col>
                    <Col sm={10}> 
                        <Card style={{backgroundColor:"#0E0828", color:"#C7D3DD", lineHeight:"1.8"}}> 
                            <Card.Body>
                            <Element id="experience" className="element">
                                <br/><br/>
                                <Card.Text style={{fontFamily:"PT Mono",fontSize:"30px", fontWeight:"bold"}}>EXPERIENCE</Card.Text>
                                <Card.Text style={{fontSize:"20px", fontWeight:"bold"}}>
                                    <span style={{fontFamily:"PT Mono", color:"#79F3F7"}}>01. </span>Full-Stack Developer 
                                    <span style={{color:"#79F3F7"}}> - Bookclub Web and Mobile App</span><br/>
                                    <span style={{fontFamily:"PT Mono", fontSize:"1rem", color:"#7580AD", paddingLeft:"48px"}}>Nov 2019 - Present</span>
                                </Card.Text>
                                <Card.Text id="project1" style={{color:"#7580AD", paddingLeft:"48px"}}>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Designed and developed a serverless web app that allows users to create and join bookclubs online <br/>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Primarily used Node.js, React.js, and HTML/CSS for the frontend<br/>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Used AwS Lambda, DynamoDB, and Serverless to create API endpoints and backend functionality <br/>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Mobile app will be implemented with ReactNative<br/>
                                </Card.Text>
                                <Card.Text id="project2" style={{fontSize:"20px", fontWeight:"bold"}}>
                                    <span style={{fontFamily:"PT Mono", color:"#79F3F7"}}>02. </span>Frontend / Backend Developer 
                                    <span style={{color:"#79F3F7"}}> @ Orlando Utilities Commission (OUC)</span><br/>
                                    <span style={{fontFamily:"PT Mono", fontSize:"1rem", color:"#7580AD", paddingLeft:"48px"}}>Jan 2019 - Dec 2019</span>
                                </Card.Text>
                                <Card.Text style={{color:"#7580AD", paddingLeft:"48px"}}>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Worked with 4 engineers and computer scientists to design a sky imager to predict cloud effects on solar farms<br/>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Developed computer vision algorithms in Python to track the Sun's position in an image using weather data<br/>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Designed the user interface using React.js, Bootstrap, and Node.js<br/>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Managed the project's documentation and frequent meetings<br/>
                                </Card.Text>
                            </Element>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={1} style={{backgroundColor:"#0E0828"}}></Col>
                </Row>
                
            </React.Fragment>
        );
    }
}

export default Experience;
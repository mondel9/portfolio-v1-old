import React, {Component} from 'react';
import {Link} from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';

//const ScrollLink = Scroll.ScrollLink

//TODO: Add Home, About, Experience tabs and Resume button 
//      Add home element as scroll to top**
// Color scheme: midnight purple and light blue/green 
// #015249, #77C9D4, #57BC90

class NavBar extends Component {
    render(){
        return(
            <Navbar style={{backgroundColor:"#0E0828", fontFamily:"PT Mono"}} sticky="top" >
                <Navbar.Brand style={{color:"#79F3F7"}} as={Link} href='/' to='/'>MD</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link style={{color:"#7580AD", cursor:"pointer"}} as={Link}
                        activeClass="active"
                        to="top" 
                        spy={true} 
                        smooth={true} 
                        duration={400} 
                        className="element"
                    >HOME</Nav.Link>
                    <Nav.Link style={{color:"#7580AD", cursor:"pointer"}} as={Link}
                        activeClass="active"
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        duration={400} 
                        className="element" 
                    > ABOUT
                    </Nav.Link>
                    <Nav.Link style={{color:"#7580AD", cursor:"pointer"}} as={Link}
                        activeClass="active"
                        to="experience" 
                        spy={true} 
                        smooth={true} 
                        duration={600} 
                        className="element" 
                    > EXPERIENCE
                    </Nav.Link>
                    <Nav.Link style={{color:"#7580AD", cursor:"pointer"}} as={Link}
                        activeClass="active"
                        to="research" 
                        spy={true} 
                        smooth={true} 
                        duration={400} 
                        className="element" 
                    > RESEARCH
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;
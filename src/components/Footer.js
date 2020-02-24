import React, {Component} from 'react';
//import {Link} from 'react-scroll';
import { Navbar} from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar style={{backgroundColor:"#0E0828", fontFamily:"PT Mono"}} sticky="bottom" >
                    <Navbar.Text style={{color:"#79F3F7", textAlign:"center", width:"100%", fontSize:"12px"}}>
                        Designed + Built by Monica Del Valle<br/>
                        &copy; 2020
                    </Navbar.Text>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Footer;
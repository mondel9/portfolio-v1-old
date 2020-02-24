import React, { Component } from 'react';
import NavBar from './components/NavBar'; 
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <React.Fragment>
                    <NavBar />
                    <About />
                    <Experience />
                    <Research />
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;

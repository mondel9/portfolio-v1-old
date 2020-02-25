import React, {Component} from 'react';
import Scroll from 'react-scroll'
// import PDFViewer from 'pdf-viewer-reactjs';
import { Card, Row, Col, Button} from 'react-bootstrap';

const Element = Scroll.Element;

class Research extends Component{
    render(){
        return(
            <React.Fragment>
                <Row style={{backgroundColor:"#0E0828"}}>
                    <Col sm={1} style={{backgroundColor:"#0E0828"}}></Col>
                    <Col sm={10}> 
                        <Card style={{backgroundColor:"#0E0828", color:"#C7D3DD", lineHeight:"1.8"}}> 
                            <Card.Body>
                            <Element id="research" className="element"></Element>
                                <br/><br/>
                                <Card.Text style={{fontFamily:"PT Mono",fontSize:"30px", fontWeight:"bold"}}>PERSONAL RESEARCH PROJECTS</Card.Text>
                                <Card.Text style={{fontSize:"20px", fontWeight:"bold"}}>
                                    <span style={{fontFamily:"PT Mono", color:"#79F3F7"}}>01. </span>MRI-Based Brain Tumor Segmentation 
                                    <span style={{color:"#79F3F7"}}> - Mask R-CNN Adaptation</span><br/>
                                    <span style={{fontFamily:"PT Mono", fontSize:"1rem", color:"#7580AD", paddingLeft:"48px"}}>Oct 2019 - Dec 2019</span>
                                </Card.Text>
                                <Card.Text style={{color:"#7580AD", paddingLeft:"48px"}}>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    PURPOSE: Performance evaluation of an instance segmentation method to segment brain tumors automatically<br/>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Adapted the Facebook AI group <a style={{color:"#79F3F7"}} href="https://github.com/matterport/Mask_RCNN" target="__blank">
                                    Mask R-CNN</a> code to be trained on axial MRI brain scans of 
                                    high-grade and low-grade tumors<br/>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Used the Keras neural network library and a Tensorflow backend<br/>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Data provided by <a style={{color:"#79F3F7"}} href="https://www.med.upenn.edu/sbia/brats2018/data.html" target="__blank">
                                    University of Pennsylvania School of Medicine</a><br/><br/>
                               </Card.Text>
                               <Button id="mri_button" size="lg" variant="link"
                                    href="https://drive.google.com/file/d/1cocqihF2ZJRuBwLcT9VKWfW24aflKNIj/edit?usp=sharing" target="__blank"
                                    style={{backgroundColor:"#0E0828", borderColor:"#79F3F7", fontFamily:"PT Mono",color:"#79F3F7", marginLeft:"48px"}} active>
                                        DOWNLOAD/VIEW PAPER
                               </Button>
                               <br/><br/>
                               <Card.Text style={{fontSize:"20px", fontWeight:"bold"}}>
                                    <span style={{fontFamily:"PT Mono", color:"#79F3F7"}}>02. </span>CHASMplus vs. VEST
                                    <span style={{color:"#79F3F7"}}> - Cancer Driver Identification Tools </span><br/>
                                    <span style={{fontFamily:"PT Mono", fontSize:"1rem", color:"#7580AD", paddingLeft:"48px"}}>Oct 2019 - Dec 2019</span>
                                </Card.Text>
                                <Card.Text style={{color:"#7580AD", paddingLeft:"48px"}}>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    PURPOSE: Comparison of a cancer driver gene identification tool, 
                                    <a style={{color:"#79F3F7"}} href="https://www.sciencedirect.com/science/article/pii/S2405471219301541" target="__blank"> CHASMplus</a>
                                    , and a general missense mutation classifier, 
                                    <a style={{color:"#79F3F7"}} href="https://www.ncbi.nlm.nih.gov/pubmed/23819870" target="__blank"> VEST</a>
                                    , on cancer-specific data<br/>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Used lung and bronchial cancer tumor sample sequencing data from the National Cancer Institute to test the tools<br/>
                                    <span style={{color:"#79F3F7"}}>> </span>
                                    Used the 
                                    <a style={{color:"#79F3F7"}} href="https://opencravat.org/" target="__blank"> OpenCRAVAT </a>
                                    framework to implement the tools<br/>
                                </Card.Text>
                                <Button id="driver_button" size="lg" variant="link"
                                    href="https://drive.google.com/file/d/13mnWTYnAVvDBnTYGy5-juyNZkFO741Xu/view?usp=sharing" target="__blank"
                                    style={{backgroundColor:"#0E0828", borderColor:"#79F3F7", fontFamily:"PT Mono",color:"#79F3F7", marginLeft:"48px"}} active>
                                        DOWNLOAD/VIEW PAPER
                                </Button>
                                <br/><br/>
                            </Card.Body> 
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Research;

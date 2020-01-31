import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Services = () => {
    return (
      <div id="services">
          <div className="headingSection hide" style={{paddingBottom:"20px"}}><h2>Services</h2><div className="underscore"></div></div>
          <div id="containerCard" className="d-flex justify-content-center align-items-center">
            <Card className="shadow hideCard">
              <CardImg width="100%" src="images/frontend.jpg" alt="Card image cap" />
              <CardImgOverlay className="d-flex flex-column justify-content-end align-items-start">
                <img src="images/fronticon.svg" className="card-icon hideTextCard"/>
                <CardTitle className="hideTextCard">Frontend Development</CardTitle>
                <CardText className="hideTextCard">I have experience using plain HTML, CSS, JS or using frameworks such as Vue.js and React</CardText>
              </CardImgOverlay>
            </Card>
            <Card className="shadow hideCard">
              <CardImg width="100%" src="images/backend.jpg" alt="Card image cap" />
              <CardImgOverlay className="d-flex flex-column justify-content-end align-items-start">
                <img src="images/backicon.svg" className="card-icon hideTextCard"/>
                <CardTitle className="hideTextCard">Backend Development</CardTitle>
                <CardText className="hideTextCard">I have experience using various frameworks such as Spring Boot, Django, and Flask</CardText>
              </CardImgOverlay>
            </Card>
          </div>
          <div id="containerCard" className="d-flex justify-content-center align-items-center">
            <Card className="shadow hideCard">
              <CardImg width="100%" src="images/fullstack.jpg" alt="Card image cap" />
              <CardImgOverlay className="d-flex flex-column justify-content-end align-items-start">
                <div className="hideTextCard">
                  <img src="images/backicon.svg" className="card-icon" style={{marginRight:"10px"}}/>
                  <img src="images/fronticon.svg" className="card-icon"/>
                </div>
                <CardTitle className="hideTextCard">Fullstack Development</CardTitle>
                <CardText className="hideTextCard">I have experience developing Frontend and Backend side of the same project</CardText>
              </CardImgOverlay>
            </Card>
            <Card className="shadow hideCard">
              <CardImg width="100%" src="images/data.jpg" alt="Card image cap" />
              <CardImgOverlay className="d-flex flex-column justify-content-end align-items-start">
                <img src="images/dataicon.svg" className="card-icon hideTextCard"/>
                <CardTitle className="hideTextCard">Data Science</CardTitle>
                <CardText className="hideTextCard">I have experience analysing data using Python with scikit-learn and Gensim library</CardText>
              </CardImgOverlay>
            </Card>
          </div>
      </div>
    );
  }
  
  export default Services;
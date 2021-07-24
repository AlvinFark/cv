import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

const Skills = () => {
    return (
      <div id="skills">
          <div className="headingSection hide" style={{paddingBottom:"20px"}}><h2>Skills</h2><div className="underscore"></div></div>
          <ListGroup className="flex-wrap justify-content-center">
            <ListGroupItem className="hide">Spring Boot</ListGroupItem>
            <ListGroupItem className="hide">Sofa Boot</ListGroupItem>
            <ListGroupItem className="hide">mySQL</ListGroupItem>
            <ListGroupItem className="hide">Vue.js</ListGroupItem>
            <ListGroupItem className="hide">Nuxt.js</ListGroupItem>
            <ListGroupItem className="hide">HTML</ListGroupItem>
            <ListGroupItem className="hide">CSS</ListGroupItem>
            <ListGroupItem className="hide">JavaScript</ListGroupItem>
            <ListGroupItem className="hide">Java</ListGroupItem>
            <ListGroupItem className="hide">C++</ListGroupItem>
            <ListGroupItem className="hide">Python</ListGroupItem>
          </ListGroup>
          <div className="headingSection hide" style={{paddingBottom:"20px"}}><h2>Additional Knowlege</h2><div className="underscore"></div></div>
          <ListGroup className="flex-wrap justify-content-center">
            <ListGroupItem className="hide">Django</ListGroupItem>
            <ListGroupItem className="hide">Flask</ListGroupItem>
            <ListGroupItem className="hide">React.js</ListGroupItem>
            <ListGroupItem className="hide">Bootstrap</ListGroupItem>
            <ListGroupItem className="hide">MaterialCSS</ListGroupItem>
            <ListGroupItem className="hide">JQuery</ListGroupItem>
            <ListGroupItem className="hide">Sass</ListGroupItem>
            <ListGroupItem className="hide">scikit-learn</ListGroupItem>
            <ListGroupItem className="hide">Gensim</ListGroupItem>
            <ListGroupItem className="hide">Git</ListGroupItem>
            <ListGroupItem className="hide">Figma</ListGroupItem>
            <ListGroupItem className="hide">CorelDraw</ListGroupItem>
            <ListGroupItem className="hide">Photoshop</ListGroupItem>
            <ListGroupItem className="hide">After Effect</ListGroupItem>
            <ListGroupItem className="hide">Vegas Pro</ListGroupItem>
          </ListGroup>
      </div>
    );
  }
  
  export default Skills;
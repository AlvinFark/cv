import React from 'react';
import {} from 'reactstrap';

const Portfolios = () => {
    return (
      <div id="portfolios">
          <div className="headingSection hide" style={{paddingBottom:"20px"}}><h2>Portfolios</h2><div className="underscore"></div></div>
          <div className="d-flex align-items-center justify-content-center portfolio">
            <img className="hideImgPort" src="images/portfolios/sikawan.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>SiKawan</h3>
              <p>Project from Binar Academy that aims to create a platform that connects parents of students, schools and the Department of Education to jointly oversee education. This application contains school management in the form of attendance, grades, students, classes, etc.</p>
              <p>Developed with <b>Vue.js Framework</b> and <b>Bootstrap</b></p>
              <p>My role in this project is <b>Frontend Developer</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio even">
            <img className="hideImgPort" src="images/portfolios/blibli.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>Bliblinventory</h3>
              <p>Project from Blibli Future Program that aims to create an office management application that manage employee, office supplies, and procedure to request, assign, and order office supplies by employee</p>
              <p>Developed with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>JQuery</b>, <b>MaterialCSS</b>, <b>Spring Boot</b>, <b>JPA</b> and <b>JWT</b></p>
              <p>My role in this project is <b>Fullstack Developer</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio">
            <img className="hideImgPort" src="images/portfolios/cv.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>This CV Page Itself</h3>
              <p>I built this page for the purpose of intoducing myself to the world of web development industry</p>
              <p>Developed with <b>React</b>, <b>Bootstrap</b>, <b>Sass</b> and <b>github.io</b></p>
              <p>My role in this project is <b>Frontend Developer</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio even">
            <img className="hideImgPort" src="images/portfolios/psycallogy.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>Psycallogy</h3>
              <p>For my Object Orientation Programming Course final project, My team develop a platform that allows real-time chat between mental health patients and psychologists</p>
              <p>Developed with <b>Python</b> and <b>Django</b></p>
              <p>My role in this project is <b>Backend Developer</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio">
            <img className="hideImgPort" src="images/portfolios/skripsi.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>Question Retrieval on Health Forum</h3>
              <p>For my undergraduate thesis, I develop a system to provide recommendations for similar questions (Question Retrieval) on the Alodokter forum using topic modeling approach LDA and NMF with Jenson-Shannon Divergence as comparison method</p>
              <p>Developed with <b>Python</b>, <b>Gensim</b>, <b>scikit-learn</b>, <b>pandas</b>, <b>selenium</b>, and <b>matplotlib</b></p>
              <p>My role in this project is <b>Data Scientist</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio even">
            <img className="hideImgPort" src="images/portfolios/youtox.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>YouTube Toximeter</h3>
              <p>For my Data Science Course final project, My team develop an application that calculate toxicity level of Indonesian YouTube videos based on their comments. </p>
              <p>Developed with <b>Python</b>, <b>Flask</b>, <b>YouTube Data API</b>, <b>wordcloud</b>, and <b>matplotlib</b></p>
              <p>My role in this project are <b>Fullstack Developer</b> and <b>Data Scientist</b></p>
            </div>
          </div>
      </div>
    );
  }
  
  export default Portfolios;
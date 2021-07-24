import React from 'react';
import {} from 'reactstrap';

const Portfolios = () => {
    return (
      <div id="portfolios">
          <div className="headingSection hide" style={{paddingBottom:"20px"}}><h2>Portfolios</h2><div className="underscore"></div></div>
          <div className="d-flex align-items-center justify-content-center portfolio">
            <img className="hideImgPort" src="https://res.cloudinary.com/alvark/image/upload/v1627128699/CV/Portfolio/subs_k4ifng.png"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>DANA Indonesia</h3>
              <p>Working in recurring team to develop DANA’s subscription auto pay and auto top up solution. Also working on other projects such as bulk payment, internal system persistent task scheduler, social features and back office. Also contributed to maintain member and recurring system.</p>
                <p>Developed using <b><a href={"https://www.sofastack.tech/en/projects/sofa-boot/overview/"}>Java Sofaboot</a></b> and <b>Java Springboot</b></p>
              <p>My role in this project is <b>Backend Developer</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio even">
              <img className="hideImgPort" src="https://res.cloudinary.com/alvark/image/upload/v1627129448/CV/Portfolio/wipps_xzbauk.png"/>
              <div style={{width:"3vw"}}></div>
              <div className="detail hideTextPort">
                  <h3>WIPPS Pertamina</h3>
                  <p>Project from Pertamina to build Maintenance, Safety and Supervising Management app to be used at Pertamina's offshore oil rig across the nation. You can view the page <a href={"https://www.wipps-pertamina.com/"}>here</a></p>
                  <p>Developed using <b>Nuxt.js</b>, and <b>Bootstrap</b></p>
                  <p>My role in this project is <b>Frontend Developer</b></p>
              </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio">
              <img className="hideImgPort" src="https://res.cloudinary.com/alvark/image/upload/v1627129832/CV/Portfolio/ilmu_xbbgkx.png"/>
              <div style={{width:"3vw"}}></div>
              <div className="detail hideTextPort">
                  <h3>DANA Ilmu mini-program</h3>
                  <p>Project to create online and offline course market place using DANA's own mini-program front-end framework. Purpose of this development is to challenge developer creating app using new knowledge in short time, test the quality of the framework and finding new features idea</p>
                  <p>Developed using <a href={"https://mini-program.dana.id/"}>DANA mini-program</a>, and <b>Java Spring boot</b></p>
                  <p>My role in this project is <b>Fullstack Developer</b></p>
              </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio even">
            <img className="hideImgPort" src="https://res.cloudinary.com/alvark/image/upload/v1627129060/CV/Portfolio/sikawan_er5c7p.png"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>SiKawan</h3>
              <p>Project from Binar Academy that aims to create a platform that connects parents of students, schools and the Department of Education to jointly oversee education. This application contains school management in the form of attendance, grades, students, classes, etc.</p>
              <p>Developed with <b>Vue.js Framework</b> and <b>Bootstrap</b></p>
              <p>My role in this project is <b>Frontend Developer</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio">
            <img className="hideImgPort" src="https://res.cloudinary.com/alvark/image/upload/v1580710758/CV/Portfolio/blibli_msn9xk.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>Bliblinventory</h3>
              <p>Project from Blibli Future Program that aims to create an office management application that manage employee, office supplies, and procedure to request, assign, and order office supplies by employee</p>
              <p>Developed with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>JQuery</b>, <b>MaterialCSS</b>, <b>Spring Boot</b>, <b>JPA</b> and <b>JWT</b></p>
              <p>My role in this project is <b>Fullstack Developer</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio even">
            <img className="hideImgPort" src="https://res.cloudinary.com/alvark/image/upload/v1580710759/CV/Portfolio/cv_fjzi7p.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>This CV Page Itself</h3>
              <p>I built this page for the purpose of intoducing myself to the world of web development industry</p>
              <p>Developed with <b>React</b>, <b>Bootstrap</b>, <b>Sass</b> and <b>github.io</b></p>
              <p>My role in this project is <b>Frontend Developer</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio">
            <img className="hideImgPort" src="https://res.cloudinary.com/alvark/image/upload/v1580710759/CV/Portfolio/psycallogy_jeep0c.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>Psycallogy</h3>
              <p>For my Object Orientation Programming Course final project, My team develop a platform that allows real-time chat between mental health patients and psychologists</p>
              <p>Developed with <b>Python</b> and <b>Django</b></p>
              <p>My role in this project is <b>Backend Developer</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio even">
            <img className="hideImgPort" src="https://res.cloudinary.com/alvark/image/upload/v1580710759/CV/Portfolio/skripsi_fe5hfo.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>Question Retrieval on Health Forum</h3>
              <p>For my undergraduate thesis, I develop a system to provide recommendations for similar questions (Question Retrieval) on the Alodokter forum using topic modeling approach LDA and NMF with Jenson-Shannon Divergence as comparison method</p>
              <p>Developed with <b>Python</b>, <b>Gensim</b>, <b>scikit-learn</b>, <b>pandas</b>, <b>selenium</b>, and <b>matplotlib</b></p>
              <p>My role in this project is <b>Data Scientist</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio">
            <img className="hideImgPort" src="https://res.cloudinary.com/alvark/image/upload/v1580710759/CV/Portfolio/youtox_p8at39.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>YouTube Toximeter</h3>
              <p>For my Data Science Course final project, My team develop an application that calculate toxicity level of Indonesian YouTube videos based on their comments. </p>
              <p>Developed with <b>Python</b>, <b>Flask</b>, <b>YouTube Data API</b>, <b>wordcloud</b>, and <b>matplotlib</b></p>
              <p>My role in this project are <b>Fullstack Developer</b> and <b>Data Scientist</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio even">
            <img className="hideImgPort" src="https://res.cloudinary.com/alvark/image/upload/v1580710759/CV/Portfolio/video_urmpx8.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>OmahTI Introduction Video</h3>
              <p>Introduction video for my university organization</p>
              <p>Created using <b>Adobe After Effect</b></p>
              <p>My role in this project is <b>Motion Graphic Artist</b></p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center portfolio">
            <img className="hideImgPort" src="https://res.cloudinary.com/alvark/image/upload/v1580710759/CV/Portfolio/buku_kqjs9m.jpg"/>
            <div style={{width:"3vw"}}></div>
            <div className="detail hideTextPort">
              <h3>Biodiversitas Natuna</h3>
              <p>Book about Natuna Island and the biodiversity that lives in it.</p>
              <p>Created using <b>CorelDraw</b></p>
              <p>My role in this project are <b>Layout Designer</b></p>
            </div>
          </div>
      </div>
    );
  }
  
  export default Portfolios;
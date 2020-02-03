import React from 'react';

const Home = () => {
    return (
      <div id="home">
        <div id="greetings" className="hideGreetings">
          <div>Hello, I'm</div>
          <div style={{fontSize:"2.5rem"}}>ALVIN FARKHAN</div>
          <div style={{fontSize:"1.5rem"}}>I'm a Web Developer</div>
        </div>
        <img id="foto" src="https://res.cloudinary.com/alvark/image/upload/v1580710742/CV/foto_cmxarf.png" alt="foto" className="hideFoto"/>
      </div>
    );
  }
  
  export default Home;
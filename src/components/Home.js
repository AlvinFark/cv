import React from 'react';

const Home = () => {
    return (
      <div id="home">
        <div id="greetings" className="hideGreetings">
          <div>Hello, I'm</div>
          <div style={{fontSize:"2.5rem"}}>ALVIN FARKHAN</div>
          <div style={{fontSize:"1.5rem"}}>I'm a Web Developer</div>
        </div>
        <img id="foto" src="images/foto.png" alt="foto" className="hideFoto"/>
      </div>
    );
  }
  
  export default Home;
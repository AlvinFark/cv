import React from 'react';
import { } from 'reactstrap';

const Floating = () => {
    return (
      <div id="floating" className="hide">
        <div className="floatingButton hideFloat"><a href="https://github.com/AlvinFark/" target="_blank"><i class="fab fa-github"></i></a></div>
        <div className="floatingButton hideFloat"><a href="https://www.linkedin.com/in/alvin-farkhan/" target="_blank"><i class="fab fa-linkedin-in"></i></a></div>
        <div className="floatingButton hideFloat"><a href="mailto: alvin.farkhan@gmail.com" target="_blank"><i class="fas fa-at"></i></a></div>
        <div className="floatingButton hideFloat"><a href="https://wa.me/6285200872725" target="_blank"><i class="fab fa-whatsapp"></i></a></div>
        <div className="floatingButton shadow d-flex flex-column" style={{width:"60px",height:"60px"}}><i style={{marginTop:"0",marginBottom:"5px"}} class="fas fa-user-tie"></i><p style={{margin:"0",fontSize:"9pt",textAlign:"center"}}>Contact Me</p></div>
      </div>
    );
  }
  
  export default Floating;
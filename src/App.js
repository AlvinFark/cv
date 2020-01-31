import React, { Fragment } from 'react';
import { Container} from 'reactstrap';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolios from './components/Portfolios';
import Floating from './components/Floating';

const App = () => (
  <Fragment>
  
    <Header/>
    <div style={{height:"50px"}}></div>
    <Home/>
    <Container style={{height:"1000px"}}>
      <main>
        <About/>
        <Services/>
        <Skills/>
        <Portfolios/>
      </main>
    </Container>
    <Floating/>
  </Fragment>
);

document.addEventListener("DOMContentLoaded", function(event) { 
  setTimeout(function(){
    setTimeout(function(){document.getElementById("logo").classList.add('show');document.getElementById("logo").classList.remove('hide');}, 0);
    setTimeout(function(){document.getElementById("navList").classList.add('show');document.getElementById("navList").classList.remove('hide');}, 300);
    setTimeout(function(){document.getElementById("greetings").classList.add('showGreetings');document.getElementById("greetings").classList.remove('hideGreetings');}, 600);
    setTimeout(function(){document.getElementById("foto").classList.add('showFoto');document.getElementById("foto").classList.remove('hideFoto');}, 1000);
    setTimeout(function(){document.getElementById("floating").classList.add('show');document.getElementById("floating").classList.remove('hide');}, 1500);
  }, 300);
});

window.onscroll = function() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("placeholderShadowHeader").className = "shadow-sm-animate";
  } else {
    document.getElementById("placeholderShadowHeader").className = "shadow-gone";
  }

  var ab = document.getElementById("about").children;
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    ab[0].classList.add('showAboutHeader');ab[0].classList.remove('hideAboutHeader');
  }
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    ab[1].classList.add('show');ab[1].classList.remove('hide');
  }
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    ab[2].classList.add('show');ab[2].classList.remove('hide');
  }
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    ab[3].classList.add('show');ab[3].classList.remove('hide');
  }
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    ab[4].classList.add('show');ab[4].classList.remove('hide');
  }
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    ab[5].classList.add('show');ab[5].classList.remove('hide');
  }
  var sr = document.getElementById("services").children;
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    sr[0].classList.add('show');sr[0].classList.remove('hide');
  }
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
    var cr = sr[1].children;
    cr[0].classList.add('showCard');cr[0].classList.remove('hideCard');
    cr[1].classList.add('showCard');cr[1].classList.remove('hideCard');
    cr = sr[2].children;
    cr[0].classList.add('showCard');cr[0].classList.remove('hideCard');
    cr[1].classList.add('showCard');cr[1].classList.remove('hideCard');
    setTimeout(function(){
      for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("hideTextCard")[3*i].classList.add('showTextCard');
      }
    }, 650);
    setTimeout(function(){
      for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("hideTextCard")[3*i+1].classList.add('showTextCard');
      }
    }, 800);
    setTimeout(function(){
      for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("hideTextCard")[3*i+2].classList.add('showTextCard');
      }
    }, 950);
  }
  if (document.body.scrollTop > document.getElementById("skills").offsetTop-500 || document.documentElement.scrollTop > document.getElementById("skills").offsetTop-500) {
    document.getElementById("skills").children[0].classList.add('show');
    document.getElementById("skills").children[0].classList.remove('hide');
    setTimeout(function(){
      for (let index = 0; index < 23; index++) {
        setTimeout(() => {
          document.getElementById("skills").children[1].children[index].classList.add('show');
          document.getElementById("skills").children[1].children[index].classList.remove('hide');
        }, index*50);
      }
    }, 300);
  }
  if (document.body.scrollTop > document.getElementById("portfolios").offsetTop-500 || document.documentElement.scrollTop > document.getElementById("portfolios").offsetTop-500) {
    document.getElementById("portfolios").children[0].classList.add('show');
    document.getElementById("portfolios").children[0].classList.remove('hide');
    for (let index = 1; index <= 5; index++) {
      setTimeout(() => {
        document.getElementById("portfolios").children[index].children[0].classList.add('showImgPort'); 
        document.getElementById("portfolios").children[index].children[0].classList.remove('hideImgPort'); 
        setTimeout(() => {
          document.getElementById("portfolios").children[index].children[2].classList.add('showTextPort'); 
          document.getElementById("portfolios").children[index].children[2].classList.remove('hideTextPort'); 
        }, 200);
      }, 300*index);
    }
  }
};

export default App;
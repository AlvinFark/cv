import React from 'react';

import { Navbar, NavbarBrand, Collapse, Nav, NavItem, Container
} from 'reactstrap';

function scroll(params) {
  var pos = document.getElementById(params).offsetTop;
  if (params = "about") {
    pos = pos - 80
  }
  window.scrollTo(0, pos)
}

const Header = () => {
  return (
    <header style={{position:"fixed", width:"100%", backgroundColor:"white", zIndex:"100"}}>
      <div id="placeholderShadowHeader" className="shadow-gone">
        <Container>
          <Navbar expand="md" style={{justifyContent:"center"}}>
            <NavbarBrand id="logo" href="#" style={{marginRight:"0"}} className="hide"><img src="images/logo.png" alt="logo"/></NavbarBrand>
            <Collapse navbar>
              <Nav className="mr-auto justify-content-end hide" id="navList" navbar>
                <NavItem onClick={() => scroll("home")}>Home</NavItem>
                <NavItem onClick={() => scroll("about")}>About</NavItem>
                <NavItem onClick={() => scroll("services")}>Services</NavItem>
                <NavItem onClick={() => scroll("skills")}>Skills</NavItem>
                <NavItem onClick={() => scroll("portfolios")}>Portfolios</NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </header>
  );
}

export default Header;
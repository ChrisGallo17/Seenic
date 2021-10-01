import React from 'react';
import {Navbar, Container} from 'react-bootstrap'
import Logo from '../img/Logo_NBS.png'

class Header extends React.Component{
  render(){
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} height="30" className="d-inline-block align-top m-2" alt="React Bootstrap logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Project by <a href="https://github.com/ChrisGallo17/Seenic">Chris G</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header;
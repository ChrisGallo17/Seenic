import React from 'react';
import {Navbar, Container} from 'react-bootstrap'

class Header extends React.Component{
  render(){
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Seenic
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
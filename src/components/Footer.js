import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>Byron Dalberg</Navbar.Brand>
          <Nav>
            <Nav.Link href="https://github.com/BihonAnon" target="_blank" >GitHub</Nav.Link>
            <Nav.Link eventKey={2} target="_blank" href="https://www.linkedin.com/in/byron-dalberg-38388b1a2/">
              LinkedIn
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
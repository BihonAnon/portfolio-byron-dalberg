import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/portfolio-byron-dalberg/"}>Byron Dalberg</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/portfolio-byron-dalberg/"}>About Me</Nav.Link>
            <Nav.Link as={Link} to={"/portfolio-byron-dalberg/resume"}>Resume</Nav.Link>
            <Nav.Link as={Link} to={"/portfolio-byron-dalberg/contact"}>Contact Me</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to={"/portfolio-byron-dalberg/portfolio"}>Portfolio</NavDropdown.Item>
              <NavDropdown.ItemText style={{color: 'grey'}}>Deployed Applications</NavDropdown.ItemText>
              <NavDropdown.Item href="#SurfShop">Surf</NavDropdown.Item>
              <NavDropdown.Item href="https://simple-notes-092831.herokuapp.com/">Simple Notes</NavDropdown.Item>
              <NavDropdown.Item href="https://bihonanon.github.io/WeatherTravelDashboard/">Weather Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.ItemText style={{color: 'grey'}}>Backend Applications</NavDropdown.ItemText>
              <NavDropdown.Item href="https://github.com/BihonAnon/E-Commerce-Back-End">E-Commerce Backend</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/BihonAnon/Daltech-Employee-Register">DalTech Employee Register</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/BihonAnon/JiujitBits">JiujitBits Social Media Backend</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="https://github.com/BihonAnon" target="_blank" >GitHub</Nav.Link>
            <Nav.Link eventKey={2} target="_blank" href="https://www.linkedin.com/in/byron-dalberg-38388b1a2/">
              LinkedIn
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
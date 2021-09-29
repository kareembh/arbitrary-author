import React from "react";
import { Link } from "gatsby";
// import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap/Navbar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "./navMenu.scss";

export default function navMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">Arbatrary Author</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link><Link className="navMenuItem" to="/about/">About</Link></Nav.Link>
            <Nav.Link><Link className="navMenuItem" to="/featured/">Podcasts</Link></Nav.Link>
            <Nav.Link><Link className="navMenuItem" to="/coffeeBreak/">Coffee break</Link></Nav.Link>
            <Nav.Link href="https://www.boost.am/">Services</Nav.Link>
            <Nav.Link href="https://calendly.com/bsklivas/">Book a call</Nav.Link>
            <Nav.Link><Link className="navMenuItem" to="/contact/">Contact</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React from 'react'
import { Link } from "gatsby"
import { Navbar, Nav, Container } from 'react-bootstrap';



//styles

const navMenuStyles = {
    borderBottom: "1px solid #E4E4E4",
    flexDirection: "column",
    backgroundColor: "#ffffff"
  }

const navMenuPosition = {
    maxWidth: "100%"
}

  const branding = {
    color: "black",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    marginLeft: "9px"
  }

export default function navMenu() {
    return (
            <Navbar sticky="top" expand="lg" sticky="top" style={navMenuPosition, navMenuStyles}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav 
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        
                    >
                        <Nav.Item>
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to="/about/">About me</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to="/posts/">Posts</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Navbar.Brand><Link style={branding} to="/posts/">Arbitrary Author</Link></Navbar.Brand>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to="/contact/">Contact</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to="/featured/">Featured in</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

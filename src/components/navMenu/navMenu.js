import React from 'react'
import { Link } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap';
import "./navMenu.scss"

export default function navMenu() {
    return (
            <Navbar expand="lg" sticky="top" className="navMenuPosition navMenuStyles">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "center"}}>
                    <Nav 
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}   
                    >
                        <Nav.Item>
                            <Nav.Link className="navMenuItem"><Link to="/about/">About</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navMenuItem"><Link to="/services/">Services</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Navbar.Brand><Link className="branding" to="/">Arbitrary Author</Link></Navbar.Brand>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navMenuItem"><Link to="/featured/">Featured</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navMenuItem"><Link to="/contact/">Contact</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

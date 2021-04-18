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
                    >
                        <Nav.Item>
                            <Link className="navMenuItem" to="/about/">About</Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Link className="navMenuItem" to="/featured/">Podcasts</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="navMenuItem" to="/coffeeBreak/">Coffee break</Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Navbar.Brand><Link className="branding" to="/">Arbitrary Author</Link></Navbar.Brand>
                        </Nav.Item>
                        <Nav.Item>
                            <a className="navMenuItem" href="https://www.boost.am" target="_blank">Serices</a>
                        </Nav.Item>
                        <Nav.Item>
                            <a className="navMenuItem" href="https://calendly.com/bsklivas/" target="_blank">Book a call</a>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="navMenuItem" to="/contact/">Contact</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

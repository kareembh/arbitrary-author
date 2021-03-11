import React from 'react'
import NavMenu from '../navMenu/navMenu'
import Footer from '../footer/footer'
import {Container} from 'react-bootstrap';

export default function layout({ children }) {
    return (
        <div>
            <NavMenu></NavMenu>
            <Container>
            {children}
            </Container>
            <Footer></Footer>
        </div>
    )
}

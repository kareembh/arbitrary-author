import React from 'react'
import NavMenu from '../navMenu/navMenu'
import Footer from '../footer/footer'

export default function layout({ children }) {
    return (
        <div>
            <NavMenu></NavMenu>
            <div>
            {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

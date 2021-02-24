import React from 'react'
import { Row } from 'react-bootstrap';

const footerStyle = {
    backgroundColor: "#000000",
    justifyContent: "center",
    height: "90px",
    
}

const footerText = {
    color: "#ffffff",
    fontFamily: "serif",
    margin: "auto",
    fontSize: "14px"
}

export default function footer() {
    return (
        <Row style={footerStyle}>
            <p style={footerText}>@2021 Arbitrary Author. All Rights Reserved.</p>
        </Row>
    )
}

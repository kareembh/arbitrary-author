import React from 'react'

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
        <div style={footerStyle}>
            <p style={footerText}>@2021 Arbitrary Author. All Rights Reserved.</p>
        </div>
    )
}

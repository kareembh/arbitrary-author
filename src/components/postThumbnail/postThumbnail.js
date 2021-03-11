import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "gatsby"

const postStyles = {
    width: "300px",
    border: "2px grey solid"
}
const postImageStyles = {
    width: "300px",
}

export default function postThumbnail(props) {
    return (
        <div style={postStyles}>
            <img src={props.postThumbnailImage} style={postImageStyles} alt="" />
            <div>
                <h3>{props.postThumbnailTitle}</h3>
                <p>{props.postThumbnailDescription}</p>
                <p>{props.postThumbnailDate}</p>
                <Button variant="dark"><Link to={props.postThumbnailSlug}>Continue reading</Link></Button>
            </div>
        </div>
    )
}

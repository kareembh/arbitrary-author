import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "gatsby"
import "./postThumbnail.scss"



export default function postThumbnail(props) {
    return (
        <div className={props.postThumbnailStyles}>
            <img src={props.postThumbnailImage} className="postThumbnailImage" alt="" />
            <div className="featuredPostContent">
                <h3 className="postThumbnailTag">{props.postThumbnailTag}</h3>
                <h3 className="postThumbnailHeader">{props.postThumbnailTitle}</h3>
                <p className="postThumbnailBody">{props.postThumbnailDescription}</p>
                <p className="postThumbnailDate">Posted by <b>{props.postThumbnailAuthor}</b> on {props.postThumbnailDate}</p>
                <Link to={props.postThumbnailSlug}><Button className="postThumbnailButton">Continue reading</Button></Link>
            </div>
        </div>
    )
}

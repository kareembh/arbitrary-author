import React from 'react'
import "./podcast.scss"
import { Button } from 'react-bootstrap';

export default function Podcasts(props) {
    return (
            <div href={props.podcastUrl} className="podcastThumbnail">
                <img src={props.podcastImage} className="podcastImage" alt="" />
                <div className="podcastContent">
                    <h3 className="podcastTitle">{props.podcastTitle}</h3>
                    <p className="podcastDescription">{props.podcastDescription}</p>
                    <p className="podcastDate">{props.podcastDate}</p>
                    <a target="_blank" href={props.podcastUrl}><Button className="podcastButton">See podcast</Button></a>
                </div>
            </div>
    )
}

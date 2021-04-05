import React from 'react'
import "./podcast.scss"

export default function Podcasts(props) {
    return (
            <a href={props.podcastUrl} className="podcastThumbnail">
                <img src={props.podcastImage} className="podcastImage" alt="" />
                <div className="podcastContent">
                    <h3 className="podcastTitle">{props.podcastTitle}</h3>
                    <p className="podcastDescription">{props.podcastDescription}</p>
                    <p className="podcastDate">{props.podcastDate}</p>
                </div>
            </a>
    )
}

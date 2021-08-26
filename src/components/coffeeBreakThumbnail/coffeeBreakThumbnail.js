import React from 'react'
// import AudioPlayer from 'react-h5-audio-player';
import { Link } from "gatsby"
import 'react-h5-audio-player/src/styles.scss'
import './coffeeBreakThumbnail.scss'


const CoffeeBreakThumbnail = (props) =>{
    return (
        <div className="coffeeBreak">
            <img src={props.coffeeBreakThumbnailImage} className="coffeeBreakThumbnailImage" alt="" />
            <div className="coffeeBreakContent">
                <h3 className="coffeeBreakThumbnailHeader">{props.coffeeBreakThumbnailHeader}</h3>
                <p className="coffeeBreakThumbnailBody">{props.coffeeBreakThumbnailDescription}</p>
                <p className="coffeeBreakThumbnailDate">{props.coffeeBreakThumbnailDate}</p>
                <p className="coffeeBreakTags">{props.coffeeBreakThumbnailTag}</p>
                {/* <AudioPlayer
                    
                    src={props.coffeeBreakAudio}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                /> */}
                <Link to={props.postThumbnailSlug}><div className="coffeeBreakThumbnailButton">Continue reading</div></Link>
            </div>
        </div>
    )
}

export default CoffeeBreakThumbnail;

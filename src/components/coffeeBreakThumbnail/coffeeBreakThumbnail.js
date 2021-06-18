import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
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
                {/* <AudioPlayer
                    
                    src={props.coffeeBreakAudio}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                /> */}
                {/* <Link to={props.postThumbnailSlug}><Button className="postThumbnailButton">Continue reading</Button></Link> */}
            </div>
        </div>
    )
}

export default CoffeeBreakThumbnail;

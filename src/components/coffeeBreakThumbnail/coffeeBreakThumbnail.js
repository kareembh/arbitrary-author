import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'


const CoffeeBreakThumbnail = (props) =>{
    return (
        <div className="coffeBreak">
            <img src={props.coffeeBreakThumbnailImage} className="postThumbnailImage" alt="" />
            <div className="coffeeBreakContent">
                <h3 className="coffeeBreakThumbnailHeader">{props.coffeeBreakThumbnailHeader}</h3>
                {/* <p className="coffeeBreakThumbnailBody">{props.coffeeBreakThumbnailDescription}</p> */}
                <p className="coffeeBreakThumbnailDate">{props.coffeeBreakThumbnailDate}</p>
                <AudioPlayer
                    autoPlay
                    src={props.offeeBreakAudio}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                />
                
                {/* <Link to={props.postThumbnailSlug}><Button className="postThumbnailButton">Continue reading</Button></Link> */}
            </div>
        </div>
    )
}

export default CoffeeBreakThumbnail;
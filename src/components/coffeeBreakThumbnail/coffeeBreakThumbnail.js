import React from 'react'

const coffeeBreak = {
    width: "300px"
}

const postThumbnailImage = {
    width: "300px"
}

const CoffeeBreakThumbnail = (props) =>{
    return (
        <div className="coffeBreak">
            <img src={props.coffeeBreakThumbnailImage} className="postThumbnailImage" alt="" />
            <div className="coffeeBreakContent">
                <h3 className="coffeeBreakThumbnailHeader">{props.coffeeBreakThumbnailHeader}</h3>
                {/* <p className="coffeeBreakThumbnailBody">{props.coffeeBreakThumbnailDescription}</p> */}
                <p className="coffeeBreakThumbnailDate">{props.coffeeBreakThumbnailDate}</p>
                <audio controls>
                    <source src={props.offeeBreakAudio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                {/* <Link to={props.postThumbnailSlug}><Button className="postThumbnailButton">Continue reading</Button></Link> */}
            </div>
        </div>
    )
}

export default CoffeeBreakThumbnail;
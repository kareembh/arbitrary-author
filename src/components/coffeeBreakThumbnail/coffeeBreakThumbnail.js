import React from 'react'

const CoffeeBreakThumbnail = (props) =>{
    return (
        <div className={props.coffeeBreakThumbnailStyles}>
            <img src={props.coffeeBreakThumbnailImage} className="postThumbnailImage" alt="" />
            <div className="coffeeBreakContent">
                <h3 className="coffeeBreakThumbnailHeader">{props.coffeeBreakThumbnailTitle}</h3>
                <p className="coffeeBreakThumbnailBody">{props.coffeeBreakThumbnailDescription}</p>
                <p className="coffeeBreakThumbnailDate">{props.coffeeBreakThumbnailDate}</p>
                {/* <Link to={props.postThumbnailSlug}><Button className="postThumbnailButton">Continue reading</Button></Link> */}
            </div>
        </div>
    )
}

export default CoffeeBreakThumbnail;
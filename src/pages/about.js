import React from 'react'
import Layout from "../components/layout/layout"
import aboutContent from "../../site/content/about.json"
import "./about.scss"

const mytext = {
    "des": `
    This is the place where the un-professional professionals have a place to voice themselves. The outcasts, the land of misfit toys, the outliers, the rule breakers.<br>
    The Arbitrary Author came about as its name states; Arbitrarily. I was lost and without direction, this site is the only place where I feel like my voice is my voice. Where there is no limitations to language, vulgarity, ideologies and mindsets.\n\n
    Giving a voice back to the truly arbitrary un-professionals of the world. This is the community where you have a voice. In the forms of blogging, podcasting, and everything in-between to come.
      `
}


export default function about() {

    

    return (
        <Layout>
            <h1 className="aboutTitle">{aboutContent.title}</h1>
            <img className="aboutImg" src={aboutContent.about_image} alt="" />
            <p className="aboutDes">{mytext.des}</p>
            
        </Layout>
    )
}

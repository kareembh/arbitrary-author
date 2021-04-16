import React from 'react'
import Layout from "../components/layout/layout"
import aboutContent from "../../site/content/about.json"
import "./about.scss"

export default function about() {

    return (
        <Layout>
            <h1 className="aboutTitle">{aboutContent.title}</h1>
            <img className="aboutImg" src={aboutContent.about_image} alt="" />
            <p className="aboutDes">{aboutContent.body}</p>
        </Layout>
    )
}

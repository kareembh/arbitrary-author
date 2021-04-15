import React from 'react'
import Layout from "../components/layout/layout"
import aboutContent from "../../site/content/about.json"

export default function about() {
    return (
        <Layout>
            <h1>{aboutContent.title}</h1>
            <p>{aboutContent.about}</p>
            <img src={aboutContent.about_image} alt="" />
        </Layout>
    )
}

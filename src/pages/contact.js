import React from 'react'
import Layout from "../components/layout/layout"
import contactContent from "../../site/content/contact.json"



export default function about() {
    return (
        <Layout>
            <h1>{contactContent.title}</h1>
            <a href={"mailto:" + contactContent.email}><img src={contactContent.email_icon} alt="" /></a>
            <a href={contactContent.linkedin}><img src={contactContent.linkedin_icon} alt="" /></a>
            <a href={contactContent.instagram}><img src={contactContent.instagram_icon} alt="" /></a>
            <a href={contactContent.facebook}><img src={contactContent.facebook_icon} alt="" /></a>
        </Layout>
    )
}
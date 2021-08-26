import React from 'react'
import Layout from "../components/layout/layout"
import contactContent from "../../site/content/contact.json"
import "./contact.scss"

export default function about() {
    return (
        <Layout>
            <h1>{contactContent.title}</h1>
            <div>
                <div className="socailCol">
                    <a href={"mailto:" + contactContent.email}><img className="socialIcon" src={contactContent.email_icon} alt="" /></a>
                    <a href={contactContent.linkedin}><img className="socialIcon" src={contactContent.linkedin_icon} alt="" /></a>
                    <a href={contactContent.instagram}><img className="socialIcon" src={contactContent.instagram_icon} alt="" /></a>
                    <a href={contactContent.facebook}><img className="socialIcon" src={contactContent.facebook_icon} alt="" /></a>
                </div>
            </div>
        </Layout>
    )
}
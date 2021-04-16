import React from 'react'
import Layout from "../components/layout/layout"
import contactContent from "../../site/content/contact.json"



export default function about() {
    return (
        <Layout>
            <h1>{contactContent.title}</h1>
            <a href={contactContent.email}><img src={}/></a>
            <a href={contactContent.linkedin}>Linkedin</a>
            <a href={contactContent.instagram}>Instagram</a>
            <a href={contactContent.facebook}>Facebook</a>
        </Layout>
    )
}
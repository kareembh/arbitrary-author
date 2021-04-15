import React from 'react'
import Layout from "../components/layout/layout"
import contactContent from "../../site/content/contact.md"


export default function about() {
    return (
        <Layout>
            <h1>{contactContent.title}</h1>
        </Layout>
    )
}
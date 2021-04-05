import React from 'react'
import Layout from "../components/layout/layout"
import PodcastList from "../components/podcastList/podcastList"

const  featured = (props) => {
    return (
        <Layout>
            <PodcastList></PodcastList>
        </Layout>
    )
}
export default featured;
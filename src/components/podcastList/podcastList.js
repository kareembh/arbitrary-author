import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {Row, Col} from 'react-bootstrap';
import Podcasts from '../podcasts/podcasts'

const PodcastList = (props) => {

    const data = useStaticQuery(graphql`
    {
        allFile(filter: {sourceInstanceName: {eq: "podcasts"}}) {
          edges {
            node {
              id
              childMarkdownRemark {
                frontmatter {
                  podcast_date(formatString: "DD, MMMM, YYYY")
                  podcast_description
                  podcast_image
                  podcast_title
                  podcast_url
                }
              }
            }
          }
        }
      }
    `)

    const podcasts = data.allFile.edges;
    return (
            <Row>
            {podcasts &&
                podcasts.map((podcast) => {
                // destructuring data object
                const {frontmatter} = podcast.node.childMarkdownRemark;
                return (
                        <Podcasts
                            key={podcast.node.id}
                            podcastImage={frontmatter.podcast_image}
                            podcastTitle={frontmatter.podcast_title}
                            podcastDescription={frontmatter.podcast_description}
                            podcastDate={frontmatter.podcast_date}
                            podcastUrl={frontmatter.podcast_url}
                        />
                );
                })}
            </Row>
    )
}
export default PodcastList;
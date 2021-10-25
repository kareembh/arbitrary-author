import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Podcasts from '../podcasts/podcasts'
import {Row, Col} from 'react-bootstrap';

const PodcastList = (props) => {

    const data = useStaticQuery(graphql`
    {
        allFile(filter: {sourceInstanceName: {eq: "podcasts"}}, sort: {fields: childrenMarkdownRemark___frontmatter___podcast_date, order: DESC}) {
          edges {
            node {
              id
              childMarkdownRemark {
                excerpt(pruneLength: 240)
                frontmatter {
                  podcast_date(formatString: "DD, MMMM, YYYY")
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
                const {frontmatter, excerpt} = podcast.node.childMarkdownRemark;
                return (
                  <Col lg={4} md={6} sm={12} >
                        <Podcasts
                            key={podcast.node.id}
                            podcastImage={frontmatter.podcast_image}
                            podcastTitle={frontmatter.podcast_title}
                            podcastDescription={excerpt}
                            podcastDate={frontmatter.podcast_date}
                            podcastUrl={frontmatter.podcast_url}
                        />
                  </Col>
                );
                })}
            </Row>
    )
}
export default PodcastList;
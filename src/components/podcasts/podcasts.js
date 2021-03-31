import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {Row, Col} from 'react-bootstrap';

const Podcasts = (props) => {

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
                    <Col key={podcast.node.id}>
                        <h3>{frontmatter.podcast_title}</h3>
                        <img src={frontmatter.podcast_image} alt="" />
                        <p>{frontmatter.podcast_description}</p>
                        <p>{frontmatter.podcast_url}</p>
                        <p>{frontmatter.podcast_date}</p>
                    </Col>
                );
                })}
                
            </Row>
    )
}
export default Podcasts;
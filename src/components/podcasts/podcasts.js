import React from 'react'
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import {Row, Col } from 'react-bootstrap';

export const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "podcasts"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              podcast_date
              podcast_description
              podcast_image
              podcast_title
              podcast_url
              tag
            }
            id
          }
        }
      }
    }
  }
`

const podcasts = (props) => {
    // const podcasts = props.data.allFile.edges;
    // console.log(podcasts);
    return (
            <Row>
            {/* {posts &&
                podcasts.map((podcast) => {
                // destructuring data object
                const { frontmatter, fields, id, excerpt} = podcast.node.childMarkdownRemark;
                return (
                    // returning posts components with destructured dat
                        <p>{frontmatter.title}</p>
                );
                })} */}
            </Row>
    )
}
export default podcasts;
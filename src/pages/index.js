import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import PostThumbnail from "../components/postThumbnail/postThumbnail"
import Layout from "../components/layout/layout"
import {Row, Col } from 'react-bootstrap';
import { graphql } from "gatsby"

//query
export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            image
            date
          }
        }
      }
    }
  }
`

// markup
const IndexPage = (props) => {

  //assigning an array of data objects to the posts variable
  const posts = props.data.allMarkdownRemark.edges;

  return (
      <Layout>
        <Row>
      {posts &&
        posts.map((post) => {
          // destructuring data object
          const {frontmatter, fields, id, excerpt} = post.node;
          return (
            // returning posts components with destructured data
            <Col lg={4} md={6} sm={12} key={id}>
              <PostThumbnail
                postThumbnailImage={frontmatter.image}
                postThumbnailTitle={frontmatter.title}
                postThumbnailDescription={excerpt}
                postThumbnailDate={frontmatter.date}
                postThumbnailSlug={fields.slug}
              />
            </Col>
          );
        })}
        </Row>
      </Layout>
    
  )
}

export default IndexPage

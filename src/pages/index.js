import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import PostThumbnail from "../components/postThumbnail/postThumbnail"
import Layout from "../components/layout/layout"
import {Row, Col } from 'react-bootstrap';
import { graphql } from "gatsby"

//query
export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}){
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            title
            image
            date
            tag
            author
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
          <Col lg={12} md={12} sm={12}>
            <PostThumbnail
              postThumbnailStyles="featuredPost"
              postThumbnailImage={posts[0].node.frontmatter.image}
              postThumbnailTitle={posts[0].node.frontmatter.title}
              postThumbnailDescription={posts[0].node.excerpt}
              postThumbnailDate={posts[0].node.frontmatter.date}
              postThumbnailSlug={posts[0].node.fields.slug}
              postThumbnailAuthor={posts[0].node.frontmatter.author}
              postThumbnailTag={posts[0].node.frontmatter.tag}
            />
          </Col>
        </Row>
        <Row>
      {posts &&
        posts.slice(1).map((post) => {
          // destructuring data object
          const {frontmatter, fields, id, excerpt} = post.node;
          return (
            // returning posts components with destructured data
            <Col lg={4} md={6} sm={12} key={id}>
              <PostThumbnail
                postThumbnailStyles="postThumbnailStyles"
                postThumbnailImage={frontmatter.image}
                postThumbnailTitle={frontmatter.title}
                postThumbnailDescription={excerpt}
                postThumbnailDate={frontmatter.date}
                postThumbnailSlug={fields.slug}
                postThumbnailAuthor={frontmatter.author}
                postThumbnailTag={frontmatter.tag}
              />
            </Col>
          );
        })}
        </Row>
      </Layout>
    
  )
}

export default IndexPage

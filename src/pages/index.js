import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from "../components/navMenu/navMenu"
import PostThumbnail from "../components/postThumbnail/postThumbnail"
import Footer from "../components/footer/footer"
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from "gatsby"

//query
export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          content
          date
          description
          image
          title
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
    <main>
      <title>Home Page</title>
      <NavMenu></NavMenu>
      <Container>
        <Row>
      {posts &&
        posts.map((post) => {
          // destructuring data object
          const {content, date, description, image, title} = post.node.frontmatter;
          return (
            // returning posts components with destructured data
            <Col lg={4} md={6} sm={12}>
              <PostThumbnail 
                postThumbnailImage={image}
                postThumbnailTitle={title}
                postThumbnailDescription={description}
                postThumbnailDate={date}
                
              />
            </Col>
          );
        })}
        </Row>
      </Container>
      <Footer></Footer>
    </main>
  )
}

export default IndexPage

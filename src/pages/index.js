import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from "../components/navMenu/navMenu"
import Footer from "../components/footer/footer"
import { Container } from 'react-bootstrap';
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
      {posts &&
        posts.map((post) => {
          // destructuring data object
          const {content, date, description, image, title} = post.node.frontmatter;
          return (
            // returning posts components with destructured data
            <div>
              <h1>{title}</h1>
              <p>{date}</p>
              <p>{description}</p>
              <p>{content}</p>
              <img src={image} alt="" />
            </div>
          );
        })}
      </Container>
      <Footer></Footer>
    </main>
  )
}

export default IndexPage

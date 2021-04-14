import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout/layout'
import {Row, Col } from 'react-bootstrap';
import CoffeeBreakThumbnail from '../components/coffeeBreakThumbnail/coffeeBreakThumbnail'


const CoffeeBreak = (props) => {

    const data = useStaticQuery(graphql`
    {
      allFile(filter: {sourceInstanceName: {eq: "coffeeBreak"}}) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                coffeeBreak_audio
                coffeeBreak_date(formatString: "MMMM DD YYYY")
                coffeeBreak_image
                coffeeBreak_title
              }
              id
            }
          }
        }
      }
    }
  `)

  const coffeeBreakPosts = data.allFile.edges;
    console.log(coffeeBreakPosts);
    return (
        <Layout>
            <Row>    
                {coffeeBreakPosts &&
                coffeeBreakPosts.map((coffeeBreakPost) => {
                // destructuring data object
                const { frontmatter} = coffeeBreakPost.node.childMarkdownRemark;
                return (
                    // returning posts components with destructured data
                    <Col lg={4} md={4} sm={12} key={coffeeBreakPost.node.id}>
                    <CoffeeBreakThumbnail
                        postThumbnailStyles="postThumbnailStyles"
                        coffeeBreakThumbnailImage={frontmatter.coffeeBreak_image}
                        coffeeBreakThumbnailHeader={frontmatter.title}
                        // coffeeBreakThumbnailDescription={excerpt}
                        coffeeBreakThumbnailDate={frontmatter.coffeeBreak_date}
                        coffeeBreakAudio={frontmatter.coffeeBreak_audio}
                    />
                    </Col>
                );
                })}
        </Row>
        </Layout>
    )
}

export default CoffeeBreak
import React from 'react'
// import PostThumbnail from '../postThumbnail/postThumbnail'
import {Row, Col } from 'react-bootstrap';
import { graphql } from "gatsby"


// export const query = graphql`
//   {
//     allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
//       edges {
//         node {
//           childMarkdownRemark {
//             frontmatter {
//               title
//               tag
//               image
//               date
//               author
//             }
//             excerpt(pruneLength: 300)
//             fields {
//               slug
//             }
//             html
//           }
//         }
//       }
//     }
//   }
// `
const postList = (props) => {
    // console.log(props.data.allFile.edges);
    // const posts = props.data.allFile.edges;
    return (
        <Row>
        {/* {posts &&
        posts.map((post) => {
          // destructuring data object
          const { frontmatter, fields, id, excerpt} = post.node.childMarkdownRemark;
          return (
            // returning posts components with destructured data
            <Col lg={3} md={4} sm={12} key={id}>
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
        })} */}
        </Row>
    )
}
export default postList;
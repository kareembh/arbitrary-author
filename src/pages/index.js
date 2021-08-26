import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import PostThumbnail from "../components/postThumbnail/postThumbnail"
import Layout from "../components/layout/layout"
import { useStaticQuery, graphql } from "gatsby"

// markup
const IndexPage = (props) => {

  const data = useStaticQuery(graphql`
    {
      allFile(filter: {sourceInstanceName: {eq: "blog"}}, sort: {fields: childrenMarkdownRemark___frontmatter___blog_date, order: DESC}) {
        edges {
          node {
            id
            childMarkdownRemark {
              fields {
                slug
              }
              excerpt(pruneLength: 300)
              html
              frontmatter {
                author
                blog_date(formatString: "MMMM DD YYYY")
                heading
                image
                tag
                title
              }
            }
          }
        }
      }
    }
  `)
  //assigning an array of data objects to the posts variable
  const posts = data.allFile.edges;
  
  return (
      <Layout>
        <div>
          <div lg={12} md={12} sm={12}>
            <PostThumbnail
              postThumbnailStyles="featuredPost"
              postThumbnailImage={posts[0].node.childMarkdownRemark.frontmatter.image}
              postThumbnailTitle={posts[0].node.childMarkdownRemark.frontmatter.title}
              postThumbnailDescription={posts[0].node.childMarkdownRemark.excerpt}
              postThumbnailDate={posts[0].node.childMarkdownRemark.frontmatter.blog_date}
              postThumbnailSlug={posts[0].node.childMarkdownRemark.fields.slug}
              postThumbnailAuthor={posts[0].node.childMarkdownRemark.frontmatter.author}
              postThumbnailTag={posts[0].node.childMarkdownRemark.frontmatter.tag}
            />
          </div>
        </div>
        <div>    
        {posts &&
        posts.slice(1).map((post) => {
          // destructuring data object
          const { frontmatter, fields, excerpt} = post.node.childMarkdownRemark;
          return (
            // returning posts components with destructured data
            <div lg={4} md={4} sm={12} key={post.node.id}>
              <PostThumbnail
                postThumbnailStyles="postThumbnailStyles"
                postThumbnailImage={frontmatter.image}
                postThumbnailTitle={frontmatter.title}
                postThumbnailDescription={excerpt}
                postThumbnailDate={frontmatter.blog_date}
                postThumbnailSlug={fields.slug}
                postThumbnailAuthor={frontmatter.author}
                postThumbnailTag={frontmatter.tag}
              />
            </div>
          );
        })}
        </div>
      </Layout>
    
  )
}

export default IndexPage

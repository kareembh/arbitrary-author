import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import "./blogPost.scss"


export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="blogPostStyle">
        <h1>{post.frontmatter.title}</h1>
        <p>Posted by <b>{post.frontmatter.author}</b> on {post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        date
        tag
        author
      }
    }
  }
`
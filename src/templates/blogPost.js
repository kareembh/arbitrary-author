import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div style={{margin: `0 auto`, maxWidth: 800}}>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
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
      }
    }
  }
`
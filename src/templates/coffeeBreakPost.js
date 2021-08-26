import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import "./coffeeBreakPost.scss"


export default function coffeeBreakPost({ data }) {
  const post = data.markdownRemark
  console.log(post);
  return (
    <Layout>
      <div className="coffeeBreakPostStyle">
        <h1></h1>
        <p>Posted by <b></b> on </p>
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
        coffeeBreak_title
        coffeeBreak_image
        coffeeBreak_date
        coffeeBreak_audio
        tag
      }
    }
  }
`
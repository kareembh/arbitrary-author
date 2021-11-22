import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/src/styles.scss'
// import "./coffeeBreakPost.scss"


export default function coffeeBreakPost({ data }) {
  const post = data.markdownRemark;
  console.log(post);
  return (
    <Layout>
      <div className="coffeeBreakPostStyle">
        <h1>{post.frontmatter.coffeeBreak_title}</h1>
        <p>Posted on {post.frontmatter.coffeeBreak_date}</p>
        <img src={post.frontmatter.coffeeBreak_image} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <AudioPlayer  
          src={post.frontmatter.coffeeBreak_audio}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
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
        coffeeBreak_date(formatString: "MMMM DD YYYY")
        coffeeBreak_audio
        tag
      }
    }
  }
`
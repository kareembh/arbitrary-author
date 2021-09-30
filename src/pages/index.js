import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import PostThumbnail from "../components/postThumbnail/postThumbnail"
import Layout from "../components/layout/layout"
import {Row, Col } from 'react-bootstrap';
import { useStaticQuery, graphql } from "gatsby"
import { layoutGenerator } from 'react-break';


const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});

const OnMobile = layout.is('mobile');
const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');
const OnDesktop = layout.is('desktop');

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
        <OnAtLeastTablet>
          <Row>
            <Col lg={12} md={12} sm={12}>
                <PostThumbnail
                  lg={12} md={12} sm={12}
                  postThumbnailStyles="featuredPost"
                  postThumbnailImage={posts[0].node.childMarkdownRemark.frontmatter.image}
                  postThumbnailTitle={posts[0].node.childMarkdownRemark.frontmatter.title}
                  postThumbnailDescription={posts[0].node.childMarkdownRemark.excerpt}
                  postThumbnailDate={posts[0].node.childMarkdownRemark.frontmatter.blog_date}
                  postThumbnailSlug={posts[0].node.childMarkdownRemark.fields.slug}
                  postThumbnailAuthor={posts[0].node.childMarkdownRemark.frontmatter.author}
                  postThumbnailTag={posts[0].node.childMarkdownRemark.frontmatter.tag}
                />
              </Col>
            </Row> 
        <Row>   
        {posts &&
        posts.slice(skip).map((post) => {
          // destructuring data object
          const { frontmatter, fields, excerpt} = post.node.childMarkdownRemark;
          return (
            // returning posts components with destructured data
            <Col lg={4} md={4} sm={12} key={post.node.id}>
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
            </Col>
          );
        })}
        </Row>
        </OnAtLeastTablet>
        <OnAtMostPhablet>
        <Row>   
        {posts &&
        posts.map((post) => {
          // destructuring data object
          const { frontmatter, fields, excerpt} = post.node.childMarkdownRemark;
          return (
            // returning posts components with destructured data
            <Col lg={4} md={4} sm={6} xs={12} key={post.node.id}>
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
            </Col>
          );
        })}
        </Row>
        </OnAtMostPhablet>
      </Layout>
    
  )
}

export default IndexPage

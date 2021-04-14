module.exports = {
  siteMetadata: {
    title: "arbitrary-author",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/static/assets`,
        
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `podcasts`,
        path: `${__dirname}/podcasts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `coffeeBreak`,
        path: `${__dirname}/coffeeBreak`,
      },
    },
    'gatsby-transformer-remark',
  ],
};

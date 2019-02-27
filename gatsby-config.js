module.exports = {
  siteMetadata: {
    title: `Vince Picone – Web Developer`,
    description: `Vince is a web developer at IBM beautiful Austin, TX. His passion is design systems, front-end architecture and new web technologies.`,
    author: `@vincepicone`,
    siteUrl: `https://vincepic.one`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-77141894-3`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vince Picone – Web Developer`,
        short_name: `Vince Picone`,
        start_url: `/`,
        background_color: `#F5F7FA`, // grey-050
        theme_color: `#ff6b7c`, // blue-900
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
        include_favicon: true,
        lang: `en-US`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap` // only generated on build
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
  ]
};

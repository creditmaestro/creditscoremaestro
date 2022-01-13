require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: `Credit Score Maestro`,
    description: `Credit score maestro website.`,
    author: `JW Design`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: process.env.MAILCHIMP_ENDPOINT, 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `credit-forms`,
        path: `${__dirname}/content/credit-forms`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `credit-library`,
        path: `${__dirname}/content/credit-library`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Credit-Score-Maestro`,
        short_name: `csm`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options:
        {
          spaceId: '36aza68pcglw',
          accessToken: 'LkC7-Sbd8-gEddYbJpKWp8IrTByISnesVQev55OhSv0',
        }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

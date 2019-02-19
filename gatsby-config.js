module.exports = {
  siteMetadata: {
    title: `Christine Kanownik`,
    description: `Digital + Content Marketing`,
    siteUrl: `https://kanownik.co`,
    menuLinks: [
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Resume',
        link: '/resume',
      },
      {
        name: 'Portfolio',
        link: '/portfolio',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `portfolio-items`,
        path: `${__dirname}/src/portfolio-items`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/pdf`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Mono', 'monospace'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christine Kanownik Portfolio`,
        short_name: `CK Portfolio`,
        start_url: `/`,
        background_color: `#B1B0E5`,
        theme_color: `#B1B0E5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [`gatsby-remark-responsive-iframe`, 'gatsby-remark-images'],
      },
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-offline',
  ],
}

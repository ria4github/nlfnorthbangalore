module.exports = {
  siteMetadata: {
    title: `NLF Yelahanka`,
    description: `We are group of people from all walks of life who are being
    transformed by Jesus Christ passionate about sharing his love
    by caring for each other.`,
    author: `@nlfyelahanka`,
    titleTemplate: "%s · NLFY",
    url: "https://www.nlfyelahanka.com", // No trailing slash allowed!
    image: "./src/images/team.jpg",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

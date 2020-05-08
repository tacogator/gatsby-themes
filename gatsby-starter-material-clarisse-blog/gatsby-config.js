module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Launch a blog today. This minimal ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-material-clarisse-blog`,
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Contact`,
            slug: `/contact`,
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

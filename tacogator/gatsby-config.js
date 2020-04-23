module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/TopLayout.js`),
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/nacho_codes`,
          },
          {
            name: `Github`,
            url: `https://github.com/tacogator`,
          },
        ],
      },
    },
  ],
  siteMetadata: {
    siteTitle: `Tacogator`,
    siteTitleAlt: `SaaS boilerplate and starters`,
    siteHeadline: `SaaS boilerplate and starters`,
    siteUrl: `https://tacogator.netlify.app/`,
    siteDescription: `Build MVP fast with `,
    siteLanguage: `en`,
    siteImage: `/taco-truck-banner.png`,
    author: `@nacho_codes`,
  },
}

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Clarrise McClellan`,
    // Default title of the page
    siteTitleAlt: `Clarrise McClellan - Material-ui blog template for Gatsby`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Material-ui blog template for Gatsby`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://gatsby-theme-clarisse.netlify.app/`,
    // Used for SEO
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `Tacogator`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/lekoarts_de`,
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/lekoarts.de/`,
      },
    ],
    // Navigation links
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
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/TopLayout.js`),
      },
    },
    `gatsby-plugin-material-ui`,
    `@lekoarts/gatsby-theme-minimal-blog-core`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-sharp`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

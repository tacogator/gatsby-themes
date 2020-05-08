module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Clarrise - Gatsby blog template with Material-UI`,
    // Default title of the page
    siteTitleAlt: `Clarrise - Gatsby blog template with Material-UI`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Material-UI blog template for Gatsby`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://gatsby-theme-clarisse.netlify.app/`,
    // Used for SEO
    siteDescription: `Clarrise - Gatsby blog template with Material-UI`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
    // Twitter Handle
    author: `Tacogator`,
    // Navigation links
    navigation: [
      {
        title: `About`,
        slug: `/about`,
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
  ],
}

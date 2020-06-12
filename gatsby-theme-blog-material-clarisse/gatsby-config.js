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
        title: `Home`,
        slug: `/`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
      {
        title: `Contact`,
        slug: `/contact`,
      },
    ],
    externalLinks: [
      {
        name: `twitter`,
        url: `https://twitter.com/nacho_codes`,
      },
      {
        name: `github`,
        url: `https://github.com/tacogator/gatsby-themes`,
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
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us20.list-manage.com/subscribe/post?u=786601ed01260900f7a6d1546&amp;id=4e6bf36386",
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    `gatsby-plugin-material-ui`,
    `@lekoarts/gatsby-theme-minimal-blog-core`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
  ],
}

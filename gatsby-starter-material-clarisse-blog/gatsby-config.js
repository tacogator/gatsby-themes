module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Clarrise McClellan`,
    // Default title of the page
    siteTitleAlt: `Gatsby blog template with material-ui`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Gatsby blog template with material-ui`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://gatsby-theme-clarisse.netlify.app/`,
    // Used for SEO
    siteDescription: `Launch a blog with this Gatsby starter. Minimal design, tag support, Material-UI components.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `Tacogator`,
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
      resolve: `gatsby-theme-material-clarisse-blog`,
      options: {
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
      },
    }
  ],
};

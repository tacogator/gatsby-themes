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
      {
        name: 'Newsletter',
        url: `https://duckduckgo.com`,
        type: 'cta'
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-material-clarisse-blog`,
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clarrise - Example Gatsby blog`,
        short_name: `Clarrise - Example Gatsby blog`,
        description: `Launch a blog today with Clarrise template.  Gatsby starter theme`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#00897B`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};

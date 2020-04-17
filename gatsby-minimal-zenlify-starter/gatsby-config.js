require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Clarisse`,
    siteTitleAlt: `Zenlify microblog - Gatsby Theme`,
    siteHeadline: `Zenlify microblog - Gatsby Theme`,
    siteUrl: `https://gatsby-zenlify.netlify.app/`,
    siteDescription: `Zenlify gatsby theme - minimal markdown editor for Gatsby`,
    siteLanguage: `en`,
    siteImage: `/taco-truck-banner.png`,
    author: `@nacho_codes`,

  },
  plugins: [
    `gatsby-mdx-zenlify-editor`,
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
            url: `https://github.com/tacogator/gatsby-themes`,
          },          
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zenlify - minimal example blog`,
        short_name: `Zenlify microblog`,
        description: `Git-based microblogging with Gatsby-zenlify built-in editor`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#00897B`,
        display: `standalone`,
        icons: [
          {
            src: `/taco-truck-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/taco-truck-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}

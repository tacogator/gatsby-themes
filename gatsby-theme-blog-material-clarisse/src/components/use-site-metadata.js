import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteHeadline
          siteUrl
          siteDescription
          siteLanguage
          siteImage
          author
          navigation {
            title
            slug
          }
          externalLinks {
            name
            url
            type
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
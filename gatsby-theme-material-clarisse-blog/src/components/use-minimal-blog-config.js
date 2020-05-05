import { graphql, useStaticQuery } from "gatsby"

export default function useMinimalBlogConfig() {
  const data = useStaticQuery(graphql`
    query {
      minimalBlogConfig {
        basePath
        blogPath
        postsPath
        pagesPath
        tagsPath
        externalLinks {
          name
          url
        }
        navigation {
          title
          slug
        }
        showLineNumbers
      }
    }
  `)

  return data.minimalBlogConfig
}

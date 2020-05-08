import { MDXRenderer } from "gatsby-plugin-mdx"
import { Box, Typography, Container, useTheme } from "@material-ui/core"
import Img from "gatsby-image"
import React from "react"
import ItemTags from "./item-tags"
import SEO from "./seo"
import { useUtilStyles } from "./utils"
// type PostProps = {
//   data: {
//     post: {
//       slug: string
//       title: string
//       date: string
//       tags?: {
//         name: string
//         slug: string
//       }[]
//       description?: string
//       body: string
//       excerpt: string
//       timeToRead?: number
//       banner?: {
//         childImageSharp: {
//           resize: {
//             src: string
//           }
//         }
//       }
//     }
//   }
// }

export default function Post({ data: { post } }) {
  const theme = useTheme()
  return (
    <>
      <SEO
        title={post.title}
        description={post.description ? post.description : post.excerpt}
        image={post.banner ? post.banner.childImageSharp.fluid.src : undefined}
        pathname={post.slug}
      />
      <article>
        <Container maxWidth="lg" className={useUtilStyles().topSpacer}>
          <Typography variant="h1">{post.title}</Typography>
          <Box marginTop={4} marginBottom={4}>
            <time>{post.date}</time>
            {post.timeToRead && (
              <span>
                {` — `}
                {post.timeToRead} min read
              </span>
            )}
            {post.tags && (
              <React.Fragment>
                {` — `} Tags&nbsp;
                <ItemTags size="medium" tags={post.tags} />
              </React.Fragment>
            )}
          </Box>
          {post.banner && (
            <Img fluid={post.banner.childImageSharp.fluid} alt={post.title} />
          )}
        </Container>

        <Container
          maxWidth="md"
          style={{
            paddingTop: `${theme.spacing(8)}px`,
          }}
        >
          <section>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </Container>
      </article>
    </>
  )
}

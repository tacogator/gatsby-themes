import React from "react"
import { Typography, Box, Container } from "@material-ui/core"
import Link from "./Link"
import useMinimalBlogConfig from "./use-minimal-blog-config"
import Listing from "./listing"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"
import { useUtilStyles, SectionDivider } from "./utils"

type TagProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags: {
      name: string
      slug: string
    }[]
    banner: any
  }[]
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    slug: string
    name: string
    [key: string]: any
  }
}

const Tag = ({ posts, pageContext }: TagProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <>
      <SEO title={`Tag: ${pageContext.name}`} />
      <Container maxWidth="md" className={useUtilStyles().topSpacer} >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h3" component="h2" gutterBottom>{pageContext.name}</Typography>
          <Link to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
            View all tags
          </Link>
        </Box>
        <SectionDivider />
        <Listing posts={posts} />
      </Container>
    </>
  )
}

export default Tag

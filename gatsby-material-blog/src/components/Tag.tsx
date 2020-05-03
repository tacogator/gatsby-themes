import React from "react"
import { Box, Container } from "@material-ui/core"
import Link from "./Link"
import useMinimalBlogConfig from "./use-minimal-blog-config"
import Listing from "./listing"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"
import { useUtilStyles } from "./utils"

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
      <Container maxWidth="md" className={useUtilStyles().topSpacer}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h2>{pageContext.name}</h2>
          <Link to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
            View all tags
          </Link>
        </Box>
        <Listing posts={posts} className="foo" />
      </Container>
    </>
  )
}

export default Tag

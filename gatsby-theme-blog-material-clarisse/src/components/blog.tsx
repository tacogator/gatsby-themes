import React from "react"
import { Typography, Container } from "@material-ui/core"
import { Link } from "gatsby"
import Listing from "./listing"
import useMinimalBlogConfig from "./use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"
import { SectionDivider, useUtilStyles } from "./utils"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    banner?: any
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

export default function ({ posts }: PostsProps) {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <>
      <SEO title="Blog" />
      <section>
        <Container maxWidth="md" className={useUtilStyles().topSpacer}>
          <Typography variant="h3" component="h2" gutterBottom>
            All articles
          </Typography>
          <SectionDivider />
          <Listing posts={posts} />
        </Container>
      </section>
    </>
  )
}

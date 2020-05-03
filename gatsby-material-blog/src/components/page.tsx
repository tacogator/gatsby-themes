import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Typography, Container } from "@material-ui/core"
import Img from "gatsby-image"
import SEO from "./seo"
import { useUtilStyles } from "./utils"

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
}

const Page = ({ data: { page } }: PageProps) => (
  <>
    <SEO title={page.title} description={page.excerpt} />
    <Container maxWidth="md" className={useUtilStyles().topSpacer}>
      <Typography variant="h1">{page.title}</Typography>
      <section>
        <MDXRenderer>{page.body}</MDXRenderer>
      </section>
    </Container>
  </>
)

export default Page

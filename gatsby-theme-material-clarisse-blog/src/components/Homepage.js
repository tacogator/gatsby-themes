import React from "react"
import { Box, Container, Typography } from "@material-ui/core"
import SEO from "./seo"
import Listing from "./listing"
import Link from "./Link"
import { SectionDivider, useUtilStyles } from "./utils"
import Hero from "../shadow/hero"

export default function Homepage({ posts }) {
  return (
    <>
      <SEO />
      <Container maxWidth="lg" className={useUtilStyles().topSpacer}>
        <section>
          <Hero posts={posts} />
        </section>
        <section className={useUtilStyles().topSpacer}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h3" component="h2" gutterBottom>
              Latest
            </Typography>
            <Link to="blog">View all</Link>
          </Box>
          <SectionDivider />
          <Listing posts={posts} />
        </section>
      </Container>
    </>
  )
}

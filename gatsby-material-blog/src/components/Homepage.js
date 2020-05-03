import React from "react"
import { Container, Typography } from "@material-ui/core"
import Listing from "./listing"
import { SectionDivider, useUtilStyles } from "./utils"
import Hero from "../shadow/hero"

export default function Homepage({ posts }) {
  return (
    <Container maxWidth="lg" className={useUtilStyles().topSpacer}>
      <section>
        <Hero posts={posts} />
        <SectionDivider />
      </section>
      <section>
        <Typography variant="h3">Latest</Typography>
        <Listing posts={posts} />
      </section>
    </Container>
  )
}

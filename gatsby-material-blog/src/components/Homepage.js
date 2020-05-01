import React from "react"
import { Container, useTheme} from "@material-ui/core"

import Listing from "./listing"
import SectionDivider from "./section-divider"

import Hero from "../shadow/hero"
export default function Homepage({ posts }) {
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      //className={theme.mixins.toolbar}
      style={{
        paddingTop: `${theme.spacing(12)}px`,
      }}
    >
      <div>
        <Hero />
        <SectionDivider/>
      </div>
      <Listing posts={posts} showTags={false} />
    </Container>
  )
}
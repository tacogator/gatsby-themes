import React from "react"
import { Container, useTheme} from "@material-ui/core"

import Listing from "./listing"

import Hero from "../shadow/hero"
export default function Homepage({ posts }) {
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: `${theme.spacing(12)}px`,
      }}
    >
      <div>
        <Hero />
      </div>
      <Listing posts={posts} showTags={false} />
    </Container>
  )
}

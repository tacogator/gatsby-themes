import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Container } from "@material-ui/core"

//import TopLayout from "./src/TopLayout"
import {
  DialogEvents,
  DialogSimple,
  DialogSkeleton,
} from "./src/examples/Dialog"
import {
  AppBarMobile,
  MobileBasicEx,
  DesktopBasicEx,
} from "./src/examples/AppBar"

const shortcodes = {
  DialogEvents,
  DialogSimple,
  AppBarMobile,
  MobileBasicEx,
  DesktopBasicEx,
  DialogSkeleton,
}

export const wrapPageElement = ({ element, props }) => (
  <MDXProvider components={shortcodes}>
    {element}
    {/* <Container
      maxWidth="md"
      style={{ paddingLeft: "0px", paddingRight: "0px" }}
    >
      {element}
    </Container> */}
  </MDXProvider>
)

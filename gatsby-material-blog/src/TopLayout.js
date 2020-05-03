import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { CssBaseline, ThemeProvider } from "@material-ui/core"

import Navbar from "./components/Navbar"
import theme from "./theme"
import MarkdownStyles from "./shadow/markdown-styles"
export default function TopLayout(props) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar location={props.location} />
        <MDXProvider components={({ ...MarkdownStyles })}>
          <main>{props.children}</main>
        </MDXProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

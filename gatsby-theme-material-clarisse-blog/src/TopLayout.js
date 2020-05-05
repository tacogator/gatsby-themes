import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { CssBaseline, ThemeProvider } from "@material-ui/core"

import Navbar from "./components/Navbar"
import theme from "./theme"
import MarkdownStyles from "./shadow/markdown-styles"
import Footer from "./shadow/footer"

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MDXProvider components={{ ...MarkdownStyles }}>
          <div style={{ display: "flex", flexFlow: "column", height: "100vh" }}>
            <Navbar location={props.location} />
            <main style={{ flexGrow: 1 }}>{props.children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </MDXProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

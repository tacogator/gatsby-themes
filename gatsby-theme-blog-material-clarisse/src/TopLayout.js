import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import "./components/layout.css"
import Navbar from "./components/Navbar"
import theme, { GlobalCss } from "./theme"
import MarkdownStyles from "./shadow/markdown-styles"
import Footer from "./shadow/footer"

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalCss />
        <MDXProvider components={{ ...MarkdownStyles }}>
          <div style={{minHeight: "100%", display: "flex", flexFlow: "column"}}>
            <Navbar location={props.location} />
            <main style={{flexGrow: 1}}>{props.children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </MDXProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

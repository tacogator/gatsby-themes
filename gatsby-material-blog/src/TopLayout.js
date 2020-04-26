import React from "react"
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core"

import Navbar from "./components/Navbar"
import theme from "./theme"

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container
          maxWidth="md"
          style={{
            paddingTop: "80px",
          }}
        >
          <main>{props.children}</main>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

import React from "react"
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core"
import theme from "./theme"

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          maxWidth="md"
          style={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          {props.children}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

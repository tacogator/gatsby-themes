import React from "react"
import { Helmet } from "react-helmet"
import {
  Slide,
  CssBaseline,
  ThemeProvider,
  Container,
  Box,
} from "@material-ui/core"
import theme from "./theme"
import BearAppBar from "./components/widgets/BearAppBar"
import logo from "./tacogator-logo.png"

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BearAppBar
          brandingLogo={
            <Slide direction="right" mountOnEnter={true} in={true}>
              <img src={logo} />
            </Slide>
          }
          brandingText={<img src="/logo-text.png" />}
          mobileMenu={<div>mobile</div>}
          desktopMenu={<>Contact us</>}
        />
        <Container className="foo" maxWidth="md" style={{ paddingTop: "150px", paddingLeft: "0px", paddingRight: "0px" }}>
          {props.children}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

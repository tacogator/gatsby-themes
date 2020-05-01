import React from "react"

import Link from "./Link"
import {
  Button,
  Fade,
  Typography,
  makeStyles,
  useScrollTrigger,
  Hidden,
  Box,
  Container,
} from "@material-ui/core"

import BearAppBar, { SlimToolbar } from "./bear/BearAppBar"

export default function ({ location }) {
  const isHome = location.pathname === "/" || false
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 118 })

  return (
    <>
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box><Hidden only={["xs", "sm", "md"]}>Social CTA</Hidden></Box>
        <DesktopBranding />

        <Button color="default" variant="text">
          Newsletter
        </Button>
      </Container>
      <BearAppBar
        position={scrolled ? "sticky" : "relative"}
        desktopCenter={
          <>
            <DesktopMenu />
          </>
        }
        mobileMenu={
          <>
            <Button size="small">START HERE</Button>
            <Button size="small">ABOUT</Button>
            <Button size="small">CONTACT</Button>
          </>
        }
        rightCTA={
          <Fade in={true} timeout={1200}>
            <Button color="default" variant="contained">
              Subscribe
            </Button>
          </Fade>
        }
      />
    </>
  )
}

export const DesktopMenu = props => (
  <SlimToolbar className={useStyles().menu}>
    <Button size="small">START HERE</Button>
    <Button size="small">ABOUT</Button>
    <Button size="small">CONTACT</Button>
  </SlimToolbar>
)

const DesktopBranding = props => (
  <Typography
    variant="h1"
    color="textPrimary"
    style={{ margin: "2.5rem 0rem", fontSize: "2.75rem" }}
  >
    <Link to="/" color="inherit" style={{ textDecoration: "none" }}>
      Clarisse McClellan
    </Link>
  </Typography>
)

const useStyles = makeStyles(theme => ({
  menu: {
    "& > button": {
      marginRight: theme.spacing(3),
    },
    "& > button:last-child": {
      marginRight: theme.spacing(0),
    },
  },
}))

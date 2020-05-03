import React, { useState } from "react"
import {
  Button,
  IconButton,
  Fade,
  Typography,
  useScrollTrigger,
  Hidden,
  Box,
  Container,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"

import Link from "./Link"
import BearAppBar from "./bear/BearAppBar"
import { SideMenu, DesktopMenu } from "./Menus"

export default function ({ location }) {
  const [open, setMenuState] = useState(false)

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
        <Box>
          <Hidden only={["xs", "sm", "md"]}>{Social_CTA()}</Hidden>
        </Box>
        <DesktopBranding />

        <Button color="default" variant="text">
          Newsletter
        </Button>
      </Container>
      <BearAppBar
        position={scrolled ? "sticky" : "relative"}
        desktopCenter={<DesktopMenu />}
        mobileMenu={
          <IconButton
            edge="start"
            color="secondary"
            onClick={() => setMenuState(true)}
          >
            <Menu />
          </IconButton>
        }
        rightCTA={
          <Fade in={true} timeout={1200}>
            <Button color="secondary" variant="contained">
              Subscribe
            </Button>
          </Fade>
        }
      />
      <SideMenu open={open} onClose={() => setMenuState(false)} />
    </>
  )
}

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

//TBD
const Social_CTA = props => <div></div>

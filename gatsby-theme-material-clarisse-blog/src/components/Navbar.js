import React, { useState } from "react"
import {
  Button,
  IconButton,
  Fade,
  Typography,
  Hidden,
  Box,
  Container,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"

import Link from "./Link"
import BearAppBar from "./bear/BearAppBar"
import { SideMenu, DesktopMenu } from "./Menus"
import SocialLinks from "./social-links"
import CtaOne from "./cta-one"

export default function ({ location }) {
  const [open, setMenuState] = useState(false)

  // optional var to handle non-home page rendering
  // const isHome = location.pathname === "/" || false

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
        <div>
          <Hidden only={["xs", "sm", "md"]}>
            <Box color="text.secondary" display="flex: 1 0 calc(25% - 10px)">
              <SocialLinks iconSize="small" />
            </Box>
          </Hidden>
        </div>
        <DesktopBranding />

        <div>
          <CtaOne/>
        </div>
      </Container>
      <BearAppBar
        position="sticky"
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

import React, { useState } from "react"
import {
  Button,
  IconButton,
  Fade,
  Hidden,
  Box,
  Container,
  makeStyles,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"

import BearAppBar from "./bear/BearAppBar"
import { SideMenu, DesktopMenu } from "./Menus"
import SocialLinks from "./social-links"
import CtaOne from "./cta-one"
import Branding from "../shadow/branding";

export default function ({ location }) {
  const [open, setMenuState] = useState(false)

  // optional var to handle non-home page rendering
  // const isHome = location.pathname === "/" || false
  const classes = useStyles()

  return (
    <>
      <Hidden mdDown>
        <Container maxWidth="xl" className={classes.navbar}>
          <div>
            <Hidden only={["xs", "sm", "md"]}>
              <Box color="text.secondary" display="flex: 1 0 calc(25% - 10px)">
                <SocialLinks iconSize="small" />
              </Box>
            </Hidden>
          </div>
          <div className={classes.center}>
            <Branding />
          </div>
          <div>
            <CtaOne />
          </div>
        </Container>
      </Hidden>
      <BearAppBar
        position="sticky"
        mobileBranding={<Branding mobile={true} />}
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



const useStyles = makeStyles(theme => ({
  navbar: {
    padding: theme.spacing(3, 2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > div": {
      flex: "1 0 0"
    },
    // "& > :last-child": {
    //   display: "flex",
    //   justifyContent: "flex-end",
    // },
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
}))

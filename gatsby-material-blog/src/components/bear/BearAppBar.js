import React from "react"

import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  makeStyles,
  withStyles,
  useScrollTrigger,
  Box,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"
const MinAppBar = withStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    borderTop: "1px solid #CFD8DC",
    borderBottom: "1px solid #CFD8DC",
  },
}))(AppBar)

export const SlimToolbar = withStyles(theme => ({
  root: {
    margin: 0,
    padding: `4px 0px`,
    minHeight: "48px",
  },
}))(Toolbar)

export default function BearAppBar({
  desktopBranding,
  desktopBrandingSmall,
  desktopCenter,
  desktopScrolled,
  mobileCenter,
  mobileScrolled,
  mobileBranding,
  desktopMenu,
  mobileMenu,
  rightCTA,
  leftCTA,
  isHome,
  ...rest
}) {
  const classes = useStyles()
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 100 })
  const trigger = scrolled || !isHome
  return (
    <MinAppBar {...rest} elevation={0}>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Hidden lgUp>
            <Menu />
          </Hidden>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          flexWrap="wrap"
          alignItems="center"
        >
          {desktopCenter && (
            <Hidden only={["xs", "sm"]}>{desktopCenter}</Hidden>
          )}
        </Box>
        <SlimToolbar className={classes.desktopMenu}>
          {/* <Hidden only={["xs", "sm"]}>{desktopMenu}</Hidden> */}
          {rightCTA}
        </SlimToolbar>
      </Container>
    </MinAppBar>
  )
}

const useStyles = makeStyles(theme => ({
  desktopMenu: {
    transition: "1s",
    "& > button": {
      marginRight: theme.spacing(2),
    },
    "& > button:last-child": {
      marginRight: theme.spacing(0),
    },
  },
}))

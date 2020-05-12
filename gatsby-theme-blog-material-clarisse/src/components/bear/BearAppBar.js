import React from "react"

import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  makeStyles,
  withStyles,
  Box,
  useScrollTrigger,
} from "@material-ui/core"

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
  mobileCenter,
  mobileBranding,
  desktopMenu,
  mobileMenu,
  rightCTA,
  leftCTA,
  isHome,
  ...rest
}) {
  const classes = useStyles()
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 120,
  })

  return (
    <MinAppBar {...rest} elevation={0}>
      <Container maxWidth="lg" className={classes.navbar}>
        <Box display="flex" flexWrap="nowrap" alignItems="center">
          {mobileMenu && <Hidden lgUp>{mobileMenu}</Hidden>}
          <Hidden only={["md", "lg", "xl"]}>{mobileBranding}</Hidden>
          <Hidden only={["xs", "sm", "md"]}>{scrolled && mobileBranding}</Hidden>
        </Box>
        {desktopCenter && (
          <Hidden only={["xs", "sm"]} className={classes.desktopCenterNav}>
            {desktopCenter}
          </Hidden>
        )}
        <SlimToolbar className={classes.desktopCTA}>{rightCTA}</SlimToolbar>
      </Container>
    </MinAppBar>
  )
}

const useStyles = makeStyles(theme => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > div": {
      flex: "1 0 0",
    },
  },
  desktopCenterNav: {
    justifyContent: "center",
  },

  desktopCTA: {
    justifyContent: "flex-end",
  },
}))

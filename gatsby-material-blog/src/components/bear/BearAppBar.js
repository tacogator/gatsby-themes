import React from "react"

import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  makeStyles,
  withStyles,
  useScrollTrigger,
  Typography,
} from "@material-ui/core"

const MinAppBar = withStyles(theme => ({
  root: {
    //minHeight: "64px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
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
  mobileBranding,
  desktopMenu,
  mobileMenu,
  leftCTA,
  isHome,
  ...rest
}) {
  const classes = useStyles()
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 })
  const trigger = scrolled || !isHome;
  return (
    <MinAppBar {...rest} elevation={trigger ? 1 : 0}>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: trigger ? "48px" : "72px",
          transition: "0.65s",
        }}
      >
        <SlimToolbar>
          {leftCTA && <Hidden only={["xs", "sm"]}>{leftCTA}</Hidden>}
        </SlimToolbar>
        <SlimToolbar>
          <Hidden only={["xs", "sm"]}>
            <Typography
              variant="h1"
              color="textPrimary"
              style={{ transition: "0.65s", fontSize: trigger ? "1.5rem" : "2.75rem" }}
            >
              {desktopBranding}
            </Typography>
          </Hidden>
          <Hidden mdUp>{mobileBranding}</Hidden>
        </SlimToolbar>
        <SlimToolbar className={classes.desktopMenu}>
          <Hidden only={["xs", "sm"]}>{desktopMenu}</Hidden>
          <Hidden mdUp>{mobileMenu}</Hidden>
        </SlimToolbar>
      </Container>
    </MinAppBar>
  )
}

const useStyles = makeStyles(theme => ({
  desktopMenu: {
    "& > button": {
      marginRight: theme.spacing(2),
    },
    "& > button:last-child": {
      marginRight: theme.spacing(0),
    },
  },
}))

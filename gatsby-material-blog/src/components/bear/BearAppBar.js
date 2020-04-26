import React from "react";

import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Box,
  makeStyles,
  withStyles,
} from "@material-ui/core";

const MinAppBar = withStyles((theme) => ({
  root: {
    minHeight: "64px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    // boxShadow: "none",
    borderTop: `1px solid  #607D8B`,
    borderBottom: "1px solid #CFD8DC",
  },
}))(AppBar);

export const SlimToolbar = withStyles((theme) => ({
  root: {
    margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
}))(Toolbar);

export default function BearAppBar({
  brandingLogo,
  brandingText,
  desktopMenu,
  mobileMenu,
  ...rest
}) {
  const classes = useStyles();
  return (
    <MinAppBar {...rest}>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SlimToolbar>
          {brandingLogo || Default_branding}
          <Hidden only={["xs", "sm"]}>{brandingText}</Hidden>
        </SlimToolbar>
        <SlimToolbar className={classes.desktopMenu}>
          <Hidden only={["xs", "sm"]}>{desktopMenu}</Hidden>
          <Hidden mdUp>{mobileMenu}</Hidden>
        </SlimToolbar>
      </Container>
    </MinAppBar>
  );
}

const Default_branding = (
  <Box
    style={{
      fontFamily: "Merriweather, Georgia, Cambria, serif",
      color: "#607D8B",
      fontSize: "2rem",
    }}
  >
    B
  </Box>
);

const useStyles = makeStyles((theme) => ({
  desktopMenu: {
    "& > button": {
      marginRight: theme.spacing(2),
    },
    "& > button:last-child": {
      marginRight: theme.spacing(0),
    },
  },
}));

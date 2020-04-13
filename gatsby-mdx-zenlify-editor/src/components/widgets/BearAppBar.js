import React from "react";

import {
  Grid,
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Box,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const MinAppBar = withStyles((theme) => ({
  root: {
    minHeight: "48px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
    borderTop: "2px solid #9f9f9f",
    // borderRight:0px solid #9f9f9f,
    borderBottom: "1px solid #dddddd",
    // borderLeft:0px solid #9f9f9f
  },
}))(AppBar);

export const SlimToolbar = withStyles((theme) => ({
  root: {
    margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
}))(Toolbar);

export default function BearAppBar({ branding, rightMenu, children }) {
  return (
    <MinAppBar>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justify="space-between">
          <Hidden mdDown>
            <Grid item md={1}>
              <SlimToolbar>{branding || Default_branding}</SlimToolbar>
            </Grid>
          </Hidden>
          <Grid item sm={12} md={10}>
            <Container
              maxWidth="md"
              style={{
                padding: 0,
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
              }}
            >
              {children}
            </Container>
          </Grid>
          <Grid item md={1}>
            <Hidden mdDown>{rightMenu || <div>&nbsp;</div>}</Hidden>
          </Grid>
        </Grid>
      </Container>
    </MinAppBar>
  );
}

const Default_branding = (
  <Box
    style={{
      fontFamily: "Merriweather, Georgia, Cambria, serif",
      color: "#607D8B",
      fontSize: "2.5rem",
    }}
  >
    Z
  </Box>
);

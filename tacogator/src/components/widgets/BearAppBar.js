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

import { Link } from "gatsby";

const MinAppBar = withStyles((theme) => ({
  root: {
    minHeight: "48px",
    color: theme.palette.text.primary,
    backgroundColor: "rgba(250,250,250, .98)",
    boxShadow: "none",
    borderTop: "3px solid #CDDC39",
    borderBottom: "1px solid #dddddd",
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
    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
      TG
    </Link>
  </Box>
);

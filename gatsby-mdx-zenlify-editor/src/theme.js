import { createMuiTheme, colors, withStyles } from "@material-ui/core";

const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 810,
  lg: 1280,
  xl: 1020,
};

// A custom theme for this app
const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: [
      "Lato",
      "Helvetica Neue",
      "Helvetica",
      "-apple-system",
      "san-serif",
    ],
    button: {
      textTransform: "none",
      fontSize: "1.125em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "700",
      fontFamily: "Lato,Helvetica neue,helvetica,sans-serif",
      lineHeight: "2rem",
      letterSpacing: "-0.05rem",
    },
    h6: {
      fontSize: "1.35rem",
      fontWeight: "700",
      fontFamily: "Lato,Helvetica neue,helvetica,sans-serif",
      lineHeight: "2rem",
      letterSpacing: "-0.05rem",
      "& a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
    body2: {
      fontSize: "1.08rem",
      fontWeight: "400",
    },
  },
  palette: {
    primary: {
      main: `#ef5350`,
    },
    secondary: {
      main: `#78909c`,
    },
    error: {
      main: "#00897b",
    },
    background: {
      default: `rgba(253, 254, 254 , 0.95)`,
    },
  },
  breakpoints: { values: breakpointValues },
});

export const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    ".MuiTypography-body1": {
      fontWeight: 400,
      fontSize: "1.125em",
    },
  },
})(() => null);
export default theme;

import { createMuiTheme, colors, withStyles } from "@material-ui/core"

const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 810,
  lg: 1280,
  xl: 1020,
}

// A custom theme for this app
const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    }
  },
  shape: {
    borderRadius: 8,
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
      fontSize: "1rem",
      boxShadow: "none",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "700",
      fontFamily: "Lato,Helvetica neue,helvetica,sans-serif",
      lineHeight: "2rem",
      letterSpacing: "-0.05rem",
    },
    h6: {
      fontSize: "1.45rem",
      fontWeight: "400",
      fontFamily: "Lato,Helvetica neue,helvetica,sans-serif",
      lineHeight: "2rem",
      "& a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
    body2: {
      fontSize: "1rem",
      fontWeight: "400",
    },
  },
  palette: {
    primary: {
      main: `#ef5350`,
    },
    secondary: {
      main: `#607d8b`,
    },
    text: {
      primary: "#263238",
      secondary: "#90a4ae",
    },
    error: {
      main: "#00897b",
    },
    background: {
      default: `rgba(253, 254, 254 , 0.95)`,
    },
  },
  breakpoints: { values: breakpointValues },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: "none",
      },
    },
  },
})


export default theme

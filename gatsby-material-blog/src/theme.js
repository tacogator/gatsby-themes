import { createMuiTheme } from "@material-ui/core"
require("typeface-cooper-hewitt")
require("typeface-playfair-display")

const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 810,
  lg: 1280,
  xl: 1920,
}

// A custom theme for this app
const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
  },
  shape: {
    borderRadius: 1,
  },
  typography: {
    fontFamily: [
      "Cooper Hewitt",
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
    h1: {
      fontSize: "2.25rem",
      fontWeight: "400",
      fontFamily: "Playfair Display, Serif",
      lineHeight: "2.5rem",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "500",
      fontFamily: "Cooper Hewitt,Helvetica neue,helvetica,sans-serif",
      lineHeight: "2rem",
      letterSpacing: "-0.05rem",
      marginBlockStart: "2.5rem",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: "400",
      fontFamily: "Playfair Display, Serif",
      lineHeight: "2.5rem",
      letterSpacing: "-0.05rem",
    },
    h6: {
      fontSize: "1.45rem",
      fontWeight: "500",
      fontFamily: "Playfair Display, Serif",
      lineHeight: "2rem",
      letterSpacing: "-0.05rem",
      "& a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
    body1: {
      fontSize: "1.15rem",
      fontWeight: "400",
      fontFamily: "Cooper Hewitt,Helvetica neue,helvetica,sans-serif",
      lineHeight: "2rem",
      marginBlockStart: "0.5rem",
      marginBlockEnd: "1rem",

    },
    body2: {
      fontSize: "1rem",
      fontWeight: "400",
    },
  },
  palette: {
    primary: {
      main: `#f44336`,
    },
    secondary: {
      main: `#37474F`,
    },
    text: {
      primary: "#263238",
      secondary: "#616161",
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
      // root: {
      //   borderWidth: "2px"
      // },
      contained: {
        boxShadow: "none",
      },
      outlined: {
        borderWidth: "2px",
      },
      outlinedPrimary: {
        borderWidth: "2px",
      },
      outlinedSecondary: {
        borderWidth: "2px",
      },
    },
  },
})

export default theme

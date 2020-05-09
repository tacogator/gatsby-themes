import { createMuiTheme, withStyles } from "@material-ui/core"
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
    borderRadius: 6,
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
      fontSize: "1.65rem",
      fontWeight: "600",
      fontFamily: "Cooper Hewitt,Helvetica neue,helvetica,sans-serif",
      //lineHeight: "2rem",
      letterSpacing: "-0.05rem",
      marginBlockStart: "2.5rem",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: "500",
      fontFamily: "Playfair Display, Serif",
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
      fontSize: "1.32rem",
      fontWeight: "400",
      fontFamily: "Cooper Hewitt,Helvetica neue,helvetica,sans-serif",
      lineHeight: "2.15rem",
      marginBlockStart: "0.80rem",
      marginBlockEnd: "1.15rem",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: "400",
    },
  },
  palette: {
    primary: {
      main: `#f44336`,
      light: `#fbe9e7`,
    },
    secondary: {
      main: `#37474F`,
      light: `#efebe9`,
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

export const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    'article p>a': { // use 'article' to restrict styles to post
      "&:visited": {
        color: theme.palette.grey[600],
      },
    },
    p: {
      ...theme.typography.body1,
    },
    blockquote: {
      padding: "1.5rem",
    },
    "blockquote p": {
      ...theme.typography.body1,
      textShadow: "0 1px white",
      fontSize: "1.55rem",
      color: theme.palette.text.secondary,
    },
    ol: {
      padding: "0.75rem 2rem",
    },
    ul: {
      padding: "0.75rem 2rem",
    },
    "ol li": {
      ...theme.typography.body1,
      lineHeight: "1.25",
    },
    "ul li": {
      ...theme.typography.body1,
      lineHeight: "1.25",
    },
    code: {
      fontFamily: "monospace",
      background: "#CFD8DC",
      padding: "4px",
      borderRadius: "4px",
      fontSize: "1.15rem",
    },
    "pre code": {
      background: "inherit",
    },
  },
})(() => null)

export default theme

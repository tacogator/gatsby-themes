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
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontSize: "1.125em",
    },
  },
  palette: {
    primary: {
      main: `#ff4e20`,
    },
    secondary: {
      main: `#19857b`,
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: `rgba(253, 254, 254 , 0.95)`,
    },
  },
  breakpoints: { values: breakpointValues },
})

export const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    ".MuiTypography-body1": {
      // fontFamily: "ISO",
      fontWeight: 400,
      fontSize: "1.125em",
    },
  },
})(() => null)
export default theme

import React from "react"
import {
  Button,
  Tooltip,
  Box,
  Theme,
  withStyles,
  createStyles,
  makeStyles,
  FormControl,
  FormHelperText,
  InputBase,
  Grid,
  Typography,
  Fade,
  Container,
} from "@material-ui/core"

import MailChimp from "./mailchimp"

export default function CtaMain(props) {
  return (
    <LightTooltip
      title={<MailChimp />}
      placement="bottom-end"
      leaveDelay={1000}
      interactive
      arrow={true}
    >
      <Fade in={true} timeout={1200}>
        <Button color="secondary" variant="contained">
          Subscribe
        </Button>
      </Fade>
    </LightTooltip>
  )
}

const LightTooltip = withStyles(theme => ({
  arrow: {
    color: theme.palette.grey[100],
  },
  tooltip: {
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    background: "transparent",
    padding: 0,
    //fontSize: 11,
    maxWidth: 550,
  },
}))(Tooltip)

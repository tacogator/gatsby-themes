import React, { useState } from "react"
import * as Validator from "validate.js"

import {
  Button,
  Box,
  Theme,
  withStyles,
  createStyles,
  makeStyles,
  InputBase,
  Grid,
  Typography,
  Container,
} from "@material-ui/core"

const emailConstraint = {
  from: {
    email: true,
  },
}

export default function ({ message, ctaLabel }) {
  const [{ email, sending, isEmailValid }, setState] = useState({
    email: "",
    isEmailValid: false,
    sending: false,
  })

  const _validate_email = e => {
    const emailText = e.target.value
    const errorObj = Validator.validate({ from: emailText }, emailConstraint)
    setState({ email: emailText, isEmailValid: !errorObj })
  }

  const classes = useStyles()
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="body2">Get useful <em>Dev notes</em> in your inbox.</Typography>
      <div className={classes.root}>
        <InputBase
          placeholder="Email"
          id="email"
          className={classes.inputWrapper}
          classes={{
            input: classes.input,
          }}
          label="Email"
          name="email"
          type="email"
          color="secondary"
          required
          value={email}
          error={!isEmailValid}
          onChange={_validate_email}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={sending || !isEmailValid}
          color="primary"
          //onClick={this.sendFeedback}
          className={classes.button}
        >
          {ctaLabel ? ctaLabel : "Subscribe"}
        </Button>
      </div>
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    padding: `${theme.spacing(4)}px ${theme.spacing(3)}px`,
    backgroundColor: theme.palette.grey[100]
  },
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  inputWrapper: {
    backgroundColor: `${theme.palette.grey[100]}`,
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRight: "none",
    borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
    flex: 1
  },
  input: {
    padding: `0px ${theme.spacing(1)}px`,
    height: "50px",
  },
  button: {
    height: "52px",
    borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
  }
}))

import React, { useState } from "react"
import * as Validator from "validate.js"

import {
  Button,
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
  Container,
} from "@material-ui/core"

const emailConstraint = {
  from: {
    email: true,
  },
}

export default function BearEmailSubscription({
  placeholder,
  message,
  postSubscribeMessage,
  subscribed,
  error,
  errorMessage,
  sending,
  ctaLabel,
  onSubmit,
}) {
  const [{ email, isEmailValid }, setState] = useState({
    email: "",
    isEmailValid: false,
  })

  const _validate_email = e => {
    const emailText = e.target.value
    const errorObj = Validator.validate({ from: emailText }, emailConstraint)
    setState({ email: emailText, isEmailValid: !errorObj })
  }

  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography variant="body2">{message || "Stay updated!"}</Typography>
      {subscribed && (
        <Typography variant="body2">
          <Box fontSize="0.85rem" fontWeight={500}>
            {postSubscribeMessage}
          </Box>
        </Typography>
      )}
      {error && (
        <Typography variant="body2">
          <Box fontSize="0.85rem" fontWeight={500}>
            {errorMessage}
          </Box>
        </Typography>
      )}
      {!subscribed &&
        !error && (
          <div className={classes.root}>
            <InputBase
              autoFocus
              placeholder={placeholder || "Enter your email"}
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
              disabled={sending}
              onChange={_validate_email}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={sending || !isEmailValid}
              color="primary"
              onClick={() => onSubmit({ email })}
              className={classes.button}
            >
              {ctaLabel ? ctaLabel : "Subscribe"}
            </Button>
          </div>
        )}
      <FormHelperText id="subscribe-helper-text">
        {!isEmailValid && email ? "Please enter a valid e-mail." : " "}
        {sending && email && "Sending..."}
      </FormHelperText>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    padding: `${theme.spacing(4)}px ${theme.spacing(3)}px`,
    backgroundColor: theme.palette.grey[100],
  },
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  inputWrapper: {
    backgroundColor: `${theme.palette.grey[100]}`,
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRight: "none",
    borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
    flex: 1,
    marginBlockStart: "0rem",
    marginBlockEnd: "0rem",
  },
  input: {
    padding: `0px ${theme.spacing(1)}px`,
    height: "50px",
  },
  button: {
    height: "52px",
    borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
  },
}))

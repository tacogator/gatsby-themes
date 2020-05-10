import React, { useState } from "react"
import * as Validator from "validate.js"

import {
  Button,
  Box,
  Theme,
  withStyles,
  createStyles,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core"

const emailConstraint = {
  from: {
    email: true,
  },
}

export default function ({message, ctaLabel}) {
  const [{ email, sending, isEmailValid }, setState] = useState({
    email: "",
    isEmailValid: false,
    sending: false
  })

  const _validate_email = e => {
    const emailText = e.target.value
    const errorObj = Validator.validate({ from: emailText }, emailConstraint)
    setState({ email: emailText, isEmailValid: !errorObj })
  }

  return (
    <Container maxWidth="sm">
      <TextField
        id="email"
        variant="outlined"
        label="Email"
        name="email"
        type="email"
        required
        //className={classes.textField}
        value={email}
        margin="none"
        // InputProps={{
        //   className: classes.input,
        // }}
        InputLabelProps={{
          shrink: true,
        }}
        // fullWidth
        error={!isEmailValid}
        onChange={_validate_email}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={sending || !isEmailValid}
        size="medium"
        color="primary"
        //onClick={this.sendFeedback}
      >
        {ctaLabel ? ctaLabel : "Subscribe"}
      </Button>
    </Container>
  )
}

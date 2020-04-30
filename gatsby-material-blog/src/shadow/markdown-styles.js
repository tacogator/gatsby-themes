import React from "react"
import { Typography } from "@material-ui/core"

const MarkdownStyles = {
  h2: props => <Typography variant="h2">{props.children}</Typography>,
  p: (props) => (
    <Typography {... props} color="textPrimary" variant="body1">
      {props.children}
    </Typography>
  ),
  wrapper: ({ children }) => <>{children}</>,
}

export default MarkdownStyles

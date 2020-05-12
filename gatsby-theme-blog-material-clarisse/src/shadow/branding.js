import React from "react"
import { Box } from "@material-ui/core"
import {Link} from "gatsby"

export default function Branding({ mobile }) {
  return (
    <Box
      color="text.primary"
      className="branding"
      style={{
        fontSize: mobile ? "1.15rem" : "2.25rem",
        fontWeight: 600,
      }}
    >
      <Link to="/" color="inherit" style={{ textDecoration: "none" }}>
        <i>Clarisse Blog Theme</i>
      </Link>
    </Box>
  )
}

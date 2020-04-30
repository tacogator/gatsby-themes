import React from "react"

import Link from "./Link"
import { Button, Typography } from "@material-ui/core"

import BearAppBar from "./bear/BearAppBar"

export default function ({ location }) {
  const isHome = location.pathname === "/" || false
  return (
    <BearAppBar
      isHome={isHome}
      desktopBranding={
        <Link to="/" color="inherit" style={{ textDecoration: "none" }}>
          Clarisse McClellan
        </Link>
      }
      desktopBrandingSmall={
        <Typography variant="h6">
          <Link to="/" color="inherit" style={{ textDecoration: "none" }}>
            Clarisse McClellan
          </Link>
        </Typography>
      }
      mobileBranding={
        <Typography variant="h1">
          <Link to="/">CM</Link>
        </Typography>
      }
      desktopMenu={
        <>
          <Button>Blof</Button>
        </>
      }
      mobileMenu={
        <>
          <Button>M</Button>
        </>
      }
    />
  )
}

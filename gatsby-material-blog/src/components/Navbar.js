import React from "react"

import Link from "./Link"
import { Button } from "@material-ui/core"

import BearAppBar from "./bear/BearAppBar"

export default function (props) {
  return (
    <BearAppBar
      brandingLogo={<Link to="/">F</Link>}
      brandingText="F"
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

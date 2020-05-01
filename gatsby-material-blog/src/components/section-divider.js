import React from "react"

import { Divider, useTheme } from "@material-ui/core"

export default function (props) {
  const theme = useTheme()
  return <Divider style={{ margin: `${theme.spacing(4)}px 0px` }} />
}

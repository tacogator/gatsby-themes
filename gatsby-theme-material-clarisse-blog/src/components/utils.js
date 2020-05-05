import React from "react"

import { Divider, useTheme, makeStyles } from "@material-ui/core"

export function SectionDivider(props) {
  const theme = useTheme()
  return <Divider style={{ margin: `${theme.spacing(4)}px 0px` }} />
}

export const useUtilStyles = makeStyles(theme => ({
  topSpacer: {
    paddingTop: theme.spacing(6),
  },
}))

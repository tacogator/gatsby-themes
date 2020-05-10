import { Divider, makeStyles, withStyles } from "@material-ui/core"

export const SectionDivider = withStyles(theme => ({
  root: {
    margin: theme.spacing(0.5, 0, 1, 0),
    backgroundColor: theme.palette.common.black
  },
}))(Divider)

export const useUtilStyles = makeStyles(theme => ({
  topSpacer: {
    marginTop: theme.spacing(6),
  },
}))

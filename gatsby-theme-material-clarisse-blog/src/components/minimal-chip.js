import {Chip, withStyles} from "@material-ui/core"

const MinimalChip = withStyles(theme => ({
    root: {
      fontSize: "1rem",
      background: theme.palette.primary.light
    },
    sizeSmall: {
      height: "18px",
      borderRadius: "8px",
      fontSize: "0.8rem",
    }
  }))(Chip)

  export default MinimalChip;

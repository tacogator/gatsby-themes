import {Chip, withStyles} from "@material-ui/core"

const MinimalChip = withStyles(theme => ({
    root: {
      borderRadius: "2px",
      height: "18px"
    },
    label: {
        padding: "4px"
    }
  }))(Chip)

  export default MinimalChip;

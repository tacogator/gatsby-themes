import React from "react";
import { Fab, withStyles } from "@material-ui/core";
import { Link } from "gatsby";

export default function DashboardButton({ href, children }) {
  console.log(" --- dashboard")
  return (
    <CoolFab
      disableRipple={true}
      variant="extended"
      color="primary"
      aria-label="dashboard"
      component={Link}
      to={href}
    >
      Dashboard
    </CoolFab>
  );
}

const CoolFab = withStyles((theme) => ({
//   borderRadius: "0px 0px 4px 4px",
  root: {
    borderRadius: "0px 0px 8px 8px",
  },
}))(Fab);

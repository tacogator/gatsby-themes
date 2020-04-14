import React from "react";
import { Fab, withStyles } from "@material-ui/core";
import { Link } from "gatsby";

export default function DashboardButton({ href, children }) {
  return (
    <CoolFab
      disableRipple={true}
      variant="extended"
      color="secondary"
      aria-label="dashboard"
      component={Link}
      to={href}
    >
      {children}
    </CoolFab>
  );
}

const CoolFab = withStyles((theme) => ({
//   borderRadius: "0px 0px 4px 4px",
  root: {
    borderRadius: "0px 0px 8px 8px",
  },
}))(Fab);

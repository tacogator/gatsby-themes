import React, { useState } from "react"

import {
  Button,
  Drawer,
  List,
  ListItem,
  makeStyles
} from "@material-ui/core"

import {SlimToolbar} from "./bear/BearAppBar"
const items = ["Start here", "About", "Contact"]

export function SideMenu({ open, onClose }) {
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{
        paper: useStyles().drawerPaper,
      }}
    >
      <Button
        fullWidth={true}
        variant="contained"
        onClick={() => onClose(false)}
      >
        Close
      </Button>

      <List>
        {items.map(text => (
          <ListItem key={text}>{text}</ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export function DesktopMenu(props) {
  return (
    <SlimToolbar disableGutters className={useStyles().desktopMenu}>
      {items.map(text => (
        <Button key={text} size="small">{text.toUpperCase()}</Button>
      ))}
    </SlimToolbar>
  )
}

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: "450px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  desktopMenu: {
    "& > button": {
      marginRight: theme.spacing(3),
    },
    "& > button:last-child": {
      marginRight: theme.spacing(0),
    },
  },
}))

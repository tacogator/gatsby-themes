import React from "react"
import {
  Button,
  Drawer,
  List,
  ListItem,
  Divider,
  makeStyles,
} from "@material-ui/core"
import { SlimToolbar } from "./bear/BearAppBar"
import { Link } from "gatsby"
import useSiteMetadata from "./use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"
import BearEmailSubscription from "./bear/BearEmailSubscription"

/**
 * Mobile side sliding menu
 * @param {*} param0
 */
export function SideMenu({ open, onClose }) {
  const { navigation } = useSiteMetadata()
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
      <Button fullWidth={true} variant="contained" onClick={onClose}>
        Close
      </Button>

      <List>
        {Array.isArray(navigation) &&
          navigation.map(({ slug, title }) => (
            <ListItem
              key={slug}
              button={true}
              component={Link}
              to={replaceSlashes(slug)}
              onClick={onClose}
            >
              {title}
            </ListItem>
          ))}
      </List>
      <Divider />
      <BearEmailSubscription />
    </Drawer>
  )
}

/**
 * Horizontal desktop menu
 * @param  props
 */
export function DesktopMenu(props) {
  const { navigation } = useSiteMetadata()
  return (
    <SlimToolbar disableGutters className={useStyles().desktopMenu}>
      {Array.isArray(navigation) &&
        navigation.map(({ slug, title }) => (
          <Button
            key={slug}
            size="small"
            component={Link}
            to={replaceSlashes(slug)}
          >
            {title.toUpperCase()}
          </Button>
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

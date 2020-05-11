import React from "react"
import {
  Button,
  Drawer,
  List,
  ListItem,
  Box,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { SlimToolbar } from "./bear/BearAppBar"
import { Link } from "gatsby"
import useSiteMetadata from "./use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"
//import BearEmailSubscription from "./bear/BearEmailSubscription"
import SocialLinks from "./social-links"

/**
 * Mobile side sliding menu
 * @param open true|false
 * @param onClose triggered by closing action ie Close button, clicking outside menu
 */
export function SideMenu({ open, onClose }) {
  const { navigation } = useSiteMetadata()
  const classes = useStyles()
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Button fullWidth={true} variant="contained" onClick={onClose}>
        Close
      </Button>

      <List>
        {Array.isArray(navigation) &&
          navigation.map(({ slug, title }) => (
            <ListItem
              className={classes.mobileMenuItem}
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

      <Box color="text.secondary" padding={3}>
        <Typography variant="body2">Follow us:</Typography>
        <Box display="flex" padding="1rem 1.5rem" flexWrap="wrap">
          <SocialLinks iconSize="large" />
        </Box>
      </Box>

      <Divider />

      {/* <BearEmailSubscription /> */}
    </Drawer>
  )
}

/**
 * Horizontal desktop menu
 * @param props extra props
 */
export function DesktopMenu(props) {
  const { navigation } = useSiteMetadata()
  return (
    <SlimToolbar disableGutters className={useStyles().desktopMenuItem}>
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

  mobileMenuItem: {
    padding: theme.spacing(1.5, 3),
    fontWeight: 500
  },

  desktopMenuItem: {
    justifyContent: "center"
  },
}))

import React from "react"
import { Link } from "gatsby"
import {
  Paper,
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  withStyles,
  makeStyles,
  Button,
} from "@material-ui/core"
import { Create } from "@material-ui/icons"
import { GitClient } from "@tinacms/git-client"
const gitClient = new GitClient("http://localhost:8000/___tina")

export const Post = ({ title, slug, description, relFilename, relPath }) => {
  const classes = useStyles()

  const deletePost = async () => {
    try {
      await gitClient.deleteFromDisk({
        relPath: `posts${slug}/${relFilename}`,
      })
    } catch (error) {
      console.log("Deleting error ", error)
    }
  }
  
  return (
    <Card className={classes.root}>
      <div className={classes.postContent}>
        <CardContent>
          <Typography variant="body1">
            <Link to={slug}>{title}</Link>
          </Typography>
          <Box paddingTop="1rem" variant="body2">
            {description}
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={deletePost}>Delete</Button>
        </CardActions>
      </div>
      <Button color="default" fullWidth={true} component={Link} to={`/editor?p=${relPath}`}>
        <Create fontSize="small"/>
      </Button>
    </Card>
  )
}

const Wrapper = withStyles(theme => ({
  root: {
    // margin: 0,
    // paddingLeft: 0,
    // paddingRight: 0,
  },
}))(Paper)

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minWidth: 275,
    marginTop: theme.spacing(4),
  },
  postContent: {
    grow: 1,
    minWidth: "80%",
  },
}))

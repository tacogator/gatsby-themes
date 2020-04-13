import React, { useEffect, useState } from "react"
import {
  Grid,
  AppBar,
  Toolbar,
  Container,
  Divider,
  Paper,
  Drawer,
  Button,
  IconButton,
  Box,
  TextField,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Add, Remove, MinimizeOutlined } from "@material-ui/icons"

import slugify from "slugify"

export function SeoPanel({ frontmatter, onUpdate }) {
  const classes = useStyles()
  const { title, slug, description } = frontmatter
  //const []
  return (
    <div className={classes.seoPanel}>
      <TextField
        autoFocus
        variant="outlined"
        fullWidth={true}
        label="Slug"
        value={slug}
        onChange={e =>
          onUpdate({
            ...frontmatter,
            slug: slugify(e.target.value, { lower: true, strict: true }),
          })
        }
      />
      <Box color="text.secondary" paddingTop={1}>
        Sample URL: https://example.com/<strong>{slugify(slug, { lower: true, strict: true })}</strong>
      </Box>
      <TextField
        className={classes.vspacer}
        variant="outlined"
        fullWidth={true}
        multiline
        rows={4}
        rowsMax={4}
        fullWidth={true}
        label="Meta description (optional)"
        value={description || ""}
        onChange={e =>
          onUpdate({
            ...frontmatter,
            description: e.target.value,
          })
        }
      />
    </div>
  )
}

export default function SEOButton({ frontmatter, onUpdate }) {
  const [seoPopup, setSeoPopup] = useState(false)

  const classes = useStyles()
  return (
    <div>
      <Box display="flex" justifyContent="flex-end">
        <Button
          color="default"
          size="small"
          variant="outlined"
          startIcon={seoPopup ? <Remove /> : <Add />}
          aria-label="seo"
          onClick={() => setSeoPopup(!seoPopup)}
        >
          SEO
        </Button>
      </Box>
      {seoPopup && <SeoPanel frontmatter={frontmatter} onUpdate={onUpdate} />}
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {},
  seoPanel: {
    display: "flex",
    flexDirection: "columns",
    alignItems: "stretch",
    flexWrap: "wrap",
    border: "1px dotted #cfd8dc",
    background: "#eceff1",
    marginTop: theme.spacing(2),
    padding: theme.spacing(4),
    borderRadius: "4px",
  },
  vspacer: {
    marginTop: theme.spacing(4),
  },
  paper: {
    marginTop: "110px",
    paddingTop: theme.spacing(2),
    background: "#eceff1",
    width: "500px",
    height: "300px",
    border: "1px solid #b0bec5",
    boxShadow: "-2px 2px 6px -2px rgba(0,0,0,0.75)",
  },
}))

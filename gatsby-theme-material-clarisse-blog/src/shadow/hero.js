import React from "react"
import { Typography, IconButton, useTheme } from "@material-ui/core"
import { ArrowRightAlt } from "@material-ui/icons"
import { navigate } from "gatsby"

import Link from "../components/Link"

export default ({ posts }) => {
  if (!(Array.isArray(posts) && posts.length > 0)) {
    return null
  }
  const firstPost = posts[0]
  const { title, banner, slug } = firstPost
  const theme = useTheme()
  return (
    <div
      style={{
        height: "600px",
        background: banner
          ? `url(${banner.childImageSharp.fluid.src})`
          : "none",
        backgroundSize: "cover",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        cursor: "pointer",
      }}
      onClick={() => {
        navigate(slug)
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "rgba(250, 250, 250, 0.90)",
          borderRadius: "0 0 10px 10px",
          padding: theme.spacing(1, 2),
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          color="textSecondary"
          display="inline"
        >
          <Link to={slug}>{title}</Link>
        </Typography>

        <IconButton color="secondary" component={Link} to={slug}>
          <ArrowRightAlt />
        </IconButton>
      </div>
    </div>
  )
}

import React from "react"
import { Typography, Box } from "@material-ui/core"
import Img from "gatsby-image"
import { Link as GatsbyLink } from "gatsby"

import Link from "./Link"

export default function ({
  title,
  date,
  timeToRead,
  excerpt,
  slug,
  tags,
  banner,
  summary,
}) {
  const bannerFluid = banner ? banner.childImageSharp.fluid : null
  return (
    <Box
      marginBottom="1rem"
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
    >
      <Box width="100%">
        {bannerFluid ? (
          <GatsbyLink to={slug}>
            <Img
              sizes={{ ...bannerFluid, aspectRatio: 3 / 2 }}
              alt={title}
            />
          </GatsbyLink>
        ) : null}
      </Box>

      <Box>
        <Typography color="textPrimary" variant="h6">
          <Link to={slug}>{title}</Link>
        </Typography>
        <Typography variant="body1">{excerpt}</Typography>
        {/* <p>
          <time>{post.date}</time>
          {post.tags && showTags && (
            <>
              — tags <ItemTags tags={post.tags} />
            </>
          )}
        </p> */}
      </Box>
    </Box>
  )
}

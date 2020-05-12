import React from "react"
import { Box, Typography } from "@material-ui/core"
import Img from "gatsby-image"

import ItemTags from "./item-tags"
import Link from "./Link"
import BlogEntryCard from "./blog-entry-card";

export default function BlogListItem({ post, showTags = true }) {
  return (
    
    <Box marginBottom="1rem" display="flex">
      <Box width="240px">
        {post.banner ? (
          <img src={post.banner.childImageSharp.resize.src} alt={post.title} />
        ) : (
          "foo"
        )}
      </Box>
      <Box>
        <Typography color="textPrimary" variant="h6">
          <Link to={post.slug}> {post.title}</Link>
        </Typography>
        <p>
          <time>{post.date}</time>
          {post.tags && showTags && (
            <>
              — tags <ItemTags tags={post.tags} />
            </>
          )}
        </p>
      </Box>
    </Box>
  )
}

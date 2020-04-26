import React from "react"
import { Box } from "@material-ui/core"
import ItemTags from "./item-tags"

import Link from "./Link"

export default function BlogListItem({ post, showTags = true }) {
  return (
    <Box marginBottom="1rem">
      <Link to={post.slug}> {post.title}</Link>
      <p>
        <time>{post.date}</time>
        {post.tags && showTags && (
          <>
            — tags <ItemTags tags={post.tags} />
          </>
        )}
      </p>
    </Box>
  )
}

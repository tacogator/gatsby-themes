import React from "react"
import {Typography, Divider} from "@material-ui/core"
import BlogListItem from "./BlogListItem"

export default function Listing({ posts, className, showTags = true }) {
  return (
    <section className={className}>
      <Typography variant="h3">Latest</Typography>
      <Divider/>
      {posts.map(post => (
        <BlogListItem key={post.slug} post={post} showTags={showTags} />
      ))}
    </section>
  )
}

import React from "react"

import BlogListItem from "./BlogListItem"

export default function Listing({ posts, className, showTags = true }) {
  return (
    <section className={className}>
      {posts.map(post => (
        <BlogListItem key={post.slug} post={post} showTags={showTags} />
      ))}
    </section>
  )
}

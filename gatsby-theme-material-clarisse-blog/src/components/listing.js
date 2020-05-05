import React from "react"
import { Grid, useTheme } from "@material-ui/core"
import BlogEntryCard from "./blog-entry-card"
import { SectionDivider } from "./utils"
export default function Listing({ posts, className, showTags = true }) {
  const theme = useTheme()
  return (
    <section className={className}>
      <Grid container spacing={4} style={{ paddingTop: theme.spacing(2) }}>
        {posts.map(post => (
          <Grid item xs={12} key={post.slug} sm={6} md={4}>
            <BlogEntryCard {...post} />
          </Grid>
        ))}
      </Grid>
      <SectionDivider />
    </section>
  )
}

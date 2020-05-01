import React from "react"
import { Box, Typography } from "@material-ui/core"
import Img from "gatsby-image"

import ItemTags from "./item-tags"
import Link from "./Link"
import BlogEntryCard from "./blog-entry-card";

export default function BlogListItem({ post, showTags = true }) {
  return (
    <BlogEntryCard />
  )
}

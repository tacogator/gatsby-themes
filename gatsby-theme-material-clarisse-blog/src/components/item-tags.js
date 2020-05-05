import React from "react"
import MinimalChip from "./minimal-chip"
import useMinimalBlogConfig from "./use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

import { Link as GatsbyLink } from "gatsby"

const ItemTags = ({ tags, size }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()
  const spacer = size === "medium" ? "12px" : "8px"
  return (
    <>
      {tags.map((tag, i) => (
        <MinimalChip
          key={tag.slug}
          size={size || "small"}
          clickable
          to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
          component={GatsbyLink}
          label={tag.name}
          style={{ marginRight: i < tags.length - 1 ? spacer : "0px" }}
        />
      ))}
    </>
  )
}

export default ItemTags

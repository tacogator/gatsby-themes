import React from "react"
import {Box} from "@material-ui/core"
import MinimalChip from "./minimal-chip"
import useMinimalBlogConfig from "./use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

import { Link as GatsbyLink } from "gatsby"

const ItemTags = ({ tags }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <>
      {tags.map((tag, i) => (
          <MinimalChip
          key={tag.slug}
            clickable
            to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
            component={GatsbyLink}
            label={tag.name}
            style={{marginRight: "12px"}}
          />
      ))}
    </>
  )
}

export default ItemTags

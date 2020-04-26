import React from "react"
import Link from "./Link"
import useMinimalBlogConfig from "./use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

const ItemTags = ({ tags }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {i > 0 && `, `}
          <Link to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}>
            {tag.name}
          </Link>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default ItemTags

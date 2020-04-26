import React from "react";
import kebabCase from "lodash.kebabcase"
import Link from "./Link"
import useMinimalBlogConfig from "./use-minimal-blog-config"
import SEO from "./SEO"
import replaceSlashes from "../utils/replaceSlashes"

type PostsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Tags = ({ list }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <>
      <SEO title="Tags" />
      <h2>Tags</h2>
      <div>
        {list.map(listItem => (
          <div key={listItem.fieldValue}>
            <Link //@ts-ignore
              to={replaceSlashes(
                `/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`
              )}
            >
              {listItem.fieldValue} <span>({listItem.totalCount})</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Tags

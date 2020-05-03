import React from "react"
import kebabCase from "lodash.kebabcase"
import { Box, Container } from "@material-ui/core"
import Link from "./Link"
import useMinimalBlogConfig from "./use-minimal-blog-config"
import SEO from "./seo"
import replaceSlashes from "../utils/replaceSlashes"
import { useUtilStyles } from "./utils"
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
      <Container maxWidth="md" className={useUtilStyles().topSpacer}>
        <h2>Tags</h2>
        <section>
          <Box display="flex" flexWrap="wrap">
            {list.map(listItem => (
              <Box key={listItem.fieldValue} padding={4}>
                <Link //@ts-ignore
                  to={replaceSlashes(
                    `/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`
                  )}
                >
                  {listItem.fieldValue} <span>({listItem.totalCount})</span>
                </Link>
              </Box>
            ))}
          </Box>
        </section>
      </Container>
    </>
  )
}

export default Tags

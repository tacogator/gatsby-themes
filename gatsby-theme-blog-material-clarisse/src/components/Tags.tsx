import React from "react"
import kebabCase from "lodash.kebabcase"
import { Box, Container } from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby"
import Link from "./Link"
import useMinimalBlogConfig from "./use-minimal-blog-config"
import SEO from "./seo"
import MinimalChip from "./minimal-chip"
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
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {list.map(listItem => (
              <Box key={listItem.fieldValue} padding={2}>
                <MinimalChip
                  size="medium"
                  clickable
                  to={replaceSlashes(
                    `/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`
                  )}
                  component={GatsbyLink}
                  label={
                    <Box color="text.primary" fontSize="1.3rem">
                      {listItem.fieldValue}
                      <Box fontSize="1rem" display="inline" color="text.secondary">
                        &nbsp;({listItem.totalCount})
                      </Box>
                    </Box>
                  }
                />
              </Box>
            ))}
          </Box>
        </section>
      </Container>
    </>
  )
}

export default Tags

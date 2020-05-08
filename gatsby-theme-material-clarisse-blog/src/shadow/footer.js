import React from "react"
import {
  Container,
  Box,
  useTheme,
  Typography,
  Link as ExternalLink,
} from "@material-ui/core"
import Link from "../components/Link"
import { SectionDivider, useUtilStyles } from "../components/utils"
import useSiteMetadata from "../components/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"

export default function (props) {
  const theme = useTheme()
  const { navigation, siteTitle, author } = useSiteMetadata()
  return (
    <div
      className={useUtilStyles().topSpacer}
      style={{
        padding: theme.spacing(4, 0),
        width: "100%",
        backgroundColor: "#263238",
        color: theme.palette.common.white,
      }}
    >
      <Container maxWidth="md">
        <Typography color="inherit" variant="body2">
          <Box display="flex" justifyContent="space-evenly" paddingBottom={2}>
            <Link to="/">Home</Link>
            {Array.isArray(navigation) &&
              navigation.map(({ slug, title }) => (
                <Link key={slug} to={replaceSlashes(slug)}>
                  {title}
                </Link>
              ))}
          </Box>
          <SectionDivider />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingTop={2}
          >
            <Box fontSize="0.85rem">
              {siteTitle} &nbsp;&copy; {new Date().getFullYear()} by{" "}
              {author}. All Rights Reserved.
            </Box>
            <Box fontSize="0.75rem">
              Theme by &nbsp;
              <ExternalLink
                color="inherit"
                href="https://github.com/tacogator/gatsby-themes"
              >
                <b>Tacogator</b>
              </ExternalLink>
            </Box>
          </Box>
        </Typography>
      </Container>
    </div>
  )
}

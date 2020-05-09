import React from "react"
import { Button, Link } from "@material-ui/core"
import useSiteMetadata from "./use-site-metadata"

export default function CtaOne(props) {
  const { externalLinks } = useSiteMetadata()
  const cta = externalLinks.find(({ type }) => type === "cta")

  return cta ? (
    <Button
      color="primary"
      variant="text"
      component={Link}
      href={cta.link}
    >
      {cta.name}
    </Button>
  ) : null
}

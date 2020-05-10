import React from "react"
import { Button, Link } from "@material-ui/core"
import useSiteMetadata from "./use-site-metadata"

/**
 * Primary Call-to-action located on upper right corner next to main branding
 * @param props
 */
export default function CtaOne(props) {
  const { externalLinks } = useSiteMetadata()
  const cta = externalLinks.find(({ type }) => type === "cta")

  return cta ? (
    <Button color="primary" variant="text" component={Link} href={cta.url}>
      {cta.name}
    </Button>
  ) : null
}

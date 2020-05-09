import React from "react"
import { Link } from "@material-ui/core"
import useSiteMetadata from "./use-site-metadata"
import {
  Twitter,
  Facebook,
  Instagram,
  GitHub,
  LinkedIn,
  Pinterest,
  YouTube,
} from "@material-ui/icons"

export default function SocialLinks({ iconSize }) {
  const { externalLinks } = useSiteMetadata()
  const Icon_maps = {
    facebook: <Facebook color="inherit" fontSize={iconSize} />,
    twitter: <Twitter color="inherit" fontSize={iconSize} />,
    instagram: <Instagram color="inherit" fontSize={iconSize} />,
    github: <GitHub color="inherit" fontSize={iconSize} />,
    linkedin: <LinkedIn color="inherit" fontSize={iconSize} />,
    pinterest: <Pinterest color="inherit" fontSize={iconSize} />,
    youtube: <YouTube color="inherit" fontSize={iconSize} />,
  }
  return (
    <>
      {Array.isArray(externalLinks) &&
        externalLinks.map(({ name, url }) => (
          <Link
            color="inherit"
            href={url}
            variant="inherit"
            style={{ paddingRight: "12px" }}
          >
            {Icon_maps[name] || name}
          </Link>
        ))}
    </>
  )
}

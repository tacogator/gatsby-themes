import React from "react"
import { MDXProvider } from "@mdx-js/react"

import TopLayout from "./src/TopLayout"
import { DialogEvents, DialogSimple } from "./src/examples/Dialog"
import { AppBarMobile, MobileBasicEx, DesktopBasicEx } from "./src/examples/AppBar"
const shortcodes = { DialogEvents, DialogSimple, AppBarMobile, MobileBasicEx, DesktopBasicEx }

export const wrapPageElement = ({ element, props }) => {
  return (
    <MDXProvider components={shortcodes}>
      <TopLayout {...props}>{element}></TopLayout>
    </MDXProvider>
  )
}

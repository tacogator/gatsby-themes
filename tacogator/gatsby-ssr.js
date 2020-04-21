import React from "react"
import { MDXProvider } from "@mdx-js/react"

import TopLayout from "./src/TopLayout"
import * as Dialog from "./src/examples/Dialog"
//require("typeface-lato");

const shortcodes = { Dialog }

export const wrapPageElement = ({ element, props }) => {
  return (
    <MDXProvider components={shortcodes}>
      <TopLayout {...props}>{element}></TopLayout>
    </MDXProvider>
  )
}

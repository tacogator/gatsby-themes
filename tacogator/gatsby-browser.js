import React from "react"
import { MDXProvider } from "@mdx-js/react"

import TopLayout from "./src/TopLayout"
import { DialogEvents, DialogSimple } from "./src/examples/Dialog"
//require("typeface-lato");

const shortcodes = { DialogEvents, DialogSimple }

export const wrapPageElement = ({ element, props }) => (
  <MDXProvider components={shortcodes}>
    <TopLayout {...props}>{element}></TopLayout>
  </MDXProvider>
)

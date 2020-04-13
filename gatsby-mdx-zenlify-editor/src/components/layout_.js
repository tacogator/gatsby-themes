import React from "react";
import { MDXProvider } from "@mdx-js/react";

const comps = {


 };

export default ({ children }) => {
  console.log("##I'm here");
  return <MDXProvider components={comps}>{children}</MDXProvider>;
};

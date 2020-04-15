import React from "react";
import RootWrapper from "./src/components/RootWrapper";
import "./src/styles/global.css";
require("typeface-lato");

export const wrapPageElement = ({ element, props }) => {
  const env = process.env.NODE_ENV;
  if (process.env.NODE_ENV === "development" || process.env.zen_dashboard === "true") {
    return <RootWrapper {...props}>{element}</RootWrapper>;
  }

  return element;
};

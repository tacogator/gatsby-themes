import React from "react";
import RootWrapper from "./src/components/RootWrapper";
import "./src/styles/global.css";
require("typeface-lato");

const wrapDashboard =
  process.env.NODE_ENV === "development" ||
  process.env.GATSBY_ZEN_DASHBOARD === "true";

export const wrapPageElement = ({ element, props }) => {
  if (wrapDashboard) {
    return <RootWrapper {...props}>{element}</RootWrapper>;
  }

  return element;
};

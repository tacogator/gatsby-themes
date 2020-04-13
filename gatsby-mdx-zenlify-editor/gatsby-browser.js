/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import TopLayout from './src/TopLayout';
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};


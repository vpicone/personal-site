/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react";
import { ThemeProvider } from "styled-components";
import { g100, spacing, breakpoints, scale } from "@carbon/elements/es";

const theme = {
  colors: g100,
  spacing,
  breakpoints,
  typeScale: scale
};

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

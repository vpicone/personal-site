/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { g100, spacing, breakpoints, scale } from '@carbon/elements/es';

const theme = {
  colors: g100,
  spacing,
  breakpoints,
  typeScale: scale,
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};

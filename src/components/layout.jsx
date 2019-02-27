import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import "sanitize.css";
// import Img from "gatsby-image";
// import { Spring } from "react-spring/renderprops";

import "./layout.css";

const MainLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: ${props => (props.home ? "0" : "120px")};
  justify-content: ${props => (props.home ? "center" : "flex-start")};
  align-items: center;
  background: ${props => (props.home ? "transparent" : "#F5F7FA")};
  @media (max-width: 600px) {
    padding-bottom: ${props => (props.home ? "20vh" : 0)};
    padding-top: ${props => (props.home ? "0" : "90px")};
  }
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { regex: "/bg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={() => (
      <MainLayout home={location.pathname === "/"}>{children}</MainLayout>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object
};

Layout.defaultProps = {
  location: {}
};

export default Layout;

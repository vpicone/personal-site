import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "sanitize.css";

import "./layout.css";

const MainLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: ${props => (props.home ? "0" : "120px")};
  justify-content: ${props => (props.home ? "center" : "flex-start")};
  align-items: center;
  background: ${props => props.bg};
  @media (max-width: 600px) {
    padding-bottom: ${props => (props.home ? "20vh" : 0)};
    padding-top: ${props => (props.home ? "0" : "90px")};
  }
`;

const getBgColor = pathname => {
  switch (pathname) {
    case "/":
      return "transparent";
    case "/blog":
      return "#f9eaeb";
    default:
      return "#F5F7FA";
  }
};

const Layout = ({ children, location: { pathname } }) => (
  <MainLayout bg={getBgColor(pathname)} home={pathname === "/"}>
    {children}
  </MainLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object
};

Layout.defaultProps = {
  location: {}
};

export default Layout;

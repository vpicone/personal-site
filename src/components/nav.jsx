import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: ${props =>
    props.home ? props.theme.spacing[3] : props.theme.spacing[6]};
  box-shadow: ${props =>
    props.home || props.scrolling == "false"
      ? "none"
      : "0 2px 2px rgba(0, 0, 0, 0.05)"};
  position: ${props => (props.home ? "relative" : "fixed")};
  width: 100vw;
  left: 0;
  top: 0;
  background: ${props => (props.home ? "transparent" : "#F5F7FA")};
`;

const LinkList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 550px;
  margin: 0;
  padding: 0;
  transition: all 0.5s ease;
  a {
    text-decoration: none;
    color: ${props => (props.home ? props.theme.colors.brand03 : "#fb4b53")};
  }

  li {
    margin: 0;
  }

  @media (max-width: 600px) {
    margin: 0;
    padding: 0 ${props => props.theme.spacing[4]};
  }
`;

const ListItem = styled.li`
  border-bottom: 2px solid #f5f7fa;
  margin: ${props => props.theme.spacing[6]} 0;
  font-size: ${props => props.theme.typeScale[5]}px;
  font-variation-settings: var(--light-condensed);
  transition: all 0.5s ease;
  padding: 0 0.5rem;
  &:hover {
    font-variation-settings: var(--semi-bold-condensed);
    cursor: pointer;
  }
  @media (max-width: 600px) {
    &:hover {
      font-variation-settings: var(--light-condensed);
    }
    margin: ${props => props.theme.spacing[4]};
    font-size: ${props => props.theme.typeScale[3]}px;
    padding: 0 0.25rem;
  }
`;

const Nav = ({ home }) => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 0);
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  });
  return (
    <NavContainer home={home} scrolling={scrolling ? "true" : "false"}>
      <LinkList home={home} scrolling={scrolling ? "true" : "false"}>
        <ListItem>
          <a href="https://github.com/vpicone">github</a>
        </ListItem>
        <ListItem>
          <a href="https://linkedin.com/in/vincepicone">linkedin</a>
        </ListItem>
        <ListItem>
          <a href="https://twitter.com/TheElodin">twitter</a>
        </ListItem>
        <ListItem>
          <Link to="/blog">blog</Link>
        </ListItem>
      </LinkList>
    </NavContainer>
  );
};

export default Nav;

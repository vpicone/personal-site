import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Display = styled.h1`
  font-size: ${props => props.theme.typeScale[18]}px;
  text-align: center;
  color: ${props => props.theme.colors.brand03};
  max-width: 900px;
  line-height: 1;
  margin: ${props => props.theme.spacing[4]};
  text-shadow: 6px 6px 2px #f20510;
  font-weight: 100;
  @media (max-width: 600px) {
    font-size: ${props => props.theme.typeScale[11]}px;
    max-width: 375px;
  }
`;

const items = "Who are you without the doing?".split(" ");
const mountConfig = { mass: 1, tension: 220, friction: 130 };
const hoverConfig = { mass: 1, tension: 550, friction: 100 };

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Display>
        {items.map((item, i) => (
          <Word key={i} index={i}>
            {item}
          </Word>
        ))}
      </Display>
    </Layout>
  );
};

const Word = ({ children, index }) => {
  const [props, set] = useSpring(() => ({
    fontWeight: 100
  }));

  set({
    fontWeight: 700,
    delay: 160 * index,
    config: mountConfig
  });

  return (
    <animated.span
      onPointerEnter={() => set({ fontWeight: 100, config: hoverConfig })}
      onPointerLeave={() => set({ fontWeight: 700, config: hoverConfig })}
      style={{ ...props, willChange: "font-weight" }}
    >
      {index === items.length - 1 ? <em>{children}</em> : `${children} `}
    </animated.span>
  );
};

export default IndexPage;

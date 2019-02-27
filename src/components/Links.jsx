import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${props => props.theme.typeScale[4]}px;
  width: 100%;
  a {
    font-family: inherit;
    color: inherit;
    padding-top: ${props => props.theme.spacing[2]};
  }

  .next,
  .prev {
    color: inherit;
    max-width: 48%;
    text-align: center;
    margin: 0;
  }

  .next {
    margin-left: auto;
  }

  .next.disabled {
    background: linear-gradient(0.25turn, hsl(30, 0%, 64%), hsl(357, 0%, 64%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-top: ${props => props.theme.spacing[2]};
  }

  @media (max-width: 600px) {
    font-size: ${props => props.theme.typeScale[2]}px;
  }
`;

const LabelContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  margin-top: ${props => props.theme.spacing[8]};
  font-size: ${props => props.theme.typeScale[6]}px;

  a {
    text-decoration: none;
  }

  .next {
    margin-left: auto;
  }

  span {
    cursor: pointer;
    background: linear-gradient(
      0.25turn,
      hsl(30, 96%, 64%),
      hsl(357, 96%, 64%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:first-of-type {
      background: linear-gradient(
        0.25turn,
        hsl(357, 90%, 64%),
        hsl(30, 90%, 64%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  span.disabled {
    background: linear-gradient(0.25turn, hsl(30, 0%, 64%), hsl(35, 0%, 64%));
    cursor: default;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Links = ({ previous = {}, next = {} }) => {
  return (
    <nav style={{ width: "600px" }}>
      <LabelContainer>
        {previous.slug && (
          <Link to={`/posts/${previous.slug}`}>
            <span>← Previous</span>
          </Link>
        )}
        <div className="next">
          {!next.slug ? (
            <span style={{ alignSelf: "flex-end" }} className={`next disabled`}>
              Next →
            </span>
          ) : (
            <Link to={`/posts/${next.slug}`}>
              <span style={{ alignSelf: "flex-end" }} className={`next`}>
                Next →
              </span>
            </Link>
          )}
        </div>
      </LabelContainer>
      <LinkContainer>
        {previous && (
          <Link to={`/posts/${previous.slug}`}>
            <span>{previous.subtitle}</span>
          </Link>
        )}
        {!next.slug ? (
          <span className={`next disabled`}>
            <em>Coming soon</em>
          </span>
        ) : (
          <Link to={`/posts/${next.slug}`}>
            <span>{next.subtitle}</span>
          </Link>
        )}
      </LinkContainer>
    </nav>
  );
};
export default Links;

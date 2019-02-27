import React, { Component } from "react";
import styled from "styled-components";
import Layout from "./layout";
import { graphql } from "gatsby";
import Links from "./links";
import Nav from "./nav";

// Static Query → used anywhere, doesn't accept variables, can't use context
// Page Query → can only be used on pages, uses variables and context

const PostWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
  max-width: 100vw;
  h1 {
    white-space: nowrap;
    margin: ${props => props.theme.spacing[2]} 0;
    font-size: ${props => props.theme.typeScale[13]}px;
    font-variation-settings: var(--bold);
    background: linear-gradient(hsl(357, 90%, 64%), hsl(30, 90%, 64%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    white-space: nowrap;
    font-size: ${props => props.theme.typeScale[10]}px;
    margin: 0;
    font-variation-settings: var(--regular-condensed);
    margin-bottom: ${props => props.theme.spacing[6]};
    color: slategray;
  }

  @media (max-width: 600px) {
    h1 {
      margin: ${props => props.theme.spacing[3]} 0;
      line-height: 1;
      font-size: ${props => props.theme.typeScale[10]}px;
      white-space: normal;
      overflow: hidden;
      text-align: center;
    }
    h2 {
      white-space: normal;
      font-size: ${props => props.theme.typeScale[6]}px;
      margin: 0;
      font-variation-settings: var(--regular-condensed);
    }
    padding: 0 ${props => props.theme.spacing[4]};
  }
`;

const MarkdownStyles = styled.div`
  max-width: 650px;
  font-size: ${props => props.theme.typeScale[4]}px;
  h3 {
    font-size: ${props => props.theme.typeScale[6]}px;
    margin: 0;
    margin-top: ${props => props.theme.spacing[8]};
  }
  blockquote {
    padding: ${props => props.theme.spacing[1]};
    font-variation-settings: var(--light-condensed);
    font-style: italic;
    text-align: center;
    p {
      font-size: ${props => props.theme.typeScale[5]}px;
      margin: 0;
    }
  }

  ul {
    list-style: square outside;
    margin: 2rem 0 2rem -40px;
  }

  li {
    margin: ${props => props.theme.spacing[3]};
  }

  p {
    margin: 1rem auto;
  }

  @media (max-width: 600px) {
    ul {
      margin: 0;
    }

    p {
      margin: ${props => props.theme.spacing[6]} auto;
    }

    max-width: 100vw;
    padding: ${props => props.theme.spacing[5]};
  }
`;

export default class postLayout extends Component {
  render() {
    const { html, frontmatter } = this.props.data.markdownRemark;
    const { location } = this.props;
    const { next, previous } = this.props.pageContext;
    return (
      <Layout location={location}>
        <Nav home={false} />
        <PostWrapper>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.subtitle}</h2>
          <MarkdownStyles dangerouslySetInnerHTML={{ __html: html }} />
          <Links next={next} previous={previous} />
        </PostWrapper>
      </Layout>
    );
  }
}

// Context on the createPage method call auto-populates graphql variables
// with the same name ($slug)
export const POST_QUERY = graphql`
  query POST_QUERY($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        subtitle
        date
      }
    }
  }
`;

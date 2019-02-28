import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: ${props => props.theme.spacing[7]};
  border-radius: 4px;
  margin-top: ${props => props.theme.spacing[7]};
  background: #f5f7fa;
  width: 650px;
  max-width: 85vw;
  h2 {
    margin-top: 0;
    margin-bottom: ${props => props.theme.spacing[2]};
    a {
      text-decoration: none;
    }
  }
  time {
    font-style: italic;
    font-size: ${props => props.theme.typeScale[1]}px;
  }
  a {
    color: inherit;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  &:last-of-type {
    margin-bottom: ${props => props.theme.spacing[7]};
  }
  @media (max-width: 600px) {
    h2 {
      font-size: ${props => props.theme.typeScale[3]}px;
    }
  }
`;

const LISTING_QUERY = graphql`
  query LISTING_QUERY {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;

const Listing = () => {
  return (
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.frontmatter.slug}>
            <h2>
              <Link to={`/posts/${node.frontmatter.slug}`}>
                {node.frontmatter.subtitle}
              </Link>
            </h2>
            <time>{node.frontmatter.date}</time>
            <p>{node.excerpt}</p>
            <Link to={`/posts/${node.frontmatter.slug}`}>Read More</Link>
          </Post>
        ))
      }
    />
  );
};

export default Listing;

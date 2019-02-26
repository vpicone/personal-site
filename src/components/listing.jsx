import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: inherit;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const LISTING_QUERY = graphql`
  query LISTING_QUERY {
    allMarkdownRemark(
      limit: 10
    ) # sort: { order: ASC, fields: [frontmatter___date] }
    {
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
              {node.frontmatter.title} — {node.frontmatter.subtitle}
            </h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <Link to={`/posts/${node.frontmatter.slug}`}>Read More</Link>
          </Post>
        ))
      }
    />
  );
};

export default Listing;

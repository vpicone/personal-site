/**
 * Implement Gatsby's Node APIs in this file.
 * This is a node file, so needs to use the require syntax
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: frontmatter___date }) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
            previous {
              frontmatter {
                slug
                subtitle
              }
            }
            next {
              frontmatter {
                slug
                subtitle
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(edge => {
        const slug = edge.node.frontmatter.slug;
        createPage({
          path: `/posts/${slug}`,
          component: path.resolve("./src/components/postLayout.jsx"),
          context: {
            slug,
            previous: edge.previous ? edge.previous.frontmatter : {},
            next: edge.next ? edge.next.frontmatter : {}
          }
        });
      });
      resolve();
    });
  });
};

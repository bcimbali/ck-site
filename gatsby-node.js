const path = require('path');

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === 'MarkdownRemark') {
//   if (node.frontmatter.relpath && node.frontmatter.logo ) {
//         const logopath = node.frontmatter.relpath + node.frontmatter.logo
//         createNodeField({
//           node,
//           name: 'logolink',
//           value: logopath
//         });
//       }
//   }
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: `/portfolio-items${node.frontmatter.slug}`,
          component: path.resolve('./src/components/portfolioLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          }
        });
      })
        resolve();
    })
  });
}
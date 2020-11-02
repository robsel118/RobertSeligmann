const path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
            body
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/article.tsx`),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@page': path.resolve(__dirname, 'src/page'),
        '@theme': path.resolve(__dirname, 'src/theme'),
        '@sections': path.resolve(__dirname, 'src/sections'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
      },
    },
  })
}

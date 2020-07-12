const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
      },
    },
  })
}

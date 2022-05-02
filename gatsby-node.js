const path = require('path');
const fetch = (...args) =>
  import(`node-fetch`).then(({ default: fetch }) => fetch(...args))

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyQuery {
      complexPage: allMarkdownRemark(filter: {frontmatter: {type: {eq: "complex"}}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      flatPage: allRestApiApiV1HouseList {
        nodes {
          endpointId
        }
      }
    }
  `);

  data.complexPage.nodes.forEach( node => {
    const { slug } = node.frontmatter;
    actions.createPage({
      path: slug,
      component: path.resolve(`./src/templates/HousePage.js`),
      context: { slug },
    })
  });
  data.flatPage.nodes.forEach( node => {
    const endpointId = node.endpointId;
    actions.createPage({
      path: `/houses/${endpointId}`,
      component: path.resolve(`./src/templates/FlatPage.js`),
      context: { endpointId },
    })
  });

}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}


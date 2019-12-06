const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      tours: allContentfulTours {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/components/SingleTourTemplate/index.js"),
      context: {
        slug: node.slug,
      },
    });
  });
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/components/SingleBlogTemplate/index.js"),
      context: {
        slug: node.slug,
      },
    });
  });
};

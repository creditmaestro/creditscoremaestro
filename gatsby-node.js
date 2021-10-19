
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const { data } = await graphql(`
            {
                allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
                  edges {
                    node {
                      id
                      publishedDate
                      excerpt {
                        excerpt
                      }
                      title
                      body {
                        raw
                      }
                      slug
                      author
                      landingArticle
                      featuredImage {
                        gatsbyImageData
                        title
                      }
                    }
                  }
                }
            }
        `)

    const blogTemplate = path.resolve(`src/templates/blog-template.js`);
         
    data.allContentfulBlogPost.edges.forEach(edge => {
        const path = "/blog/" + edge.node.slug;
       
        createPage({
            path,
            component: blogTemplate,
            context: {
                blog: edge.node,
                id: String(edge.node.id)
            }
        })
    });
}
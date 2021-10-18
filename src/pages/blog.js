import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import articleDateFormat from "../components/articleDateFormat";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import clipExcerpt from "../components/clipExcerpt";

const BlogsPage = () => {

    const data = useStaticQuery(
        graphql`
            query{
              featuredItems: allContentfulBlogPost(
                filter: {featuredItem: {eq: true}}
                sort: {fields: publishedDate, order: DESC}
              ) {
                edges {
                  node {
                    id
                    title
                    author
                    publishedDate
                    excerpt {
                      excerpt
                    }
                    slug
                    featuredImage {
                      gatsbyImageData
                      title
                    }
                  }
                }
              }
              allBlogs: allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
                edges {
                  node {
                    id
                    title
                    author
                    publishedDate
                    excerpt {
                      excerpt
                    }
                    slug
                    featuredImage {
                      gatsbyImageData
                      title
                    }
                  }
                }
              }
            }
        `
    );

  

    return (
        <Layout>
          <SEO title="Blog" />
          <div className="container my-6">
            <div className="row">
              <div className="col-lg-8">
              <h1>Articles</h1>
                {data.allBlogs.edges.map((edge, i) => {
                  return (
                    <div key={i} className="card border-0">
                        <div className="card-body">
                          <Link to={"http://localhost:8000/" + edge.node.slug} className="article-link">
                            <b>{ edge.node.title }</b> 
                          </Link>
                          <p className="card-text blog-description-text">
                            <small className="post_meta">
                              By { edge.node.author } - Published&nbsp; 
                              { articleDateFormat(edge.node.publishedDate) }
                            </small>
                            { clipExcerpt(edge.node.excerpt.excerpt) }
                          </p>
                        </div>
                    </div>
                )
                })}
              </div>
              <div className="col-lg-4">
                <h1>Featured</h1>
                {data.featuredItems.edges.map((edge, i) => {

                  let img = getImage(edge.node.featuredImage);
                
                  return (
                    <div key={i} className="card border-0">
                        <div className="card-body">
                          <Link to={"http://localhost:8000/" + edge.node.slug} className="article-link">
                            <b>{ edge.node.title }</b> 
                          </Link>
                          <p className="card-text blog-description-text">
                            <small className="post_meta">
                              By { edge.node.author } - Published&nbsp; 
                              { articleDateFormat(edge.node.publishedDate) }
                            </small>
                            <GatsbyImage alt={edge.node.featuredImage.title} className="card-img"
                            alt={edge.node.featuredImage.title}
                            image={img} />
                            
                            { clipExcerpt(edge.node.excerpt.excerpt) }
                          </p>
                        </div>
                    </div>
                )
                })}
              </div>
            </div>
          </div>
        </Layout>
      )
} 

export default BlogsPage
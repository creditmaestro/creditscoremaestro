import React from "react";
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ArticleBody from "../components/articleBody";
import articleDateFormat from "../components/articleDateFormat";
import Layout from "../components/layout";
import "../components/css/blog.css";

export default function BlogTemplate({data, pageContext }) {

    const {title, author, publishedDate} = pageContext.blog;
    const {body} = pageContext.blog;
    const img = getImage(pageContext.blog.featuredImage);
    
    const recArticles = data;

    return (
        <Layout>
            <div className="container">
            <div className="row article-page">
            {/* Artice */}
            <div className="col-lg-8">
                <div className="card">
                    <article>
                        <header>
                        <div className="card-header">
                            <div className="card-title">
                                <h1>{ title }</h1>
                                <span className="blog-meta">
                                    By { author } - Published { articleDateFormat(publishedDate) }
                                </span>
                            </div>
                        </div>
                        <div id="Blog-Image">
                            <GatsbyImage className="card-img"
                                alt=''
                                image={img} />
                        </div>
                        </header>
                    <div className="card-body blog-article-text">
                        <ArticleBody raw={body.raw} />
                    </div>
                  </article>
                </div>
            </div>

            { /* Sidebar Recommended Articles */}
            <div className="col-lg-4">
                <div className="card mb-2">
                    <div className="card-header">
                        <h3>Recommended Articles</h3>
                    </div>
                    {
                    recArticles.allContentfulBlogPost.edges.map((edge, i) => {
                        let recImg = edge.node.featuredImage;
                        let renderImg = getImage(recImg);
                        return (
                            <div key={i} className="card-body">
                                <GatsbyImage className="card-img-top" image={renderImg} />
                                <small className="post_meta">By {edge.node.author} - Published Dec 4, 2018</small>
                                <div className="card-title">
                                    <a className="article-link" href={edge.node.slug} id="HyperLink15" >
                                        {edge.node.title}
                                    </a>
                                </div>
                            </div>
                        )
                    })
                    }
			       
                </div>

                <div id="blog-sidebar"></div>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-body blog-article-text">
                        <em>
                            To learn more about current credit building strategies and rules, and how they effect you as a 
                            consumer, stay up-to-date by&nbsp; 
                            <Link to="/blog">
                                reading more on our blog.
                            </Link>
                        </em>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </Layout>
    )
}

export const query = graphql`
    query ReccommendedArticlesQuery($id: String) {
        allContentfulBlogPost(
            sort: {fields: publishedDate, order: DESC}
            filter: {recommendedArticle: {eq: true}, id: {ne: $id}}
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
    }
`
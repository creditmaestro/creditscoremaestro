import React, {useState} from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import articleDateFormat from "../components/articleDateFormat";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ClipExcerpt from "../components/ClipExcerpt";

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
                    body {
                      raw
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

    const [filteredArticles, setFilter] = useState(data.allBlogs.edges);
    
    const searchInput = e => {

      const qry = e.target.value;
      
      if (qry != "") {
        const filteredData = data.allBlogs.edges.filter(article => {
        
          const {title, excerpt, publishedDate} = article.node;
          const artDate = articleDateFormat(publishedDate);
          
          return title.toLowerCase().includes(qry.toLowerCase()) ||
                 excerpt.excerpt.toLowerCase().includes(qry.toLowerCase()) ||
                 artDate.toLowerCase().includes(qry.toLowerCase()); 
        });
        setFilter(filteredData);
      } else {
        setFilter(data);
      }
    }

    let allArticles = (filteredArticles.length > 0) ? filteredArticles : data.allBlogs.edges;
    if (filteredArticles.length == 0) allArticles = [];

    return (
        <Layout>
          <SEO 
            title="The Practical Credit Repair Blog | Credit Score Maestro"
            description="Reap the benefits of great credit by tuning in to our blog. We offer the latest updates and effective strategies for building a great credit score."
            url="https://creditscoremaestro.com/blog"
            />
          <div className="container my-6">
            <div className="row">
              <div className="col-lg-8">
               <input className="blog-searchbox" placeholder="Search articles (by phrase, year etc...)"
                onChange={searchInput}
                type="text" />
              <h1 className="blog-headers">Articles</h1>
                {
                (allArticles.length > 0) ?
                  allArticles.map((edge, i) => {
                    return (
                      <div key={i} className="card border-0">
                          <div className="card-body">
                            <Link to={edge.node.slug} className="article-link">
                              <b>{ edge.node.title }</b>
                            </Link>
                            <p className="card-text blog-description-text">
                              <small className="post_meta">
                                By { edge.node.author }
                                {/* - Published&nbsp; 
                                  { articleDateFormat(edge.node.publishedDate) }
                                */}
                                </small>
                              <ClipExcerpt excerpt={edge.node.excerpt.excerpt} />
                            </p>
                          </div>
                      </div>
                    )}) :
                    <> 
                      Sorry! No articles match your search. Please try refining your search query.
                    </>
                }
              </div>
              <div className="col-lg-4">
                <h1 className="blog-headers">Featured</h1>
                {data.featuredItems.edges.map((edge, i) => {

                  let img = getImage(edge.node.featuredImage);
                
                  return (
                    <div key={i} className="card border-0">
                        <div className="card-body">
                          <Link to={edge.node.slug} className="article-link">
                            <b>{ edge.node.title }</b> 
                          </Link>
                          <p className="card-text blog-description-text">
                            <small className="post_meta">
                              By { edge.node.author } 
                              {/* - Published&nbsp; 
                                  { articleDateFormat(edge.node.publishedDate) }
                              */}
                            </small>
                            <GatsbyImage alt={edge.node.featuredImage.title} className="card-img"
                            alt={edge.node.featuredImage.title}
                            image={img} />
                            <ClipExcerpt excerpt={edge.node.excerpt.excerpt} />
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
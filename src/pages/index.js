import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import clipExcerpt from '../components/clipExcerpt';
import articleDateFormat from '../components/articleDateFormat';
import SEO from "../components/seo";
import "../components/css/CSMLanding.css";

const IndexPage = () => {
    const landingBlogs = useStaticQuery(
        graphql`
            query{
                allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}, filter: {landingArticle: {eq: true}}) {
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
        `
    )

    return (
        <Layout>
          <SEO title="Home" />
          <div className="container">
      
            <div className="row my-6">
              <div className="col-lg-12">
                <p className="landingstatement">
                    <span className="letterstyle1">Providing you with the</span><br/><span className="letterstyle2">KNOWLEDGE AND TOOLS YOU</span> 
                    <span className="letterstyle3"> need</span><br/> <span className="letterstyle4">&nbsp;to build and maintain a WINNING CREDIT SCORE.</span>
                </p>
             <div className="checkcomments">
                 <div className="commentbox">
                  <table>
                      <tr>
                          <td>
                              <StaticImage className="checkbox-img"
                                  alt="Check box." 
                                  src="../images/check1.png" id="Image2" />
                          </td>
                          <td>
                              <div className="comment">
                                  First, obtain a credit report from each of the three reporting agencies.
                              </div>
                          </td>
                      </tr>
                  </table>
                  </div>
                  <div className="commentbox">
                  <table>
                      <tr>
                          <td>
                              <StaticImage className="checkbox-img"
                                  alt="Check box." 
                                  src="../images/check1.png" id="Image1" />
                          </td>
                          <td>
                              <div className="comment">
                                  Second, use the knowledge we offer to reverse any negative aspects of your credit.
                              </div>
                          </td>
                      </tr>
                  </table>
                  </div>
               </div>
              </div>

              </div>
          </div>
          <div className="row align-items-center mb-3 bg-info p-3 mr-0 ml-0">
                <div className="col-3 ml-2">
                  <Link to="https://www.amazon.com/Winning-Credit-Score-Game-Complete/dp/0999415301/" className="btn btn-cta btn-cta-lgscreen">
                      Get Our Book!
                  </Link>
                </div>
                <div className="card border-0 h-75 reviews w-cta bg-info">
                <StaticImage className="home-book-img" 
                      alt="Credit repair book." 
                      src="../images/Front-Cover-400x600.jpg" id="BookImg" />
                  <p className="text-white m-0 bg-info">
                  "Clear and concise. An easy to use guide that allowed me to take control of 
                  my credit score. A real home run!" <span className="reviewname">Michael Williams, GA</span>
                  </p>
                </div>
          </div>
          <div class="container">
            <div class="row mt-5">
              {
                  landingBlogs.allContentfulBlogPost.edges.map(edge => {
                    let img = getImage(edge.node.featuredImage);
                    return (
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0">
                            <div class="card-body">
                              <a href="/" className="article-link"><b>{ edge.node.title }</b></a>
                              <p class="card-text blog-description-text">
                                <small class="post_meta">
                                  By { edge.node.author } - Published&nbsp; 
                                  { articleDateFormat(edge.node.publishedDate) }
                                </small>
                                <GatsbyImage className="card-img"
                                alt={edge.node.featuredImage.title}
                                image={img} />
                                { clipExcerpt(edge.node.excerpt.excerpt) }
                              </p>
                            </div>
                        </div>
                    </div>
                  )
                  })
              }
            </div>
          </div>
        </Layout>
      )
}

export default IndexPage

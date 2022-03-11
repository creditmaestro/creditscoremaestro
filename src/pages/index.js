import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import ClipExcerpt from '../components/ClipExcerpt';
// import articleDateFormat from '../components/articleDateFormat';
import PayPalBtn from '../components/payPalBtn';
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
                      slug
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
          <SEO 
            title="Credit Score Maestro Home" 
            description="Helping YOU learn to not only repair your credit, but also maintain a great credit score and healthy financial life."
            url="https://creditscoremaestro.com"
            />
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
            <div className="review-buy-box">
              <StaticImage className="home-book-img" 
                  alt="Credit repair book." 
                  src="../images/Front-Cover-400x600.jpg" id="BookImg" />
            
              <div className="ml-3">
                <PayPalBtn />
              </div>
            
              <div className="border-0 reviews bg-info ml-4">
                <p className="text-white m-0 bg-info">
                  "Clear and concise. An easy to use guide that allowed me to take control of 
                  my credit score. A real home run!" <span className="reviewname">Michael Williams, GA</span>
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5">
              {
                  landingBlogs.allContentfulBlogPost.edges.map((edge, i) => {
                    let img = getImage(edge.node.featuredImage);
                    return (
                    <div key={i} className="col-md-4 mb-4">
                        <div className="card h-100 border-0">
                            <div className="card-body">
                              <Link to={"/blog/" + edge.node.slug} className="article-link">
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

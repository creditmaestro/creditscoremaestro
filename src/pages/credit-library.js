import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import '../components/css/ResourceFormPage.css';

const CreditLibrary = ({data}) => {

    const creditLibrary = data.allFile.edges;
    
    return (
        <>
        <Layout>
        <SEO title="Credit Library" />
        <div className="container">
            <div className="col-lg-auto my-6">
                <div className="card wlgscreen-75 m-auto">
                    <div className="card-body text-center">
                        <StaticImage src="../images/Logo.png" id="image3" alt="Credit score maestro logo." />
                        <h1>Credit Research Library</h1>
                    </div>
                    <div className="card-footer">
                        &nbsp;&nbsp;&nbsp;&nbsp;Our credit research library is a compilation of what we consider to be some of the most useful information
                        available in the industry. Whether you're a consumer looking to better your understanding of credit, or an
                        attorney looking to research the relevant law, this library is for you.
                    </div>
                </div>
            </div>
            <div id="PDFPanel">
            {
                creditLibrary.map(item => {
                    let nameStr = item.node.relativePath;
                    let pdfName = nameStr.substr(0, nameStr.lastIndexOf('.'));
                    return (
                        <Link to={"https://creditscoremaestro.com/"+item.node.publicURL} target="_child">
                            { pdfName }
                        </Link>
                    )
                })
            }
            </div>
        </div>  
        </Layout>
        </>
    );
};

export default CreditLibrary;

export const pageQuery = graphql`
    query {
        allFile(
            filter: {sourceInstanceName: {eq: "credit-library"}}
            sort: {order: ASC, fields: relativePath}
            ) {
            edges {
                node {
                    relativePath
                    publicURL
                }
            }
        }
    }
`
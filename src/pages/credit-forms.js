import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import '../components/css/ResourceFormPage.css';

const CreditForms = ({data}) => {

    const creditForms = data.allFile.edges;
    
    return (
        <>
        <Layout>
        <SEO 
            title="Free Credit Repair Forms | Credit Score Maestro"
            description="Free credit repair forms that will set you up to raise your credit score. All of our credit forms can be downloaded here."
            url="https://creditscoremaestro.com/credit-forms"
        />
        <div className="container">
            <div className="col-lg-auto my-6">
                <div className="card wlgscreen-75 m-auto">
                    <div className="card-body text-center">
                        <StaticImage src="../images/Logo.png" id="image3" alt="Credit score maestro logo." />
                        <h1>Credit Repair Forms</h1>
                    </div>
                    <div className="card-footer">
                        &nbsp;&nbsp;&nbsp;&nbsp;Our forms library is a compilation of what we consider to be some of the most useful forms
                    for consumers who are looking to take action and build great credit. Learn more about how to
                    use each of these forms&nbsp;
                    <Link to="https://www.amazon.com/Winning-Credit-Score-Game-Complete/dp/0999415301/ref=sr_1_1?ie=UTF8&qid=1539179263&sr=8-1&keywords=winning+the+credit+score+game" 
                        id="HyperLink5" target="_child">
                            by reading our book.
                    </Link>
                    </div>
                </div>
            </div>
            <div id="PDFPanel">
            {
                creditForms.map(item => {
                    let nameStr = item.node.relativePath;
                    let formName = nameStr.substr(0, nameStr.lastIndexOf('.'));
                    return (
                        <Link to={"https://creditscoremaestro.com/"+item.node.publicURL} target="_child">
                            { formName }
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

export default CreditForms;

export const pageQuery = graphql`
    query {
        allFile(
            filter: {sourceInstanceName: {eq: "credit-forms"}}
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
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';

const Mission = () => {

    return (
        <Layout>
        <SEO
            title="Our Mission | Credit Score Maestro"
            description="Credit Score Maestro company mission statement. We're here to help you build great credit."
            url="https://creditscoremaestro.com/mission"
        />
        <div className="container">
        <div className="col-lg-auto my-6">
            <div className="card wlgscreen-75 m-auto">
                <div className="card-body text-center">
                    <StaticImage src="../images/Logo.png" id="image3" alt="Credit score maestro logo." />
                    <h1>Credit Score Maestro Mission Statement</h1>
                </div>
                <div className="card-footer">
                    &nbsp;&nbsp;&nbsp;&nbsp;At Credit Score Maestro, our mission is to fulfill our name. In English, Maestro means to be a 
                    master of an art. In Spanish, Maestro means teacher.
                    <br /><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;We are Winning the Credit Score Game, and our aim is to be masterful teachers for those 
                    striving to do their best. This task will be fulfilled by providing our readers and associates with 
                    knowledge of the game and the tools they need so they can apply them in every situation of your 
                    financial lives.
                </div>
            </div>
        </div>
        </div>
        </Layout>
    )
}

export default Mission;
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import UniHeader from '../components/uniHeader';

const Mission = () => {

    return (
        <Layout>
        <SEO
            title="Our Mission | Credit Score Maestro"
            description="Credit Score Maestro company mission statement. We're here to help you build great credit."
            url="https://creditscoremaestro.com/mission"
        />
        <div className="container">
            <UniHeader title="Credit Score Maestro Mission Statement">
                &nbsp;&nbsp;&nbsp;&nbsp;At Credit Score Maestro, our mission is to fulfill our name. In English, Maestro means to be a 
                master of an art. In Spanish, Maestro means teacher.
                <br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;We are Winning the Credit Score Game, and our aim is to be masterful teachers for those 
                striving to do their best. This task will be fulfilled by providing our readers and associates with 
                knowledge of the game and the tools they need so they can apply them in every situation of your 
                financial lives.
            </UniHeader>
        </div>
        </Layout>
    )
}

export default Mission;
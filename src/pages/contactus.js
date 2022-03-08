import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';

const ContactUs = () => {
    return (
        <Layout>
            <SEO
            title="Contact Us | Credit Score Maestro"
            description="Credit Score Maestro company contact information."
            url="https://creditscoremaestro.com/contactus"
        />
        <div className="container">
            <div className="col-lg-auto my-6">
                <div className="card wlgscreen-75 m-auto">
                    <div className="card-body text-center">
                        <StaticImage src="../images/Logo.png" id="image3" alt="Credit score maestro logo." />
                        <h2>Credit Score Maestro Contact Info</h2>
                        You're welcome to contact us for order inquiries or any other questions.
                    </div>
                    <div className="card-footer">
                        <table>
                            <tr>
                                <td>
                                    Credit Score Maestro
                                    PO Box 1125<br />
                                    Tavares, FL <br />
                                    32778
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>creditscoremaestro@protonmail.com</b>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
  );
}

export default ContactUs;
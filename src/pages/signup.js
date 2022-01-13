import React, {useState} from "react";
import Layout from "../components/layout";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { StaticImage } from 'gatsby-plugin-image';
import UniHeader from '../components/uniHeader';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [result, setResult] = useState(null);

    const updateEmail = e => {
      const newEmail = e.target.value;
      setEmail(newEmail);
    }

    const submitMailingList = async e => {
      e.preventDefault();
      const result = await addToMailchimp(email);
      setResult(result);
    }
   
    return (
        <Layout>
          <div className="container my-6">
            <UniHeader title="Credit Score Maestro Newsletter">
              <center>
              A regular flow of outstanding tips to enhance your financial world.
              <br /><br />
              Enter your EMail: 
              <input onChange={updateEmail} type="text" />
              <br /><br />
              <button className="btn btn-cta" onClick={submitMailingList}>
                Subscribe to Our Newsletter!
              </button>
              <br />
              {
                result ? 
                <b>
                  { result.msg }
                </b>
                :
                ""
              }
              </center>
            </UniHeader>
          </div>
        </Layout>
      )
} 

export default SignUp
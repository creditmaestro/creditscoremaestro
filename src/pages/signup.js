import React, {useState} from "react";
import Layout from "../components/layout";

const SignUp = () => {
    
    const data = [
            {
                id: "38d20c66-9e6a-5e5e-ae26-e17e1026908a",
                author: "William Bradley",
                publishedDate: "2018-12-11T00:00-05:00",
                slug: "pros-and-cons-of-credit-card-rewards",
                title: "Pros and Cons of Credit Card Rewards"
            },
            {
                id: "38d20c66-9e6a-5e5e-ae26-e17e1026908a",
                author: "William Bradley",
                publishedDate: "2018-12-11T00:00-05:00",
                slug: "10-easy-steps-to-fix-your-credit",
                title: "10 Easy Steps to Fix Your Credit"
            },
            {
                id: "38d20c66-9e6a-5e5e-ae26-e17e1026908a",
                author: "William Bradley",
                publishedDate: "2018-12-11T00:00-05:00",
                slug: "test-article",
                title: "Test articls"
            }
        ]

    const [filteredArticles, setFilter] = useState(data);
    
    const searchInput = e => {
      const qry = e.target.value;

      const filteredData = allArticles.filter(article => {
        
        const {title} = article;

        return title.toLowerCase().includes(qry.toLowerCase()); 
      });

      setFilter(filteredData);
    }
    
    
    const allArticles = (filteredArticles.length > 0) ? filteredArticles : data;
   
    return (
        <Layout>
          <div className="container my-6">
            <div className="col-lg-8">
              Search: <input onChange={searchInput} type="text" />
              <h1>Articles</h1>
                {filteredArticles.map((edge, i) => {
                  return (
                    <div key={i} className="card border-0">
                        { edge.title }
                    </div>
                )
                })}
            </div>
          </div>
        </Layout>
      )
} 

export default SignUp
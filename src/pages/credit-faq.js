import React from 'react';
import Layout from '../components/layout';
import Qa from '../components/qa';
import { StaticImage } from 'gatsby-plugin-image';

const CreditQa = () => {
    return (
        <>
        <Layout>
        <div className="container">
            <div className="col-lg-auto my-6">
            <div className="card wlgscreen-75 m-auto">
                <div className="card-body text-center">
                <StaticImage src="../images/Logo.png" id="image3" alt="Credit score maestro logo." />
                    <h1>Credit FAQ</h1>
                </div>
                <div className="card-footer">
                    &nbsp;&nbsp;&nbsp;&nbsp;There are many misconceptions about what it takes to build a top tier credit score or how to properly engage 
                    in credit repair. We at Credit Score Maestro are all about correcting these misconceptions. Here
                    are answers to some of the most frequently asked questions by consumers.
                </div>
            </div> 
            <p>
            
            </p>
        <h1>Credit Q & A</h1>
        <ul className="qalist">
            <Qa 
            question="Do I need to review my credit reports?" 
            answer={<><b>Yes.</b> You should review at least one of the three major credit bureaus 
            reports quarterly. Otherwise, you do not know if inaccurate or incomplete information 
            is impacting your credit score.</>} />
            <Qa 
            question="Who reviews my credit reports?"
            answer="Employers, creditors, merchants, landlords, real estate agents, 
                and virtually anyone you want to do business with has a permissible 
                purpose to review your credit reports."
            />
            <Qa 
            question="Do each of the three major credit bureaus report the same information on me?"
            answer={<><b>No.</b> Reporting is voluntary.
                They may report to none, one, two, or all three of the bureaus.</>}
            />
            <Qa 
            question="What is a good credit score?"
            answer="On average, Americans have a 695 FICO score. The best interest rates are 
            available for those with a 720 or higher credit score. 
            The very best rates are available for those with a 760+ credit score."
            />
            <Qa 
            question="What can I do to improve my credit score?"
            answer="The very first step is to review your credit reports. 
            Almost every consumer has inaccurate or incomplete information on their reports.
            In such cases, they must engage in credit repair through the dispute process 
            to have it removed, or they need to learn and practice the basic precepts and 
            fundamentals of the credit score game."
            />
            <Qa 
            question="How do I build positive credit?"
            answer="Practice the Disciplined Credit Philosophy. 
            The key factor in this is establishing and following a budget."
            />
            <Qa 
            question="Do negative items on my credit report impact my credit score?"
            answer="It depends on how old the item is. A negative item will cause an 
            immediate drop in your credit score. As it becomes older and 
            positive items appear on your report, the negatives have an 
            increasingly less affect upon your score."
            />
            <Qa 
            question="How long do negative items stay on my credit report?"
            answer="The Fair Credit Reporting Act provides for a bankruptcy to remain for 10 years; 
            collection accounts  and charged-off debt remain for 7 1/2 years; all other adverse 
            items must be removed after 7 years.  "
            />
            <Qa 
            question="Can I remove inaccurate or incomplete negative items from my credit report myself?"
            answer={<><b>Yes.</b> There are 'credit repair specialists' who make a living off of providing
            credit-repair services.They, however, perform a service that you should complete
            yourself. Only you, by law, can send a dispute to a lender, and you know your 
            situation best. Plus, doing it yourself is cheaper when you consider the minimal 
            time you spend in DIY credit repair against how many hours you must work to pay
            someone a fee for that service.</>}
            />
            <Qa 
            question="How do I build a credit score?"
            answer="Anytime you do business with a company that reports to the credit bureaus,
            you are building a credit score."
            />
            <Qa 
            question="Is credit good or bad?"
            answer="The answer to this question lies in whether it is used according to the Disciplined
            Credit Philosophy or whether it is used without a plan. Those who use credit in an 
            undisciplined manner eventually find themselves in a financial squeeze and heading to 
            collections or bankruptcy.  On the other hand, disciplined players have the buying 
            power to get themselves out of squeezes, and they enjoy the lowest interest rates."
            />
            <Qa 
            question="How much credit do I need?"
            answer="This depends upon how you use credit. To achieve a top tier credit score, you need 
            enough to assure you owe less than 10% of the credit limit on every credit card when 
            your credit score is pulled."
            />
            <Qa 
            question="As a parent, can I help my children build credit?"
            answer={<><b>Yes.</b> You can make them authorized users on your credit cards.</>}
            />
            <Qa 
            question="If a debt I owe is not reported on my credit report, do I still owe the debt?"
            answer={<><b>Yes.</b> However, statutes of limitations apply that limit how long a lender 
            can take you to court to force payment.</>}
            />
            <Qa 
            question="How long do positive items remain on my credit report?"
            answer="No law regulates this, but as long as an account is active, it will stay on your 
            report. Inactive accounts are removed under the credit bureaus' 10 year rule from 
            the last activity.  "
            />
            <Qa 
            question="How do I remove an inaccurate, incomplete, or negative item from my credit report?"
            answer="There are two ways. You can wait for the Fair Credit Reporting Act statute of 
            limitations to expire, or you can engage in credit repair and file a dispute letter 
            with the credit bureau and/or creditor."
            />
            <Qa 
            question="What are pre-paid credit cards?"
            answer="There is no such thing as a pre-paid credit card. A credit card is either secured 
            or unsecured; both extend  credit and report payments or non-payments to the credit 
            bureaus. These so-called  pre-paid credit cards are not credit cards at all; they are 
            debit cards. Credit card companies use the money you pre-pay on the card to pay for 
            your purchases. There is no credit extended. Stay away from so-called pre-paid 
            credit cards, as they do nothing to build your credit."
            />
            <Qa 
            question="If I make extra payments, will it show up on my credit report?"
            answer={<><b>No.</b> It will reduce your balance, which will lower the utilization rate 
                on the account. This will help increase your credit score. </>}
            />
            <Qa 
            question="Is buying or leasing a vehicle best for my credit?"
            answer="There is no difference on your credit for a purchase or a lease; 
            either option impacts your credit based upon your payment history."
            />
            <Qa 
            question="What is the most important factor in building my credit score?"
            answer="There are five key factors that FICO uses to determine a credit score. 
            Payment history is the most important. The amount of debt is the second biggest 
            factor."
            />
        </ul>
        </div>
        </div>
        </Layout>
        </>
    );
};

export default CreditQa;
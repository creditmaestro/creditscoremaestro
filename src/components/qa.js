import React, { useState } from 'react';

const Qa = ({ question, answer }) => {

    const [isViz, setViz] = useState(false);
    
    return (
        <>
        <li onClick={() => setViz(!isViz)} className="question">
            <b>Q. </b>
            { question } ...
        </li>
        <li className={isViz? "answer" : "answer hide"}>
            <b>A. </b>
            { answer }
        </li>
        </>
    );
};

export default Qa;
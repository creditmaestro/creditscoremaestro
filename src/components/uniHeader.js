import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const UniHeader = (props) => {
    return (
        <div className="col-lg-auto my-6">
            <div className="card wlgscreen-75 m-auto">
                <div className="card-body text-center">
                    <StaticImage src="../images/Logo.png" id="image3" alt="Credit score maestro logo." />
                    <h1>{ props.title }</h1>
                </div>
                <div className="card-footer">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default UniHeader;
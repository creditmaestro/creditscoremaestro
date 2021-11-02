import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import React from 'react';

const artStyle = {
    fontSize: "1.25em"
}

function ArticleBody({raw}) {
    return (
        <div style={artStyle}>
            {
                JSON.parse(raw).content.map(rtNode => {
                    return (
                        <>
                            {documentToReactComponents(rtNode)}
                        </>
                    )
                })
            }
        </div>
    );
}

export default ArticleBody;
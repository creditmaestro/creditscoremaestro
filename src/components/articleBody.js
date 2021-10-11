import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import React from 'react';

function ArticleBody({raw}) {
    return (
        <>
            {
                JSON.parse(raw).content.map(rtNode => {
                    return (
                        <>
                            {documentToReactComponents(rtNode)}
                        </>
                    )
                })
            }
        </>
    );
}

export default ArticleBody;
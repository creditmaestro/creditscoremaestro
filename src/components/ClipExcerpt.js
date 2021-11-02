import React, { useState } from "react"

const ClipExcerpt = ({excerpt}) => {

    const [showClip, setClip] = useState(false);

    const strExcerpt = String(excerpt);
    const strKeep = strExcerpt.substr(0, 100);
    const strClip = strExcerpt.substr(100, strExcerpt.length);

    const excerptObj = {
        keep: strKeep,
        clipped: strClip
    }

    const excerptStyle = {
        fontSize: "1.25em"
    }

    return (
        <div style={excerptStyle}>
            { excerptObj.keep }
            { showClip ? (
                <> 
                    {strClip} <a className="readmore" onClick={() => setClip(!showClip)}> Read less</a>
                </>
            )
            :
                <a className="readmore" onClick={() => setClip(!showClip)}>... Read more</a>
            }  
            
        </div>
    )
}

export default ClipExcerpt;
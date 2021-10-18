import React, { useState } from "react"

const ClipExcerpt = (excerpt, readMore) => {

    const [showClip, setClip] = useState(false);

    let strExcerpt = String(excerpt);
    const strKeep = strExcerpt.substr(0, 100);
    const strClip = strExcerpt.substr(100, strExcerpt.length);

    const excerptObj = {
        keep: strKeep,
        clipped: strClip
    }

    return (
        <>
            { excerptObj.keep }
            { showClip ? (
                <> 
                    {strClip} <a className="readmore" onClick={() => setClip(!showClip)}> Read less</a>
                </>
            )
            :
                <a className="readmore" onClick={() => setClip(!showClip)}>... Read more</a>
            }  
            
        </>
    )
}

export default ClipExcerpt;
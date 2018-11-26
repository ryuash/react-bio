import React from 'react'

const Latest=(props)=>{
    const {showLatest} = props;
    return(
        <button onClick={()=>{showLatest()}}>Latest</button>
    )
}

export default Latest
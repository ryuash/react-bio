import React from 'react'

const All=(props)=>{
const {showAll}=props;
return(
    <button onClick={()=>showAll()}>All</button>
)
}

export default All
import React from 'react'

const Display = (props)=>{
    let {current}=props;
    console.log(current);
    return(
        <div>
            {current.map((x,i)=>{
                return(
                    <div key={i}>
                        <h3>Name: {x.name}</h3>
                        <p>{x.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Display
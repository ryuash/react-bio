import React from 'react'

const Display = (props)=>{
    let {current}=props;
    let last = current.length-1;
    console.log(current);
    return(
        <div>
            {current.map((x,i)=>{
                return(
                    <div className="currentContainer" key={i}>
                        <h3>Name: {x.name}</h3>
                        <p><img src={x.img} alt="an image of {x.name}"/>{x.content}</p>
                        {i===last ? "":<hr></hr>}
                    </div>
                )
            })}
        </div>
    )
}

export default Display
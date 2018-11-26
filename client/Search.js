import React from 'react'

// const Search = (props)=>{
//     const {search} = props;
//     return (
//         <form method="GET" action="/api/search" onSubmit ={(e)=>search(e)}>
//                 <label>name</label>
//                 <input type="text" name="name" placeholder="search here" />
//                 <button type="submit">Search</button>
//         </form>
//     )
// }

class Search extends React.Component {
    constructor(){
        super();
        this.state={
            value:''
        }
        this.change=this.change.bind(this);
    }

    change(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        const {search} = this.props;
        return(
            <form method="GET" action="/api/search" onChange ={this.change} onSubmit ={(e)=>search(e)}>
                <label>name</label>
                <input type="text" name="name" placeholder="search here" />
                <button type="submit">Search</button>
            </form>
        )
    }

}

export default Search
                {/* <label for="name"></label> */}
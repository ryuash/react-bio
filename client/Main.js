import React from 'react'


export default class Main extends React.Component{
    render(){
        return(
            <div id="main">
            <button>All</button>
            <button>Latest</button>
            <form method="GET" action="/api/search">
                <label for="name"></label>
                <input type="text" name="name" placeholder="search here" />
                <button type="submit">Search</button>
            </form>
            </div>
        )
    }
}
import React from 'react'
import All from './all'
import Latest from './Latest'
import Display from './Display'
import Search from './Search'
import axios from 'axios'

export default class Main extends React.Component{
    constructor(){
        super();
        this.state={
            all:[],
            current:[],
            value:''
        }
        this.showAll=this.showAll.bind(this);
        this.showLatest=this.showLatest.bind(this);
        this.submitSearch=this.submitSearch.bind(this);
        this.change=this.change.bind(this);
    }
    async componentDidMount(){
        try{
            const allData= await axios.get('/api');
            const all = allData.data;
            this.setState({all})
        }
        catch(error){
            console.error(error);
        }
    }
    
    async showAll(){
        this.setState({
            current:this.state.all
        })
    }

    async showLatest(){
        let latestGet = await axios.get('/api/latest')
        const latest = latestGet.data;
        this.setState({
            current:latest
        })
    }

    change(event){
        this.setState({value:event.target.value})
    }

    async submitSearch(event){
        try{
            // event.preventDefault();
            // const findName = await axios.get(`/search?name={this.state.value}`);
            // const final = findName.data;
            // this.setState({
            //     current:final
            // })
        }
        catch(error){
            console.error(error);
        }
    }

    render(){
        return(
            <div id="main">
            <All showAll={this.showAll}/>
            <Latest showLatest={this.showLatest}/>
            <form onSubmit={this.submitSearch}>
                <input type="text" name="name" value={this.state.value} placeholder="search here" onChange={this.change}/>
                <button type="submit">Search</button>
            </form>
            <div id="contain">
                {this.state.current[0] ? <Display current={this.state.current}/> : ""}
            </div>
            </div>
        )
    }
}
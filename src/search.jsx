import React, { Component } from 'react';

export default class Search extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
            <input type="text" placeholder="Search here" className="col-md-4" 
                onChange={(e)=>{
                    this.props.searchText(e.target.value);
                }}
            />
            <button className="btn btn-md btn-warning" className="ml-1"  
                onClick={()=>{
                    this.props.search("Hey i am clicked");
                }}
            >Search</button>
            </div>
        );
    }
}
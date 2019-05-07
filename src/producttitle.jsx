import React, { Component } from 'react';

export default class Producttitle extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
            <h4 className="card-title">{this.props.title}</h4>

          </div> 
                
            );
    }
}
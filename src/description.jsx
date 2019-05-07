import React, { Component } from 'react';

export default class Description extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <p className="card-text">
            {this.props.description}</p>
        );
    }
}
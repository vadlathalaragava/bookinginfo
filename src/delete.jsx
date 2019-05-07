import React, { Component } from 'react';

export default class Delete extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <h4>{this.props.productName}</h4>
        );
    }
}
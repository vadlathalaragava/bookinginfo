import React, { Component } from 'react';

export default class Price extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="price text-success"><h5 className="mt-4">{this.props.price}</h5></div>

        );
    }
}
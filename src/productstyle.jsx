import React, { Component } from 'react';

export default class Productstyle extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <h6 className="card-subtitle mb-2 text-muted">{this.props.style}</h6>

        );
    }
}
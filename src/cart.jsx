import React, { Component } from 'react';

export default class Cart extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <a href="#" className="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> {this.props.cart}</a>
            );
    }
}
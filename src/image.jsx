import React, { Component } from 'react';

export default class Image extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
            <img className="card-img" src={this.props.imageUrl} alt="Vans"/>
          <div className="card-img-overlay d-flex justify-content-end">
            <a href="#" className="card-link text-danger like">
              <i className="fas fa-heart"></i>
            </a>
          </div>  

          </div>         
            );
    }
}
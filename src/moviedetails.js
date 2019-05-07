
import React, { Component } from 'react';


export default class Moviedetails extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div>
            <div className="card">
                <h5>{this.props.details.name}</h5>
                
                <img src={this.props.details.image_url} />
            </div>
            <br/>
            </div>
        );
    }
}
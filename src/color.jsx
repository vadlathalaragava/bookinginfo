import React, { Component } from 'react';

export default class Color extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <select className="custom-select mr-1">
                  <option selected>Color</option>
                  <option value="1">Green</option>
                  <option value="2">Blue</option>
                  <option value="3">Red</option>
              </select>
        );
    }
}
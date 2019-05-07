import React, { Component } from 'react';

export default class Size extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <select className="custom-select ml-1">
                  <option selected>Size</option>
                  <option value="1">41</option>
                  <option value="2">42</option>
                  <option value="3">43</option>
              </select>
        );
    }
}
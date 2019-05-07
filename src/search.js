import React, { Component } from 'react';
 import './App.css';
class Search extends Component {
  constructor(props){
    super();

    this.state={
      counter:0
    }
    this.handlaeSearchClick = this.handlaeSearchClick.bind(this);

    //alternate
    // this.handlaeSearchClick =(data)=>{
    //   console.log(dtat);
    //   let currentState =this.state;
    //   currentState.count++;
    //   this.setState(currentState);
    // }

  }
  handlaeSearchClick(data){
    console.log(data);
    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
  }

  handleChange(data){
    console.log(data);
   
  }
  render() {
    return (
      <div > 
        <Search 
          search={this.handlaeSearchClick} 
          searchText={this.handleChange}
          />
          <label className="badge">{this.state.counter}</label>
       
       
       </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';
 import './App.css';
import Product from './product.jsx'
import Search from './search.jsx'
import MovieList from './movielist';
import Toggle from './toggle.js';
import Register from './register/register.js'
class App extends Component {
  constructor(props){
    super();

    this.state={
      counter:0,
      searchQuery:''
    }
    this.handlaeSearchClick = this.handlaeSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
    let currentState = this.state;
    currentState.searchQuery =data;
    this.setState(currentState);
   
  }
  render() {
    return (
      <div className="container"> 
      {/* <Toggle/> */}



        {/* <Search 
          search={this.handlaeSearchClick} 
          searchText={this.handleChange}
          /> */}


          {/* <label className="badge">{this.state.counter}</label> */}



        {/*    */}
        {/* <MovieList search={this.state.searchQuery}/> */}


      <Register/>


       </div>
    );
  }
}

export default App;

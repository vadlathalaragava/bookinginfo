import React, { Component } from 'react';
import MovieList from './movielist';
export default class Toggle extends Component{
    constructor(props){
        console.log("i am constructor")
        super(props);

        this.state = {
            buttonText:"Hide",
            show:true
        }
            this.toggle = this.toggle.bind(this);

    }
    componentDidMount(){
        console.log('I am Mounted');
    }
    componentWillUpdate(){
            console.log("component updated");
            return true;
    }
    componentWillMount(){
        console.log("i am mounting");
    }
   
    toggle(){
            let currentState = this.state;
            currentState.buttonText =currentState.show?'Hide':'Show';
            currentState.show=!currentState.show;
            this.setState(currentState);
        }
    
    render(){
        let content='';
        if(this.state.show){
         content = <MovieList search={''}/>
        }
        return(
            
            <div >
            <button className="btn btn-md btn-warning" onClick={this.toggle}>{this.state.buttonText}</button>
            {content}
            </div>

        );
    }
}
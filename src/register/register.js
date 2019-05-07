import React ,{Component} from 'react';

import Textbox from './Textbox.js';
import SelectBox from './selectbox.js';

import axios from 'axios';
export default class Register  extends Component{
    constructor(props){
        super(props);
        let textControl={
            type:'text',
            className:'form-control',
            value:''
        }
        let select = {
            className:'form-control',
            value:'',
        }
        this.state ={
            register:{
                 
                    FirstName:{
                        ...textControl,
                        id:'Firstname',
                        name:'First Name',
                        label:'First Name',
                        placeholder:'Enter First Name',
                    },

                    LastName:{
                        ...textControl,
                        id:'Lastname',
                        name:'Last Name',
                        label:'Last Name',
                        placeholder:"Enter Last Name",
                    },
                    Age:{
                        ...textControl,
                        id:'age',
                        name:'age',
                        label:'Age',
                        placeholder:'Enter Age',
                    },
                    Country:{
                        ...select,
                        id:'country',
                        name:'Country',
                        label:'Country',
                        options:[
                            {text:'India',value:'IN'},
                            {text:'United States',value:'US'}
                        ]

                    }
                    
                
            }
        };
        this.textChange = this.textChange.bind(this);
       
    }

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(result=>{
            console.log(result);

            let countries = result.data.map(x=>{
                return {value:x.alpha2Code,text:x.name}
            });
            let currentState = this.state;
            currentState.register.Country.options = countries;
            console.log(this.refs);
            this.refs['btnRegister'].className='btn btn-primary';
            this.setState(currentState);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    textChange(e){
        let currentState = this.state;
        currentState.register[e.target.name].value =e.target.value;
        this.setState(currentState);
        console.log(this.state.register);

    }
    render(){

       

   
        return(
            <div className="form-group">
                <Textbox control={this.state.register.FirstName} textChange={this.textChange}/>
                <Textbox control={this.state.register.LastName} textChange={this.textChange}/>
                <Textbox control={this.state.register.Age} textChange={this.textChange}/>
                <SelectBox control={this.state.register.Country} textChange={this.textChange}/>
                <button id="btnOne" ref="btnRegister">Register</button>
            </div>
        )
    }
}
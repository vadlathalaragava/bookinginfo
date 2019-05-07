import React, { Component } from 'react';
import logo from './logo.svg';
 import Label from './Label.jsx';
import Textbox from './Textbox.jsx';
import Image from './image.jsx';
import Producttitle from './producttitle';
import Productstyle from './productstyle';
import Description from './description.jsx';
import Color from './color.jsx';
import Size from './size';
import Price from './price';
import Cart from './cart';

export default class Product extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div>
    <div className="container">
      <div className="row">
      <div className="col-md-4">
        <div className="card">
          <Image imageUrl="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"/>
          </div>
          <div className="card-body">
          <Producttitle title="Vans Sk8-Hi MTE Shoes"/>
          <Productstyle style="Style: VA33TXRJ5"/>
          <Description description="The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool."/>
              {/* <div className="options d-flex flex-fill">
               <Color/>
               <Size/>
            </div> */}
            <div className="buy d-flex justify-content-between align-items-center">
            <Price price="$125"/>
            <Cart cart="Add to Cart"/>
             </div>
          </div>
        </div>
        </div>
      </div>
    </div>

       
    );
  }
}

 
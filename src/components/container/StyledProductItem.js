import React, { Component } from 'react';

export default class StyledProductItem extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div>
        <h3>{props.product.title}</h3>
        <img 
          alt="Item"
          width={props.product.imageWidth}
          heigth={props.product.imageHeight}
          src={`../../img/products/${props.product.imageSrc}`}
        />
        <div>{props.product.description}</div>
        <div>{props.product.price}</div>
      </div>
    )
  }
}

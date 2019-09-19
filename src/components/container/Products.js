import React, { Component } from 'react';
import Product from './Product';
import { StyledDivProducts } from '../styles';
import { products } from './data';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'products': products
    }
  }
  render() {
    return (
      <StyledDivProducts>
        <div className="h4 mt-3 ml-5"><b>Best offers</b></div>
        <div className="d-flex flex-wrap justify-content-center">
          {
            this.state.products.map( product =>
              <Product key={product.id} product = {product}>

              </Product>
            )
          }
        </div>
      </StyledDivProducts>
    )
  }
}

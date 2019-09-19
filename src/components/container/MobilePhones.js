import React, { Component } from 'react';
import Product from './Product';
import { StyledDivPhonesList } from '../styles';
import { products } from './data';

export default class MobilePhones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'products': products
    }
  }
  render() {
    return (
      <StyledDivPhonesList className="d-flex flex-column justify-content-center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>
        <div className="d-flex flex-wrap justify-content-center">
          {
            this.state.products.map( product =>
              <Product key={product.id} product = {product}>

              </Product>
            )
          }
        </div>
      </StyledDivPhonesList>
    )
  }
}

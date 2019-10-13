import React, { Component } from 'react';
import Product from './MobilePhoneItem';
import { StyledDivProducts } from '../styles';
import { ContextConsumer } from '../context';

export default class Products extends Component {
  render() {
    return (
      <StyledDivProducts>
        <div className="h4 mt-3 ml-5"><b>Best offers</b></div>
        <div className="d-flex flex-wrap justify-content-start">
          <ContextConsumer>
            {value => {
              return value.products.map( product => {
                return <Product key={product.id} product = {product}/>
              })
            }}
          </ContextConsumer>
        </div>
      </StyledDivProducts>
    )
  }
}

import React, { Component } from 'react';
import LaptopItem from './LaptopItem';
import { StyledDivPhonesList as StyledDivLaptopList } from '../styles';
import { laptops } from '../data';
import { Link } from "react-router-dom";

export default class Laptops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'products': laptops
    }
  }
  render() {
    return (
      <StyledDivLaptopList className="d-flex flex-column justify-content-center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Laptops</li>
          </ol>
        </nav>
        <div className="d-flex flex-wrap justify-content-start">
          {
            this.state.products.map( laptop =>
              <LaptopItem key={laptop.id} product = {laptop}>

              </LaptopItem>
            )
          }
        </div>
      </StyledDivLaptopList>
    )
  }
}

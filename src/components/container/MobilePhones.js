import React, { Component } from 'react';
import MobilePhoneItem from './MobilePhoneItem';
import { StyledDivPhonesList } from '../styles';
import { mobile_phones } from '../data';
import { Link } from "react-router-dom";

export default class MobilePhones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'products': mobile_phones
    }
  }
  render() {
    return (
      <StyledDivPhonesList className="d-flex flex-column justify-content-center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Mobile Phones</li>
          </ol>
        </nav>
        <div className="d-flex flex-wrap justify-content-start">
          {
            this.state.products.map( mobile_phone =>
              <MobilePhoneItem key={mobile_phone.id} product = {mobile_phone}>

              </MobilePhoneItem>
            )
          }
        </div>
      </StyledDivPhonesList>
    )
  }
}

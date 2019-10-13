import React, { Component } from 'react';
import TabletItem from './TabletItem';
import { StyledDivPhonesList as StyledDivTabletList } from '../styles';
import { tablets } from '../data';
import { Link } from "react-router-dom";

export default class Laptops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'products': tablets
    }
  }
  render() {
    return (
      <StyledDivTabletList className="d-flex flex-column justify-content-center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Tablets</li>
          </ol>
        </nav>
        <div className="d-flex flex-wrap justify-content-start">
          {
            this.state.products.map( tablet =>
              <TabletItem key={tablet.id} product = {tablet}>

              </TabletItem>
            )
          }
        </div>
      </StyledDivTabletList>
    )
  }
}

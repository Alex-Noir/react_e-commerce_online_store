import React from 'react';
import { StyledDivPhonesList as StyledDivLaptopList } from '../../styles';
import { Link } from "react-router-dom";
import { ContextConsumer } from '../../context';

import LaptopItem from './LaptopItem';

export default function Laptops() {
  return (
    <StyledDivLaptopList className="d-flex flex-column justify-content-center">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Laptops</li>
        </ol>
      </nav>
      <div className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.laptops.map( laptop => {
                return <LaptopItem key={laptop.id} laptop = {laptop}/>
              })
            }
          }
        </ContextConsumer>
      </div>
    </StyledDivLaptopList>
  )
}

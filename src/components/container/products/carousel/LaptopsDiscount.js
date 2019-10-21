import React from 'react';
import { StyledDivCountdown, StyledDivDiscountList } from '../../../styles';
import { ContextConsumer } from '../../../context';

import Timer from './Timer';
import LaptopItem from '../LaptopItem';

export default function LaptopsDiscount() {
  return (
    <>
      <StyledDivCountdown>
        <img src={require('../../../../img/carousel/02.webp')} alt=""/>
        <hr/>
        <span>Offer ends in: <Timer/> </span>
      </StyledDivCountdown>
      <StyledDivDiscountList className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.laptops.filter( laptop => laptop.hasDiscount === true ).map( laptop => {
                return <LaptopItem key={laptop.id} laptop = {laptop}/>
              })
            }
          }
        </ContextConsumer>
      </StyledDivDiscountList>
    </>
  )
}

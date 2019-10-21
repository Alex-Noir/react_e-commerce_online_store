import React from 'react';
import { StyledDivCountdown, StyledDivDiscountList } from '../../../styles';
import { ContextConsumer } from '../../../context';

import Timer from './Timer';
import TabletItem from '../TabletItem';

export default function TabletsDiscount() {
  return (
    <>
      <StyledDivCountdown>
        <img src={require('../../../../img/carousel/03.webp')} alt=""/>
        <hr/>
        <span>Offer ends in: <Timer/> </span>
      </StyledDivCountdown>
      <StyledDivDiscountList className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.tablets.filter( tablet => tablet.hasDiscount === true ).map( tablet => {
                return <TabletItem key={tablet.id} tablet = {tablet}/>
              })
            }
          }
        </ContextConsumer>
      </StyledDivDiscountList>
    </>
  )
}

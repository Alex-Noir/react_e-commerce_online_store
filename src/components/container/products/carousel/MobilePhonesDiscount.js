import React from 'react';
import { StyledDivCountdown, StyledDivDiscountList } from '../../../styles';
import { ContextConsumer } from '../../../context';

import Timer from './Timer';
import MobilePhoneItem from '../MobilePhoneItem';

export default function MobilePhonesDiscount() {
  return (
    <>
      <StyledDivCountdown>
        <img src={require('../../../../img/carousel/01.webp')} alt=""/>
        <hr/>
        <span>Offer ends in: <Timer/> </span>
      </StyledDivCountdown>
      <StyledDivDiscountList className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.mobilePhones.filter( mobilePhone => mobilePhone.hasDiscount === true ).map( mobilePhone => {
                return <MobilePhoneItem key={mobilePhone.id} mobilePhone = {mobilePhone}/>
              })
            }
          }
        </ContextConsumer>
      </StyledDivDiscountList>
    </>
  )
}

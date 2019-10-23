import React from 'react';
import { StyledDivProducts } from '../styles';
import { ContextConsumer } from '../context';

import MobilePhoneItem from './products/MobilePhoneItem';

export default function Products() {
  return (
    <StyledDivProducts>
      <div className="h4 mt-3 ml-5"><b>Best offers</b></div>
      <div className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.mobilePhones.map( mobilePhone => {
                return <MobilePhoneItem key={mobilePhone.id} mobilePhone = {mobilePhone}/>
              })
            }
          }
        </ContextConsumer>
      </div>
    </StyledDivProducts>
  )
}
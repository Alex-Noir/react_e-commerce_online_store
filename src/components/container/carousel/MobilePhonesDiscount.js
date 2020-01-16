import React from 'react'
import { DivCountdown, DivDiscountList } from '../../styles'
import { ContextConsumer } from '../../../context'

import Timer from './Timer'
import Item from '../products/Item'

export default function MobilePhonesDiscount() {
  return (
    <React.Fragment>
      <DivCountdown>
        <img src={require('../../../img/carousel/01.webp')} alt=""/>
        <hr/>
        <Timer />
      </DivCountdown>
      <DivDiscountList className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.data
                .filter( dataItem => dataItem.category === 'Mobile Phones' && dataItem.hasDiscount === true )
                .map( dataItem => {
                  return <Item key={dataItem.id} dataItem={dataItem} value={value}/>
                })
            }
          }
        </ContextConsumer>
      </DivDiscountList>
    </React.Fragment>
  )
}

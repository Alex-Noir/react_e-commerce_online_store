import React from 'react'
import { DivCountdown, DivDiscountList } from '../../Styles'
import { ContextConsumer } from '../../../context'

import Timer from './Timer'
import Item from '../products/Item'

export default function LaptopsDiscount() {
  return (
    <>
      <DivCountdown className="d-flex flex-column">
        <img src={require('../../../img/carousel/02.webp')} alt="" />
        <hr />
        <Timer />
      </DivCountdown>
      <DivDiscountList>
        <ContextConsumer>
          {
            value => {
              return value.data
                .filter( dataItem => dataItem.category === 'Laptops' && dataItem.hasDiscount === true )
                .map( dataItem => {
                  return <Item key={dataItem.id} dataItem={dataItem} value={value} />
                })
            }
          }
        </ContextConsumer>
      </DivDiscountList>
    </>
  )
}

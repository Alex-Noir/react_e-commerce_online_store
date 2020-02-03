import React from 'react'
import { DivCountdown, DivDiscountList } from '../../styles'
import { ContextConsumer } from '../../../context'

import Timer from './Timer'
import Item from '../products/Item'

export default function TabletsDiscount() {
  return (
    <>
      <DivCountdown className="d-flex flex-column">
        <img src={require('../../../img/carousel/03.webp')} alt="" />
        <hr />
        <Timer />
      </DivCountdown>
      <DivDiscountList className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.data
                .filter( dataItem => dataItem.category === 'Tablets' && dataItem.hasDiscount === true )
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

import React from 'react'
import { StyledDivCountdown, StyledDivDiscountList } from '../../styles'
import { ContextConsumer } from '../../../context'

import Timer from './Timer'
import Item from '../products/Item'

export default function TabletsDiscount() {
  return (
    <>
      <StyledDivCountdown>
        <img src={require('../../../img/carousel/03.webp')} alt=""/>
        <hr/>
        <span>Offer ends in: <Timer/> </span>
      </StyledDivCountdown>
      <StyledDivDiscountList className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.data
                .filter( dataItem => dataItem.category === 'Tablets' && dataItem.hasDiscount === true )
                .map( dataItem => {
                  return <Item key={dataItem.id} dataItem = {dataItem}/>
              })
            }
          }
        </ContextConsumer>
      </StyledDivDiscountList>
    </>
  )
}

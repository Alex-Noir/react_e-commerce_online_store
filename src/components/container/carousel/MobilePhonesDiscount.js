import React, { useContext } from 'react'
import { DivCountdown, DivDiscountList } from '../../Styles'
import { Context } from '../../../context'

import Timer from './Timer'
import Item from '../products/Item'

export default function MobilePhonesDiscount() {
  const { data } = useContext(Context)

  return (
    <>
      <DivCountdown className="d-flex flex-column">
        <img src={require('../../../img/carousel/01.webp')} alt="" />
        <hr />
        <Timer />
      </DivCountdown>
      <DivDiscountList>
        {
          data.filter( dataItem => dataItem.category === 'Mobile Phones' && dataItem.hasDiscount === true )
              .map( dataItem => {
                return <Item key={dataItem.id} dataItem={dataItem} />
              })
        }
      </DivDiscountList>
    </>
  )
}

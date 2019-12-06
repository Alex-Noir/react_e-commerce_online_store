import React from 'react'
import { ContextConsumer } from '../../../context'

import CartListItem from './CartListItem'

export default function CartList() {
  return (
    <div className="d-flex flex-column justify-content-center">
      <ContextConsumer>
        {
          value => {
            return value.cartList.map( cartListItem => {
              return <CartListItem key={cartListItem.id} cartListItem={cartListItem}/>
            })
          }
        }
      </ContextConsumer>
    </div>
  )
}

import React from 'react'

import CartListItem from './CartListItem'

export default function CartList({value}) {
  const { cartList } = value
  return (
    <div className="d-flex flex-column justify-content-center mb-3">
        {
          cartList.map( cartListItem => {
            return <CartListItem key={cartListItem.id} cartListItem={cartListItem} value={value} />
          })
        }
    </div>
  )
}

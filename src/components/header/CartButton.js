import React from 'react'
import { Link } from 'react-router-dom'
import { DivIconAmountInCart } from '../Styles'

export default function CartButton({ cartList }) {
  return (
    <Link to="/cart" className="position-relative">
      <i className="fas fa-shopping-cart mx-1"></i>
      {
        cartList.length > 0
        ? <DivIconAmountInCart className="animated fadeInDown bg-danger text-light font-weight-bold position-absolute rounded-circle">
            {cartList.length}
          </DivIconAmountInCart>
        : null
      }
    </Link>
  )
}

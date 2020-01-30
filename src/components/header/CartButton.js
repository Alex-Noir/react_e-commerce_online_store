import React from 'react'
import { Link } from 'react-router-dom'
import { DivIconAmountInCart } from '../styles'

export default function CartButton(props) {
  return (
    <Link to="/cart" className="position-relative">
      <i className="fas fa-shopping-cart mx-1"></i>
      {
        props.cartList.length > 0
        ? <DivIconAmountInCart className="bg-danger text-light font-weight-bold position-absolute rounded-circle">
            {props.cartList.length}
          </DivIconAmountInCart>
        : null
      }
    </Link>
  )
}

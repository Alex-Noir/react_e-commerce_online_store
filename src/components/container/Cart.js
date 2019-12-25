import React from 'react'
import { ContextConsumer } from '../../context'
import { DivCart } from '../styles'

import CartList from './cart/CartList'
import PayPalCheckoutButton from './cart/PayPalCheckoutButton'

export default function Cart() {
  return (
    <DivCart className="w-100">
      <ContextConsumer>
        { 
          value => {
            return (
              value.cartList < 1
              ? <span>Your shopping cart is empty</span>
              : <React.Fragment>
                  <CartList value={value}/>
                  <button type="button" 
                          className="btn btn-danger"
                          onClick={() => {value.clearCart()}}>Clear shopping cart</button>
                  <div className="d-flex flex-column">
                    <h2>Subtotal: {value.cartSubTotalPrice}</h2>
                    <h2>Tax: {value.cartTax}</h2>
                    <h1>Total: {value.cartTotalPrice}</h1>
                    <PayPalCheckoutButton cartTotalPrice={value.cartTotalPrice}/>
                  </div>
                </React.Fragment>
            )
          }
        }
      </ContextConsumer>
    </DivCart>
  )
}
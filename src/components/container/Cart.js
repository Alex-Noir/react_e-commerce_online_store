import React from 'react'
import { DivCart } from '../styles'
import { useTranslation } from 'react-i18next'

import CartList from './cart/CartList'
import PayPalCheckoutButton from './cart/PayPalCheckoutButton'

export default function Cart(props) {
  const { cartSubTotalPrice, currency } = props.value

  let currencyRate = 1

  if (currency === '$') {
    currencyRate = props.value.fetchedRates.USD
  } else if (currency === '₽') {
    currencyRate = props.value.fetchedRates.RUB
  } else if (currency === 'Ch¥') {
    currencyRate = props.value.fetchedRates.CNY
  } else if (currency === 'Jp¥') {
    currencyRate = props.value.fetchedRates.JPY
  } else if (currency === '₩') {
    currencyRate = props.value.fetchedRates.KRW
  } else if (currency === '₹') {
    currencyRate = props.value.fetchedRates.INR
  }

  let subTotalPrice = parseFloat((cartSubTotalPrice * currencyRate).toFixed(2))
  let cartTax = parseFloat((subTotalPrice * 0.1).toFixed(2))
  let cartTotalPrice = parseFloat((subTotalPrice + cartTax).toFixed(2))

  const [ t, i18n ] = useTranslation()

  return (
    <DivCart className="w-100">
      {
        props.value.cartList < 1
        ? <div className="d-flex justify-content-center">
            <h2>{t('Cart|1')}</h2>
          </div>
        : <>
            <CartList value={props.value} />
            <button type="button" className="btn btn-danger" onClick={props.value.clearCart}>{t('Cart|2')}</button>
            <div className="d-flex flex-column">
              <h2>{t('Cart|3')} {currency} {subTotalPrice}</h2>
              <h2>{t('Cart|4')} {currency} {cartTax}</h2>
              <h1>{t('Cart|5')} {currency} {cartTotalPrice}</h1>
              <PayPalCheckoutButton cartTotalPrice={cartTotalPrice} />
            </div>
          </>
      }
    </DivCart>
  )
}

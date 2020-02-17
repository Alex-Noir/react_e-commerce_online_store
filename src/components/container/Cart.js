import React from 'react'
import { DivCart } from '../Styles'
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

  const [ t ] = useTranslation()

  return (
    <DivCart className="w-100">
      {
        props.value.cartList < 1
        ? <div className="d-flex justify-content-center">
            <h2>{t('Cart|1')}</h2>
          </div>
        : <>
            <CartList value={props.value} />
            <button type="button" className="btn btn-danger mb-5" onClick={props.value.clearCart}>{t('Cart|2')}</button>
            <div className="d-flex flex-column">
              <h2 className="d-flex no-wrap">
                {t('Cart|3')} 
                <span className="d-flex no-wrap pl-2">                
                  <span>{currency}</span> &nbsp; <span>{subTotalPrice}</span>
                </span>
              </h2>
              <h2 className="d-flex no-wrap">
                {t('Cart|4')} 
                <span className="d-flex no-wrap pl-2">   
                  <span>{currency}</span> &nbsp; <span>{cartTax}</span>
                </span>
              </h2>
              <h1 className="d-flex no-wrap">
                {t('Cart|5')} 
                <span className="d-flex no-wrap pl-2">  
                  <span>{currency}</span> &nbsp; <span>{cartTotalPrice}</span>
                </span>
              </h1>
              <PayPalCheckoutButton cartTotalPrice={cartTotalPrice} />
            </div>
          </>
      }
    </DivCart>
  )
}

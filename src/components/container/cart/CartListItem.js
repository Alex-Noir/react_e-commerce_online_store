import React, { useContext } from 'react'
import { DivCartListItem } from '../../Styles'
import { Context } from '../../../context'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function CartListItem({ cartListItem }) {
  const { id,
          title, 
          company,
          amountInCart,
          price,
          hasDiscount,
          totalPrice } = cartListItem

  const { fetchedRates, currency, cartCounter, deleteItemFromCart, evaluateTotalPrice } = useContext(Context)
  
  const [ t ] = useTranslation()

  let currencyRate = 1

  if (currency === '$') {
    currencyRate = fetchedRates.USD
  } else if (currency === '₽') {
    currencyRate = fetchedRates.RUB
  } else if (currency === 'Ch¥') {
    currencyRate = fetchedRates.CNY
  } else if (currency === 'Jp¥') {
    currencyRate = fetchedRates.JPY
  } else if (currency === '₩') {
    currencyRate = fetchedRates.KRW
  } else if (currency === '₹') {
    currencyRate = fetchedRates.INR
  }

  return (
    <DivCartListItem className="rounded bg-light border border-danger mb-3 p-3">
      <img src={require(`../../../img/products/data/${id}/01.webp`)} alt={title} height="100" width="100" />
      <div>
        <Link to={`/product-page/${id}`}><h5 className="text-dark">{title}</h5></Link>
        <h6 className="p-1">{t('ProductInfo|1')} {company}</h6>
      </div>
      <h6 className="d-flex no-wrap align-items-start mb-0">
        <button className="btn btn-outline-dark border-right-0 rounded-0"
                name="-"
                onClick={e => { cartCounter(e, id, hasDiscount) 
                                evaluateTotalPrice() }}> - </button>
        <input  className="btn btn-outline-dark border-left-0 border-right-0 rounded-0" 
                type="text" 
                value={amountInCart} 
                size="1"
                readOnly />
        <button className="btn btn-outline-dark border-left-0 rounded-0"
                name="+" 
                onClick={e => { cartCounter(e, id, hasDiscount) 
                                evaluateTotalPrice() }}> + </button>
      </h6>
      {
        hasDiscount
        ? <h5 className="d-inline-flex no-wrap">
            <span>{t('ProductInfo|4')}</span>
            <span className='d-flex flex-column ml-1'>
              <s className="d-flex no-wrap">
                {currency} {parseFloat((price * currencyRate).toFixed(2))}
              </s>
              <span className="d-flex no-wrap text-danger">
                {currency} {parseFloat((totalPrice * currencyRate).toFixed(2))}
              </span>  
            </span>          
          </h5>
        : <h5 className="d-inline-flex no-wrap">
            <span>{t('ProductInfo|4')}</span>
            <span className="d-flex no-wrap ml-1">
              {currency} {parseFloat((totalPrice * currencyRate).toFixed(2))}
            </span>
          </h5>
      }
      <button type="button" 
              className="close text-danger d-inline-block"
              aria-label="Close" 
              onClick={() => {  deleteItemFromCart(id) 
                                evaluateTotalPrice()  }}>
        <span aria-hidden="true">&times;</span>
      </button>
    </DivCartListItem>
  )
}

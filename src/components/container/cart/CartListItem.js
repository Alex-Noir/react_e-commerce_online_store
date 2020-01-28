import React from 'react'
import { DivCartListItem } from '../../styles'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function CartListItem(props) {
  const { id,
          title, 
          company,
          img, 
          amountInCart,
          hasDiscount,
          totalPrice } = props.cartListItem
  
  const [ t, i18n ] = useTranslation()

  let currencyRate = 1

  if (props.value.currency === '$') {
    currencyRate = props.value.fetchedRates.USD
  } else if (props.value.currency === '₽') {
    currencyRate = props.value.fetchedRates.RUB
  } else if (props.value.currency === 'Ch¥') {
    currencyRate = props.value.fetchedRates.CNY
  } else if (props.value.currency === 'Jp¥') {
    currencyRate = props.value.fetchedRates.JPY
  } else if (props.value.currency === '₩') {
    currencyRate = props.value.fetchedRates.KRW
  } else if (props.value.currency === '₹') {
    currencyRate = props.value.fetchedRates.INR
  }

  return (
    <DivCartListItem className="rounded bg-light border border-danger m-1 p-3 justify-content-start">
      <img src={require(`../../../img/products/data/${id}/${img}`)} alt={title} height="100" width="100" />
      <div>
        <Link to={`/product-page/${id}`}><h5 className="p-1 text-dark">{title}</h5></Link>
        <h6 className="p-1">{t('ProductPage|1')} {company} </h6>
      </div>
      <h6>
        <button className="btn btn-outline-dark border-right-0 rounded-0"
                name="-"
                onClick={e => { props.value.cartCounter(e, id, hasDiscount) 
                                props.value.evaluateTotalPrice() }}> - </button>
        <input  className="btn btn-outline-dark border-left-0 border-right-0 rounded-0" 
                type="text" 
                value={amountInCart} 
                size="1"
                readOnly />
        <button className="btn btn-outline-dark border-left-0 rounded-0"
                name="+" 
                onClick={e => { props.value.cartCounter(e, id, hasDiscount) 
                                props.value.evaluateTotalPrice() }}> + </button>
      </h6>
      <div>
        <button type="button" 
                className="close text-danger"
                aria-label="Close" 
                onClick={() => {  props.value.deleteItemFromCart(id) 
                                  props.value.evaluateTotalPrice()  }}>
          <span aria-hidden="true">&times;</span>
        </button>
        <h6>
          {t('ProductPage|4')} {props.value.currency} {parseFloat((totalPrice * currencyRate).toFixed(2))}
        </h6>
      </div>
    </DivCartListItem>
  )
}

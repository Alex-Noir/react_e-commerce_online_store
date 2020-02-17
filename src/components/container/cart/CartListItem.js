import React from 'react'
import { DivCartListItem } from '../../Styles'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function CartListItem(props) {
  const { id,
          title, 
          company,
          img, 
          amountInCart,
          price,
          hasDiscount,
          totalPrice } = props.cartListItem
  
  const [ t ] = useTranslation()

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
    <DivCartListItem className="rounded bg-light border border-danger mb-3 p-3">
      <img src={require(`../../../img/products/data/${id}/${img}`)} alt={title} height="100" width="100" />
      <div>
        <Link to={`/product-page/${id}`}><h5 className="text-dark">{title}</h5></Link>
        <h6 className="p-1">{t('ProductInfo|1')} {company}</h6>
      </div>
      <h6 className="d-flex no-wrap align-items-start mb-0">
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
      {
        hasDiscount
        ? <h5 className="d-inline-flex">
            <span>{t('ProductInfo|4')}</span>
            <span className='d-flex flex-column ml-1'>
              <s className="d-flex no-wrap">
                <span>{props.value.currency}</span> 
                <span>{parseFloat((price * currencyRate).toFixed(2))}</span>
              </s>
              <span className="d-flex no-wrap text-danger">
                <span>{props.value.currency}</span> 
                <span>{parseFloat((totalPrice * currencyRate).toFixed(2))}</span>
              </span>  
            </span>          
          </h5>
        : <h5 className="d-inline-flex">
            <span>{t('ProductInfo|4')}</span>
            <span className="d-flex no-wrap ml-1">
              <span>{props.value.currency}</span>
              <span>{parseFloat((totalPrice * currencyRate).toFixed(2))}</span>
            </span>
          </h5>
      }
      <button type="button" 
              className="close text-danger d-inline-block"
              aria-label="Close" 
              onClick={() => {  props.value.deleteItemFromCart(id) 
                                props.value.evaluateTotalPrice()  }}>
        <span aria-hidden="true">&times;</span>
      </button>
    </DivCartListItem>
  )
}

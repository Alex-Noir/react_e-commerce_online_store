import React from 'react'
import { DivProductItem } from '../../styles'
import { Link } from 'react-router-dom'
import { ContextConsumer } from '../../../context'

export default function Item(props) {
  const { id,
          title,
          img,
          imageWidth,
          imageHeight,
          price,
          isInCart,
          amountInCart } = props.dataItem

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
    <DivProductItem className="d-flex flex-column mr-2 mt-2 p-3 rounded bg-light">
      <Link to={`/product_page/${id}`} className="d-flex flex-column align-self-center nav-link text-dark">
        <img 
          className="align-self-center"
          alt="Item"
          width={imageWidth}
          heigth={imageHeight}
          src={require(`../../../img/products/data/${id}/01.webp`)}
        />
        <h4>{title}</h4>
        <div>{props.value.currency} {parseFloat((price * currencyRate).toFixed(2))}</div>
      </Link>
    </DivProductItem>
  )
}

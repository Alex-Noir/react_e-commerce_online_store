import React, { useState, useEffect, useRef } from 'react'
import { DivProductItem } from '../../styles'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import StarRating from './productPage/StarRating'

export default function Item(props) {
  const { id,
          title,
          img,
          imageWidth,
          imageHeight,
          price,
          hasDiscount,
          discount,
          isInCart,
          amountInCart,
          rating } = props.dataItem

  const [ customRating, setCustomRating ] = useState(rating || null)
  const [ tempRating, setTempRating ] = useState(null)
  const prevCount = usePrevious(customRating)

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

  function handleMouseover(rating) {
    setCustomRating(rating)
    setTempRating(prevCount)
  }

  function rate(rating) {
    setCustomRating(rating)
    setTempRating(rating)
  }

  function handleMouseout() {
    setCustomRating(prevCount)
  }

  function usePrevious(value) {
    const ref = useRef()
    
    useEffect(() => {
      ref.current = value
    }, [value])    

    return ref.current
  }

  return (
    <DivProductItem className="mr-2 mt-2 p-3 rounded bg-light">
      <Link to={`/product-page/${id}`} className="d-flex flex-column align-self-center nav-link text-dark">
        <img 
          className="align-self-center"
          alt="Item"
          width={imageWidth}
          heigth={imageHeight}
          src={require(`../../../img/products/data/${id}/01.webp`)}
        />
        <h4>{title}</h4>
        <StarRating rating={rating} 
                    customRating={customRating}
                    handleMouseover={handleMouseover}
                    rate={rate}
                    handleMouseout={handleMouseout} />
        <br />
        <div className="d-flex flex-row justify-content-between">
          <h4>
            {
              !hasDiscount
              ? <span>{props.value.currency} {parseFloat((price * currencyRate).toFixed(2))}</span>
              : <React.Fragment>
                  <span>
                    <s>{props.value.currency} {parseFloat((price * currencyRate).toFixed(2))}</s>
                    &nbsp;
                    <span className="text-danger">
                      {props.value.currency} {parseFloat(((price * currencyRate) * discount).toFixed(2))}
                    </span>
                  </span>
                </React.Fragment>
            }
          </h4>
          <h6 className={isInCart ? "bg-danger text-white p-1 rounded" : "invisible"}>
            {t('SearchResult|1')} {amountInCart}
          </h6>
        </div>
      </Link>
    </DivProductItem>
  )
}

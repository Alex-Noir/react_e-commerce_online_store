import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import StarRating from '../productPage/StarRating'

export default function ProductInfo(props) {
  const { title, 
          company,
          description, 
          price,
          hasDiscount,
          discount,
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
    <>
      <h1>{title}</h1>
      <h2>{t('ProductInfo|1')} {company}</h2>
      <StarRating rating={rating} 
                  customRating={customRating}
                  handleMouseover={handleMouseover}
                  rate={rate}
                  handleMouseout={handleMouseout} />
      <h5>{t('ProductInfo|2')} {rating}</h5>
      <h5>{t('ProductInfo|3')} { ((customRating + 1) / 2).toFixed(1) }</h5>
      <h2>{t('ProductInfo|4')} &nbsp;
        {
          hasDiscount
          ? <span>
              <s>{props.value.currency} {parseFloat((price * currencyRate).toFixed(2))}</s>
              &nbsp;
              <span className="text-danger">
                {props.value.currency} {parseFloat(((price * currencyRate) * discount).toFixed(2))}
              </span>
            </span>
          : <span>{props.value.currency} {parseFloat((price * currencyRate).toFixed(2))}</span>
        }          
      </h2>
      <br />
      <h3>{t('ProductInfo|5')} {description}</h3>
    </>
  )
}

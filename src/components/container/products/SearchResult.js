import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ContextConsumer } from '../../../context'
import { DivInfo } from '../../styles'

import StarRating from './productPage/StarRating'

export default function SearchResult(props) {
  const { id, 
          title, 
          category,
          price, 
          isInCart, 
          amountInCart, 
          rating } = props.result

  const [ customRating, setCustomRating ] = useState(rating || null)
  const [ tempRating, setTempRating ] = useState(null)
  const prevCount = usePrevious(customRating)
  const [ inputValue, setInputValue ] = useState(0)
  const [ isInfoVisible, setIsInfoVisible] = useState(false)

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

  function counter(e) {
    if (e.target.name === "-" && inputValue > 0) {
      setIsInfoVisible(false)
      setInputValue(inputValue - 1)
    } else if (e.target.name === "-" && inputValue <= 0) {
      return null
    } else if (e.target.name === "+") {
      setIsInfoVisible(false)
      setInputValue(inputValue + 1)
    }
  }

  function showInfo(inputValue) {
    if (inputValue >= 1) {
      setIsInfoVisible(true)
      setTimeout(() => setIsInfoVisible(false), 3000)
    } else { return null }
  }

  return (
    <ContextConsumer>
      {
        value => (
          <div className="rounded bg-light border border-danger m-1 p-3">
            <img
              src={require(`../../../img/products/data/${id}/01.webp`)} 
              alt="SearchItem"
              width="121"
              heigth="121"
            />
            <div className='d-flex flex-column'>
              <Link to={`/product_page/${id}`} className="text-dark"><h4>{title}</h4></Link>
              <h6 className="text-primary">{category}</h6>
              <div className="d-flex flex-row">
                <StarRating rating={rating}
                            customRating={customRating}
                            handleMouseover={handleMouseover}
                            rate={rate}
                            handleMouseout={handleMouseout} />
                <span className="ml-2">({rating})</span>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="mb-1">
                <button className="btn btn-outline-dark border-right-0 rounded-0"
                        type="button" 
                        value="-" 
                        name="-" 
                        onClick={e => counter(e)}> - </button>
                <input  className="btn btn-outline-dark border-left-0 border-right-0 rounded-0"
                        type="text" 
                        value={inputValue} 
                        size="1" 
                        readOnly />
                <button className="btn btn-outline-dark border-left-0 rounded-0" 
                        type="button" 
                        value="+" 
                        name="+" 
                        onClick={e => counter(e)}> + </button>
              </div>
              <button type="button"
                      className="btn btn-warning"
                      onClick={() => {  value.addToCart(id, inputValue)
                                        showInfo(inputValue)
                                        value.evaluateTotalPrice()  }}>{t('ProductPage|7')}</button>
              <DivInfo className={isInfoVisible ? "visible" : "invisible"}> 
                +{inputValue} {t('ProductPage|8')}
              </DivInfo>
            </div>
            <div className="d-flex flex-column">
              <h3>
                {value.currency} {parseFloat((price * currencyRate).toFixed(2))}
              </h3>
              <h6 className={isInCart ? "bg-danger text-white" : null}>{t('SearchResult|1')}: {amountInCart}</h6>
            </div>
          </div>
        )
      }
    </ContextConsumer>
  )
}

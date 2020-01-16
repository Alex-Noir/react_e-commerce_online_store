import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { DivProductPage, DivInfo } from '../../styles'
import { useTranslation } from 'react-i18next'

import StarRating from './productPage/StarRating'
import Reviews from './productPage/Reviews'
import Comments from './productPage/Comments'
import Slider from './productPage/Slider'

export default function ProductPage(props) {
  const { id,
          title, 
          company,
          category, 
          description, 
          price,
          rating } = props.dataItem
          
  const [ inputValue, setInputValue ] = useState(0)
  const [ isInfoVisible, setIsInfoVisible] = useState(false)
  const [ isReviewsTabVisible, setIsReviewsTabVisible ] = useState(true)
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

  function toggleTabs(e) {
    if (e.target.name === 'reviews') {
      setIsReviewsTabVisible(true)
    } else if (e.target.name === 'comments') {
      setIsReviewsTabVisible(false)
    }
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
    <DivProductPage>
      <nav aria-label="breadcrumb" className="align-self-start">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">{t('MobilePhones|1')}</Link></li>
          <li className="breadcrumb-item">
            {
              (() => {
                if (category === 'Mobile Phones') {
                  return <Link to="/mobile_phones">{t('Nav|1')}</Link>
                } else if (category === 'Laptops') {
                  return <Link to="/laptops">{t('Nav|2')}</Link>
                } else if (category === 'Tablets') {
                  return <Link to="/tablets">{t('Nav|3')}</Link>
                }  
              })()
            }
          </li>
          <li className="breadcrumb-item active" aria-current="page">{title}</li>
        </ol>
      </nav>
      <Slider dataItem={props.dataItem} />
      <div className="d-flex flex-column">
        <h1>{title}</h1>
        <h2>{t('ProductPage|1')}: {company}</h2>
        <StarRating rating={rating} 
                    customRating={customRating}
                    handleMouseover={handleMouseover}
                    rate={rate}
                    handleMouseout={handleMouseout} />
        <h5>{t('ProductPage|2')}: {rating}</h5>
        <h5>{t('ProductPage|3')}: { ((customRating + 1) / 2).toFixed(1) }</h5>
        <h2>{t('ProductPage|4')}: {props.value.currency} {parseFloat((price * currencyRate).toFixed(2))}</h2>
        <br />
        <h3>{t('ProductPage|5')}: {description}</h3>
        <h3>{t('ProductPage|6')}: 
          <button className="btn btn-outline-dark border-right-0 rounded-0 ml-3"
                  type="button" 
                  value="-" 
                  name="-" 
                  onClick={e => {counter(e)}}> - </button>
          <input  className="btn btn-outline-dark border-left-0 border-right-0 rounded-0"
                  type="text" 
                  value={inputValue} 
                  size="1" 
                  readOnly />
          <button className="btn btn-outline-dark border-left-0 rounded-0" 
                  type="button" 
                  value="+" 
                  name="+" 
                  onClick={e => {counter(e)}}> + </button>
        </h3>
        <div className="position-relative">
          <button type="button"
                  className="btn btn-warning mr-2"
                  onClick={() => {  props.value.addToCart(id, inputValue)
                                    showInfo(inputValue)
                                    props.value.evaluateTotalPrice()  }}>{t('ProductPage|7')}</button>
          <DivInfo className={isInfoVisible ? "visible" : "invisible"}> 
            +{inputValue} {t('ProductPage|8')} 
          </DivInfo>
        </div>
      </div>
      <div>
        <button type="button" 
                name="reviews" 
                className="btn btn-light w-50 mt-5 border-right border-top rounded-0 px-4 shadow-none" 
                onClick={e => toggleTabs(e)}
                >{t('ProductPage|9')}</button>
        <button type="button"
                name="comments"
                className="btn btn-light w-50 mt-5 border-left border-top rounded-0 px-4 shadow-none" 
                onClick={e => toggleTabs(e)}
                >{t('ProductPage|10')}</button>
      </div>
      {
        isReviewsTabVisible
        ? <Reviews dataItem={props.dataItem} value={props.value} />
        : <Comments />
      }
    </DivProductPage>
  )
}

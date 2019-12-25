import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DivProductPage, DivInfo } from '../../styles'
import { ContextConsumer } from '../../../context'

import StarRating from './productPage/StarRating'
import Reviews from './productPage/Reviews'
import Comments from './productPage/Comments'
import Slider from './productPage/Slider'

export default function ProductPage(props) {
  const [ inputValue, setInputValue ] = useState(0)
  const [ isInfoVisible, setIsInfoVisible] = useState(false)
  const [ isReviewsTabVisible, setIsReviewsTabVisible ] = useState(true)

  const { id,
          title, 
          company,
          category, 
          description, 
          price,
          rating } = props.dataItem

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

  return (
    <DivProductPage>
      <nav aria-label="breadcrumb" className="align-self-start">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item">
            {
              (function() {
                if (category === 'Mobile Phones') {
                  return <Link to="/mobile_phones">{category}</Link>
                } else if (category === 'Laptops') {
                  return <Link to="/laptops">{category}</Link>
                } else if (category === 'Tablets') {
                  return <Link to="/tablets">{category}</Link>
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
        <h2>Company: {company}</h2>
        <StarRating rating={rating} />
        <h2>Price: {price}</h2>
        <h3>Info: {description}</h3>
        <h3>Amount: 
          <button className="btn btn-outline-dark border-right-0 rounded-0 ml-3"
                  type="button" 
                  value="-" 
                  name="-" 
                  onClick={(e) => {counter(e)}}> - </button>
          <input  className="btn btn-outline-dark border-left-0 border-right-0 rounded-0"
                  type="text" 
                  value={inputValue} 
                  size="1" 
                  readOnly />
          <button className="btn btn-outline-dark border-left-0 rounded-0" 
                  type="button" 
                  value="+" 
                  name="+" 
                  onClick={(e) => {counter(e)}}> + </button>
        </h3>
        <ContextConsumer>
          {
            value => (
              <div className="position-relative w-25">
                <button type="button"
                        className="btn btn-warning w-100"
                        onClick={() => {  value.addToCart(id, inputValue)
                                          showInfo(inputValue)
                                          value.evaluateTotalPrice()  }}>Add to cart</button>
                <DivInfo className={isInfoVisible ? "visible" : "invisible"}> +{inputValue} items added! </DivInfo>
              </div>
            )
          }
        </ContextConsumer>
      </div>
      <div>
        <button type="button" 
                name="reviews" 
                className="btn btn-light w-50 mt-5 border-right border-top rounded-0 px-4 shadow-none" 
                onClick={(e) => toggleTabs(e)}
                >Product Reviews</button>
        <button type="button"
                name="comments"
                className="btn btn-light w-50 mt-5 border-left border-top rounded-0 px-4 shadow-none" 
                onClick={(e) => toggleTabs(e)}
                >Comments</button>
      </div>
      {
        isReviewsTabVisible
        ? (
          <ContextConsumer>
            {
              value => (
                <Reviews dataItem={props.dataItem} value={value} />
              )
            }
          </ContextConsumer>
        )
        : <Comments />
      }
    </DivProductPage>
  )
}

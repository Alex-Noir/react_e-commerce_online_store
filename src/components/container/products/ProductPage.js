import React, { useState } from 'react'
import { DivProductPage, DivInfo } from '../../styles'
import { Link } from "react-router-dom"
import { ContextConsumer } from '../../../context'

export default function ProductPage(props) {

  const [ inputValue, setInputValue ] = useState(0)
  const [ isInfoVisible, setIsInfoVisible] = useState(false)

  const { id,
          title, 
          company,
          category, 
          description, 
          img, 
          price } = props.dataItem

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
      <img src={require(`../../../img/products/${img}`)} alt={title} height="400" width="400"/>
      <div className="d-flex flex-column">
        <div className="h1">{title}</div>
        <div className="h2">Company: {company}</div>
        <div className="h2">Price: {price}</div>
        <div className="h3">Info: {description}</div>
        <span className="h3">Amount: 
          <button name="-" onClick={(e) => {counter(e)}}>-</button>
          <input type="text" value={inputValue} size="1" readOnly />
          <button name="+" onClick={(e) => {counter(e)}}>+</button>
        </span>
        <ContextConsumer>
          {
            value => (
              <div className="position-relative w-25">
                <button className="w-100"
                        onClick={() => {  value.addToCart(id, inputValue)
                                          showInfo(inputValue)
                                          value.evaluateTotalPrice()  }}>Add to cart</button>
                <DivInfo className={isInfoVisible ? "visible" : "invisible"}> +{inputValue} items added! </DivInfo>
              </div>
            )
          }
        </ContextConsumer>
      </div>   
    </DivProductPage>
  )
}

import React, { Component } from 'react'
import { StyledDivProductPage } from '../styles'
import { Link } from "react-router-dom"
import { ContextConsumer } from '../context'

export default class ProductPage extends Component {
  render() {
    return (
      <ContextConsumer>
        {value => {
          const { id, 
                  title, 
                  company, 
                  description, 
                  img, 
                  price, 
                  isInCart, 
                  amountInCart } = value.productTemplate
        
          return (
            <StyledDivProductPage>
              <nav aria-label="breadcrumb" className="align-self-start">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/mobile_phones">Mobile Phones</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{title}</li>
                </ol>
              </nav>
              <img src={require(`../../img/products/${img}`)} alt={title} height="400" width="400"/>
              <div className="d-flex flex-column">
                <div className="h1">{title}</div>
                <div className="h2">Company: {company}</div>
                <div className="h2">Price: {price}</div>
                <div className="h3">Info: {description}</div>
              </div>
            </StyledDivProductPage>
          )
        }}
      </ContextConsumer>
    )
  }
}

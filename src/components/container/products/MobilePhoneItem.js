import React, { Component } from 'react'
import { StyledProductItem } from '../../styles'
import { Link } from "react-router-dom"
import { ContextConsumer } from '../../context'

export default class Product extends Component {
  render() {
    const { id, 
            title, 
            company,
            category,
            img, 
            imageWidth, 
            imageHeight, 
            price, 
            isInCart, 
            amountInCart } = this.props.mobilePhone

    return (
      <ContextConsumer>
        {
          (value) => (
            <StyledProductItem className="d-flex flex-column mr-2 mt-2 p-3 rounded bg-light" onClick={() => value.handleMobilePhoneItemInfo(id)}>
              <Link to="/product_page" className="d-flex flex-column align-self-center nav-link text-dark">
                <img 
                  className="align-self-center"
                  alt="Item"
                  width={imageWidth}
                  heigth={imageHeight}
                  src={require(`../../../img/products/${img}`)}
                />
                <h4>{title}</h4>
                <div>{price}</div>
              </Link>
            </StyledProductItem>
          )
        }
      </ContextConsumer>
    )
  }
}
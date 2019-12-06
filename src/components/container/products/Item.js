import React, { Component } from 'react'
import { DivProductItem } from '../../styles'
import { Link } from 'react-router-dom'

export default class Item extends Component {
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
            amountInCart } = this.props.dataItem

    return (
      <DivProductItem className="d-flex flex-column mr-2 mt-2 p-3 rounded bg-light">
        <Link to={`/product_page/${id}`} className="d-flex flex-column align-self-center nav-link text-dark">
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
      </DivProductItem>
    )
  }
}

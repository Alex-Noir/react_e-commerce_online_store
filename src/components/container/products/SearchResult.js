import React, { Component } from 'react'
import { SearchContextConsumer } from '../../../context'

export default class SearchResult extends Component {
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
            amountInCart } = this.props.result

    return (
      <SearchContextConsumer>
        {
          value => (
            <div className="border border-dark">
              <img 
                src={require=(`../../../img/products/${img}`)} 
                alt="SearchItem"
                width={imageWidth}
                heigth={imageHeight}
              />
              <h4>{title}</h4>
            </div>
          )
        }
      </SearchContextConsumer>
    )
  }
}

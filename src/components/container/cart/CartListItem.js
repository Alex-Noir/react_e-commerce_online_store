import React from 'react'
import { DivCartListItem } from '../../styles'
import { ContextConsumer } from '../../../context'

export default function CartListItem(props) {
  const { id,
          title, 
          company,
          img, 
          price,
          amountInCart,
          totalPrice } = props.cartListItem

  return (
    <DivCartListItem className="rounded bg-light border border-danger m-1 p-3 justify-content-start">
      <img src={require(`../../../img/products/data/${id}/${img}`)} alt={title} height="100" width="100"/>
      <div>
        <div className="h5 p-1">{title}</div>
        <div className="h6 p-1">Company: {company}</div>
      </div>

      <ContextConsumer>
        {
          value => (
            <React.Fragment>
              <div className="h6">
                <button className="btn btn-outline-dark border-right-0 rounded-0" 
                        name="-"
                        onClick={(e) => { value.cartCounter(e, id) 
                                          value.evaluateTotalPrice() }}> - </button>
                <input  className="btn btn-outline-dark border-left-0 border-right-0 rounded-0" 
                        type="text" 
                        value={amountInCart} 
                        size="1"
                        readOnly />
                <button className="btn btn-outline-dark border-left-0 rounded-0"
                        name="+" 
                        onClick={(e) => { value.cartCounter(e, id) 
                                          value.evaluateTotalPrice() }}> + </button>
              </div>
              <div>
                <button type="button" 
                        className="close text-danger"
                        aria-label="Close" 
                        onClick={() => {  value.deleteItemFromCart(id) 
                                          value.evaluateTotalPrice()  }}>
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="h6">Price for one: {price}</div>
                <div className="h6">Overall price: {totalPrice}</div>
              </div>
            </React.Fragment>
          )
        }
      </ContextConsumer>
    </DivCartListItem>
  )
}

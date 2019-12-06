import React from 'react'
import { DivProducts } from '../../styles'
import { ContextConsumer } from '../../../context'

import Item from './Item'

export default function Products() {
  return (
    <DivProducts>
      <div className="h4 mt-3 ml-5"><b>Best offers</b></div>
      <div className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.data
                .filter( dataItem => dataItem.category === 'Mobile Phones' )
                .map( dataItem => {
                  return <Item key={dataItem.id} dataItem = {dataItem}/>
                })
            }
          }
        </ContextConsumer>
      </div>
    </DivProducts>
  )
}
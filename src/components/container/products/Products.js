import React from 'react'
import { DivProducts } from '../../styles'
import { useTranslation } from 'react-i18next'
import { ContextConsumer } from '../../../context'

import Item from './Item'

export default function Products() {
  const [ t, i18n ] = useTranslation()

  return (
    <DivProducts>
      <div className="h4 mt-3 ml-5"><b>{t('Products|1')}</b></div>
      <div className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.data
                .filter( dataItem => dataItem.price === 250 )
                .map( dataItem => {
                  return <Item key={dataItem.id} dataItem={dataItem} value={value} />
                })
            }
          }
        </ContextConsumer>
      </div>
    </DivProducts>
  )
}
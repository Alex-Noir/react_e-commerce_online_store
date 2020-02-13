import React from 'react'
import { DivBestOffers, DivProductList } from '../../styles'
import { useTranslation } from 'react-i18next'
import { ContextConsumer } from '../../../context'

import Item from './Item'

export default function BestOffers() {
  const [ t ] = useTranslation()

  return (
    <DivBestOffers>
      <div className="h4 mt-3 ml-4"><b>{t('Products|1')}</b></div>
      <DivProductList>
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
      </DivProductList>
    </DivBestOffers>
  )
}

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DivProductPage } from '../../styles'
import { useTranslation } from 'react-i18next'

import ProductInfo from './productPage/ProductInfo'
import AddToCart from './productPage/AddToCart'
import ToggleButtons from './productPage/ToggleButtons'
import Reviews from './productPage/Reviews'
import Comments from './productPage/Comments'
import Slider from './productPage/Slider'

export default function ProductPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const { title, category } = props.dataItem
          
  const [ isReviewsTabVisible, setIsReviewsTabVisible ] = useState(true)

  const [ t, i18n ] = useTranslation()

  let productCategory

  if (category === 'Mobile Phones') {
    productCategory = <Link to="/mobile-phones">{t('Nav|1')}</Link>
  } else if (category === 'Laptops') {
    productCategory = <Link to="/laptops">{t('Nav|2')}</Link>
  } else if (category === 'Tablets') {
    productCategory = <Link to="/tablets">{t('Nav|3')}</Link>
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
          <li className="breadcrumb-item"><Link to="/">{t('MobilePhones|1')}</Link></li>
          <li className="breadcrumb-item">{productCategory}</li>
          <li className="breadcrumb-item active" aria-current="page">{title}</li>
        </ol>
      </nav>
      <Slider dataItem={props.dataItem} />
      <div className="d-flex flex-column">
        <ProductInfo value={props.value} dataItem={props.dataItem} />
        <AddToCart value={props.value} dataItem={props.dataItem} />
      </div>
      <ToggleButtons toggleTabs={toggleTabs} isReviewsTabVisible={isReviewsTabVisible} />
      {
        isReviewsTabVisible
        ? <Reviews dataItem={props.dataItem} value={props.value} />
        : <Comments />
      }
    </DivProductPage>
  )
}

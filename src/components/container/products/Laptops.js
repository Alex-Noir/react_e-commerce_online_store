import React, { useState, useEffect } from 'react'
import { DivProducts, DivProductList } from '../../styles'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ContextConsumer } from '../../../context'
import { laptops } from '../../../components/data'

import Item from './Item'
import Pagination from '../Pagination'

export default function Laptops() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [ currentPage, setCurrentPage ] = useState(1)
  const [ postsPerPage ] = useState(8)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(laptops.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const [ t, i18n ] = useTranslation()
  
  function paginate(e, pageNumber) {
    e.preventDefault()
    window.scrollTo(0, 58)
    setCurrentPage(pageNumber)
  }

  function goToPrevOrNextPage(e, pageNumber) {
    e.preventDefault()
    window.scrollTo(0, 58)
    if (e.currentTarget.id === "Previous") {
      setCurrentPage(pageNumber - 1)
    } else if (e.currentTarget.id === "Next") {
      setCurrentPage(pageNumber + 1)
    }
  }

  return (
    <DivProducts className="d-flex flex-column justify-content-center">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">{t('MobilePhones|1')}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{t('Nav|2')}</li>
        </ol>
      </nav>
      <DivProductList>
        <ContextConsumer>
          {
            value => {
              return value.data
                .filter( dataItem => dataItem.category === 'Laptops' )
                .slice( indexOfFirstPost, indexOfLastPost )
                .map( dataItem => {
                  return <Item key={dataItem.id} dataItem={dataItem} value={value} />
                })
            }
          }
        </ContextConsumer>
      </DivProductList>
      <Pagination postsPerPage={postsPerPage} 
                  currentPage={currentPage}
                  pageNumbers={pageNumbers}
                  paginate={paginate} 
                  goToPrevOrNextPage={goToPrevOrNextPage} />
    </DivProducts>
  )
}

import React, { useState, useEffect } from 'react'
import { DivPhonesList as DivTabletList } from '../../styles'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ContextConsumer } from '../../../context'
import { tablets } from '../../../components/data'

import Item from './Item'
import Pagination from '../Pagination'

export default function Tablets() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [ currentPage, setCurrentPage ] = useState(1)
  const [ postsPerPage ] = useState(8)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(tablets.length / postsPerPage); i++) {
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
    <DivTabletList className="d-flex flex-column justify-content-center">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">{t('MobilePhones|1')}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{t('Nav|3')}</li>
        </ol>
      </nav>
      <div className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.data
                .filter( dataItem => dataItem.category === 'Tablets' )
                .slice( indexOfFirstPost, indexOfLastPost )
                .map( dataItem => {
                  return <Item key={dataItem.id} dataItem={dataItem} value={value} />
                })
            }
          }
        </ContextConsumer>
      </div>
      <Pagination postsPerPage={postsPerPage} 
                  currentPage={currentPage}
                  pageNumbers={pageNumbers}
                  paginate={paginate} 
                  goToPrevOrNextPage={goToPrevOrNextPage} />
    </DivTabletList>
  )
}

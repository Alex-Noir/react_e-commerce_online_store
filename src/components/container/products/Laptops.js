import React, { useState } from 'react'
import { DivPhonesList as DivLaptopList } from '../../styles'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ContextConsumer } from '../../../context'
import { laptops } from '../../../components/data'

import Item from './Item'
import Pagination from '../Pagination'

export default function Laptops() {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const [ t, i18n ] = useTranslation()
  
  function paginate(e, pageNumber) {
    e.preventDefault()
    window.scrollTo(0, 58)
    setCurrentPage(pageNumber)
  }

  return (
    <DivLaptopList className="d-flex flex-column justify-content-center">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">{t('MobilePhones|1')}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{t('Nav|2')}</li>
        </ol>
      </nav>
      <div className="d-flex flex-wrap justify-content-start">
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
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={laptops.length} paginate={paginate}/>
    </DivLaptopList>
  )
}

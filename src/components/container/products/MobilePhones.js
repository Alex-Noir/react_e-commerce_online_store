import React, { useState } from 'react'
import { DivPhonesList } from '../../styles'
import { Link } from 'react-router-dom'
import { ContextConsumer } from '../../../context'
import { mobile_phones } from '../../../components/data'

import Item from './Item'
import Pagination from '../Pagination'

export default function MobilePhones() {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  
  function paginate(e, pageNumber) {
    e.preventDefault()
    window.scrollTo(0, 58)
    setCurrentPage(pageNumber)
  }

  return (
    <DivPhonesList className="d-flex flex-column justify-content-center">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Mobile Phones</li>
        </ol>
      </nav>
      <div className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.data
                .filter( dataItem => dataItem.category === 'Mobile Phones' )
                .slice( indexOfFirstPost, indexOfLastPost )
                .map( dataItem => {
                  return <Item key={dataItem.id} dataItem={dataItem} />
                })
            }
          }
        </ContextConsumer>
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={mobile_phones.length} paginate={paginate}/>
    </DivPhonesList>
  )
}

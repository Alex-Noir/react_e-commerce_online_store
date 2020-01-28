import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagination(props) {
  return (
    <nav>
      <ul className="pagination mt-3">
        <li className={`page-item ${props.currentPage === 1 ? "disabled" : ""}`}>
          <Link to="/mobile_phones" 
                className="page-link" 
                aria-label="Previous" 
                id="Previous"
                onClick={e => props.goToPrevOrNextPage(e, props.currentPage)}>
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </Link>
        </li>
        {
          props.pageNumbers.map(number => (
            <li key={number} className={`page-item ${number === props.currentPage ? "active" : ""}`}>
              <Link to="/mobile_phones" className="page-link" onClick={e => props.paginate(e, number)}>
                {number}
              </Link>
            </li>
          ))
        }
        <li className={`page-item ${props.currentPage === props.pageNumbers.length ? "disabled" : ""}`}>
          <Link to="/mobile_phones" 
                className="page-link" 
                aria-label="Next"
                id="Next"
                onClick={e => props.goToPrevOrNextPage(e, props.currentPage)}>
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

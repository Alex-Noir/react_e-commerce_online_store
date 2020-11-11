import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({
  currentPage,
  pageNumbers,
  paginate,
  goToPrevOrNextPage,
}) {
  return (
    <nav>
      <ul className="pagination mt-3">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <Link
            to="/mobile_phones"
            className="page-link"
            aria-label="Previous"
            id="Previous"
            onClick={(e) => goToPrevOrNextPage(e, currentPage)}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </Link>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <Link
              to="/mobile_phones"
              className="page-link"
              onClick={(e) => paginate(e, number)}
            >
              {number}
            </Link>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === pageNumbers.length ? "disabled" : ""
          }`}
        >
          <Link
            to="/mobile_phones"
            className="page-link"
            aria-label="Next"
            id="Next"
            onClick={(e) => goToPrevOrNextPage(e, currentPage)}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

import React from 'react'
import { StyledNav } from '../styles'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <StyledNav>
      <ul className="nav flex-column bg-light">
        <li className="nav-item">
          <Link to="/mobile_phones" className="nav-link" onClick={props.toggleNav}>
            Mobile Phones<i className="fas fa-chevron-right float-right mt-1"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/laptops" className="nav-link" onClick={props.toggleNav}>
            Laptops <i className="fas fa-chevron-right float-right mt-1"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tablets" className="nav-link" onClick={props.toggleNav}>
            Tablets <i className="fas fa-chevron-right float-right mt-1"></i>
          </Link>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={props.toggleNav}>
            Lorem ipsum sin amet <i className="fas fa-chevron-right float-right mt-1"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={props.toggleNav}>
            Lorem ipsum sin amet <i className="fas fa-chevron-right float-right mt-1"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={props.toggleNav}>
            Lorem ipsum sin amet <i className="fas fa-chevron-right float-right mt-1"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={props.toggleNav}>
            Lorem ipsum sin amet <i className="fas fa-chevron-right float-right mt-1"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={props.toggleNav}>
            Lorem ipsum sin amet <i className="fas fa-chevron-right float-right mt-1"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={props.toggleNav}>
            Lorem ipsum sin amet <i className="fas fa-chevron-right float-right mt-1"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link" onClick={props.toggleNav}>
            Lorem ipsum sin amet <i className="fas fa-chevron-right float-right mt-1"></i>
          </a>
        </li>
      </ul>
    </StyledNav>
  )
}


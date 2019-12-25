import React from 'react'
import { UlFooterList, DivFooter } from './styles'
import { Link } from 'react-router-dom'

export default function Footer() {    
  return (
    <footer className="d-flex bg-dark mt-5 justify-content-center">
      <UlFooterList className="list-group list-group-flush">
        <li className="list-group-item bg-transparent p-0">
          <Link to="/about" className="text-warning nav-link">About</Link>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <Link to="/contact_us" className="text-warning nav-link">Contact Us</Link>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
      </UlFooterList>
      <UlFooterList className="list-group list-group-flush">
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
      </UlFooterList>
      <UlFooterList className="list-group list-group-flush">
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
      </UlFooterList>
      <DivFooter>
        <form className="float-left">
          <label htmlFor="email" className="text-light">Subscribe on the news!
            <input type="email" size="27" id="email"/>
            <input type="submit" value="Submit"></input>
          </label>
        </form>
        <div className="text-light">
          <div>Our social media:</div>
          <a href="/#" className="text-light mr-2"><i className="fab fa-facebook-square fa-2x"></i></a>
          <a href="/#" className="text-light mr-2"><i className="fab fa-twitter-square fa-2x"></i></a>
          <a href="/#" className="text-light mr-2"><i className="fab fa-instagram fa-2x"></i></a>
          <a href="/#" className="text-light mr-2"><i className="fab fa-youtube fa-2x"></i></a>
          <a href="/#" className="text-light mr-2"><i className="fab fa-linkedin fa-2x"></i></a>
          <div className="mt-5">&#169; 1991 - {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </DivFooter>
    </footer>
  )
}


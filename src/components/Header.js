import React, { Component } from 'react'
import { StyledHeader,
         StyledSpanAccount } from './styles'
import { Link } from "react-router-dom"

import Catalogue from "./header/Catalogue"
import Search from "./header/Search"

export default class Header extends Component {
  render() {
    return (
      <StyledHeader className="d-flex w-100 bg-light shadow justify-content-center">
        <div className="d-flex flex-wrap justify-content-around align-items-center">
          <div className="my-1 mr-3">
            <Link to="/" className="logo">
              <img src={require('../img/logo.webp')} alt="logo" className="img-tumbnail"/>
            </Link>
          </div>
          
          <Catalogue/>

          <Search/>
          
          <div className="d-flex my-3">
            <a href="#"><i className="fas fa-shopping-cart"></i></a>
            <a href="#"><i className="fas fa-user-alt ml-3"></i></a>
            <a href="#" className="d-flex flex-nowrap">
              <StyledSpanAccount className="ml-2">Log in</StyledSpanAccount>
            </a>
            <a href="#" className="d-flex flex-nowrap">
              <StyledSpanAccount className="ml-2">Sing up</StyledSpanAccount>
            </a>
          </div>
        </div>
      </StyledHeader>
    )
  }
}
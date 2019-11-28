import React from 'react'
import { StyledHeader, StyledButtonLogin } from './styles'
import { Link } from "react-router-dom"

import Catalogue from "./header/Catalogue"
import Search from "./header/Search"

export default function Header(props) {
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
          <a href="/#"><i className="fas fa-shopping-cart mx-1"></i></a>
          <StyledButtonLogin type="button" name="signIn" onClick={(e) => props.handleVisibility(e)} className="btn btn-link d-flex flex-nowrap p-0 mx-1"> Log in </StyledButtonLogin>
          <StyledButtonLogin type="button" name="registration" onClick={(e) => props.handleVisibility(e)} className="btn btn-link d-flex flex-nowrap p-0 mx-1"> Sing up </StyledButtonLogin>
        </div>
      </div>
    </StyledHeader>
  )
}


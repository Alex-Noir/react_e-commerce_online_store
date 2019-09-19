import React from 'react';
import { StyledHeader, StyledDivHeaderContent, StyledSpanAccount } from './styles';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <StyledHeader className="d-flex w-100 bg-light shadow justify-content-center">
      <StyledDivHeaderContent className="d-flex flex-wrap justify-content-around align-items-center">
        <div className="my-1">
          <Link to="/" className="logo">
            <img src={require('../img/logo.webp')} alt="logo" className="img-tumbnail"/>
          </Link>
        </div>
        <div>
          <input type="search" name="search" size="104"/>
          <button type="submit" value="submit" className="bg-success">
            <i className="fas fa-search"></i>
          </button>
        </div>
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
      </StyledDivHeaderContent>
    </StyledHeader>
  )
}
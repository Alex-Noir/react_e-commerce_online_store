import React from 'react';
import {StyledHeader, StyledDivContent, StyledDivSearchBar, StyledDivAccount, StyledSpanAccount} from './Styles';

export default function Header() {
  return (
    <StyledHeader className="header d-flex w-100 bg-light">
      <StyledDivContent className="d-flex m-auto">
        <a href="#" className="logo">
          <img src={require('../img/logo.webp')} alt="logo" className="img-tumbnail"/>
        </a>
        <StyledDivSearchBar className="d-flex">
          <input type="search" name="search" size="100"/>
          <button type="submit" value="submit" className="bg-success">
            <i className="fas fa-search"></i>
          </button>
        </StyledDivSearchBar>
        <StyledDivAccount className="d-flex">
          <a href="#"><i className="fas fa-shopping-cart"></i></a>
          <a href="#"><i className="fas fa-user-alt ml-3"></i></a>
          <a href="#" className="d-flex flex-nowrap"><StyledSpanAccount className="ml-2">Log in</StyledSpanAccount></a>
          <a href="#" className="d-flex flex-nowrap"><StyledSpanAccount className="ml-2">Sing up</StyledSpanAccount></a>
        </StyledDivAccount>
      </StyledDivContent>
    </StyledHeader>
  )
}
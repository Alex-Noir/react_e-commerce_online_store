import React, { Component } from 'react';
import Nav from './container/Nav';
import { StyledHeader,
         StyledFormSearchBar,
         StyledSpanAccount } from './styles';
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isNavVisible: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav = () => {
    !this.state.isNavVisible
    ? 
      (
        this.setState({
          isNavVisible: true
        })
      )
    : 
      (
        this.setState({
          isNavVisible: false
        })
      )
  }

  render() {
    return (
      <StyledHeader className="d-flex w-100 bg-light shadow justify-content-center">
        <div className="d-flex flex-wrap justify-content-around align-items-center">
          <div className="my-1 mr-3">
            <Link to="/" className="logo">
              <img src={require('../img/logo.webp')} alt="logo" className="img-tumbnail"/>
            </Link>
          </div>
          <div>
            <button type="button" className="mr-3 btn btn-light bg-transparent text-primary font-weight-bold border" onClick={this.toggleNav}>
              Catalogs
            </button>
              {
                this.state.isNavVisible
                ? ( <Nav toggleNav={this.toggleNav}/> )
                : ( null )
              }
          </div>
          <StyledFormSearchBar>
            <input type="search" name="search" className="border border-dark rounded"/>
            <button type="submit" value="submit" className="bg-warning border-0 text-danger rounded-right position-relative">
              <i className="fas fa-search"></i>
            </button>
          </StyledFormSearchBar>
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
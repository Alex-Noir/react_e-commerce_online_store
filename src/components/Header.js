import React from 'react'
import { StyledHeader, ButtonLogin, DivIconAmountInCart } from './styles'
import { Link } from 'react-router-dom'
import { ContextConsumer } from '../context'

import Catalogue from './header/Catalogue'
import Search from './header/Search'

export default function Header(props) {
  return (
    <StyledHeader className="d-flex w-100 bg-light shadow justify-content-center mb-4">
      <div className="d-flex flex-wrap justify-content-around align-items-center">
        <div className="my-1 mr-3">
          <Link to="/" className="logo">
            <img src={require('../img/logo.webp')} alt="logo" className="img-tumbnail"/>
          </Link>
        </div>
        
        <Catalogue/>

        <Search/>

        <div className="d-flex my-3">
          <Link to="/cart" className="position-relative">
            <i className="fas fa-shopping-cart mx-1"></i>
            <ContextConsumer>
              {
                value => 
                  value.cartList.length > 0
                  ? <DivIconAmountInCart className="bg-danger text-light font-weight-bold position-absolute       rounded-circle">
                      {value.cartList.length}
                    </DivIconAmountInCart>
                  : null
              }
            </ContextConsumer>
          </Link>
          <ButtonLogin type="button" name="signIn" onClick={(e) => props.handleVisibility(e)} className="btn btn-link d-flex flex-nowrap p-0 mx-1"> Log in </ButtonLogin>
          <ButtonLogin type="button" name="registration" onClick={(e) => props.handleVisibility(e)} className="btn btn-link d-flex flex-nowrap p-0 mx-1"> Sing up </ButtonLogin>
        </div>
      </div>
    </StyledHeader>
  )
}

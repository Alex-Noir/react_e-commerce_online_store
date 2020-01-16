import React from 'react'
import { StyledHeader, DivIconAmountInCart } from './styles'
import { Link } from 'react-router-dom'
import { ContextConsumer } from '../context'
import { useTranslation } from 'react-i18next'

import Catalogue from './header/Catalogue'
import Search from './header/Search'

export default function Header(props) {
  const [ t, i18n ] = useTranslation()

  return (
    <ContextConsumer>
      {
        value => 
          <StyledHeader className="bg-light shadow mb-4">
            <div className="mr-3">
              <Link to="/" className="logo" onClick={value.makeResultsInvisible}>
                <img src={require('../img/logo.webp')} alt="logo" className="img-tumbnail" />
              </Link>
            </div>
            <Catalogue />
            <Search />
            <div className="d-flex m-3">
              <Link to="/cart" className="position-relative">
                <i className="fas fa-shopping-cart mx-1"></i>
                {
                  value.cartList.length > 0
                  ? <DivIconAmountInCart className="bg-danger text-light font-weight-bold position-absolute  rounded-circle">
                      {value.cartList.length}
                    </DivIconAmountInCart>
                  : null
                }
              </Link>
              <button type="button" name="signIn" onClick={e => props.handleVisibility(e)} className="btn btn-link d-flex flex-nowrap p-0 mx-1"> {t('Header|1')} </button>
              <button type="button" name="registration" onClick={e => props.handleVisibility(e)} className="btn btn-link d-flex flex-nowrap p-0 mx-1"> {t('Header|2')} </button>
            </div>
          </StyledHeader>
      }
    </ContextConsumer>
  )
}

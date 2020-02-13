import React from 'react'
import { StyledHeader } from './styles'
import { ContextConsumer } from '../context'

import Logo from './header/Logo'
import Catalogue from './header/Catalogue'
import Search from './header/Search'
import CartButton from './header/CartButton'
import AuthButtons from './header/AuthButtons'

export default function Header(props) {
  return (
    <ContextConsumer>
      {
        value => 
          <StyledHeader className="bg-light shadow mb-4">
            <Logo makeResultsInvisible={value.makeResultsInvisible} />
            <Catalogue />
            <Search />
            <div className="d-flex my-3 mr-3">
              <CartButton cartList={value.cartList} />
              <AuthButtons handleVisibility={props.handleVisibility} />
            </div>
          </StyledHeader>
      }
    </ContextConsumer>
  )
}

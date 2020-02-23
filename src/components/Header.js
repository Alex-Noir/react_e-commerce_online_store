import React, { useContext } from 'react'
import { StyledHeader } from './Styles'
import { Context } from '../context'

import Logo from './header/Logo'
import Catalogue from './header/Catalogue'
import Search from './header/Search'
import CartButton from './header/CartButton'
import AuthButtons from './header/AuthButtons'

export default function Header({ handleVisibility }) {
  const { makeResultsInvisible, cartList } = useContext(Context)

  return (
    <StyledHeader className="bg-light shadow mb-4">
      <Logo makeResultsInvisible={makeResultsInvisible} />
      <Catalogue />
      <Search />
      <div className="d-flex my-3 mr-3">
        <CartButton cartList={cartList} />
        <AuthButtons handleVisibility={handleVisibility} />
      </div>
    </StyledHeader>
  )
}

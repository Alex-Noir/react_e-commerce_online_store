import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context";

import Logo from "./header/Logo";
import Catalogue from "./header/Catalogue";
import Search from "./header/Search";
import CartButton from "./header/CartButton";
import AuthButtons from "./header/AuthButtons";

export default function Header({ handleVisibility }) {
  const { makeResultsInvisible, cartList } = useContext(Context);

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
  );
}

export const StyledHeader = styled.header`
  grid-area: 1 / 1 / 2 / 4;
  z-index: 1;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  grid-column-gap: 0.08rem;
  > :first-child {
    grid-area: 1 / 1 / 2 / 2;
    justify-self: center;
    align-self: center;
  }
  > :nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
    justify-self: center;
    align-self: center;
  }
  > :nth-child(3) {
    grid-area: 1 / 3 / 2 / 4;
  }
  > :last-child {
    grid-area: 1 / 4 / 2 / 5;
    > button {
      font-size: 12px;
      &:focus {
        outline: none;
      }
    }
  }

  @media only screen and (max-width: 686px) {
    grid-template-rows: auto auto;
    > :nth-child(3) {
      grid-area: 2 / 1 / 3 / 5;
    }
  }
`;

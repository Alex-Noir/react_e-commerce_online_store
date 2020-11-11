import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CartButton({ cartList }) {
  return (
    <Link to="/cart" className="position-relative">
      <i className="fas fa-shopping-cart mx-1"></i>
      {cartList.length > 0 ? (
        <DivIconAmountInCart className="animated fadeInDown bg-danger text-light font-weight-bold position-absolute rounded-circle">
          {cartList.length}
        </DivIconAmountInCart>
      ) : null}
    </Link>
  );
}

export const DivIconAmountInCart = styled.div`
  width: 21px;
  height: 21px;
  font-size: 0.8em;
  text-align: center;
  vertical-align: middle;
  top: 13px;
  right: 8px;
`;

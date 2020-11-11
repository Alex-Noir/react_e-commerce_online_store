import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../../context";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CartListItem({ cartListItem }) {
  const {
    id,
    title,
    company,
    amountInCart,
    price,
    hasDiscount,
    totalPrice,
  } = cartListItem;

  const {
    fetchedRates,
    currency,
    cartCounter,
    deleteItemFromCart,
    evaluateTotalPrice,
  } = useContext(Context);

  const [t] = useTranslation();

  let currencyRate = 1;

  if (currency === "$") {
    currencyRate = fetchedRates.USD;
  } else if (currency === "₽") {
    currencyRate = fetchedRates.RUB;
  } else if (currency === "Ch¥") {
    currencyRate = fetchedRates.CNY;
  } else if (currency === "Jp¥") {
    currencyRate = fetchedRates.JPY;
  } else if (currency === "₩") {
    currencyRate = fetchedRates.KRW;
  } else if (currency === "₹") {
    currencyRate = fetchedRates.INR;
  }

  return (
    <DivCartListItem className="rounded bg-light border border-danger mb-3 p-3">
      <img
        src={require(`../../../img/products/data/${id}/01.webp`)}
        alt={title}
        height="100"
        width="100"
      />
      <div>
        <Link to={`/product-page/${id}`}>
          <h5 className="text-dark">{title}</h5>
        </Link>
        <h6 className="p-1">
          {t("ProductInfo|1")} {company}
        </h6>
      </div>
      <h6 className="d-flex no-wrap align-items-start mb-0">
        <button
          className="btn btn-outline-dark border-right-0 rounded-0"
          name="-"
          onClick={(e) => {
            cartCounter(e, id, hasDiscount);
            evaluateTotalPrice();
          }}
        >
          {" "}
          -{" "}
        </button>
        <input
          className="btn btn-outline-dark border-left-0 border-right-0 rounded-0"
          type="text"
          value={amountInCart}
          size="1"
          readOnly
        />
        <button
          className="btn btn-outline-dark border-left-0 rounded-0"
          name="+"
          onClick={(e) => {
            cartCounter(e, id, hasDiscount);
            evaluateTotalPrice();
          }}
        >
          {" "}
          +{" "}
        </button>
      </h6>
      {hasDiscount ? (
        <h5 className="d-inline-flex no-wrap">
          <span>{t("ProductInfo|4")}</span>
          <span className="d-flex flex-column ml-1">
            <s className="d-flex no-wrap">
              {currency} {parseFloat((price * currencyRate).toFixed(2))}
            </s>
            <span className="d-flex no-wrap text-danger">
              {currency} {parseFloat((totalPrice * currencyRate).toFixed(2))}
            </span>
          </span>
        </h5>
      ) : (
        <h5 className="d-inline-flex no-wrap">
          <span>{t("ProductInfo|4")}</span>
          <span className="d-flex no-wrap ml-1">
            {currency} {parseFloat((totalPrice * currencyRate).toFixed(2))}
          </span>
        </h5>
      )}
      <button
        type="button"
        className="close text-danger d-inline-block"
        aria-label="Close"
        onClick={() => {
          deleteItemFromCart(id);
          evaluateTotalPrice();
        }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </DivCartListItem>
  );
}

export const DivCartListItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 2fr 1fr auto;
  grid-template-rows: auto;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  > :first-child {
    grid-area: 1 / 1 / 2 / 2;
  }
  > :nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
    > a,
    a:hover,
    a:focus {
      text-decoration: none;
    }
    > a:hover,
    a:focus {
      text-shadow: 2px 2px 20px;
    }
  }
  > :nth-child(3) {
    grid-area: 1 / 3 / 2 / 4;
    justify-self: center;
  }
  > :nth-child(4) {
    grid-area: 1 / 4 / 2 / 5;
    justify-self: center;
  }
  > :last-child {
    grid-area: 1 / 5 / 2 / 6;
    justify-self: end;
  }

  @media only screen and (max-width: 600px) {
    grid-template-rows: auto auto;
    > :nth-child(3) {
      grid-area: 2 / 1 / 3 / 3;
      justify-self: start;
    }
    > :nth-child(4) {
      grid-area: 1 / 3 / 2 / 5;
    }
  }

  @media only screen and (max-width: 425px) {
    grid-template-rows: auto auto;
    > :nth-child(2) {
      grid-area: 1 / 2 / 2 / 5;
    }
    > :nth-child(3) {
      grid-area: 2 / 1 / 3 / 3;
      justify-self: start;
    }
    > :nth-child(4) {
      grid-area: 2 / 3 / 3 / 5;
    }
  }
`;

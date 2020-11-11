import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Context } from "../../context";

import StarRating from "./productPage/productInfo/StarRating";

export default function Item({ dataItem }) {
  const {
    id,
    title,
    imageWidth,
    imageHeight,
    price,
    hasDiscount,
    discount,
    isInCart,
    amountInCart,
    rating,
  } = dataItem;

  const [customRating, setCustomRating] = useState(rating || null);
  const [tempRating, setTempRating] = useState(null);
  const prevCount = usePrevious(customRating);

  const { fetchedRates, currency } = useContext(Context);

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

  function handleMouseover(rating) {
    setCustomRating(rating);
    setTempRating(prevCount);
  }

  function rate(rating) {
    setCustomRating(rating);
    setTempRating(rating);
  }

  function handleMouseout() {
    setCustomRating(prevCount);
  }

  function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    }, [value]);

    return ref.current;
  }

  return (
    <DivProductItem className="rounded bg-light">
      <Link
        to={`/product-page/${id}`}
        className="d-flex flex-column p-4 nav-link text-dark"
      >
        <img
          className="align-self-center"
          alt="Item"
          width={imageWidth}
          heigth={imageHeight}
          src={require(`../../img/products/data/${id}/01.webp`)}
        />
        <h4>{title}</h4>
        <StarRating
          rating={rating}
          customRating={customRating}
          handleMouseover={handleMouseover}
          rate={rate}
          handleMouseout={handleMouseout}
        />
        <br />
        <div className="d-flex justify-content-between">
          <h4>
            {!hasDiscount ? (
              <span className="d-flex no-wrap">
                {currency} {parseFloat((price * currencyRate).toFixed(2))}
              </span>
            ) : (
              <>
                <span className="d-flex flex-column">
                  <s className="d-flex no-wrap">
                    {currency} {parseFloat((price * currencyRate).toFixed(2))}
                  </s>
                  <span className="d-flex no-wrap text-danger">
                    {currency}{" "}
                    {parseFloat((price * currencyRate * discount).toFixed(2))}
                  </span>
                </span>
              </>
            )}
          </h4>
          <h6
            className={
              isInCart
                ? "align-self-start bg-danger text-white p-1 rounded"
                : "invisible"
            }
          >
            {t("SearchResult|1")} {amountInCart}
          </h6>
        </div>
      </Link>
    </DivProductItem>
  );
}

export const DivProductItem = styled.div`
  height: 400px;
  width: 290px;

  &:hover {
    box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(0, 0, 0, 0.3);
  }

  > a {
    height: 100%;
  }
`;

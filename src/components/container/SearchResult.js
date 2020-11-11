import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Context } from "../../context";
import styled from "styled-components";

import StarRating from "./productPage/productInfo/StarRating";

export default function SearchResult({ result }) {
  const {
    id,
    title,
    category,
    price,
    hasDiscount,
    discount,
    isInCart,
    amountInCart,
    rating,
  } = result;

  const [customRating, setCustomRating] = useState(rating || null);
  const [tempRating, setTempRating] = useState(null);
  const prevCount = usePrevious(customRating);
  const [inputValue, setInputValue] = useState(0);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const { fetchedRates, currency, addToCart, evaluateTotalPrice } = useContext(
    Context
  );

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

  let productCategory;

  if (category === "Mobile Phones") {
    productCategory = <Link to="/mobile-phones">{t("Nav|1")}</Link>;
  } else if (category === "Laptops") {
    productCategory = <Link to="/laptops">{t("Nav|2")}</Link>;
  } else if (category === "Tablets") {
    productCategory = <Link to="/tablets">{t("Nav|3")}</Link>;
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

  function counter(e) {
    if (e.target.name === "-" && inputValue > 0) {
      setIsInfoVisible(false);
      setInputValue(inputValue - 1);
    } else if (e.target.name === "-" && inputValue <= 0) {
      return null;
    } else if (e.target.name === "+") {
      setIsInfoVisible(false);
      setInputValue(inputValue + 1);
    }
  }

  function showInfo(inputValue) {
    if (inputValue >= 1) {
      setIsInfoVisible(true);
      setTimeout(() => setIsInfoVisible(false), 3000);
    } else {
      return null;
    }
  }

  return (
    <div className="rounded bg-light border border-danger m-1 p-3">
      <img
        src={require(`../../img/products/data/${id}/01.webp`)}
        alt="SearchItem"
        width="121"
        heigth="121"
      />
      <div className="d-flex flex-column">
        <Link to={`/product-page/${id}`} className="text-dark">
          <h4>{title}</h4>
        </Link>
        <h6 className="text-primary">{productCategory}</h6>
        <div className="d-flex">
          <StarRating
            rating={rating}
            customRating={customRating}
            handleMouseover={handleMouseover}
            rate={rate}
            handleMouseout={handleMouseout}
          />
          <span className="ml-2">({rating})</span>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex no-wrap align-items-start mb-1">
          <button
            className="btn btn-outline-dark border-right-0 rounded-0"
            type="button"
            value="-"
            name="-"
            onClick={counter}
          >
            {" "}
            -{" "}
          </button>
          <input
            className="btn btn-outline-dark border-left-0 border-right-0 rounded-0"
            type="text"
            value={inputValue}
            size="1"
            readOnly
          />
          <button
            className="btn btn-outline-dark border-left-0 rounded-0"
            type="button"
            value="+"
            name="+"
            onClick={counter}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            addToCart(id, inputValue, hasDiscount);
            showInfo(inputValue);
            evaluateTotalPrice();
          }}
        >
          {t("AddToCart|2")}
        </button>
        <DivInfo className={isInfoVisible ? "visible" : "invisible"}>
          +{inputValue} {t("AddToCart|3")}
        </DivInfo>
      </div>
      <div className="d-flex flex-column align-items-end">
        <h3>
          {!hasDiscount ? (
            <span className="d-flex no-wrap">
              {currency} {parseFloat((price * currencyRate).toFixed(2))}
            </span>
          ) : (
            <>
              <span className="d-flex flex-column">
                <s className="d-flex no-wrap justify-content-end">
                  {currency} {parseFloat((price * currencyRate).toFixed(2))}
                </s>
                <span className="d-flex no-wrap text-danger justify-content-end">
                  {currency}{" "}
                  {parseFloat((price * currencyRate * discount).toFixed(2))}
                </span>
              </span>
            </>
          )}
        </h3>
        <h6 className={isInCart ? "bg-danger text-white p-1 rounded" : null}>
          {t("SearchResult|1")} {amountInCart}
        </h6>
      </div>
    </div>
  );
}

export const DivInfo = styled.div`
  display: inline-block;
  width: auto;
  margin-top: 7px;
  background-color: rgba(248, 80, 50, 1);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: relative;
  z-index: 1;
`;

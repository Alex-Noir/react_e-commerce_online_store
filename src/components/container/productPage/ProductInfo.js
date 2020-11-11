import React, { useState, useEffect, useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../../context";

import StarRating from "./productInfo/StarRating";

export default function ProductInfo({ dataItem }) {
  const {
    title,
    company,
    description,
    price,
    hasDiscount,
    discount,
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
    <>
      <h1>{title}</h1>
      <h2>
        {t("ProductInfo|1")} {company}
      </h2>
      <StarRating
        customRating={customRating}
        handleMouseover={handleMouseover}
        rate={rate}
        handleMouseout={handleMouseout}
      />
      <h5>
        {t("ProductInfo|2")} {rating}
      </h5>
      <h5>
        {t("ProductInfo|3")} {((customRating + 1) / 2).toFixed(1)}
      </h5>
      <h2>
        {t("ProductInfo|4")} &nbsp;
        {hasDiscount ? (
          <span>
            <s>
              {currency} {parseFloat((price * currencyRate).toFixed(2))}
            </s>
            &nbsp;
            <span className="text-danger">
              {currency}{" "}
              {parseFloat((price * currencyRate * discount).toFixed(2))}
            </span>
          </span>
        ) : (
          <span>
            {currency} {parseFloat((price * currencyRate).toFixed(2))}
          </span>
        )}
      </h2>
      <br />
      <h3>
        {t("ProductInfo|5")} {description}
      </h3>
    </>
  );
}

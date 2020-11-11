import React, { useState, useEffect, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import ProductInfo from "./productPage/ProductInfo";
import AddToCart from "./productPage/AddToCart";
import ToggleButtons from "./productPage/ToggleButtons";
import Reviews from "./productPage/Reviews";
import Slider from "./productPage/Slider";
const Comments = lazy(() => import("./productPage/Comments"));

export default function ProductPage({ dataItem }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { title, category } = dataItem;

  const [isReviewsTabVisible, setIsReviewsTabVisible] = useState(true);

  const [t] = useTranslation();

  let productCategory;

  if (category === "Mobile Phones") {
    productCategory = <Link to="/mobile-phones">{t("Nav|1")}</Link>;
  } else if (category === "Laptops") {
    productCategory = <Link to="/laptops">{t("Nav|2")}</Link>;
  } else if (category === "Tablets") {
    productCategory = <Link to="/tablets">{t("Nav|3")}</Link>;
  }

  function toggleTabs(e) {
    if (e.target.name === "reviews") {
      setIsReviewsTabVisible(true);
    } else if (e.target.name === "comments") {
      setIsReviewsTabVisible(false);
    }
  }

  return (
    <DivProductPage>
      <nav aria-label="breadcrumb" className="align-self-start">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">{t("MobilePhones|1")}</Link>
          </li>
          <li className="breadcrumb-item">{productCategory}</li>
          <li className="breadcrumb-item active" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>
      <Slider dataItem={dataItem} />
      <div className="d-flex flex-column">
        <ProductInfo dataItem={dataItem} />
        <AddToCart dataItem={dataItem} />
      </div>
      <ToggleButtons
        toggleTabs={toggleTabs}
        isReviewsTabVisible={isReviewsTabVisible}
      />
      {isReviewsTabVisible ? (
        <Reviews dataItem={dataItem} />
      ) : (
        <Suspense
          fallback={
            <div>
              <i className="fa fa-cog fa-spin" style={{ fontSize: "24px" }}></i>
            </div>
          }
        >
          <Comments />
        </Suspense>
      )}
    </DivProductPage>
  );
}

export const DivProductPage = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto auto;
  grid-column-gap: 1rem;
  > :first-child {
    grid-area: 1 / 1 / 2 / 3;
  }
  > :nth-child(2) {
    width: 400px;
    height: 400px;
    grid-area: 2 / 1 / 3 / 2;
  }
  > :nth-child(3) {
    grid-area: 2 / 2 / 3 / 3;
  }
  > :nth-child(4) {
    grid-area: 3 / 1 / 4 / 3;
  }
  > :nth-child(5) {
    grid-area: 4 / 1 / 5 / 3;
    > div > button {
      width: auto;
    }
  }

  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto auto;
    > :first-child {
      grid-area: 1 / 1 / 2 / 2;
    }
    > :nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
      justify-self: center;
    }
    > :nth-child(3) {
      grid-area: 3 / 1 / 4 / 2;
      margin-top: 3rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    > :nth-child(4) {
      grid-area: 4 / 1 / 5 / 2;
    }
    > :nth-child(5) {
      grid-area: 5 / 1 / 6 / 2;
    }
  }

  @media only screen and (max-width: 425px) {
    > :nth-child(2) {
      width: 320px;
      height: 320px;
    }
  }
`;

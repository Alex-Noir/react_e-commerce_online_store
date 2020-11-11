import React, { useContext, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context";

import Carousel from "./container/Carousel";
import BestOffers from "./container/BestOffers";
import ProductPage from "./container/ProductPage";
const MobilePhonesDiscount = lazy(() =>
  import("./container/MobilePhonesDiscount")
);
const LaptopsDiscount = lazy(() => import("./container/LaptopsDiscount"));
const TabletsDiscount = lazy(() => import("./container/TabletsDiscount"));
const MobilePhones = lazy(() => import("./container/MobilePhones"));
const Laptops = lazy(() => import("./container/Laptops"));
const Tablets = lazy(() => import("./container/Tablets"));
const Cart = lazy(() => import("./container/Cart"));
const About = lazy(() => import("./container/About"));
const ContactUs = lazy(() => import("./container/ContactUs"));
const SearchResults = lazy(() => import("./container/SearchResults"));
const NoSuchPage = lazy(() => import("./container/NoSuchPage"));

export default function Container() {
  const { data, areResultsVisible } = useContext(Context);

  return (
    <DivGridContainer className="no-gutters">
      {!areResultsVisible ? (
        <>
          <Route exact path="/" component={Carousel} />
          <Suspense
            fallback={
              <div>
                <i
                  className="fa fa-cog fa-spin"
                  style={{ fontSize: "24px" }}
                ></i>
              </div>
            }
          >
            <Switch>
              <Route exact path="/" component={BestOffers} />
              <Route
                path="/mobile-phones-discount"
                component={MobilePhonesDiscount}
              />
              <Route path="/laptops-discount" component={LaptopsDiscount} />
              <Route path="/tablets-discount" component={TabletsDiscount} />
              <Route path="/mobile-phones" component={MobilePhones} />
              <Route path="/laptops" component={Laptops} />
              <Route path="/tablets" component={Tablets} />
              <Route path="/cart" component={Cart} />
              {data.map((dataItem) => {
                return (
                  <Route
                    key={dataItem.id}
                    path={`/product-page/${dataItem.id}`}
                    render={(props) => (
                      <ProductPage {...props} dataItem={dataItem} />
                    )}
                  />
                );
              })}
              <Route path="/about" component={About} />
              <Route path="/contact-us" component={ContactUs} />
              <Route component={NoSuchPage} />
            </Switch>
          </Suspense>
        </>
      ) : (
        <Suspense
          fallback={
            <div>
              <i className="fa fa-cog fa-spin" style={{ fontSize: "24px" }}></i>
            </div>
          }
        >
          <Route exact path="/" component={SearchResults} />
        </Suspense>
      )}
    </DivGridContainer>
  );
}

export const DivGridContainer = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 1rem;
`;

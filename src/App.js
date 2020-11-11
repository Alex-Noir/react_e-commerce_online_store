import React, { useState, Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
const Authentication = lazy(() => import("./components/Authentication"));

export default function App() {
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
  const [isLogInTabVisible, setIsLogInTabVisible] = useState(null);

  function closeAuthModal(e) {
    if (e.target.id === "outsideAuthModal") {
      setIsAuthModalVisible(false);
      document.body.style.overflow = "visible";
    }
  }

  function handleVisibility(e) {
    if (e.target.name === "signIn") {
      setIsAuthModalVisible(true);
      setIsLogInTabVisible(true);
      document.body.style.overflow = "hidden";
    } else if (e.target.name === "registration") {
      setIsAuthModalVisible(true);
      setIsLogInTabVisible(false);
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <DivWrapper>
      <Route
        path="/"
        render={(props) => (
          <Header {...props} handleVisibility={handleVisibility} />
        )}
      />
      {isAuthModalVisible ? (
        <Suspense
          fallback={
            <div>
              <i className="fa fa-cog fa-spin" style={{ fontSize: "24px" }}></i>
            </div>
          }
        >
          <Authentication
            isLogInTabVisible={isLogInTabVisible}
            closeAuthModal={closeAuthModal}
            handleVisibility={handleVisibility}
          />
        </Suspense>
      ) : null}
      <Route path="/" component={Container} />
      <Route path="/" component={Footer} />
    </DivWrapper>
  );
}

export const DivWrapper = styled.div`
  min-height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr 1200px 1fr;

  @media only screen and (max-width: 1216px) {
    grid-template-columns: 1fr 98% 1fr;
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: auto 100% auto;
  }
`;

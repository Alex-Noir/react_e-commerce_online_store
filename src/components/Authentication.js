import React, { useState, useRef, Suspense, lazy } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import LogIn from "./authentication/LogIn";
import Registration from "./authentication/Registration";
const ResetPassword = lazy(() => import("./authentication/ResetPassword"));

export default function Authentication({
  isLogInTabVisible,
  closeAuthModal,
  handleVisibility,
}) {
  const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const checkbox = useRef(null);

  const [t] = useTranslation();

  function handleRegistrationSubmit(e) {
    e.preventDefault();
    if (password === passwordConfirm && password.length >= 6) {
      alert(
        `Your email is: ${email}, \nyour name is: ${name}, \nyour password is: ${password}.`
      );
    } else if (password !== passwordConfirm) {
      alert("Passwords should coincide.");
    } else if (password.length < 6) {
      alert("Password(s) should be 6 characters minimum.");
    }
  }

  function handleLogInSubmit(e) {
    e.preventDefault();
    alert(
      `Your email is: ${email}, \nyour password is: ${password}, \nyou ${
        checkbox.current.checked ? "checked" : "didn't check"
      } checkbox.`
    );
  }

  function showResetPassword(e) {
    e.preventDefault();
    setIsResetPasswordVisible(true);
  }

  function hideResetPassword() {
    setIsResetPasswordVisible(false);
  }

  return (
    <DivAuthWrapper
      className="position-absolute overflow-auto"
      id="outsideAuthModal"
      onClick={closeAuthModal}
    >
      <div
        className="position-absolute mt-5 bg-light animated zoomInRight"
        id="authModal"
      >
        {!isResetPasswordVisible ? (
          <DivAuthButtons>
            <button
              type="button"
              name="signIn"
              className={`btn ${
                isLogInTabVisible ? "btn-light" : "btn-white"
              } d-inline-block border-left border-top border-right rounded-0 px-1 shadow-none`}
              onClick={handleVisibility}
            >
              {t("AuthButtons|1")}
            </button>
            <button
              type="button"
              name="registration"
              className={`btn ${
                isLogInTabVisible ? "btn-white" : "btn-light"
              } d-inline-block border-left border-top border-right rounded-0 px-1 shadow-none`}
              onClick={handleVisibility}
            >
              {t("Authentication|1")}
            </button>
          </DivAuthButtons>
        ) : (
          <div className="d-flex justify-content-center border-left border-top border-right pt-2">
            {t("Authentication|2")}
          </div>
        )}
        {!isResetPasswordVisible ? (
          isLogInTabVisible ? (
            <LogIn
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              showResetPassword={showResetPassword}
              handleLogInSubmit={handleLogInSubmit}
              checkbox={checkbox}
            />
          ) : (
            <Registration
              email={email}
              setEmail={setEmail}
              name={name}
              setName={setName}
              password={password}
              setPassword={setPassword}
              passwordConfirm={passwordConfirm}
              setPasswordConfirm={setPasswordConfirm}
              handleRegistrationSubmit={handleRegistrationSubmit}
            />
          )
        ) : (
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
            <ResetPassword hideResetPassword={hideResetPassword} />
          </Suspense>
        )}
      </div>
    </DivAuthWrapper>
  );
}

export const DivAuthWrapper = styled.div`
  grid-area: 1 / 1 / 4 / 4;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 16;
  > div {
    width: auto;
    padding: 2rem;
    min-width: 300px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const DivAuthButtons = styled.div`
  width: 100%;
  > button {
    width: 50%;
  }
`;

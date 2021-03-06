import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const [t] = useTranslation();

  return (
    <DivContactForm className="d-flex flex-column bg-light rounded p-5">
      <h1>{t("Lists|2")}!</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">{t("ContactUs|1")}</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            {t("ContactUs|2")}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value={t("ContactUs|3")}
        ></input>
      </form>
    </DivContactForm>
  );
}

export const DivContactForm = styled.div`
  grid-area: 1 / 1 / 3 / 3;
`;

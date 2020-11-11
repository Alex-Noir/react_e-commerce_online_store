import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function NoSuchPage() {
  const [t] = useTranslation();

  return (
    <Div404 className="d-flex flex-column align-items-center">
      <h1>404</h1>
      <h2>{t("NoSuchPage|1")}</h2>
    </Div404>
  );
}

export const Div404 = styled.div`
  grid-area: 1 / 1 / 3 / 3;
`;
